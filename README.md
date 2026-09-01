# Shrinjoy Saha — Portfolio (Next.js)

This is a direct conversion of the working `preview.html` into a real Next.js app —
not a second, hand-maintained implementation. The HTML, CSS, and JS here are the
**exact same code** as the standalone preview, split across three files so Next.js
can serve them properly:

```
app/globals.css       — the site's full stylesheet, copied verbatim
app/site-content.ts    — the page markup (header, nav, every section, footer),
                          extracted verbatim from preview.html and stored as a
                          string constant
public/site-script.js  — all interaction logic verbatim: theme toggle, nav
                          scroll-spy, mobile menu, project cards, the live
                          GitHub fetch, the "In The Lab" showcase marquee loop,
                          the sign-off, copy-to-clipboard buttons, etc.
app/page.tsx            — mounts the above two: renders site-content.ts via
                          dangerouslySetInnerHTML, then loads site-script.js
                          with next/script so it runs after the markup is in
                          the DOM (exactly like a classic <script> tag would
                          in the static HTML file)
app/layout.tsx           — page metadata (title, OG tags, JSON-LD) and the
                          Google Fonts <link> tags
public/showcase/          — the real image/video files for the "In The Lab"
                          section (the standalone preview embeds these as
                          base64 for portability; here they're proper static
                          assets, which is both more idiomatic for Next.js
                          and a much smaller page weight)
```

## Why this structure

Earlier iterations of this project had two separate implementations — a
component-based Tailwind/Framer Motion version and the plain-HTML preview —
maintained in parallel. Every fix had to be applied twice, and they drifted
out of sync. This version eliminates that: there is exactly one copy of the
markup, styles, and logic. Editing the site now means editing
`app/site-content.ts`, `app/globals.css`, or `public/site-script.js` directly
— the same three files that back the preview.

The trade-off is that this isn't componentized the way a typical Next.js app
is (no separate `<Hero />`, `<Projects />`, etc.) — it's the same
vanilla-JS/CSS approach as the static file, just properly served through
Next.js with real routing, metadata, and static generation. If you'd like a
componentized version instead (data-driven, Tailwind, Framer Motion — closer
to a typical Next.js codebase), that's a different trade-off and worth a
separate conversation, since it reintroduces the two-implementations problem
this version was built to avoid.

## Getting started

```bash
npm install
npm run dev
```

## Deployment (Vercel)

```bash
vercel
```

Or connect the repo in the Vercel dashboard — no special configuration needed
beyond the default Next.js preset.

## Content you should personalize

- **Contact links** — email, phone, GitHub, LinkedIn, Telegram are in
  `app/site-content.ts`. Discord's href (`https://discord.com/users/shrinjoy`)
  is a best-effort guess — Discord's profile-link format has historically
  required a numeric user ID rather than a username, so double check this
  resolves to your profile and swap in your actual "Share Profile" link from
  the Discord app if not.
- **GitHub username** — `public/site-script.js` fetches live data
  (`GITHUB_USERNAME` constant near the top) from the public GitHub API
  client-side, no backend needed. It's currently set to `shrinjoy979`.
- **Favicon / OG image** — not yet added; drop a `favicon.ico` and an OG
  image into `public/` and reference them in `app/layout.tsx`'s metadata if
  you want those.

## Build verification

This was built and verified with `next build` in a sandboxed environment
before delivery — zero errors, all sections present in the static output.
The only build-time warning is Next.js's font-optimization step being unable
to reach `fonts.googleapis.com` in that sandbox (no internet access there);
that's expected and resolves itself automatically on any environment with
normal internet access — the Google Fonts `<link>` tag in `layout.tsx` works
either way.
