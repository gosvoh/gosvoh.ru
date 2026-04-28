import { PROFILE, SOCIALS } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="my-[clamp(56px,9vw,120px)]">
      <div className="grid items-center gap-6 rounded-[24px] border border-line bg-bg-glass-strong p-[clamp(28px,4vw,48px)] shadow-[var(--shadow-glass-lg)] backdrop-blur-[28px] backdrop-saturate-200 sm:grid-cols-[2fr_auto]">
        <div>
          <span className="eyebrow-line mb-3">04 / Связь</span>
          <h2 className="font-display text-[clamp(24px,3vw,36px)] font-bold leading-[1.15] tracking-[-0.025em]">
            Открыт к интересным задачам
          </h2>
          <p className="mt-2 text-[15px] text-fg-muted">
            Fullstack, frontend, продуктовая разработка — пишите
          </p>
        </div>
        <a
          className="inline-flex items-center gap-2.5 rounded-full border border-fg bg-fg px-5 py-3.5 text-[15px] font-medium tracking-[-0.01em] text-bg-base transition-colors hover:border-accent hover:bg-accent hover:text-accent-fg"
          href={`mailto:${PROFILE.email}`}
        >
          {PROFILE.email} →
        </a>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        {SOCIALS.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-bg-glass px-4 py-3 font-mono text-[13px] tracking-[0.04em] text-fg backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-bg-glass-strong hover:text-accent"
          >
            <span className="grid size-[22px] place-items-center rounded-full border border-line bg-bg-glass-strong text-[10px] font-semibold">
              {s.glyph}
            </span>
            {s.name}
          </a>
        ))}
      </div>
    </section>
  );
}
