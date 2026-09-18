import { SendHorizontal, SquareChevronRight, BadgeCheck } from "lucide-react";


export default function Hero() {
  return (
    <section className=" flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
      {/* LEFT CONTENT */}
      <div className="w-full max-w-2xl flex-1 space-y-6">
        {/* Badge */}
        <div className="inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded border-hairline bg-surface-container-low px-3 py-1">
          <span className="font-mono text-xs font-medium text-primary">
            ~/grad-2027
          </span>

          <span className="text-outline">::</span>

          <span className="font-mono text-xs leading-relaxed text-on-surface-variant">
            MCA Student & Aspiring Full-Stack Web Developer
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-semibold leading-[1.08] tracking-tight text-on-surface xs:text-4xl sm:text-5xl md:text-6xl">
          Building modern web apps with{" "}
          <span className="text-primary underline decoration-primary/40 decoration-wavy underline-offset-8">
            clean code
          </span>
          , curiosity, and speed.
        </h1>

        {/* Description */}
        <p className="w-full max-w-xl text-sm leading-relaxed text-on-surface-variant sm:text-base lg:text-lg">
          Hi, I'm Soumyadip, an MCA student with a strong foundation in
          Python, Java, MERN stack and REST API development. I build
          full-stack solutions, sharpen my DSA skills, and I'm looking to
          join a high-impact engineering team as a fresher developer.
        </p>

        {/* CTA + Email */}
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <div className="flex w-full flex-col gap-3 xs:flex-row md:flex-row sm:w-auto">
            <a
              href="#work"
              className="flex w-full items-center justify-center gap-2 rounded bg-on-surface px-5 py-3 text-sm font-medium text-surface-container-lowest transition-colors hover:bg-primary-container sm:w-auto sm:px-6"
            >
              Explore Projects
              <SquareChevronRight size={18} width={20}/>
            </a>

            <a
              href="#contact"
              className="flex w-full items-center justify-center gap-2 rounded border border-outline-variant/40 px-5 py-3 text-sm text-on-surface-variant transition-colors hover:border-secondary hover:text-on-surface sm:w-auto sm:px-6"
            >
              Get In Touch
              <SendHorizontal size={14}/>
            </a>
          </div>

          <span className="max-w-full break-all font-mono text-xs text-outline sm:break-normal">
            ● soumyadipdan7@gmail.com
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 border-t border-outline-variant/30 pt-6 sm:grid-cols-4 sm:gap-4">
          {[
            ["7.29 CGPA", "Current MCA", "text-primary"],
            ["Python", "Problem Solving (DSA)", "text-on-surface"],
            ["MERN Stack", "Frontend & Backend", "text-on-surface"],
            ["AWS & Docker", "Cloud & Deployment", "text-primary"],
          ].map(([value, label, color]) => (
            <div key={value} className="min-w-0">
              <div
                className={`break-words font-mono text-base font-bold sm:text-xl ${color}`}
              >
                {value}
              </div>

              <div className="mt-0.5 font-mono text-[10px] leading-relaxed text-on-surface-variant sm:text-[11px]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TERMINAL */}
      <DeveloperTerminal />
    </section>
  );
}

function DeveloperTerminal() {
  return (
    <div
      id="terminal"
      className="w-full max-w-[500px] min-w-0 self-center lg:self-auto"
    >
      {/* Profile Card */}
      <div className="mb-5 flex min-w-0 items-center gap-3 rounded-xl border border-outline-variant/40 bg-surface-container-low/80 p-3 shadow-xl backdrop-blur-md xs:gap-4 xs:p-4 sm:gap-5 sm:p-5">
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-surface-container-high text-2xl font-bold text-primary ring-2 ring-primary/40 xs:h-20 xs:w-20 xs:text-3xl sm:h-28 sm:w-28 sm:text-4xl">
            SD
          </div>

          <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-surface-container-low bg-emerald-400 sm:h-4 sm:w-4" />
        </div>

        {/* Profile Info */}
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex min-w-0 items-center gap-1.5 text-base font-semibold sm:gap-2 sm:text-xl">
            <span className="truncate">Soumyadip Dan</span>

            <BadgeCheck size={18} className="shrink-0 text-primary"/>
          </div>

          <div className="mb-2 inline-block max-w-full rounded-full border border-emerald-800/40 bg-emerald-950/40 px-2 py-0.5 font-mono text-[10px] leading-relaxed text-emerald-400 xs:px-2.5 xs:text-xs">
            ● Open to Full-Time Roles
          </div>

          <div className="font-mono text-[10px] xs:text-xs sm:text-sm">
            <span className="text-primary">MCA</span>{" "}
            <span className="text-outline">•</span>{" "}
            <span className="text-tertiary">CGPA 7.29 / 10.0</span>
          </div>
        </div>
      </div>

      {/* Terminal */}
      <div className="min-w-0 overflow-hidden rounded-xl border-hairline bg-surface-container-lowest shadow-2xl">
        {/* Terminal Header */}
        <div className="flex min-w-0 items-center justify-between gap-2 border-b border-outline-variant/30 bg-surface-container-low px-3 py-2.5 sm:px-4">
          <div className="flex shrink-0 gap-1.5 sm:gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-error-container sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-tertiary-container sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 sm:h-3 sm:w-3" />
          </div>

          <span className="min-w-0 truncate font-mono text-[10px] text-on-surface-variant xs:text-xs">
            soumyadip.config.ts
          </span>

          <span className="hidden shrink-0 font-mono text-[10px] text-outline xs:block">
            UTF-8
          </span>
        </div>

        {/* Code */}
        <div className="custom-scroll overflow-x-auto p-3 font-mono text-[10px] leading-relaxed sm:p-5 sm:text-[13px]">
          <div className="min-w-[340px]">
            <p>
              <span className="text-secondary">interface</span>{" "}
              <span className="text-tertiary">FresherProfile</span> {"{"}
            </p>

            <p className="pl-4">
              <span className="text-outline">name:</span>{" "}
              <span className="text-primary-container">
                'Soumyadip Dan'
              </span>
              ;
            </p>

            <p className="pl-4">
              <span className="text-outline">degree:</span>{" "}
              <span className="text-primary-container">'MCA'</span>;
            </p>

            <p className="pl-4">
              <span className="text-outline">cgpa:</span>{" "}
              <span className="text-primary-container">'7.29'</span>;
            </p>

            <p className="pl-4">
              <span className="text-outline">status:</span>{" "}
              <span className="text-emerald-400">
                'Actively seeking Full-Time Roles'
              </span>
              ;
            </p>

            <p className="pl-4">
              <span className="text-outline">stack:</span> [
            </p>

            <p className="pl-8 text-on-surface-variant">
              'React', 'Python', 'Java', 'JS',
            </p>

            <p className="pl-8 text-on-surface-variant">
              'Express.js', 'MongoDB', 'PostgreSQL'
            </p>

            <p className="pl-4">];</p>

            <p className="pl-4">
              <span className="text-outline">seekingFullTime:</span>{" "}
              <span className="text-primary">true</span>;
            </p>

            <p>{"}"}</p>

            {/* Terminal Footer */}
            <div className="mt-4 flex flex-col gap-1 border-t border-outline-variant/30 pt-3 text-[10px] text-outline xs:text-xs sm:flex-row sm:justify-between">
              <span>✓ Compiled 0 errors in 12ms</span>

              <span className="animate-pulse text-primary">
                ● READY TO WORK
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}