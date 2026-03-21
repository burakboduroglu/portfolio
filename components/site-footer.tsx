import { getTranslations } from "next-intl/server";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-muted/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          © {year} — {t("rights")}
        </p>
        <p className="text-xs">{t("localeHint")}</p>
      </div>
    </footer>
  );
}
