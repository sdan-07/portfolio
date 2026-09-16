import MaterialIcon from "./MaterialIcon";

const links = [
  ["About", "home#"],
  ["Projects", "#work"],
  ["Skills", "#stack"],
  ["Education & Exp", "#experience"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/30 bg-surface-container-lowest/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-2 font-mono font-bold">
            <span className="h-2.5 w-2.5 rounded bg-primary-container shadow-[0_0_8px_#38bdf8]" />
            dev.sys
          </a>

          <div className="hidden items-center gap-2 rounded-full border border-outline-variant/40 bg-surface-container-high/80 px-2.5 py-0.5 sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="font-mono text-xs text-on-surface-variant">
              Actively Seeking Full-Time Roles
            </span>
          </div>
        </div>

        <nav className="hidden gap-6 md:flex">
          {links.map(([label, href], index) => (
            <a
              key={label}
              href={href}
              className={`text-sm font-medium hover:text-primary ${
                index === 0 ? "text-primary" : "text-on-surface-variant"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://github.com/sdan-07" target="_blank" rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded border border-outline-variant/30 bg-surface-container-low text-on-surface-variant hover:text-primary">
            <MaterialIcon className="text-lg">code</MaterialIcon>
          </a>
          <a href="#terminal"
            className="flex h-9 w-9 items-center justify-center rounded border border-outline-variant/30 bg-surface-container-low text-on-surface-variant hover:text-primary">
            <MaterialIcon className="text-lg">terminal</MaterialIcon>
          </a>
          <a href="#"
            className="flex items-center gap-1.5 rounded bg-on-surface px-3.5 py-1.5 font-mono text-xs font-medium text-surface-container-lowest hover:bg-primary-container">
            Resume <MaterialIcon className="text-sm">arrow_outward</MaterialIcon>
          </a>
        </div>
      </div>
    </header>
  );
}