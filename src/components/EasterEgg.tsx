import React from "react";
import { animate } from "animejs";

// Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export function EasterEgg() {
  const [isActivated, setIsActivated] = React.useState(false);
  const [inputSequence, setInputSequence] = React.useState<string[]>([]);
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newSequence = [...inputSequence, e.code].slice(-KONAMI_CODE.length);
      setInputSequence(newSequence);

      if (newSequence.join(",") === KONAMI_CODE.join(",")) {
        setIsActivated(true);
        setInputSequence([]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inputSequence]);

  React.useEffect(() => {
    if (isActivated && modalRef.current) {
      animate(modalRef.current, {
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 500,
        ease: "outBack",
      });
    }
  }, [isActivated]);

  const handleClose = () => {
    if (modalRef.current) {
      animate(modalRef.current, {
        opacity: [1, 0],
        scale: [1, 0.8],
        duration: 300,
        ease: "inQuad",
        complete: () => setIsActivated(false),
      });
    }
  };

  if (!isActivated) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="relative max-w-md mx-4 p-8 rounded-3xl bg-gradient-to-br from-dark-900 to-dark-800 border border-wise-green/30 shadow-2xl shadow-wise-green/20 opacity-0"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-dark-400 hover:text-white transition-colors"
        >
          ✕
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="text-6xl mb-4">🎮</div>
          <h3 className="text-2xl font-bold text-wise-green mb-2">
            Easter Egg Found!
          </h3>
          <p className="text-dark-300 mb-4">
            You discovered the Konami Code! You're a true gamer 🕹️
          </p>

          {/* Secret message */}
          <div className="p-4 rounded-xl bg-dark-800/50 border border-primary-500/20">
            <p className="text-sm text-dark-400 mb-2">Secret Message:</p>
            <p className="text-lg text-white font-mono">
              "The best code is no code at all."
              <br />
              <span className="text-xs text-dark-500">
                - Every Developer Ever
              </span>
            </p>
          </div>

          {/* Fun facts */}
          <div className="mt-4 text-left">
            <p className="text-xs text-dark-500 mb-2">🎯 Fun Facts:</p>
            <ul className="text-xs text-dark-400 space-y-1">
              <li>• Coffee consumed while coding: ∞</li>
              <li>• Bugs fixed that created more bugs: 42</li>
              <li>• Times said "it works on my machine": 999+</li>
            </ul>
          </div>

          {/* Matrix rain effect hint */}
          <p className="mt-6 text-[10px] text-dark-600">
            Hint: Try typing "matrix" anywhere... 👀
          </p>
        </div>

        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-wise-green/30 rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-wise-green/30 rounded-br-3xl"></div>
      </div>
    </div>
  );
}
