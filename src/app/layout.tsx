import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Hopeful Memories — Capturing Memories. Honoring Lives.",
  description:
    "Hopeful Memories creates dignified photographic experiences for families and communities while sustaining the creative workforce through meaningful, paid storytelling work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-secondary text-primary font-sans">{children}</body>
    </html>
  );
}
