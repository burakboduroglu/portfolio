import Link from "next/link";
import trMessages from "@/messages/tr.json";

/**
 * Kök `/` statik export ile üretilir; `headers()` kullanılamaz.
 * Metinler varsayılan locale (tr) ile `messages` üzerinden gelir.
 */
export default function RootPage() {
  const r = trMessages.redirect;

  return (
    <main className="bb-background-mesh flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="flex max-w-md flex-col items-center gap-8">
        <div
          className="relative flex size-20 items-center justify-center"
          role="status"
          aria-live="polite"
          aria-label={r.ariaLabel}
        >
          <span
            className="absolute inset-2 rounded-full bg-primary/15 blur-md motion-reduce:blur-none"
            aria-hidden
          />
          <span
            className="relative size-14 animate-spin rounded-full border-[3px] border-muted border-t-primary border-r-primary/40 shadow-sm motion-reduce:animate-none motion-reduce:border-primary/50"
            aria-hidden
          />
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{r.hint}</p>
        <Link
          className="text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline"
          href="/tr/"
        >
          {r.linkLabel}
        </Link>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: "window.location.replace('/tr/');",
        }}
      />
    </main>
  );
}
