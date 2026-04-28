import SectionHead from "@/components/SectionHead";
import { PROFILE, STACK_HIGHLIGHTS } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="my-[clamp(56px,9vw,120px)]">
      <SectionHead
        eyebrow="01 / Обо мне"
        title={
          <>
            Fullstack-инженер
            <br />с интересом к деталям
          </>
        }
      />

      <div className="grid items-start gap-[clamp(20px,3vw,36px)] md:grid-cols-[2fr_1fr]">
        <div className="rounded-[20px] border border-line bg-bg-glass p-[clamp(28px,4vw,48px)] shadow-[var(--shadow-glass-sm)] backdrop-blur-2xl backdrop-saturate-180">
          <p className="mb-6 max-w-[36ch] font-display text-[clamp(20px,2.4vw,30px)] font-medium leading-[1.35] tracking-[-0.02em] text-fg">
            {PROFILE.bio}
          </p>
          <p className="my-3 max-w-[60ch] text-[clamp(15px,1.5vw,17px)] leading-relaxed text-fg-muted">
            Участвовал в создании и развитии 10+ проектов: корпоративные сайты,
            внутренние сервисы, образовательные платформы. Разрабатываю API,
            настраиваю CI/CD, поддерживаю Docker-инфраструктуру на
            Linux-серверах
          </p>
          <p className="my-3 max-w-[60ch] text-[clamp(15px,1.5vw,17px)] leading-relaxed text-fg-muted">
            Сейчас — программист в{" "}
            <a
              href="https://itmo.ru/"
              target="_blank"
              rel="noreferrer"
              className="border-b border-accent text-fg transition-colors hover:text-accent"
            >
              Университете ИТМО
            </a>
          </p>
        </div>

        <aside className="flex flex-col gap-5 rounded-[20px] border border-line bg-bg-glass p-[clamp(20px,3vw,32px)] shadow-[var(--shadow-glass-sm)] backdrop-blur-2xl backdrop-saturate-180">
          <Block title="// Стек">
            <div className="flex flex-wrap gap-1.5">
              {STACK_HIGHLIGHTS.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </Block>

          <Block title="// Образование">
            <div className="space-y-1 text-[13px] leading-[1.7] text-fg-muted">
              {PROFILE.edu.map((e) => (
                <div key={e.year}>
                  {e.year} — {e.degree}, {e.field}
                </div>
              ))}
            </div>
          </Block>

          <Block title="// Контакты">
            <div className="font-mono text-[12px] leading-[1.7] text-fg-muted">
              <div>
                <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              </div>
              <div>
                <a href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a>
              </div>
            </div>
          </Block>
        </aside>
      </div>
    </section>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-fg-faint">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-bg-glass-strong px-2.5 py-1 font-mono text-[11px] text-fg-muted">
      {children}
    </span>
  );
}
