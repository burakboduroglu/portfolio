import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BackButton } from "@/components/back-button";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { link } from "@/lib/design-system";
import { cn } from "@/lib/utils";

type Props = { locale: string };

export async function SiteHeader({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: "nav" });
  const brand = t("brand");

  const links = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-2">
          <BackButton />
          <Link href="/" className={link.brand}>
            {brand}
          </Link>
        </div>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className={link.nav}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LocaleSwitcher />
        </div>
      </div>
      <nav
        className="flex gap-4 overflow-x-auto border-t border-border/60 px-6 py-3 md:hidden"
        aria-label="Main mobile"
      >
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className={cn("shrink-0", link.nav)}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
