import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

/* next/font: Next.js mengunduh font saat BUILD lalu menyajikannya dari
   server sendiri — loading cepat dan tidak bergantung Google saat runtime. */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/* metadata = isi <head>: judul tab browser + deskripsi untuk Google (SEO). */
export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
};

/* RootLayout membungkus SEMUA halaman situs.
   `children` = isi halaman yang sedang dibuka (mis. page.tsx). */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
