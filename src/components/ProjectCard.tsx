import { useEffect, useRef, useState } from "react";
import { Images } from "lucide-react";
import type { Project } from "@/data/site";
import { getProjectScreenshots } from "@/data/site";
import { cn } from "@/lib/utils";
import ProjectGallery from "@/components/ProjectGallery";

export default function ProjectCard({
  p,
  featured = false,
}: {
  p: Project;
  featured?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const slides = getProjectScreenshots(p);
  const hasGallery = slides.length > 0;
  const [galleryOpen, setGalleryOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", move);
    return () => el.removeEventListener("mousemove", move);
  }, []);

  const initials = p.title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const cleanUrl = p.url ? p.url.replace(/^https?:\/\/|\/$/g, "") : null;
  const hasFooter = Boolean(cleanUrl || p.github || hasGallery);

  return (
    <article
      ref={ref}
      className={cn(
        "group relative isolate flex flex-col overflow-hidden rounded-[20px] border border-line bg-bg-glass p-[clamp(20px,2.4vw,28px)] backdrop-blur-2xl backdrop-saturate-180 transition-all duration-350 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-0.5 hover:border-line-strong hover:shadow-(--shadow-glass-lg)",
        featured && "p-[clamp(24px,3vw,36px)]",
        "before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-400 before:content-[''] hover:before:opacity-100",
        "before:[background:radial-gradient(circle_320px_at_var(--mx,50%)_var(--my,50%),var(--color-accent-soft),transparent_60%)]",
      )}
    >
      <header className="mb-4 flex items-start justify-between gap-4">
        <div className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-[10px] border border-line bg-bg-glass-strong font-mono text-[16px] font-semibold text-fg-muted">
          {p.image ? (
            <img
              src={p.image}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          ) : (
            initials
          )}
        </div>
        <span className="font-mono text-[11px] tracking-[0.06em] text-fg-faint">
          {p.year}
        </span>
      </header>

      <h3
        className={cn(
          "mb-2 font-display font-semibold leading-[1.2] tracking-[-0.02em]",
          featured
            ? "text-[clamp(22px,2.4vw,30px)]"
            : "text-[clamp(18px,1.8vw,22px)]",
        )}
      >
        {p.title}
      </h3>

      <p
        className={cn(
          "mb-4 leading-normal text-fg-muted",
          featured ? "max-w-[50ch] text-[16px]" : "text-[14px]",
        )}
      >
        {p.description}
      </p>

      {featured && p.tasks && (
        <p className="mb-4 border-t border-dashed border-line pt-3 text-[13px] leading-[1.55] text-fg-faint">
          {p.tasks}
        </p>
      )}

      {p.stack && (
        <div className="mt-auto flex flex-wrap gap-1">
          {p.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line bg-bg-glass-strong px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-fg-muted"
            >
              {s}
            </span>
          ))}
        </div>
      )}

      {hasFooter && (
      <footer className="mt-4 flex items-center justify-between gap-2 border-t border-line pt-3.5">
        {cleanUrl ? (
          <span className="max-w-[70%] truncate font-mono text-[11px] text-fg-muted">
            {cleanUrl}
          </span>
        ) : (
          <span aria-hidden="true" />
        )}
        <div className="flex gap-2">
          {hasGallery && (
            <button
              type="button"
              className="grid size-7.5 place-items-center rounded-lg border border-line bg-bg-glass-strong text-fg-muted transition-all duration-200 hover:-translate-y-px hover:border-line-strong hover:text-fg hover:cursor-pointer"
              onClick={() => setGalleryOpen(true)}
              aria-label="Открыть скриншоты"
            >
              <Images width={14} height={14} />
            </button>
          )}
          {p.url && (
            <a
              className="grid size-7.5 place-items-center rounded-lg border border-line bg-bg-glass-strong text-fg-muted transition-all duration-200 hover:-translate-y-px hover:border-line-strong hover:text-fg"
              href={p.url}
              target="_blank"
              rel="noreferrer"
              aria-label="Открыть"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          )}
          {p.github && (
            <a
              className="grid size-7.5 place-items-center rounded-lg border border-line bg-bg-glass-strong text-fg-muted transition-all duration-200 hover:-translate-y-px hover:border-line-strong hover:text-fg"
              href={p.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.5 7.9 11 .6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.9 7.9-11C23.5 5.6 18.4.5 12 .5z" />
              </svg>
            </a>
          )}
        </div>
      </footer>
      )}

      {hasGallery && (
        <ProjectGallery
          slides={slides}
          open={galleryOpen}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </article>
  );
}
