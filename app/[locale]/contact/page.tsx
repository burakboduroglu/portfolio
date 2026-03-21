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

export default async function ContactPage() {
  const t = await getTranslations("contact");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-semibold tracking-tight">{t("title")}</h1>
      <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
        {t("body")}
      </p>
      <ContactLinktree />
    </div>
  );
}
