import BioconLogo from "@/assets/biocon-logo.png";
import LmsLogo from "@/assets/lms-logo.png";
import EditorjsLogo from "@/assets/editorjs-logo.svg";
import WorktimeLogo from "@/assets/worktime-logo.svg";
import WeddingLogo from "@/assets/wedding-logo.svg";

const screenshotModules = import.meta.glob<string>(
  "../assets/screenshots/**/*.webp",
  { eager: true, import: "default" },
);

export type Project = {
  title: string;
  description: string;
  url?: string;
  github?: string;
  image?: string;
  slug?: string;
  tasks?: string;
  stack?: string[];
  year: string;
  featured?: boolean;
};

export type Achievement = {
  metric: string;
  label: string;
  desc: string;
};

export type Social = {
  name: string;
  href: string;
  glyph: string;
};

export type EduItem = {
  year: string;
  degree: string;
  field: string;
};

export const PROFILE = {
  name: "Алексей Вохмин",
  title: "Fullstack-разработчик",
  subtitle: "React · Next.js · Node.js · Bun · TypeScript",
  age: 29,
  location: "Всеволожск / Санкт-Петербург",
  email: "vohmina2011@yandex.ru",
  phone: "+7 (950) 001-49-74",
  site: "gosvoh.ru",
  english: "B2",
  experienceYears: "4+",
  bio: "Fullstack-разработка: frontend и backend приложений, проектирую API, настраиваю аутентификацию, работаю с SSR, Docker, CI/CD и деплоем на Linux. Опыт самостоятельной разработки и работы в командах до 7–8 человек",
  edu: [
    { year: "2025", degree: "Магистр", field: "Веб-технологии · ИТМО" },
    { year: "2023", degree: "Бакалавр", field: "Программная инженерия · ИТМО" },
  ] as EduItem[],
};

export const STACK_HIGHLIGHTS: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Bun",
  "PostgreSQL",
  "Prisma",
  "Drizzle",
  "Tailwind",
  "Docker",
  "Nginx",
  "Linux",
  "CI/CD",
  "REST API",
  "Auth.js",
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    metric: "10+",
    label: "проектов",
    desc: "Корпоративные сайты, внутренние сервисы, образовательные платформы и LMS — от прототипа до продакшена",
  },
  {
    metric: "200+",
    label: "пользователей в день",
    desc: "Поддерживаемая аудитория LMS-платформы cs.itmo.ru — frontend и UX-улучшения",
  },
  {
    metric: "100+",
    label: "адаптивных страниц",
    desc: "Pixel-perfect вёрстка и библиотека переиспользуемых UI-компонентов в нескольких продуктах",
  },
  {
    metric: "50+",
    label: "Docker-сервисов",
    desc: "Поддержка инфраструктуры на Linux: Nginx, домены, CI/CD через GitHub и Gitea Actions",
  },
  {
    metric: "4+",
    label: "года практического опыта",
    desc: "Самостоятельная fullstack-разработка и работа в командах до 7–8 человек со стейкхолдерами и дизайнерами",
  },
  {
    metric: "Python · R",
    label: "преподавание",
    desc: "Авторский курс «Основы программирования на Python и R» — методика, практические задания, обратная связь со студентами",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Biotech.Industries",
    description:
      "Сайт подразделения факультета биотехнологий ИТМО — самостоятельная fullstack-разработка",
    url: "https://biotech.industries",
    image: "https://biotech.industries/favicon.ico",
    tasks:
      "Полный fullstack кроме дизайна: frontend, backend, архитектура, адаптивность, анимации, SEO",
    stack: ["React", "TypeScript", "Next.js", "Tailwind"],
    year: "2023",
    slug: "biotech-industries",
    featured: true,
  },
  {
    title: "Факультет биотехнологий ИТМО",
    description: "Обновлённый сайт факультета биотехнологий Университета ИТМО",
    url: "https://biotech.cedne.ru/",
    image: "https://biotech.industries/favicon.ico",
    tasks:
      "Самостоятельная fullstack-разработка: frontend, backend на Prisma, аутентификация Auth.js, SEO",
    stack: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma", "Auth.js"],
    year: "2026",
    slug: "biotech-faculty",
  },
  {
    title: "Biotech.Foundation",
    description:
      "Лендинг мероприятия факультета биотехнологий ИТМО — регистрация участников, галерея, SEO",
    url: "https://biotech.foundation",
    github: "https://github.com/gosvoh/biotech-foundation",
    image: "https://biotech.foundation/favicon.ico",
    tasks:
      "Самостоятельная fullstack-разработка: Next.js 16 (App Router, standalone), форма регистрации со server actions и SMTP-рассылкой, Docker, Pino-логи",
    stack: ["React", "TypeScript", "Next.js", "Tailwind", "Ant Design", "Docker"],
    year: "2025",
    slug: "biotech-foundation",
  },
  {
    title: "Worktime Board",
    description:
      "Whiteboard-доска для визуального учёта нагрузки сотрудников с учётом ставки и месячной нормы часов",
    github: "https://github.com/gosvoh/edit-worktime",
    image: WorktimeLogo,
    tasks:
      "Самостоятельная fullstack-разработка: интерактивная доска, drag-and-drop, авторизация и RBAC, real-time через WebSocket, Docker, SQLite",
    stack: [
      "React",
      "TypeScript",
      "Bun",
      "Vite",
      "Tailwind",
      "SQLite",
      "WebSocket",
      "Docker",
    ],
    year: "2026",
    slug: "worktime",
  },
  {
    title: "Свадебный планер",
    description:
      "Персональный планер свадьбы: 11 разделов (гости, бюджет, задачи, расписание, меню и др.), роли editor/viewer",
    github: "https://github.com/gosvoh/wedding-planner",
    image: WeddingLogo,
    tasks:
      "Самостоятельная fullstack-разработка: Bun-сервер, React 19 SPA, Drizzle ORM, ACL, бэкапы, тесты, Docker",
    stack: [
      "React",
      "TypeScript",
      "Bun",
      "Tailwind",
      "Drizzle",
      "SQLite",
      "shadcn/ui",
      "Docker",
      "Claude",
    ],
    year: "2026",
    slug: "wedding",
  },
  {
    title: "BIOCON",
    description:
      "Сайт международной конференции по промышленной биотехнологии — командная разработка",
    url: "https://biocon.international",
    github: "https://github.com/gosvoh/biocon",
    image: BioconLogo,
    tasks:
      "Командная fullstack-разработка: frontend, backend, Drizzle ORM, SEO",
    stack: ["React", "TypeScript", "Next.js", "Tailwind", "Drizzle"],
    year: "2024",
    slug: "biocon",
  },
  {
    title: "LMS 2.0 / cs.itmo.ru",
    description:
      "LMS-платформа ИТМО для практических навыков в кибербезопасности — 200+ пользователей в день",
    url: "https://cs.itmo.ru",
    image: LmsLogo,
    tasks:
      "Frontend-разработка: компоненты, интеграция с API, адаптивность, обновление UI",
    stack: ["React", "TypeScript", "Vite", "Tailwind", "antd", "Editor.js"],
    year: "2023",
    slug: "lms",
    featured: true,
  },
  {
    title: "Narupa ITMO SCAMT",
    description:
      "VR приложение для обучения химии с Eye Tracking — научная статья",
    github: "https://github.com/gosvoh/ITMO-SCAMT-Ilya",
    url: "https://doi.org/10.1021/acs.jchemed.3c00138",
    image:
      "https://raw.githubusercontent.com/gosvoh/ITMO-SCAMT-Ilya/master/Assets/NarupaIMD/Assets/Logos/logo-1024.png",
    tasks:
      "Разработка на Unity + C#, интеграция Eye Tracking для HTC Vive Pro Eye",
    stack: ["Unity", "C#", "SRanipal", "Python"],
    year: "2022",
    slug: "narupa",
  },
  {
    title: "Get exp for everything",
    description:
      "Модификация для Minecraft, добавляющая опыт за действия в игре",
    github: "https://github.com/gosvoh/GetExpForEverything",
    url: "https://curseforge.com/minecraft/mc-mods/get-exp-for-everything",
    image:
      "https://raw.githubusercontent.com/gosvoh/GetExpForEverything/1.17/src/main/resources/logo.jpeg",
    tasks: "Разработка мода на Java с Minecraft Forge",
    stack: ["Java", "Minecraft Forge"],
    year: "2022",
    slug: "get-exp",
  },
  {
    title: "SEROVA.CAREERS",
    description: "Сайт-визитка Надежды Серовой — карьерного консультанта",
    url: "https://serova.careers",
    github: "https://github.com/gosvoh/serova-careers",
    image: "https://serova.careers/favicon.ico",
    tasks: "Дизайн, вёрстка, backend, SEO",
    stack: ["React", "TypeScript", "Next.js", "Tailwind"],
    year: "2024",
    slug: "serova",
  },
  {
    title: "Kover roller",
    description:
      "Сайт случайного мода с nexusmods для Twitch-стримера @kover_undercover",
    url: "https://kover-under-games.vercel.app",
    github: "https://github.com/gosvoh/kover_under_games",
    image:
      "https://raw.githubusercontent.com/gosvoh/kover_under_games/main/public/pepe-peepo.gif",
    stack: ["React", "TypeScript", "Next.js"],
    year: "2023",
    slug: "kover",
  },
  {
    title: "editorjs-antd-renderer",
    description:
      "Open-source библиотека для рендера контента Editor.js с использованием компонентов Ant Design. Опубликована на npm",
    github: "https://github.com/gosvoh/editorjs-antd-renderer",
    image: EditorjsLogo,
    stack: ["TypeScript", "React", "Ant Design", "Editor.js", "npm"],
    year: "2024",
    slug: "editorjs-renderer",
    tasks:
      "Дизайн API, реализация рендера всех базовых блоков, типизация, публикация в npm-реестре, документация",
    featured: true,
  },
];

export const SOCIALS: Social[] = [
  { name: "Email", href: "mailto:vohmina2011@yandex.ru", glyph: "✉" },
  { name: "VK", href: "https://vk.com/gosvoh", glyph: "VK" },
  { name: "Telegram", href: "https://t.me/gosvoh", glyph: "TG" },
  { name: "GitHub", href: "https://github.com/gosvoh", glyph: "GH" },
  {
    name: "Discord",
    href: "https://discord.com/users/237653717690744832",
    glyph: "DC",
  },
];

export function getProjectScreenshots(
  project: Project,
): { src: string; alt: string }[] {
  if (!project.slug) return [];
  const prefix = `../assets/screenshots/${project.slug}/`;
  return Object.entries(screenshotModules)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, src], i) => ({
      src,
      alt: `${project.title} — скриншот ${i + 1}`,
    }));
}
