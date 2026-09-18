import { stackGroups } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import MaterialIcon from "./MaterialIcon";

export default function TechStack() {
  return (
    <section id="stack" className="scroll-mt-24 space-y-8 sm:space-y-10">
      <SectionHeader
        number="02"
        label="Capabilities"
        title="Core Tech Skills"
        description="Disciplined tools and technologies utilized to build and ship real software."
      />

      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
        {stackGroups.map((group) => (
          <article
            key={group.title}
            className="group flex min-w-0 flex-col space-y-4 rounded-lg border-hairline bg-surface-container-low/60 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-surface-container-low sm:p-5 lg:p-6"
          >
            {/* Header */}
            <div
              className={`flex items-center justify-between gap-3 ${group.color}`}
            >
              <span className="min-w-0 break-words text-base font-medium sm:text-lg lg:text-xl">
                {group.title}
              </span>

              <MaterialIcon className="shrink-0 text-xl sm:text-2xl">
                {group.icon}
              </MaterialIcon>
            </div>

            {/* Description */}
            <p className="text-xs leading-6 text-outline sm:text-sm sm:leading-relaxed">
              {group.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5 pt-1 sm:gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded border border-outline-variant/30 bg-surface-container-high px-2 py-1 font-mono text-[10px] text-on-surface-variant transition-colors hover:border-primary/50 hover:text-on-surface sm:px-2.5 sm:text-xs"
                >
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