"use client";

import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

export function TldrawCanvas({ roomId }: { roomId: string }) {
  // M0: local-only persistence per room via IndexedDB.
  // M3 will swap this for a Liveblocks/Yjs-backed store.
  return <Tldraw persistenceKey={`gigaref:${roomId}`} />;
}
