import { experiences } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 space-y-10">
      <SectionHeader
        number="03"
        label="Track Record"
        title="Education & Experience"
        description="Chronological engineering impact and leadership responsibilities."
      />

      <div className="relative space-y-12 border-l border-outline-variant/40 pl-6 md:pl-10">
        {experiences.map((item, index) => (
          <article key={item.title} className="group relative">
            <div className={`absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded border-2 bg-background md:-left-[47px] ${
              index === 0 ? "border-primary" : "border-outline group-hover:border-primary"
            }`} />

            <div className="mb-2 flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
              <div>
                <span className="text-xl font-semibold">{item.title}</span>
                <span className={`ml-1 text-lg font-medium ${item.color}`}>@ {item.org}</span>
              </div>
              <span className="w-fit rounded bg-surface-container-low px-2.5 py-1 font-mono text-xs text-outline">{item.date}</span>
            </div>

            <p className="mb-4 text-sm text-on-surface-variant">{item.description}</p>

            <ul className="space-y-2 text-sm text-slate-300">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className={`font-bold ${item.color}`}>›</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}