import { projects } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { ArrowUpRight, Code, Folder } from "lucide-react";

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
  },
];

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-24 space-y-10 sm:space-y-12">
      <SectionHeader
        number="01"
        label="Projects"
        title="Featured Projects"
        description="Recent production systems, web apps, and developer tooling."
      />

      {/* Featured Projects */}
      <div className="space-y-6 sm:space-y-8">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-low/80 p-3 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-surface-container-low sm:p-5 lg:min-h-[500px] lg:p-6"
          >
            {/* Project number */}
            <div className="absolute right-4 top-4 z-10 font-mono text-[10px] text-outline/50 sm:right-6 sm:top-5 sm:text-xs">
              0{index + 1}
            </div>

            <div className="grid gap-6 lg:h-full lg:grid-cols-[1fr_1.05fr] lg:gap-8">
              {/* =========================
                  LEFT — PROJECT DETAILS
                  ========================= */}
              <div className="flex min-w-0 flex-col py-2 lg:min-h-[400px] lg:pr-4">
                {/* Tags */}
                <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-5">
                  <span
                    className={`rounded-md border px-2 py-1 font-mono text-[10px] sm:px-2.5 sm:py-1 sm:text-xs ${
                      project.accent === "primary"
                        ? "border-primary/20 bg-primary/10 text-primary"
                        : project.accent === "secondary"
                          ? "border-secondary/20 bg-secondary/10 text-secondary"
                          : "border-tertiary/20 bg-tertiary/10 text-tertiary"
                    }`}
                  >
                    {project.type}
                  </span>

                  <span className="rounded-md border border-emerald-800/40 bg-emerald-950/40 px-2 py-1 font-mono text-[10px] text-emerald-400 sm:text-xs">
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-3 pr-8 text-xl font-semibold leading-tight tracking-tight text-on-surface sm:mb-4 sm:text-2xl lg:text-3xl">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="max-w-xl text-xs leading-6 text-on-surface-variant sm:text-sm sm:leading-7">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mt-6 sm:mt-7">
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-outline sm:text-xs">
                    Core Highlights
                  </div>

                  <ul className="space-y-2 text-xs leading-relaxed text-slate-300 sm:space-y-2.5 sm:text-sm">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70 sm:mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom area */}
                <div className="mt-7 pt-2 sm:mt-auto sm:pt-8">
                  {/* Tech Stack */}
                  <div className="mb-5 flex flex-wrap gap-1.5 border-t border-outline-variant/30 pt-4 sm:gap-2 sm:pt-5">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-outline-variant/40 bg-surface-container-high px-2 py-1 font-mono text-[10px] text-on-surface-variant transition-colors group-hover:border-outline-variant/60 group-hover:text-on-surface sm:px-2.5 sm:text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 sm:gap-5">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-colors hover:text-primary-container sm:text-sm"
                    >
                      {project.action}

                      {/* <MaterialIcon className="text-sm sm:text-base">
                        arrow_outward
                      </MaterialIcon> */}
                      <ArrowUpRight size={21} className="hidden sm:block"/>
                      <ArrowUpRight size={17} className="block sm:hidden"/>
                    </a>

                    <a
                      href={project.source}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-on-surface-variant transition-colors hover:text-on-surface sm:text-sm"
                    >
                      <Code size={21} className="hidden sm:block"/>
                      <Code size={17} className="block sm:hidden"/>
                      Source
                    </a>
                  </div>
                </div>
              </div>

              {/* =========================
                  RIGHT — SCREENSHOT AREA
                  ========================= */}
              <div className="relative min-h-[220px] overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-container-lowest/70 xs:min-h-[260px] sm:min-h-[320px] lg:min-h-[440px]">
                {/* Screenshot placeholder */}
                {/* <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center sm:p-8">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg border border-outline-variant/40 bg-surface-container-high sm:mb-4 sm:h-14 sm:w-14"> */}
                    {/* <MaterialIcon className="text-xl text-outline sm:text-2xl">
                      image
                    </MaterialIcon> */}
                  {/* </div> */}

                  {/* <p className="font-mono text-[10px] uppercase tracking-wider text-outline sm:text-xs">
                    Project Screenshot
                  </p>  

                  <p className="mt-2 max-w-xs text-[10px] leading-5 text-outline/70 sm:text-xs">
                    Replace this area with a screenshot of the project.
                  </p>
                </div> */}

                {/* Browser-style top bar */}
                {/* <div className="absolute left-0 right-0 top-0 flex h-8 items-center gap-1.5 border-b border-outline-variant/20 bg-surface-container-highest/40 px-3 sm:h-9">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400/50 sm:h-2 sm:w-2" />
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/50 sm:h-2 sm:w-2" />
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/50 sm:h-2 sm:w-2" />
                </div> */}

                
                  {/* When you have an image: */}

                  <img
                    src={`${project.image}`}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover"
                  />
               
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* =========================
          OTHER EXPLORATIONS
          ========================= */}
      <div className="pt-2 sm:pt-4">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div className="min-w-0">
            <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-outline sm:text-xs">
              More in the lab
            </div>

            <h3 className="text-base font-semibold text-on-surface sm:text-lg">
              Other Explorations
            </h3>
          </div>

          <a
            href="https://github.com/sdan-07?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="hidden shrink-0 items-center gap-1.5 text-xs text-on-surface-variant transition-colors hover:text-primary sm:flex sm:text-sm"
          >
            View all repositories

            <ArrowUpRight size={19}/>
          </a>
        </div>

        {/* Repository Cards */}
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {otherExplorations.map((repo) => (
            <a
              key={repo.title}
              href={repo.github}
              target="_blank"
              rel="noreferrer"
              className="group flex min-w-0 flex-col rounded-lg border border-outline-variant/25 bg-surface-container-low/50 p-4 transition-all duration-300 hover:border-primary/25 hover:bg-surface-container-low sm:p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <Folder size={20} className=" text-outline transition-colors group-hover:text-primary" />

                <ArrowUpRight size={20} className="text-outline transition-colors group-hover:text-primary"/>
              </div>

              <h4 className="mb-2 break-words text-sm font-medium text-on-surface sm:text-base">
                {repo.title}
              </h4>

              <p className="mb-5 flex-1 text-xs leading-6 text-on-surface-variant">
                {repo.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {repo.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-outline-variant/30 bg-surface-container-high px-2 py-0.5 font-mono text-[10px] text-outline sm:text-[11px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* Mobile GitHub Link */}
        <a
          href="https://github.com/sdan-07?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-outline-variant/30 px-4 py-3 text-xs text-on-surface-variant transition-colors hover:border-primary/30 hover:text-primary sm:hidden"
        >
          View all repositories
          <ArrowUpRight size={19} />
        </a>
      </div>
    </section>
  );
}
