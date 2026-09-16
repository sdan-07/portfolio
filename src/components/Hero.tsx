import MaterialIcon from "./MaterialIcon";

export default function Hero() {
  return (
    <section className="flex flex-col justify-between gap-12 lg:flex-row lg:items-center">
      <div className="max-w-2xl flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 rounded border-hairline bg-surface-container-low px-3 py-1">
          <span className="font-mono text-xs font-medium text-primary">
            ~/grad-2027
          </span>
          <span className="text-outline">::</span>
          <span className="font-mono text-xs text-on-surface-variant">
            MCA Student & Aspiring Full-Stack Web Developer
          </span>
        </div>

        <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-on-surface md:text-6xl">
          Building modern web apps with{" "}
          <span className="text-primary underline decoration-primary/40 decoration-wavy underline-offset-8">
            clean code
          </span>
          , curiosity, and speed.
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">
          Hi, I'm Soumyadip, an MCA student with a strong foundation in Python, Java, MERN stack and REST API development. I build full-stack solutions, sharpen my DSA skills, and I'm looking to join a high-impact engineering team as a fresher developer.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="flex items-center gap-2 rounded bg-on-surface px-6 py-3 text-sm font-medium text-surface-container-lowest hover:bg-primary-container"
          >
            Explore Projects <MaterialIcon>terminal</MaterialIcon>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded border border-outline-variant/40 px-6 py-3 text-sm text-on-surface-variant hover:border-secondary hover:text-on-surface"
          >
            Get In Touch <MaterialIcon>send</MaterialIcon>
          </a>
          <span className="font-mono text-xs text-outline">
            ● soumyadipdan7@gmail.com
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 border-t border-outline-variant/30 pt-6 sm:grid-cols-4">
          {[
            ["7.29 CGPA", "Current MCA", "text-primary"],
            ["Python", "Problem Solving (DSA)", "text-on-surface"],
            ["MERN Stack", "Frontend & Backend", "text-on-surface"],
            ["AWS & Docker", "Cloud & Deployment", "text-primary"],
          ].map(([value, label, color]) => (
            <div key={value}>
              <div className={`font-mono text-xl font-bold ${color}`}>
                {value}
              </div>
              <div className="mt-0.5 font-mono text-[11px] text-on-surface-variant">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <DeveloperTerminal />
    </section>
  );
}

function DeveloperTerminal() {
  return (
    <div id="terminal" className="w-full lg:w-[500px]">
      <div className="mb-5 flex items-center gap-5 rounded-xl border border-outline-variant/40 bg-surface-container-low/80 p-5 shadow-xl backdrop-blur-md">
        <div className="relative shrink-0">
          <div className="flex h-28 w-28 items-center justify-center rounded-xl bg-surface-container-high text-4xl font-bold text-primary ring-2 ring-primary/40">
            SD
          </div>
          <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-surface-container-low bg-emerald-400" />
        </div>

        <div className="min-w-0">
          <div className="mb-1 flex items-center gap-2 text-xl font-semibold">
            Soumyadip Dan{" "}
            <MaterialIcon className="text-primary">verified</MaterialIcon>
          </div>
          <div className="mb-2 w-fit rounded-full border border-emerald-800/40 bg-emerald-950/40 px-2.5 py-0.5 font-mono text-xs text-emerald-400">
            ● Open to Full-Time Roles
          </div>
          <div className="font-mono text-sm">
            <span className="text-primary ml-3">MCA</span>{" "}
            <span className="text-outline">•</span>{" "}
            <span className="text-tertiary">CGPA 7.29 / 10.0</span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border-hairline bg-surface-container-lowest shadow-2xl">
        <div className="flex items-center justify-between border-b border-outline-variant/30 bg-surface-container-low px-4 py-2.5">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-error-container" />
            <span className="h-3 w-3 rounded-full bg-tertiary-container" />
            <span className="h-3 w-3 rounded-full bg-emerald-500" />
          </div>
          <span className="font-mono text-xs text-on-surface-variant">
            soumyadip.config.ts
          </span>
          <span className="font-mono text-[10px] text-outline">UTF-8</span>
        </div>

        <div className="custom-scroll overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
          <p>
            <span className="text-secondary">interface</span>{" "}
            <span className="text-tertiary">FresherProfile</span> {"{"}
          </p>
          <p className="pl-4">
            <span className="text-outline">name:</span>{" "}
            <span className="text-primary-container">'Soumyadip Dan'</span>;
          </p>
          <p className="pl-4">
            <span className="text-outline">degree:</span>{" "}
            <span className="text-primary-container">
              'MCA'
            </span>
            ;
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
          <div className="mt-4 flex justify-between border-t border-outline-variant/30 pt-3 text-xs text-outline">
            <span>✓ Compiled 0 errors in 12ms</span>
            <span className="animate-pulse text-primary">● READY TO WORK</span>
          </div>
        </div>
      </div>
    </div>
  );
}
