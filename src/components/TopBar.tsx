const NAV_ITEMS = [
  { href: "#about", label: "Обо мне" },
  { href: "#achievements", label: "Достижения" },
  { href: "#work", label: "Работы" },
  { href: "#contact", label: "Контакты" },
];

export default function TopBar({
  label = "AV / Алексей Вохмин",
}: {
  label?: string;
}) {
  return (
    <div className="mb-[clamp(32px,6vw,64px)] flex flex-wrap items-center justify-between gap-3 rounded-[28px] border border-line bg-bg-glass px-3.5 py-2.5 font-mono text-[13px] backdrop-blur-xl backdrop-saturate-150 sm:rounded-full">
      <div className="flex items-center gap-2.5 pl-2 font-semibold tracking-[0.02em]">
        <span className="block size-2 rounded-full bg-online shadow-[0_0_8px_var(--color-online)] animate-status-pulse" />
        <span className="text-[12px] sm:text-[13px]">{label}</span>
      </div>
      <nav className="flex flex-wrap justify-center gap-1">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-3.5 py-1.5 text-[12px] uppercase tracking-[0.08em] text-fg-muted transition-colors hover:bg-bg-glass-strong hover:text-fg"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
