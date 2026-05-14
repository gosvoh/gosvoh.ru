import Gosvoh from "@/assets/gosvoh.webp";
import { PROFILE } from "@/data/site";

export default function Hero() {
  return (
    <header className="grid items-center gap-[clamp(20px,5vw,64px)] rounded-3xl border border-line bg-bg-glass-strong p-[clamp(20px,4vw,48px)] backdrop-blur-[28px] backdrop-saturate-200 shadow-(--shadow-glass-lg) md:grid-cols-[minmax(180px,1fr)_2fr] text-center md:text-left">
      <div className="relative mx-auto aspect-square w-[clamp(140px,22vw,260px)] overflow-hidden rounded-[28px] border border-line-strong shadow-(--shadow-glass-lg)">
        <img
          src={Gosvoh}
          alt="Алексей Вохмин"
          className="block h-full w-full object-cover"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
        />
      </div>

      <div className="flex flex-col items-center md:items-start">
        <span className="eyebrow-line">Fullstack · 2026</span>
        <h1 className="mt-3 mb-4 font-display text-[clamp(36px,6vw,72px)] font-bold leading-none tracking-[-0.03em]">
          Алексей
          <br />
          Вохмин
        </h1>
        <p className="mb-6 max-w-[36ch] text-[clamp(16px,2vw,22px)] font-normal leading-snug tracking-[-0.01em] text-fg-muted">
          {PROFILE.title}. {PROFILE.subtitle}. {PROFILE.experienceYears} года
          практического опыта разработки
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
          <Chip>
            <span className="size-1.5 rounded-full bg-accent" />
            Открыт к проектам
          </Chip>
          <Chip>{PROFILE.location}</Chip>
          <Chip>{PROFILE.experienceYears} лет опыта</Chip>
          <Chip>EN · {PROFILE.english}</Chip>
        </div>
      </div>
    </header>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg-glass-strong px-3 py-1.5 font-mono text-[12px] text-fg-muted">
      {children}
    </span>
  );
}
