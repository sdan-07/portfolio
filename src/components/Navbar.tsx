import { useEffect, useState } from "react";
import { ArrowUpRight, SquareChevronRight, Code, Menu, X } from "lucide-react";

const links = [
  ["About", "#"],
  ["Projects", "#work"],
  ["Skills", "#stack"],
  ["Education", "#experience"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = links
      .map(([, href]) => href.replace("#", ""))
      .filter(Boolean)
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: any) => {
    const section = href.replace("#", "");

    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/30 bg-surface-container-lowest/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo + Status */}
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <a
            href="#"
            className="flex shrink-0 items-center gap-2 font-mono font-bold"
          >
            <span className="h-2.5 w-2.5 rounded bg-primary-container shadow-[0_0_8px_#38bdf8]" />
            sd.dev
          </a>

          <div className="hidden min-w-0 items-center gap-2 rounded-full border border-outline-variant/40 bg-surface-container-high/80 px-2.5 py-0.5 sm:flex">
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-primary" />

            <span className="truncate font-mono text-xs text-on-surface-variant">
              Actively Seeking Full-Time Roles
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => {
            const sectionId = href.replace("#", "");
            const isActive =
              href === "#" ? activeSection === "" : activeSection === sectionId;

            return (
              <a
                key={label}
                href={href}
                onClick={() => handleNavClick(href)}
                className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {label}

                {/* Active underline */}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* GitHub */}
          <a
            href="https://github.com/sdan-07"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded border border-outline-variant/30 bg-surface-container-low text-on-surface-variant transition-all duration-200 hover:border-primary/40 hover:text-primary"
          >
            {/* <MaterialIcon className="text-lg">
              code
            </MaterialIcon> */}
            <Code size={18} className="hidden sm:block" />
            <Code size={12} className="block sm:hidden" />
          </a>

          {/* Terminal */}
          <a
            href="#terminal"
            aria-label="Terminal"
            className="hidden h-9 w-9 items-center justify-center rounded border border-outline-variant/30 bg-surface-container-low text-on-surface-variant transition-all duration-200 hover:border-primary/40 hover:text-primary sm:flex"
          >
            {/* <MaterialIcon className="text-lg">
              terminal
            </MaterialIcon> */}
            <SquareChevronRight size={18} className="hidden sm:block"/>
            <SquareChevronRight size={12} className="block sm:hidden"/>

          </a>

          {/* Resume */}
          <a
            href="/resume/SoumyadipDan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded bg-on-surface px-3 py-1 lg:px-3.5 py-2.5 font-mono text-xs font-medium text-surface-container-lowest transition-colors duration-200 hover:bg-primary-container"
          >
            <span className="text-xs sm:hidden">CV</span>

            <span className="hidden sm:inline">Resume</span>

            <ArrowUpRight size={18} className="hidden sm:block" />
            <ArrowUpRight size={12} className="block sm:hidden" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`flex h-6.5 w-6.5 items-center justify-center rounded border bg-surface-container-low transition-all duration-200 lg:hidden ${
              isMenuOpen
                ? "border-primary/50 text-primary"
                : "border-outline-variant/30 text-on-surface-variant hover:border-primary/40 hover:text-primary"
            }`}
          >
            {/* <MaterialIcon className="text-lg">
              {isMenuOpen ? "close" : "menu"}
            </MaterialIcon> */}
            {isMenuOpen ? (
              <X className="h-3 w-3" />
            ) : (
              <Menu className="h-3 w-3" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`grid overflow-hidden border-t border-outline-variant/30 bg-surface-container-lowest transition-all duration-300 ease-out lg:hidden ${
          isMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <nav className="min-h-0 overflow-hidden px-4 sm:px-6">
          <div
            className={`mx-auto grid max-w-7xl grid-cols-2 gap-2 py-3 transition-transform duration-300 ease-out ${
              isMenuOpen ? "translate-y-0" : "-translate-y-3"
            }`}
          >
            {links.map(([label, href]) => {
              const sectionId = href.replace("#", "");
              const isActive =
                href === "#"
                  ? activeSection === ""
                  : activeSection === sectionId;

              return (
                <a
                  key={label}
                  href={href}
                  onClick={() => handleNavClick(href)}
                  className={`rounded px-3 py-2.5 text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {/* {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    )} */}

                    {label}
                  </span>
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
