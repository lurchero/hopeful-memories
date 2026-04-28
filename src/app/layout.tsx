import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://www.hopefulmemories.org";
const OG_IMAGE = "/images/hero/IMG_1750.jpg";
const SITE_DESCRIPTION =
  "Hopeful Memories creates dignified photographic experiences for families and communities while sustaining the creative workforce through meaningful, paid storytelling work.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hopeful Memories — Capturing Memories. Honoring Lives.",
    template: "%s — Hopeful Memories",
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Hopeful Memories",
    title: "Hopeful Memories — Capturing Memories. Honoring Lives.",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Hopeful Memories — dignified photography for families and communities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hopeful Memories — Capturing Memories. Honoring Lives.",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-secondary text-primary font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-secondary focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
