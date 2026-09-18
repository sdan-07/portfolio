import { experiences } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 space-y-8 sm:space-y-10">
      <SectionHeader
        number="03"
        label="Education"
        title="Education & Experience"
        description="Chronological engineering impact and leadership responsibilities."
      />

      <div className="m-4 relative space-y-10 border-l border-outline-variant/40 pl-5 sm:space-y-12 sm:pl-7 md:pl-10">
        {experiences.map((item, index) => (
          <article key={item.title} className="group relative min-w-0">
            {/* Timeline dot */}
            <div
              className={`absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 bg-background sm:-left-[35px] sm:h-3.5 sm:w-3.5 md:-left-[47px] ${
                index === 0
                  ? "border-primary"
                  : "border-outline group-hover:border-primary"
              }`}
            />

            {/* Title + Organization + Date */}
            <div className="mb-2 flex min-w-0 flex-col gap-2 sm:gap-1 md:flex-row md:items-baseline md:justify-between">
              <div className="min-w-0 pr-2">
                <span className="block text-lg font-semibold leading-tight text-on-surface sm:inline sm:text-xl">
                  {item.title}
                </span>

                <span
                  className={`block text-base font-medium leading-tight sm:ml-1 sm:inline sm:text-lg ${item.color}`}
                >
                  @ {item.org}
                </span>
              </div>

              <span className="w-fit shrink-0 rounded bg-surface-container-low px-2 py-1 font-mono text-[10px] text-outline sm:px-2.5 sm:py-1 sm:text-xs">
                {item.date}
              </span>
            </div>

            {/* Description */}
            <p className="mb-4 max-w-3xl text-xs leading-6 text-on-surface-variant sm:text-sm sm:leading-relaxed">
              {item.description}
            </p>

            {/* Responsibilities */}
            <ul className="space-y-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
              {item.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2"
                >
                  <span
                    className={`mt-0.5 shrink-0 font-bold ${item.color}`}
                  >
                    ›
                  </span>

                  <span className="min-w-0">{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}