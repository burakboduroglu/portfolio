"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const nextLocale = locale === "tr" ? "en" : "tr";

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="min-w-14 font-mono text-xs uppercase"
      onClick={() => router.replace(pathname, { locale: nextLocale })}
    >
      {nextLocale}
    </Button>
  );
}
