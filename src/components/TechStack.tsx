import { stackGroups } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import MaterialIcon from "./MaterialIcon";

export default function TechStack() {
  return (
    <section id="stack" className="scroll-mt-24 space-y-8">
      <SectionHeader
        number="02"
        label="Capabilities"
        title="Core Tech Skills"
        description="Disciplined tools and technologies utilized to build and ship real software."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stackGroups.map((group) => (
          <article key={group.title} className="space-y-4 rounded-lg border-hairline bg-surface-container-low/60 p-6">
            <div className={`flex items-center justify-between ${group.color}`}>
              <span className="text-xl font-medium">{group.title}</span>
              <MaterialIcon>{group.icon}</MaterialIcon>
            </div>
            <p className="text-sm leading-relaxed text-outline">{group.description}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded border border-outline-variant/30 bg-surface-container-high px-2.5 py-1 font-mono text-xs hover:border-primary/50">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}