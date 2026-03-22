import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { heading, pageShell, section, surface } from "@/lib/design-system";
import { cn } from "@/lib/utils";

type ApproachItem = { lead: string; detail: string };

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

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const approach = t.raw("approach") as ApproachItem[];
  const stack = t.raw("stack") as string[];

  return (
    <div className={pageShell.editorialNarrow}>
      <h1 className={heading.page}>{t("title")}</h1>
      <p
        className={cn(
          surface.editorial,
          "mt-8 p-6 text-xl font-medium leading-relaxed text-pretty text-foreground md:p-7",
        )}
      >
        {t("lead")}
      </p>
      <section className={cn(surface.editorial, "mt-10 p-6 md:p-8")}>
        <ul className="list-none space-y-8">
          {(["p1", "p2"] as const).map((key) => (
            <li
              key={key}
              className="border-l-2 border-primary/30 pl-5 sm:pl-6"
            >
              <p className="max-w-prose text-[0.9375rem] leading-[1.7] text-muted-foreground text-pretty sm:text-base sm:leading-relaxed">
                {t(key)}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className={cn(surface.editorial, "mt-16 p-6 md:p-8")}>
        <h2 className={cn(section.label, "normal-case")}>
          {t("approachTitle")}
        </h2>
        <ul className="mt-8 list-none space-y-8">
          {approach.map((item) => (
            <li
              key={item.lead}
              className="border-l-2 border-primary/30 pl-5 sm:pl-6"
            >
              <p className="text-base font-semibold leading-snug text-foreground text-pretty sm:text-[1.0625rem]">
                {item.lead}
              </p>
              <p className="mt-3 max-w-prose text-[0.9375rem] leading-[1.7] text-muted-foreground text-pretty sm:text-base sm:leading-relaxed">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className={cn(surface.editorial, "mt-16 p-6 md:p-8")}>
        <h2 className={cn(section.label, "normal-case")}>{t("stackTitle")}</h2>
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
