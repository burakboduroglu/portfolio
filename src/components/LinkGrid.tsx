import { LinkItem } from "../types/link";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

interface LinkGridProps {
  links: LinkItem[];
  onLinkClick: (id: string) => void;
}

export function LinkGrid({ links, onLinkClick }: LinkGridProps) {
  const handleCopyLink = async (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Kopyalandı!", {
        duration: 2000,
        position: "bottom-center",
        style: {
          background: "#0B1910",
          color: "#fff",
        },
      });
    } catch (err) {
      toast.error("Kopyalama hatası", {
        duration: 2000,
        position: "bottom-center",
      });
    }
  };

  return (
    <section className="flex flex-col gap-3" aria-label="Links and Skills">
      <header className="flex justify-center mb-1 w-full">
        <img
          src="https://skillicons.dev/icons?i=js,ts,next,react,nodejs,express,vite,bun,express,prisma,redis,mongodb,postgres,docker,tailwind"
          alt="Tech Skills"
          className="h-8 md:h-10"
          loading="lazy"
        />
      </header>
      <nav
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3"
        aria-label="Project Links"
      >
        {links.map((link, idx) => (
          <article
            key={link.id}
            className="relative group h-16 md:h-auto md:aspect-square p-4 md:p-2 flex md:flex-col items-center justify-between md:justify-center rounded-xl overflow-hidden border border-[#3a3a5a]/30 shadow-lg shadow-space-blue/10 ring-1 ring-[#3a3a5a]/30 hover:ring-space-teal/30 bg-gradient-to-br from-[#181824] via-[#23234a] to-[#0b1925]"
          >
            {/* Soyut arka plan bloblar ve noise */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              {/* Bulanık renkli bloblar */}
              <div className="absolute w-32 h-32 bg-[#3fd0ff]/30 rounded-full blur-2xl left-[-2rem] top-[-2rem]" />
              <div className="absolute w-24 h-24 bg-[#f472b6]/20 rounded-full blur-2xl right-[-2rem] top-8" />
              <div className="absolute w-28 h-28 bg-[#a5b4fc]/20 rounded-full blur-2xl left-10 bottom-[-2rem]" />
              {/* Yumuşak yıldızlar */}
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white opacity-10"
                  style={{
                    width: `${Math.random() * 1.5 + 0.5}px`,
                    height: `${Math.random() * 1.5 + 0.5}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    filter: "blur(1.5px)",
                  }}
                />
              ))}
              {/* Noise overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='white' fill-opacity='0.03'/%3E%3C/svg%3E\") repeat",
                  opacity: 0.5,
                }}
              />
            </div>
            {/* Binary şeritler - daha soyut ve estetik */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              {[...Array(7)].map((_, i) => {
                const binaries = [
                  "01",
                  "10",
                  "11",
                  "00",
                  "101",
                  "010",
                  "110",
                  "001",
                  "011",
                  "100",
                ];
                const text =
                  binaries[Math.floor(Math.random() * binaries.length)];
                const top = Math.random() * 80 + 5; // %
                const left = Math.random() * 80 + 5; // %
                const fontSize = Math.random() * 0.7 + 0.7; // rem
                const opacity = 0.12 + Math.random() * 0.18;
                const colorArr = [
                  "#3fd0ff",
                  "#a5b4fc",
                  "#38bdf8",
                  "#f472b6",
                  "#fbbf24",
                ];
                const color =
                  colorArr[Math.floor(Math.random() * colorArr.length)];
                return (
                  <span
                    key={i}
                    className="absolute animate-binary-float"
                    style={{
                      top: `${top}%`,
                      left: `${left}%`,
                      fontSize: `${fontSize}rem`,
                      opacity,
                      color,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      animationDelay: `${i * 0.5}s`,
                    }}
                  >
                    {text}
                  </span>
                );
              })}
            </div>
            {/* Kart içeriği */}
            <div className="relative z-30 flex items-center gap-3 lg:pt-3 md:gap-0 md:flex-1 md:flex-col drop-shadow-md w-full h-full">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  onLinkClick(link.id);
                  window.open(link.url, "_blank");
                }}
                className="flex items-center gap-3 md:gap-0 md:flex-1 md:flex-col w-full"
                aria-label={`${link.title} adresine git`}
              >
                <FontAwesomeIcon
                  icon={link.icon}
                  size="lg"
                  className="block text-space-silver/70 drop-shadow-lg [text-shadow:0_0_8px_#3fd0ff,0_0_16px_#fff6]"
                  aria-hidden="true"
                />
                <h2 className="text-sm md:text-base text-white font-bold drop-shadow-lg [text-shadow:0_0_8px_#3fd0ff,0_0_16px_#fff6] group-hover:text-space-teal md:mt-2 transition-colors">
                  {link.title}
                </h2>
              </a>
              <button
                onClick={(e) => handleCopyLink(e, link.url)}
                className="block text-space-silver/60 hover:text-space-teal hover:cursor-pointer transition-colors p-1"
                aria-label={`${link.title} adresini kopyala`}
              >
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  size="lg"
                  aria-hidden="true"
                />
              </button>
            </div>
          </article>
        ))}
      </nav>
    </section>
  );
}
