import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://shrinjoysaha.dev";
const title = "Shrinjoy Saha — Software Engineer";
const description =
  "Shrinjoy Saha is a software engineer with 7+ years building full-stack applications — from client-facing React interfaces to the APIs and databases underneath them.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Shrinjoy Saha",
    "Software Engineer",
    "Full-Stack Developer",
    "Solana Developer",
    "Web3 Developer",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Shrinjoy Saha", url: siteUrl }],
  creator: "Shrinjoy Saha",
  alternates: { canonical: siteUrl },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Shrinjoy Saha",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shrinjoy Saha",
    jobTitle: "Software Engineer",
    url: siteUrl,
    sameAs: [
      "https://github.com/shrinjoy979",
      "https://www.linkedin.com/in/shrinjoy-saha/",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
          type="application/ld+json"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
