import React from "react";
import { initialLinks } from "./lib/links";
import { LinkItem } from "./types/link";
import { Profile } from "./components/Profile";
import { LinkGrid } from "./components/LinkGrid";
import { Footer } from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  const [links, setLinks] = React.useState<LinkItem[]>(() => {
    const savedViews = localStorage.getItem("linkViews");
    if (savedViews) {
      const savedLinks = JSON.parse(savedViews);
      return initialLinks.map((link) => ({
        ...link,
        views: savedLinks[link.id] || 0,
      }));
    }
    return initialLinks;
  });

  const [cursorPos, setCursorPos] = React.useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  React.useEffect(() => {
    const onMove = (e: MouseEvent) =>
      setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const handleLinkClick = (id: string) => {
    setLinks((prevLinks) => {
      const newLinks = prevLinks.map((link) =>
        link.id === id ? { ...link, views: link.views + 1 } : link
      );

      const viewsObject = newLinks.reduce(
        (acc, link) => ({
          ...acc,
          [link.id]: link.views,
        }),
        {}
      );
      localStorage.setItem("linkViews", JSON.stringify(viewsObject));

      return newLinks;
    });
  };

  return (
    <>
      <Toaster />
      <main
        className="min-h-screen flex flex-col items-center justify-center px-6 relative"
        role="main"
      >
        <div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background: `radial-gradient(600px at ${cursorPos.x}px ${cursorPos.y}px, rgba(255,255,255,0.05), transparent 60%)`,
          }}
        />
        <div className="relative z-10 w-full max-w-6xl py-10 mx-auto">
          {/* Gravatar Button */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              {/* Glow effect behind button */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>

              <a
                href="https://burakboduroglu.bio"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-4 px-16 py-5 rounded-2xl hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 active:scale-95 cursor-pointer w-full max-w-lg mx-auto backdrop-blur-sm"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8)) padding-box, linear-gradient(90deg, #3b82f6, #8b5cf6, #f97316) border-box",
                  border: "2px solid transparent",
                  borderRadius: "16px",
                }}
              >
                {/* Subtle animated background gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <span className="text-white/90 font-semibold text-xl relative z-10 group-hover:text-white transition-colors duration-200">
                  Visit
                </span>
                <span className="text-blue-300 font-bold text-xl relative z-10 group-hover:text-blue-200 transition-colors duration-200">
                  Burak Boduroglu Card
                </span>
                <svg
                  className="w-6 h-6 text-white/80 group-hover:text-white group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>

                {/* Subtle shimmer effect - only visible on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-1 md:order-1">
              <Profile
                imageUrl="https://avatars.githubusercontent.com/u/80620802?s=400&u=9932e501d5c723936e92da977ac3fb7691417f73&v=4"
                name="Burak Boduroglu"
                bio="RPA Developer & Full-Stack Engineer"
                subtitle=""
              />
            </div>
            <div className="order-2 md:order-2">
              <LinkGrid links={links} onLinkClick={handleLinkClick} />
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
