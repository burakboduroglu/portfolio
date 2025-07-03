import React, { useRef, useEffect } from "react";

const STAR_COUNT = 180;
const STAR_COLORS = [
  "rgba(255,255,255,0.95)", // white
  "rgba(180,200,255,0.85)", // blue
  "rgba(255,255,200,0.85)", // yellow
];
const STAR_SIZE = [1, 2.2];
const STAR_SPEED = [0.03, 0.1];

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

interface Star {
  x: number;
  y: number;
  r: number;
  speed: number;
  twinkle: number;
  color: string;
}

export const AnimatedStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Generate stars
    stars.current = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: randomBetween(STAR_SIZE[0], STAR_SIZE[1]),
      speed: randomBetween(STAR_SPEED[0], STAR_SPEED[1]),
      twinkle: Math.random() * Math.PI * 2,
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    }));

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (let star of stars.current) {
        // Twinkle effect
        const twinkle = 0.6 + 0.5 * Math.sin(star.twinkle);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r * twinkle, 0, 2 * Math.PI);
        ctx.fillStyle = star.color;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 12 * twinkle;
        ctx.fill();
        ctx.closePath();
        // Move star
        star.y += star.speed;
        star.twinkle += 0.05 + Math.random() * 0.02;
        if (star.y > height) {
          star.x = Math.random() * width;
          star.y = 0;
        }
      }
      requestAnimationFrame(animate);
    }
    animate();

    // Handle resize
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
};
