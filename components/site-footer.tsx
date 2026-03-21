import { getTranslations } from "next-intl/server";

type Props = { locale: string };

export async function SiteFooter({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: "footer" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-muted/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          © {year} — {t("rights")}
        </p>
        <p className="text-xs">{tNav("brand")}</p>
      </div>
    </footer>
  );
}
