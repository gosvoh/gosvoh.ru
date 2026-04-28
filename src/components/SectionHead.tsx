export default function SectionHead({
  eyebrow,
  title,
  meta,
}: {
  eyebrow: string;
  title: React.ReactNode;
  meta?: React.ReactNode;
}) {
  return (
    <div className="mb-[clamp(24px,4vw,48px)] flex flex-wrap items-end justify-between gap-6">
      <div>
        <span className="eyebrow-line mb-3">{eyebrow}</span>
        <h2 className="font-display text-[clamp(28px,4.5vw,48px)] font-bold leading-[1.05] tracking-[-0.025em]">
          {title}
        </h2>
      </div>
      {meta && (
        <div className="font-mono text-[12px] uppercase tracking-[0.08em] text-fg-faint">
          {meta}
        </div>
      )}
    </div>
  );
}
