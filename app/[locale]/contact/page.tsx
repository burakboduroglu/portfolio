import { getTranslations } from "next-intl/server";

export default async function ContactPage() {
  const t = await getTranslations("contact");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-semibold tracking-tight">{t("title")}</h1>
      <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
        {t("body")}
      </p>
    </div>
  );
}
