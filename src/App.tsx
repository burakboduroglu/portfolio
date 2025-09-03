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
        className="min-h-screen flex flex-col items-center relative"
        role="main"
      >
        {/* Animated background with RPA theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        </div>
        <div className="w-full max-w-[900px] px-4 flex flex-col min-h-screen relative z-10">
          <article className="flex-1 py-8">
            <Profile
              imageUrl="https://avatars.githubusercontent.com/u/80620802?s=400&u=9932e501d5c723936e92da977ac3fb7691417f73&v=4"
              name="Burak Boduroglu"
              bio="RPA Developer & Full-Stack Engineer"
              subtitle="UiPath • Python • C# • Java • Spring Boot • React • Next.js • Process Automation"
            />
            <LinkGrid links={links} onLinkClick={handleLinkClick} />
          </article>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
