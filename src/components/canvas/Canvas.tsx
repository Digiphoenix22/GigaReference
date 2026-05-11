"use client";

import dynamic from "next/dynamic";

const TldrawCanvas = dynamic(
  () => import("./TldrawCanvas").then((m) => m.TldrawCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center text-sm text-zinc-500">
        Loading canvas…
      </div>
    ),
  }
);

export function Canvas({ roomId }: { roomId: string }) {
  return (
    <div className="fixed inset-0">
      <TldrawCanvas roomId={roomId} />
    </div>
  );
}
