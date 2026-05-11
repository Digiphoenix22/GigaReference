"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function NewCanvasButton() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        startTransition(() => {
          router.push(`/c/${crypto.randomUUID()}`);
        });
      }}
      className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
    >
      {pending ? "Creating…" : "New canvas"}
    </button>
  );
}
