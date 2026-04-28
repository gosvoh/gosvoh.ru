export default function SiteFooter() {
  return (
    <footer className="mt-[clamp(64px,10vw,120px)] flex flex-wrap items-center justify-between gap-4 border-t border-line py-6 font-mono text-[12px] text-fg-faint">
      <span>© {new Date().getFullYear()} Алексей Вохмин</span>
      <span>gosvoh.ru</span>
    </footer>
  );
}
