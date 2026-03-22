import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactLinktree } from "@/components/contact-linktree";
import { heading, pageShell, surface } from "@/lib/design-system";
import { cn } from "@/lib/utils";

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
    <div className={pageShell.editorialNarrow}>
      <h1 className={heading.page}>{t("title")}</h1>
      <p
        className={cn(
          surface.editorial,
          "mt-8 p-6 text-lg leading-relaxed text-muted-foreground md:p-7",
        )}
      >
        {t("body")}
      </p>
      <ContactLinktree />
    </div>
  );
}
