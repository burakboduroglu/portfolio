import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  eyebrow,
  heading,
  pageShell,
  section,
  surface,
} from "@/lib/design-system";
import { cn } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HomeHeroAvatar } from "@/components/home-hero-avatar";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  return (
    <div className={pageShell.editorialWide}>
      <p className={cn("bb-fade-up", eyebrow)}>{t("eyebrow")}</p>
      <div
        className={cn(
          surface.editorial,
          "bb-fade-up-delayed mt-6 flex flex-col items-start gap-8 p-6 sm:flex-row sm:items-center sm:gap-10 md:p-8",
        )}
      >
        <HomeHeroAvatar alt={tNav("brand")} />
        <h1 className={heading.hero}>{t("headline")}</h1>
      </div>
      <p className="bb-fade-up-delayed-2 mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground text-pretty">
        {t("sub")}
      </p>
      <div className="bb-fade-up-delayed-3 mt-10 flex flex-wrap gap-4">
        <Link
          href="/about"
          className={cn(buttonVariants({ variant: "default", size: "lg" }))}
        >
          {t("ctaAbout")}
        </Link>
        <Link
          href="/contact"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          {t("ctaContact")}
        </Link>
      </div>

      <section className={cn("bb-fade-up-delayed-3", section.gap)}>
        <h2 className={section.label}>{t("pillarsTitle")}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              title: t("pillarFullstack"),
              body: t("pillarFullstackDesc"),
            },
            {
              title: t("pillarAutomation"),
              body: t("pillarAutomationDesc"),
            },
            {
              title: t("pillarDevops"),
              body: t("pillarDevopsDesc"),
            },
            {
              title: t("pillarAi"),
              body: t("pillarAiDesc"),
            },
          ].map((item) => (
            <Card
              key={item.title}
              className="border-border/80 bg-card/80 shadow-none backdrop-blur-sm transition-[border-color,box-shadow] duration-200 ease-out hover:border-primary/30 hover:shadow-sm"
            >
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {item.body}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
