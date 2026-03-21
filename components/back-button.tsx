"use client";

import { ArrowLeft } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export function BackButton() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/") return null;

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }
    router.push("/", { locale });
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className="gap-1.5 px-2 text-muted-foreground hover:text-foreground"
      onClick={handleBack}
      aria-label={t("back")}
    >
      <ArrowLeft className="size-4" aria-hidden />
      <span>{t("back")}</span>
    </Button>
  );
}
