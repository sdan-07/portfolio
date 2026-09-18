import { ArrowUp } from "lucide-react";


export default function Footer() {
  return (
    <footer className="border-t border-outline-variant/30 bg-surface-container-lowest">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
          <a href="#" className="font-mono font-bold">sd.dev</a>
          <span className="hidden text-outline sm:inline">•</span>
          <span className="text-sm text-on-surface-variant">
            © {new Date().getFullYear()} Soumyadip Dan • MCA Student & Software Developer. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/sdan-07" target="_blank" rel="noreferrer" className="font-mono text-xs text-on-surface-variant hover:text-primary">GitHub</a>
          <a href="https://linkedin.com/in/soumyadip-dan-538320303" target="_blank" rel="noreferrer" className="font-mono text-xs text-on-surface-variant hover:text-primary">LinkedIn</a>
          <a href="https://github.com/sdan-07/portfolio" className="font-mono text-xs text-on-surface-variant hover:text-primary">Source</a>
          {/* <a href="#work" className="font-mono text-xs text-on-surface-variant hover:text-primary">RSS</a> */}
          <a href="#" aria-label="Return to top" className="flex h-8 w-8 items-center justify-center rounded bg-surface-container-high text-outline hover:text-primary">
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}