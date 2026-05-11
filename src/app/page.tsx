import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6">
      <div className="flex max-w-xl flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          GigaReference
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          An infinite reference canvas with notes, nested zoom-into boards, and
          real-time collab. PureRef meets Miro.
        </p>
      </div>
      <div className="flex gap-3">
        <Link
          href="/dashboard"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Open dashboard
        </Link>
        <Link
          href="/c/demo"
          className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5"
        >
          Try the demo canvas
        </Link>
      </div>
    </div>
  );
}
