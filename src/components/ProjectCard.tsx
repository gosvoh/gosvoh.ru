import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "./ui/button";

export default function ProjectCard({
  title,
  description,
  url,
  github,
  image,
  tasks,
  stack,
}: {
  title: string;
  description: string;
  url?: string;
  github?: string;
  image?: string;
  tasks?: React.ReactNode;
  stack?: string[];
}) {
  return (
    <Card className="flex flex-col card">
      <CardHeader>
        <CardTitle className="inline-flex items-center gap-4">
          {title}
          {image && (
            <Avatar>
              <AvatarImage src={image} alt={`Логотип проекта ${title}`} />
            </Avatar>
          )}
        </CardTitle>
        {url && (
          <CardDescription>
            <a href={url} target="_blank">
              {url.replace(/^(https?:\/\/)|\/$/g, "")}
            </a>
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-base md:text-lg">{description}</p>
        {tasks && (
          <div className="mt-4 **:text-base **:md:text-lg">{tasks}</div>
        )}
        {stack && (
          <div className="mt-4 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span key={tech} className="bg-muted px-2 py-1 rounded text-sm">
                {tech}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-row gap-4 mt-auto">
        {url && (
          <Button variant="outline" size="icon" asChild>
            <a href={url} target="_blank">
              <ExternalLink />
            </a>
          </Button>
        )}
        {github && (
          <Button variant="outline" size="icon" asChild>
            <a href={github} target="_blank">
              <SiGithub />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
