export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee-mask relative mb-6 overflow-hidden rounded-full border border-line bg-bg-glass py-3.5 backdrop-blur-xl">
      <div className="flex w-max gap-9 font-mono text-[12px] uppercase tracking-[0.12em] text-fg-muted animate-marquee">
        <MarqueeRow items={items} />
        <MarqueeRow items={items} />
      </div>
    </div>
  );
}

function MarqueeRow({ items }: { items: string[] }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-9">
      {items.map((it, i) => (
        <span key={`${it}-${i}`} className="inline-flex items-center gap-9">
          {it}
          <span className="text-[8px] text-accent">◆</span>
        </span>
      ))}
    </span>
  );
}
