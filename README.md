# GigaReference

Infinite reference canvas with notes, nested zoom-into boards, and real-time collab. PureRef meets Miro.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **tldraw v5** for the infinite canvas (custom shapes for nested-canvas frames + rich-text notes)
- **Liveblocks** for real-time multiplayer (presence + Yjs-backed tldraw store)
- **Supabase** for auth, room metadata, and image storage
- **Tailwind v4** + **shadcn/ui** for non-canvas UI chrome

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in keys (see below)
npm run dev
```

Open <http://localhost:3000>.

- `/` — landing page
- `/dashboard` — your canvases (M2 will wire to Supabase; today every new canvas is local-only)
- `/c/<roomId>` — the canvas itself

## Environment variables

`.env.local` is gitignored. Copy `.env.example` and fill in:

| Var | Where to get it | Required for |
| --- | --- | --- |
| `NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY` | <https://liveblocks.io> > project > API keys | M3 multiplayer |
| `LIVEBLOCKS_SECRET_KEY` | same | M3 multiplayer (server-side token) |
| `NEXT_PUBLIC_SUPABASE_URL` | <https://supabase.com> > project > Settings > API | M2 auth + persistence |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | same | M2 auth + persistence |
| `SUPABASE_SERVICE_ROLE_KEY` | same | seed/admin scripts only |

**M0 (today)** runs without any keys — the canvas persists locally to your browser's IndexedDB via tldraw's `persistenceKey`.

## Roadmap

- [x] **M0** — Repo scaffold; `/c/[roomId]` renders a tldraw canvas with local persistence.
- [ ] **M1** — Image paste/drop uploads to Supabase Storage.
- [ ] **M2** — Supabase Auth + dashboard listing your rooms.
- [ ] **M3** — Liveblocks multiplayer (presence + Yjs-backed tldraw store).
- [ ] **M4** — Custom `NestedCanvasFrame` shape: double-click to dive in, breadcrumb back, snapshot thumbnails.
- [ ] **M5** — Custom rich-text note shape (Tiptap inside).
- [ ] **M6** — Sharing: link sharing with role; invite-by-email.
- [ ] **M7** — PureRef polish: paste-from-clipboard, masking/cropping, color picker, multi-select transform.

## Project layout

```
src/
├── app/
│   ├── api/liveblocks-auth/   # POSTs mint Liveblocks tokens (stub uses anon user; M2 will use Supabase user)
│   ├── c/[roomId]/            # canvas page
│   ├── dashboard/             # rooms list
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── canvas/                # tldraw integration
│   └── dashboard/
└── lib/
    ├── liveblocks.ts          # server-side Liveblocks client
    └── supabase/              # browser + server Supabase clients
```
