import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getAllProjectsForLocale } from "@/lib/content";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

function statusKey(
  status: string,
): "draft" | "review" | "published" | undefined {
  if (status === "draft" || status === "review" || status === "published") {
    return status;
  }
  return undefined;
}

export default async function WorkPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("work");
  const projects = getAllProjectsForLocale(locale as Locale);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-semibold tracking-tight">{t("title")}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        {t("subtitle")}
      </p>
      <Separator className="my-12" />

      {projects.length === 0 ? (
        <p className="text-muted-foreground">{t("empty")}</p>
      ) : (
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ meta }) => {
            const sk = statusKey(meta.case_study_status);
            const statusLabel = sk ? t(sk) : meta.case_study_status;
            return (
              <li key={meta.slug}>
                <Card className="h-full border-border/80 shadow-none transition-colors hover:border-border">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2">
                      {meta.category.map((c) => (
                        <Badge key={c} variant="secondary">
                          {c}
                        </Badge>
                      ))}
                      <Badge
                        variant={
                          meta.case_study_status === "published"
                            ? "default"
                            : "outline"
                        }
                      >
                        {statusLabel}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{meta.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {meta.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {meta.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/work/${meta.slug}`}
                      className="mt-6 inline-block text-sm font-medium text-foreground underline-offset-4 hover:underline"
                    >
                      {t("readCase")}
                    </Link>
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
