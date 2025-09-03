import { LinkItem } from "../types/link";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

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
      toast.success("Link copied!", {
        duration: 2000,
        position: "bottom-center",
        style: {
          background: "#1e40af",
          color: "#fff",
        },
      });
    } catch (err) {
      toast.error("Copy failed", {
        duration: 2000,
        position: "bottom-center",
      });
    }
  };

  return (
    <section className="flex flex-col gap-6" aria-label="RPA Links and Skills">
      {/* RPA Skills Header */}
      <header className="text-center mb-4 px-2">
        <h2 className="text-lg sm:text-xl font-bold text-white mb-3">
          Automation & Full-Stack Expertise
        </h2>
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
          <span className="px-2 sm:px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs sm:text-sm border border-blue-500/30">
            UiPath
          </span>
          <span className="px-2 sm:px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-xs sm:text-sm border border-green-500/30">
            Python
          </span>
          <span className="px-2 sm:px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs sm:text-sm border border-purple-500/30">
            C#
          </span>
          <span className="px-2 sm:px-3 py-1 bg-yellow-600/20 text-yellow-300 rounded-full text-xs sm:text-sm border border-yellow-500/30">
            Power Automate
          </span>
          <span className="px-2 sm:px-3 py-1 bg-red-600/20 text-red-300 rounded-full text-xs sm:text-sm border border-red-500/30">
            API
          </span>
          <span className="px-2 sm:px-3 py-1 bg-orange-600/20 text-orange-300 rounded-full text-xs sm:text-sm border border-orange-500/30">
            Spring Boot
          </span>
          <span className="px-2 sm:px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full text-xs sm:text-sm border border-cyan-500/30">
            Next.js
          </span>
        </div>
      </header>

      {/* Links Grid */}
      <nav
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        aria-label="RPA Project Links"
      >
        {links.map((link) => (
          <article
            key={link.id}
            className="group relative p-6 rounded-xl overflow-hidden border border-blue-500/20 shadow-lg shadow-blue-900/20 bg-gradient-to-br from-slate-800/50 via-blue-900/20 to-slate-800/50 hover:border-blue-400/40 hover:shadow-blue-500/20 transition-all duration-300"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              <div className="absolute w-32 h-32 bg-blue-500/10 rounded-full blur-2xl left-[-2rem] top-[-2rem]" />
              <div className="absolute w-24 h-24 bg-purple-500/10 rounded-full blur-2xl right-[-2rem] top-8" />
              <div className="absolute w-28 h-28 bg-cyan-500/10 rounded-full blur-2xl left-10 bottom-[-2rem]" />
            </div>

            {/* Card Content */}
            <div className="relative z-10 flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <FontAwesomeIcon
                    icon={link.icon}
                    size="lg"
                    className="text-blue-400 group-hover:text-blue-300 transition-colors"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors">
                    {link.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {link.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {link.views} views
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handleCopyLink(e, link.url)}
                      className="text-gray-400 hover:text-blue-400 transition-colors p-1"
                      aria-label={`Copy ${link.title} link`}
                    >
                      <FontAwesomeIcon icon={faEllipsisVertical} size="sm" />
                    </button>

                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => onLinkClick(link.id)}
                      className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      Visit
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </nav>
    </section>
  );
}
