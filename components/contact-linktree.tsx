"use client";

import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import { CONTACT_LINK_DEFINITIONS } from "@/lib/contact-links";
import { cn } from "@/lib/utils";

config.autoAddCss = false;

type LinkCopy = { title: string; description: string };

export function ContactLinktree() {
  const t = useTranslations("contact");
  const linksCopy = t.raw("links") as Record<string, LinkCopy>;

  return (
    <ul className="mx-auto mt-12 grid max-w-4xl gap-3 md:grid-cols-2">
      {CONTACT_LINK_DEFINITIONS.map((link) => {
        const isMailto = link.url.startsWith("mailto:");
        const copy = linksCopy[link.id];
        return (
          <li key={link.id}>
            <a
              href={link.url}
              {...(isMailto
                ? {}
                : { target: "_blank", rel: "noopener noreferrer" })}
              className={cn(
                "flex items-start gap-4 rounded-xl border border-border bg-card px-4 py-3 text-card-foreground shadow-sm transition-colors",
                "hover:border-primary/40 hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              )}
            >
              <span
                className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-lg text-foreground"
                aria-hidden
              >
                <FontAwesomeIcon icon={link.icon} className="size-5" />
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block font-medium leading-snug">
                  {copy?.title}
                </span>
                <span className="mt-0.5 block text-sm leading-relaxed text-muted-foreground">
                  {copy?.description}
                </span>
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
