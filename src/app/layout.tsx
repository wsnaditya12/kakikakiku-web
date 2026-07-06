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
  /* metadataBase: alamat dasar situs. Wajib supaya URL gambar
     preview (Open Graph) jadi absolut, bukan relatif. */
  metadataBase: new URL(site.url),

  /* title.template: pola judul otomatis tiap halaman.
     Halaman utama pakai `default`; halaman lain nanti cukup isi
     judul singkat, sisanya "— KAKIKAKIKU" ditempel otomatis. */
  title: {
    default: `${site.seoTitle} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,

  /* keywords: bobotnya kecil di Google modern, tapi tetap bantu
     memperjelas topik. Fokus kata yang benar-benar dicari orang. */
  keywords: [
    "bengkel kaki-kaki mobil",
    "spooring balancing jakarta",
    "servis shockbreaker",
    "bengkel mobil kemayoran",
    "KAKIKAKIKU",
  ],

  /* robots: izinkan Google mengindeks & mengikuti semua link. */
  robots: { index: true, follow: true },

  /* Open Graph: yang muncul saat link dibagikan di WhatsApp/
     Facebook/Instagram (judul, deskripsi, gambar). Penting karena
     owner menyebar promo lewat WA & IG. */
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: site.url,
    siteName: site.name,
    title: `${site.seoTitle} | ${site.name}`,
    description: site.description,
  },
};

/* JSON-LD "AutoRepair": data terstruktur yang dibaca mesin.
   Ini memberi tahu Google secara eksplisit: ini bengkel, ini
   alamatnya, jam bukanya, teleponnya, koordinatnya. Hasilnya
   Google lebih percaya diri menampilkan kartu bisnis lokal. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: "+62811916989",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: "Jakarta",
    addressRegion: "DKI Jakarta",
    postalCode: "10620",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.1505958,
    longitude: 106.8445884,
  },
  openingHours: "Mo-Sa 08:00-17:00",
  sameAs: [site.instagram, site.tiktok],
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
      <body>
        {/* Sisipkan data terstruktur ke halaman. dangerouslySetInnerHTML
            dipakai karena isinya JSON mentah (bukan teks biasa). Aman di
            sini sebab datanya kita sendiri yang buat, bukan input user. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
