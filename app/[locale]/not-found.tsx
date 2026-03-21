import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">{t("title")}</h1>
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "default" }), "mt-8")}
      >
        {t("back")}
      </Link>
    </div>
  );
}
