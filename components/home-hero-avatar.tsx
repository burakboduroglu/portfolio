import Image from "next/image";
import { getGitHubProfileAvatarUrl, getGitHubProfileUrl } from "@/lib/site";

type Props = {
  alt: string;
};

export function HomeHeroAvatar({ alt }: Props) {
  const src = getGitHubProfileAvatarUrl();
  const href = getGitHubProfileUrl();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full"
      aria-label={alt}
    >
      <span className="block rounded-full p-0.5 ring-2 ring-border bg-muted/40 transition-[box-shadow,transform] group-hover:ring-primary/40 group-hover:scale-[1.02]">
        <Image
          src={src}
          alt={alt}
          width={128}
          height={128}
          priority
          className="size-24 rounded-full border-2 border-background object-cover md:size-28"
          unoptimized
        />
      </span>
    </a>
  );
}
