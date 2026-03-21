import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { MarkdownBody } from "@/components/markdown-body";
import { getProject, getSlugs } from "@/lib/content";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  const slugs = getSlugs();
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const doc = getProject(slug, locale as Locale);
  if (!doc) return { title: "404" };
  return {
    title: doc.meta.title,
    description: doc.meta.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;
  const doc = getProject(slug, locale as Locale);
  const t = await getTranslations("case");
  const tWork = await getTranslations("work");

  if (!doc) {
    notFound();
  }

  const { meta, body } = doc;

  const statusLabel =
    meta.case_study_status === "draft" ||
    meta.case_study_status === "review" ||
    meta.case_study_status === "published"
      ? tWork(meta.case_study_status)
      : meta.case_study_status;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link
        href="/work"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "-ml-2 mb-8 inline-flex",
        )}
      >
        {t("back")}
      </Link>

      <div className="flex flex-wrap gap-2">
        {meta.category.map((c) => (
          <Badge key={c} variant="secondary">
            {c}
          </Badge>
        ))}
        <Badge
          variant={
            meta.case_study_status === "published" ? "default" : "outline"
          }
        >
          {statusLabel}
        </Badge>
      </div>

      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
        {meta.title}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        {meta.summary}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {meta.stack.map((s) => (
          <span
            key={s}
            className="rounded-md border border-border bg-card px-2 py-1 font-mono text-xs"
          >
            {s}
          </span>
        ))}
      </div>

      {meta.privacy_note ? (
        <p className="mt-6 text-sm text-muted-foreground">{meta.privacy_note}</p>
      ) : null}

      <Separator className="my-12" />

      <MarkdownBody content={body} />
    </article>
  );
}
