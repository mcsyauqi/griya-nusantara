import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Griya Nusantara | Indonesian Heritage Modern Luxury Residences",
  description:
    "Where Heritage Meets Modern Luxury. Inspired by centuries of Javanese architectural tradition, Griya Nusantara rises 38 stories above the heart of Jakarta. 96 exclusive residences crafted with the finest Indonesian materials.",
  keywords: [
    "luxury residences Jakarta",
    "Indonesian heritage architecture",
    "Javanese modern luxury",
    "Griya Nusantara",
    "premium apartments Jakarta",
  ],
  openGraph: {
    title: "Griya Nusantara | Indonesian Heritage Modern Luxury Residences",
    description:
      "Where Heritage Meets Modern Luxury. 96 exclusive residences crafted with the finest Indonesian materials.",
    type: "website",
    locale: "en_US",
    siteName: "Griya Nusantara",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
