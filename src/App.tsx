import { useEffect, useRef } from "react";
import { MailIcon } from "lucide-react";

import {
  SiVk,
  SiTelegram,
  SiGithub,
  SiDiscord,
} from "@icons-pack/react-simple-icons";

import BioconLogo from "@/assets/biocon-logo.png";
import ChemLabLogo from "@/assets/chem-lab-logo.jpg";
import LmsLogo from "@/assets/lms-logo.png";
import Gosvoh from "@/assets/gosvoh.webp";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProjectCard from "@/components/ProjectCard";
import SocialLink from "@/components/SocialLink";

import { cn } from "@/lib/utils";

function App() {
  const cardsRef = useRef<HTMLCollectionOf<HTMLDivElement>>(null);

  useEffect(() => {
    const cards = document
      .getElementsByClassName("cards")
      .item(0) as HTMLDivElement | null;
    if (!cards) return;
    cardsRef.current = document.getElementsByClassName(
      "card"
    ) as HTMLCollectionOf<HTMLDivElement>;

    const event = (e: MouseEvent) => {
      for (const card of cardsRef.current || []) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    cards.addEventListener("mousemove", event);

    return () => {
      cards.removeEventListener("mousemove", event);
      cardsRef.current = null;
    };
  }, []);

  return (
    <>
      <header className="flex flex-col md:flex-row gap-4 items-center relative">
        <Avatar
          className={cn(
            "mx-auto",
            "w-40 h-40",
            "md:w-60 md:h-60",
            "lg:w-80 lg:h-80",
            "xl:w-96 xl:h-96",
            "shadow-2xl shadow-blue-500/20"
          )}
        >
          <AvatarImage
            src={Gosvoh}
            alt="Фотография Алексея Вохмина на фоне зимнего леса"
          />
          <AvatarFallback>G</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-right relative">
          <h1>Алексей Вохмин</h1>
          <h2>React/TypeScript разработчик</h2>
          <div className="blobs pointer-events-none">
            <div className="blob bg-green-300/50 animate-circular-mirrored duration-[100s] transition-transform"></div>
            <div className="blob bg-blue-100/50 animate-circular duration-[80s] transition-transform"></div>
            <div className="blob bg-orange-500/50 animate-circular-mirrored duration-[120s] transition-transform"></div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <h2>Обо мне</h2>
          <p>
            React/TypeScript разработчик. Мне нравится создавать интересные и
            полезные веб-приложения. Изучаю новые технологии и методы
            разработки.
          </p>
          <p>
            Выпускник бакалавриата по направлению &#171;Программная
            инженерия&#187; (специализация &#171;Разработка графических и
            веб-приложений&#187;, 2023) и магистратуры по направлению
            &#171;Веб-технологии&#187; (2025).
          </p>
          <p>
            В настоящее время являюсь сотрудником{" "}
            <a
              href="https://itmo.ru/"
              target="_blank"
              className="font-bold hover:underline"
            >
              Университета ИТМО
            </a>
            .
          </p>
        </section>
        <section>
          <h2>Контакты</h2>
          <div className="flex flex-row gap-4 justify-center">
            <SocialLink href="mailto:vohmina2011@yandex.ru" Icon={MailIcon} />
            <SocialLink href="https://vk.com/gosvoh" Icon={SiVk} />
            <SocialLink href="https://t.me/gosvoh" Icon={SiTelegram} />
            <SocialLink href="https://github.com/gosvoh" Icon={SiGithub} />
            <SocialLink
              href="https://discord.com/users/237653717690744832"
              Icon={SiDiscord}
            />
          </div>
        </section>
        <section>
          <h2>Проекты</h2>
          <div className="cards grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <ProjectCard
              title="Biotech.Industries"
              description="Веб-сайт подразделения факультета биотехнологий Университета ИТМО"
              url="https://biotech.industries"
              image="https://biotech.industries/favicon.ico"
              tasks={
                <p>
                  Занимался версткой по дизайну в Figma, а также разработкой
                  архитектуры, адаптивностью, анимациями и SEO.
                </p>
              }
              stack={["React", "TypeScript", "Next.js", "Tailwind CSS"]}
            />
            <ProjectCard
              title="Факультет биотехнологий Университета ИТМО"
              description="Веб-сайт факультета биотехнологий Университета ИТМО"
              url="https://biotech.cedne.ru/"
              image="https://biotech.industries/favicon.ico"
              tasks={
                <p>
                  Занимался версткой по дизайну в Figma и внесением изменений в
                  предложенный дизайн, а также разработкой архитектуры, backend,
                  адаптивностью, анимациями и SEO.
                </p>
              }
              stack={[
                "React",
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "Prisma ORM",
                "Auth.js",
              ]}
            />
            <ProjectCard
              title="BIOCON"
              description="Веб-сайт международной конференции по промышленной биотехнологии в Альметьевске (Республика Татарстан)"
              url="https://biocon.international"
              github="https://github.com/gosvoh/biocon"
              image={BioconLogo}
              tasks={
                <p>
                  Занимался версткой по дизайну в Figma, разработкой
                  архитектуры, backend, адаптивностью и SEO.
                </p>
              }
              stack={[
                "React",
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "Drizzle ORM",
              ]}
            />
            <ProjectCard
              title="LMS 2.0"
              description="LMS 2.0 — это платформа, предлагающая развитие практических навыков для профессионалов в области кибербезопасности, системного администрирования и т. д."
              url="https://lms.itmo.xyz"
              image={LmsLogo}
              tasks={
                <p>
                  Занимался front-end разработкой, включая создание компонентов,
                  интеграцию с API и обеспечение отзывчивого дизайна.
                </p>
              }
              stack={[
                "React",
                "TypeScript",
                "Vite",
                "Tailwind CSS",
                "antd",
                "Editor.js",
              ]}
            />
            <ProjectCard
              title="Narupa ITMO SCAMT"
              description="VR приложение для обучения химии в виртуальной реальности с использованием технологии Eye Tracking. Создано в рамках проекта НИР для научной статьи"
              github="https://github.com/gosvoh/ITMO-SCAMT-Ilya"
              url="https://doi.org/10.1021/acs.jchemed.3c00138"
              image="https://raw.githubusercontent.com/gosvoh/ITMO-SCAMT-Ilya/master/Assets/NarupaIMD/Assets/Logos/logo-1024.png"
              tasks={
                <p>
                  Разработка приложения на Unity с использованием C# и
                  интеграцией Eye Tracking для интерактивного обучения химии в
                  виртуальной реальности для HTC Vive Pro Eye.
                </p>
              }
              stack={["Unity", "C#", "SRanipal", "Python"]}
            />
            <ProjectCard
              title="Get exp for everything"
              description="Модификация для игры Minecraft, добавляющая опыт за действия в игре"
              github="https://github.com/gosvoh/GetExpForEverything"
              url="https://curseforge.com/minecraft/mc-mods/get-exp-for-everything"
              image="https://raw.githubusercontent.com/gosvoh/GetExpForEverything/1.17/src/main/resources/logo.jpeg"
              tasks={
                <p>Разработка мода на Java с использованием Minecraft Forge.</p>
              }
              stack={["Java", "Minecraft Forge"]}
            />
            <ProjectCard
              title="SEROVA.CAREERS"
              description="Сайт-визитка Надежды Серовой — карьерного консультанта"
              url="https://serova.careers"
              image="https://serova.careers/favicon.ico"
              tasks={
                <p>Занимался дизайном, версткой, разработкой backend и SEO.</p>
              }
              stack={["React", "TypeScript", "Next.js", "Tailwind CSS"]}
            />
            <ProjectCard
              title="Kover roller"
              description="Сайт для получения случайного мода с сайта nexusmods, сделан в свободное время для Twitch-стримера @kover_undercover"
              url="https://kover-under-games.vercel.app"
              github="https://github.com/gosvoh/kover_under_games"
              image="https://raw.githubusercontent.com/gosvoh/kover_under_games/main/public/pepe-peepo.gif"
              stack={["React", "TypeScript", "Next.js"]}
            />
            <ProjectCard
              title="Chem-lab"
              description="Веб-приложение, предназначенное для обучения химии лиц с ограниченными возможностями (ДЦП). Создано в рамках проекта РНФ №22-78-00101"
              url="https://chem-lab.cedne.ru"
              image={ChemLabLogo}
              stack={[
                "React",
                "TypeScript",
                "Vite",
                "Express",
                "PostgreSQL",
                "Drizzle ORM",
              ]}
            />
          </div>
        </section>
      </main>
      <footer className="text-center mt-4">
        {new Date().getFullYear()} Алексей Вохмин
      </footer>
    </>
  );
}

export default App;
