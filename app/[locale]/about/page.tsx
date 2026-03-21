import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("title"),
    description: t("metaDescription"),
  };
}

export default async function AboutPage() {
  const t = await getTranslations("about");
  const approach = t.raw("approach") as string[];
  const stack = t.raw("stack") as string[];

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-semibold tracking-tight">{t("title")}</h1>
      <p className="mt-8 text-xl font-medium leading-relaxed text-foreground text-pretty">
        {t("lead")}
      </p>
      <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
        <p className="text-pretty">{t("p1")}</p>
        <p className="text-pretty">{t("p2")}</p>
      </div>

      <section className="mt-16">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {t("approachTitle")}
        </h2>
        <ul className="mt-6 list-inside list-disc space-y-3 text-lg leading-relaxed text-muted-foreground marker:text-primary">
          {approach.map((item) => (
            <li key={item} className="text-pretty pl-1">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {t("stackTitle")}
        </h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {stack.map((item) => (
            <li key={item}>
              <span
                className={cn(
                  "inline-flex items-center rounded-full border border-border bg-muted/60 px-3 py-1 text-sm font-medium text-foreground",
                )}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
