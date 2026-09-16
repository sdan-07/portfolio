import { endorsements } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import MaterialIcon from "./MaterialIcon";

export default function Endorsements() {
  return (
    <section id="about" className="scroll-mt-24 space-y-10">
      <SectionHeader
        number="04"
        label="Peer Validation"
        title="Peer Endorsements"
        description="What professors, mentors, and engineering leads say about Alex."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {endorsements.map((item) => (
          <article key={item.name} className="flex flex-col justify-between rounded-lg border-hairline bg-surface-container-low/70 p-6">
            <div>
              <div className={item.color}><MaterialIcon>format_quote</MaterialIcon></div>
              <p className="mt-4 text-base italic leading-relaxed">"{item.quote}"</p>
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-outline-variant/30 pt-6">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/40 bg-surface-container-high font-mono font-bold ${item.color}`}>
                {item.initials}
              </div>
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="font-mono text-xs text-on-surface-variant">{item.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}