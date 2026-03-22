import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FEATURED_PROJECTS } from "@/lib/featured-projects";
import { heading, pageShell, surface } from "@/lib/design-system";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });

  return {
    title: t("title"),
    description: t("metaDescription"),
  };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });

  return (
    <div className={pageShell.editorialNarrow}>
      <h1 className={heading.page}>{t("title")}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
        {t("intro")}
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {FEATURED_PROJECTS.map((project) => (
          <Card
            key={project.id}
            className={cn(
              "h-full border-border/80 bg-card/80 shadow-none backdrop-blur-sm",
              surface.cardHover,
            )}
          >
            <CardHeader>
              <CardTitle className="text-lg leading-snug">
                {project.id === "portkill" ? (
                  <>
                    <span
                      className="text-emerald-600 dark:text-emerald-400"
                      aria-hidden="true"
                    >
                      .
                    </span>
                    portkill
                  </>
                ) : (
                  t(`${project.id}.title`)
                )}
              </CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {t(`${project.id}.description`)}
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto border-t-0 bg-transparent pt-0">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "gap-2",
                )}
              >
                {t("linkLabel")}
                <ExternalLink className="size-3.5" aria-hidden />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
