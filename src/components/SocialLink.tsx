import type { IconType } from "@icons-pack/react-simple-icons";
import { Button } from "./ui/button";

export default function SocialLink({
  href,
  Icon,
}: {
  href: string;
  Icon: IconType;
}) {
  return (
    <Button variant="outline" size="icon-auto" asChild>
      <a href={href} target="_blank">
        <Icon size={32} />
      </a>
    </Button>
  );
}
