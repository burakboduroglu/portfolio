import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactLinktree } from "@/components/contact-linktree";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: t("title"),
    description: t("metaDescription"),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-semibold tracking-tight">{t("title")}</h1>
      <p className="bb-showcase-panel mt-8 p-6 text-lg leading-relaxed text-muted-foreground md:p-7">
        {t("body")}
      </p>
      <ContactLinktree />
    </div>
  );
}
