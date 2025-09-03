interface ProfileProps {
  imageUrl: string;
  name: string;
  bio: string;
  subtitle: string;
}

export function Profile({ imageUrl, name, bio, subtitle }: ProfileProps) {
  return (
    <>
      {/* Profile Section */}
      <section
        className="flex flex-col items-center mb-8"
        aria-label="Profile Section"
      >
        <div className="relative">
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 
                       rounded-full blur-md opacity-80 animate-pulse"
            role="presentation"
            aria-hidden="true"
          ></div>
          <figure className="relative">
            <div
              className='w-28 h-28 rounded-full p-[3px] bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800
                         before:content-[""] before:absolute before:inset-0 
                         before:rounded-full before:p-[3px]
                         before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-blue-700
                         before:animate-border-glow before:blur-sm relative
                         shadow-lg shadow-blue-900/50'
            >
              <img
                src={imageUrl}
                alt={`Profile picture of ${name}`}
                className="w-full h-full rounded-full border-2 border-slate-800 object-cover relative z-10"
                loading="lazy"
                width="112"
                height="112"
              />
            </div>
            <figcaption className="sr-only">Profile image of {name}</figcaption>
          </figure>
        </div>

        {/* RPA Badge */}
        <div className="mt-4 mb-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
            🤖 Automation Developer
          </span>
        </div>

        <header className="text-center">
          <h1 className="text-white text-xl sm:text-2xl font-bold mb-2">
            {name}
          </h1>
          <p
            className="text-blue-200 text-base sm:text-lg mb-2"
            role="doc-subtitle"
          >
            {bio}
          </p>
        </header>

        {/* Skills Grid */}
        <div className="mt-6 grid grid-cols-5 sm:grid-cols-4 md:grid-cols-8 gap-2 sm:gap-3 max-w-2xl px-4">
          <div className="flex flex-col items-center p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-xl sm:text-2xl mb-1">🤖</span>
            <span className="text-xs text-gray-300 text-center">UiPath</span>
          </div>
          <div className="flex flex-col items-center p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-xl sm:text-2xl mb-1">🐍</span>
            <span className="text-xs text-gray-300 text-center">Python</span>
          </div>
          <div className="flex flex-col items-center p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-xl sm:text-2xl mb-1">💎</span>
            <span className="text-xs text-gray-300 text-center">C#</span>
          </div>
          <div className="flex flex-col items-center p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-xl sm:text-2xl mb-1">⚡</span>
            <span className="text-xs text-gray-300 text-center">JS</span>
          </div>
          <div className="flex flex-col items-center p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-xl sm:text-2xl mb-1">☕</span>
            <span className="text-xs text-gray-300 text-center">Java</span>
          </div>
          <div className="flex flex-col items-center p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-xl sm:text-2xl mb-1">🍃</span>
            <span className="text-xs text-gray-300 text-center">Spring</span>
          </div>
          <div className="flex flex-col items-center p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-xl sm:text-2xl mb-1">⚛️</span>
            <span className="text-xs text-gray-300 text-center">React</span>
          </div>
          <div className="flex flex-col items-center p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10">
            <span className="text-xl sm:text-2xl mb-1">🚀</span>
            <span className="text-xs text-gray-300 text-center">Next.js</span>
          </div>
        </div>
      </section>

      {/* Animasyon için ek CSS */}
      <style>{`
        @keyframes border-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-border-glow {
          animation: border-glow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
