import { projects } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import MaterialIcon from "./MaterialIcon";

const otherExplorations = [
  {
    title: "DSA Practice",
    description:
      "Algorithms, data structures, and problem-solving implementations.",
    stack: ["Python", "DSA"],
    github: "https://github.com/sdan-07/Python_dsa",
  },
  {
    title: "React Experiments - QuickNotes",
    description:
      "Small UI experiments exploring React patterns. A simple Note-taking application shows timestamp and other operations.",
    stack: ["React", "MongoDB", "Timestamp", "Node.js"],
    github: "https://github.com/sdan-07/QuickNotes",
  },
  {
    title: "React Experiments - Galleria",
    description:
      "Small UI experiment exploring React pagination. A gallery application implements fetching images from Fake API.",
    stack: ["React", "Tailwind CSS", "Grid-Layout", "Axios"],
    github: "https://github.com/sdan-07/React-GalleryApp",
  }
];

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-24 space-y-12">
      <SectionHeader
        number="01"
        label="Engineering Deliverables"
        title="Featured Projects"
        description="Recent production systems, web apps, and developer tooling."
      />

      {/* Featured Projects */}
      <div className="space-y-8">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group relative min-h-[460px] overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-low/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-surface-container-low lg:min-h-[500px]"
          >
            {/* Project number */}
            <div className="absolute right-6 top-5 z-10 font-mono text-xs text-outline/50">
              0{index + 1}
            </div>

            <div className="grid h-full gap-8 lg:grid-cols-[1fr_1.05fr]">
              {/* =========================
                  LEFT — PROJECT DETAILS
                  ========================= */}
              <div className="flex min-h-[400px] flex-col py-2 lg:pr-4">
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-md border px-2.5 py-1 font-mono text-xs ${
                      project.accent === "primary"
                        ? "border-primary/20 bg-primary/10 text-primary"
                        : project.accent === "secondary"
                          ? "border-secondary/20 bg-secondary/10 text-secondary"
                          : "border-tertiary/20 bg-tertiary/10 text-tertiary"
                    }`}
                  >
                    {project.type}
                  </span>

                  <span className="rounded-md border border-emerald-800/40 bg-emerald-950/40 px-2 py-1 font-mono text-xs text-emerald-400">
                    {project.badge}
                  </span>
                </div>

                <h3 className="mb-4 text-3xl font-semibold tracking-tight text-on-surface">
                  {project.title}
                </h3>

                <p className="max-w-xl text-sm leading-7 text-on-surface-variant">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mt-7">
                  <div className="mb-3 font-mono text-xs uppercase tracking-wider text-outline">
                    Core Highlights
                  </div>

                  <ul className="space-y-2.5 text-sm leading-relaxed text-slate-300">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom area */}
                <div className="mt-auto pt-8">
                  <div className="mb-5 flex flex-wrap gap-2 border-t border-outline-variant/30 pt-5">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-outline-variant/40 bg-surface-container-high px-2.5 py-1 font-mono text-xs text-on-surface-variant transition-colors group-hover:border-outline-variant/60 group-hover:text-on-surface"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-5">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-container"
                    >
                      {project.action}
                      <MaterialIcon className="text-base">
                        arrow_outward
                      </MaterialIcon>
                    </a>

                    <a
                      href={project.source}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-on-surface-variant transition-colors hover:text-on-surface"
                    >
                      <MaterialIcon className="text-base">
                        code
                      </MaterialIcon>
                      Source
                    </a>
                  </div>
                </div>
              </div>

              {/* =========================
                  RIGHT — SCREENSHOT AREA
                  ========================= */}
              <div className="relative min-h-[300px] overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-container-lowest/70 lg:min-h-[440px]">
                {/* Screenshot placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg border border-outline-variant/40 bg-surface-container-high">
                    <MaterialIcon className="text-2xl text-outline">
                      image
                    </MaterialIcon>
                  </div>

                  <p className="font-mono text-xs uppercase tracking-wider text-outline">
                    Project Screenshot
                  </p>

                  <p className="mt-2 max-w-xs text-xs leading-5 text-outline/70">
                    Replace this area with a screenshot of the project.
                  </p>
                </div>

                {/* Browser-style top bar */}
                <div className="absolute left-0 right-0 top-0 flex h-9 items-center gap-1.5 border-b border-outline-variant/20 bg-surface-container-highest/40 px-3">
                  <span className="h-2 w-2 rounded-full bg-red-400/50" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/50" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/50" />
                </div>

                {/* 
                  When you have an image, replace the placeholder above with:

                  <img
                    src="/projects/project-name.png"
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover"
                  />
                */}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* =========================
          OTHER EXPLORATIONS
          ========================= */}
      <div className="pt-4">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <div className="mb-1 font-mono text-xs uppercase tracking-wider text-outline">
              More in the lab
            </div>

            <h3 className="text-lg font-semibold text-on-surface">
              Other Explorations
            </h3>
          </div>

          <a
            href="https://github.com/sdan-07?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 text-sm text-on-surface-variant transition-colors hover:text-primary sm:flex"
          >
            View all repositories
            <MaterialIcon className="text-base">
              arrow_outward
            </MaterialIcon>
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {otherExplorations.map((repo) => (
            <a
              key={repo.title}
              href={repo.github}
              target="_blank"
              rel="noreferrer"
              className="group rounded-lg border border-outline-variant/25 bg-surface-container-low/50 p-5 transition-all duration-300 hover:border-primary/25 hover:bg-surface-container-low"
            >
              <div className="mb-4 flex items-center justify-between">
                <MaterialIcon className="text-xl text-outline transition-colors group-hover:text-primary">
                  folder
                </MaterialIcon>

                <MaterialIcon className="text-base text-outline/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  arrow_outward
                </MaterialIcon>
              </div>

              <h4 className="mb-2 font-medium text-on-surface">
                {repo.title}
              </h4>

              <p className="mb-5 text-xs leading-6 text-on-surface-variant">
                {repo.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {repo.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-outline-variant/30 bg-surface-container-high px-2 py-0.5 font-mono text-[11px] text-outline"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
