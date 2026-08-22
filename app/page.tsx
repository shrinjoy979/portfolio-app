"use client";

import Script from "next/script";
import { siteBodyHtml } from "./site-content";

// This page renders the site's markup verbatim — extracted directly from
// the working preview.html so there is exactly one implementation of the
// design, not two hand-maintained copies that can drift apart. Content
// lives in ./site-content.ts (HTML) and /public/site-script.js (the
// interaction logic: theme toggle, nav scroll-spy, project cards, the
// live GitHub fetch, the showcase marquee, etc.) — edit those two files to
// change the site; this component just mounts them.
export default function Home() {
  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: siteBodyHtml }} />
      <Script src="/site-script.js" strategy="afterInteractive" />
    </>
  );
}
