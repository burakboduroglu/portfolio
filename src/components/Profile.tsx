import { useState } from "react";

interface ProfileProps {
  imageUrl: string;
  name: string;
  bio: string;
}

export function Profile({ imageUrl, name, bio }: ProfileProps) {
  const [showAlien, setShowAlien] = useState(false);

  const handleEggClick = () => {
    setShowAlien(true);
    setTimeout(() => setShowAlien(false), 2000);
  };

  return (
    <>
      {/* Uzaylı overlay */}
      {showAlien && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <span
            role="img"
            aria-label="Alien"
            className="text-[8rem] animate-fade-in-out drop-shadow-lg"
            style={{ transition: "opacity 0.5s" }}
          >
            <img
              src="/ufo.png"
              alt="Easter Egg"
              width={100}
              height={100}
              style={{ display: "block" }}
            />
          </span>
        </div>
      )}
      {/* Profile Section */}
      <section
        className="flex flex-col items-center mb-4"
        aria-label="Profile Section"
      >
        <div className="relative">
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#1f1f37] via-[#2d2d5a] to-[#373777] 
                       rounded-full blur-md opacity-80 animate-pulse"
            role="presentation"
            aria-hidden="true"
          ></div>
          <figure className="relative">
            <div
              className='w-24 h-24 rounded-full p-[3px] bg-gradient-to-r from-[#1f1f37] via-[#2d2d5a] to-[#373777]
                         before:content-[""] before:absolute before:inset-0 
                         before:rounded-full before:p-[3px]
                         before:bg-gradient-to-r before:from-[#4a4a9c] before:via-[#6161b7] before:to-[#4a4a9c]
                         before:animate-border-glow before:blur-sm relative
                         shadow-lg shadow-[#1f1f37]'
            >
              <img
                src={imageUrl}
                alt={`Profile picture of ${name}`}
                className="w-full h-full rounded-full border-2 border-[#0B1925] object-cover relative z-10"
                loading="lazy"
                width="96"
                height="96"
              />
            </div>
            <figcaption className="sr-only">Profile image of {name}</figcaption>
          </figure>
        </div>
        <header className="text-center">
          <h1 className="text-white text-xl font-bold mb-2 mt-4">{name}</h1>
          <p className="text-gray-400" role="doc-subtitle">
            {bio}
          </p>
        </header>
      </section>
      {/* Sağ alta sticky paskalya yumurtası (easter egg) SVG ikonu yerine görsel */}
      <button
        onClick={handleEggClick}
        className="fixed bottom-6 right-6 z-40 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-colors"
        style={{ lineHeight: 1 }}
        aria-label="Easter Egg"
      >
        <img
          src="/egg.png"
          alt="Easter Egg"
          width={40}
          height={40}
          style={{ display: "block" }}
        />
      </button>
      {/* Animasyon için ek CSS */}
      <style>{`
        @keyframes fade-in-out {
          0% { opacity: 0; transform: scale(0.8); }
          10% { opacity: 1; transform: scale(1.1); }
          80% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.8); }
        }
        .animate-fade-in-out {
          animation: fade-in-out 2s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </>
  );
}
