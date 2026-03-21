import Link from "next/link";

export default function RootPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-2xl font-semibold">Yonlendiriliyor...</h1>
      <p className="text-muted-foreground">
        Ana sayfaya otomatik gecis yapilamazsa asagidaki baglantiyi kullanin.
      </p>
      <Link className="underline underline-offset-4" href="/tr/">
        /tr/
      </Link>
      <script
        dangerouslySetInnerHTML={{
          __html: "window.location.replace('/tr/');",
        }}
      />
    </main>
  );
}
