import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faRobot, faCog } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <footer className="py-8 text-gray-400 text-sm flex flex-col items-center border-t border-blue-800/30">
      <div className="flex items-center gap-2 mb-3">
        <FontAwesomeIcon
          icon={faRobot}
          className="text-blue-400"
          aria-label="automation"
        />
        <p>Automating the future with</p>
        <FontAwesomeIcon
          icon={faHeart}
          className="text-red-500"
          aria-label="love"
        />
        <p>and</p>
        <FontAwesomeIcon
          icon={faCog}
          className="text-blue-400"
          aria-label="innovation"
        />
      </div>

      <div className="flex items-center gap-2 mb-2">
        <p>Built by</p>
        <address className="inline">
          <a
            href="https://github.com/burakboduroglu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition-colors font-medium"
          >
            Burak Boduroglu
          </a>
        </address>
      </div>

      <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-3 flex-wrap">
        <span>🤖 RPA Developer</span>
        <span className="text-blue-400">•</span>
        <span>🔧 Automation Engineer</span>
        <span className="text-blue-400">•</span>
        <span>💻 Full-Stack Developer</span>
        <span className="text-blue-400">•</span>
        <span>☕ Java Spring Boot</span>
        <span className="text-blue-400">•</span>
        <span>🚀 Next.js</span>
      </div>

      <small className="text-xs text-gray-600">
        © {new Date().getFullYear()} All rights reserved
      </small>
    </footer>
  );
}
