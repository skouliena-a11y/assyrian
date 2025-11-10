import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "assyrianMOTM — CS2 Highlights",
  description: "High-impact Counter-Strike highlights with precision headshots and clean edits. MOTM mentality.",
  openGraph: { title: "assyrianMOTM — CS2 Highlights", description: "High-impact Counter-Strike highlights.", images: ["/logo.jpg"] },
  twitter: { card: "summary_large_image", title: "assyrianMOTM", description: "CS2 Headshot Machine — precision • speed • highlights", images: ["/logo.jpg"] }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/favicon.ico" /></head>
      <body>{children}</body>
    </html>
  );
}
