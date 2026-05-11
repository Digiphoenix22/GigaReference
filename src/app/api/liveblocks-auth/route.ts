import { NextResponse } from "next/server";
import { requireLiveblocks } from "@/lib/liveblocks";

export async function POST(request: Request) {
  const lb = requireLiveblocks();

  // M2 will replace this with a real Supabase-authenticated user.
  const userId = `anon-${crypto.randomUUID().slice(0, 8)}`;

  const { room } = (await request.json().catch(() => ({}))) as {
    room?: string;
  };

  const session = lb.prepareSession(userId, {
    userInfo: { name: "Anonymous" },
  });
  if (room) {
    session.allow(room, session.FULL_ACCESS);
  }

  const { status, body } = await session.authorize();
  return new NextResponse(body, { status });
}
