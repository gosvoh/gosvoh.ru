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
}: {
  title: string;
  description: string;
  url?: string;
  github?: string;
  image?: string;
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
              {url.replace(/https?:\/\//, "")}
            </a>
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-base md:text-lg">{description}</p>
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
