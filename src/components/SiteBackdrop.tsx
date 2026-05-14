export default function SiteBackdrop() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[-20%] z-0 opacity-25 blur-[80px] saturate-140"
      >
        <span className="absolute left-[10%] top-[5%] block aspect-square w-1/2 rounded-full bg-aurora-1 animate-drift-1" />
        <span className="absolute right-[5%] top-[30%] block aspect-square w-[45%] rounded-full bg-aurora-2 animate-drift-2" />
        <span className="absolute bottom-[5%] left-[35%] block aspect-square w-2/5 rounded-full bg-aurora-3 animate-drift-3" />
      </div>
      <div aria-hidden className="grain" />
    </>
  );
}
