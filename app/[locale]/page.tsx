import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button-variants";
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
  await params;
  const t = await getTranslations("home");
  const tNav = await getTranslations("nav");

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {t("eyebrow")}
      </p>
      <div className="mt-6 flex flex-col items-start gap-8 sm:flex-row sm:items-start sm:gap-10">
        <HomeHeroAvatar alt={tNav("brand")} />
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:min-w-0 sm:flex-1 md:text-5xl lg:text-6xl">
          {t("headline")}
        </h1>
      </div>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
        {t("sub")}
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/work"
          className={cn(buttonVariants({ variant: "default", size: "lg" }))}
        >
          {t("ctaWork")}
        </Link>
        <Link
          href="/contact"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          {t("ctaContact")}
        </Link>
      </div>

      <section className="mt-24">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {t("pillarsTitle")}
        </h2>
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
            <Card key={item.title} className="border-border/80 shadow-none">
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
