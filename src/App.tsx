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
          <div className="mt-12">
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
