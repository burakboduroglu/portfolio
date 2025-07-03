import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { LinkItem } from "../types/link";
import toast from "react-hot-toast";

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
        {links.map((link) => (
          <article
            key={link.id}
            className="bg-gradient-to-br from-space-blue/90 via-[#23234a]/95 to-space-teal/80
                     hover:from-space-blue/95 hover:to-space-teal/90 transition-all duration-300
                     text-space-silver/70 font-medium rounded-xl
                     border border-[#3a3a5a]/30 shadow-lg shadow-space-blue/10
                     flex md:flex-col items-center justify-between md:justify-center
                     relative group h-16 md:h-auto md:aspect-square p-4 md:p-2
                     ring-1 ring-[#3a3a5a]/30 hover:ring-space-teal/30
                     before:absolute before:inset-0 before:rounded-xl before:blur before:opacity-20 before:pointer-events-none
                     before:bg-gradient-to-br before:from-space-blue/80 before:via-[#23234a]/90 before:to-space-teal/80"
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                onLinkClick(link.id);
                window.open(link.url, "_blank");
              }}
              className="flex items-center gap-3 lg:pt-3 md:gap-0 md:flex-1 md:flex-col drop-shadow-glow"
              aria-label={`Visit ${link.title}`}
            >
              <FontAwesomeIcon
                icon={link.icon}
                size="xl"
                className="block text-space-silver/70 drop-shadow-glow"
                aria-hidden="true"
              />
              <h2 className="text-sm md:text-xs text-gray-400 group-hover:text-gray-200 md:mt-2">
                {link.title}
              </h2>
            </a>
            <button
              onClick={(e) => handleCopyLink(e, link.url)}
              className="block text-space-silver/60 hover:text-space-teal hover:cursor-pointer transition-colors p-1"
              aria-label={`Copy link for ${link.title}`}
            >
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                size="lg"
                aria-hidden="true"
              />
            </button>
          </article>
        ))}
      </nav>
    </section>
  );
}

function FeaturedLink({
  link,
  onLinkClick,
  onCopyLink,
  gradientClass,
}: {
  link: LinkItem;
  onLinkClick: (id: string) => void;
  onCopyLink: (e: React.MouseEvent, url: string) => void;
  gradientClass: string;
}) {
  return (
    <a
      key={link.id}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault();
        onLinkClick(link.id);
        window.open(link.url, "_blank");
      }}
      className={`bg-gradient-to-r ${gradientClass}
                 shadow-lg hover:shadow-xl
                 md:h-20 transition-all duration-500 
                 text-white font-medium rounded-md
                 border border-[#ffffff15]
                 flex items-center justify-between
                 relative group h-14 p-4
                 md:flex-1
                 backdrop-blur-sm`}
    >
      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon={link.icon} size="xl" className="block" />
        <span className="text-sm md:text-lg text-white">{link.title}</span>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={(e) => onCopyLink(e, link.url)}
          className="block text-white hover:cursor-pointer transition-colors p-1"
        >
          <FontAwesomeIcon icon={faEllipsisVertical} size="lg" />
        </button>
      </div>
    </a>
  );
}
