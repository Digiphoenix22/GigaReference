import { Liveblocks } from "@liveblocks/node";

const secret = process.env.LIVEBLOCKS_SECRET_KEY;

export const liveblocks = secret
  ? new Liveblocks({ secret })
  : null;

export function requireLiveblocks() {
  if (!liveblocks) {
    throw new Error(
      "LIVEBLOCKS_SECRET_KEY is not set. Add it to .env.local — see .env.example."
    );
  }
  return liveblocks;
}
