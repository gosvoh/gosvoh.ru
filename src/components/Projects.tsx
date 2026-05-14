import SectionHead from "@/components/SectionHead";
import Marquee from "@/components/Marquee";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS, STACK_HIGHLIGHTS } from "@/data/site";

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="work" className="my-[clamp(56px,9vw,120px)] scroll-mt-[clamp(20px,4vw,56px)]">
      <SectionHead
        eyebrow="03 / Работы"
        title="Избранные проекты"
        meta={`${PROJECTS.length} проектов · 2022—2026`}
      />

      <Marquee items={STACK_HIGHLIGHTS} />

      {featured.length > 0 && (
        <div className="grid gap-[clamp(14px,2vw,22px)] sm:grid-cols-2 [&>article:last-child:nth-child(odd)]:sm:col-span-2">
          {featured.map((p) => (
            <ProjectCard key={p.title} p={p} featured />
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <div className="mt-[clamp(14px,2vw,22px)] grid gap-[clamp(14px,2vw,22px)] sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      )}
    </section>
  );
}
