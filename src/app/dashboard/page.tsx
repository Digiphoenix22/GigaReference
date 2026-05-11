import Link from "next/link";
import { NewCanvasButton } from "@/components/dashboard/NewCanvasButton";

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-8 px-6 py-12 sm:px-10">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Your canvases</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Auth + persisted room list lands in M2 — for now, every new canvas
            is a fresh local-only board.
          </p>
        </div>
        <NewCanvasButton />
      </header>

      <section className="rounded-xl border border-dashed border-black/15 p-10 text-center text-sm text-zinc-500 dark:border-white/15 dark:text-zinc-400">
        No canvases yet. Click <span className="font-medium">New canvas</span>{" "}
        above to create one, or open the{" "}
        <Link href="/c/demo" className="underline underline-offset-4">
          demo canvas
        </Link>
        .
      </section>
    </div>
  );
}
