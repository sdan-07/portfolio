type Props = {
  number: string;
  label: string;
  title: string;
  description: string;
};

export default function SectionHeader({ number, label, title, description }: Props) {
  return (
    <div className="border-b border-outline-variant/30 pb-6">
      <div className="mb-1 font-mono text-xs uppercase tracking-wider text-primary">
        {number} // {label}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-on-surface md:text-[2.5rem]">
        {title}
      </h2>
      <p className="mt-1 text-base text-on-surface-variant">{description}</p>
    </div>
  );
}