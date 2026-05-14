import SectionHead from "@/components/SectionHead";
import { ACHIEVEMENTS } from "@/data/site";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="my-[clamp(56px,9vw,120px)] scroll-mt-[clamp(20px,4vw,56px)]"
    >
      <SectionHead eyebrow="02 / Достижения" title="В цифрах" />

      <div className="grid gap-[clamp(14px,2vw,22px)] grid-cols-[repeat(auto-fill,minmax(min(100%,280px),1fr))]">
        {ACHIEVEMENTS.map((a) => (
          <article
            key={a.label}
            className="flex flex-col gap-2 rounded-[20px] border border-line bg-bg-glass p-[clamp(20px,2.4vw,28px)] shadow-(--shadow-glass-sm) backdrop-blur-2xl backdrop-saturate-180 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-line-strong"
          >
            <div className="text-gradient-accent font-display text-[clamp(36px,5vw,56px)] font-bold leading-[0.9] tracking-[-0.04em]">
              {a.metric}
            </div>
            <div className="border-b border-line pb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-fg-faint">
              {a.label}
            </div>
            <p className="mt-1 text-[14px] leading-[1.55] text-fg-muted">
              {a.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
