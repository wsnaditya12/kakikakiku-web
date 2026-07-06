import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/* Next.js mengubah file ini menjadi /sitemap.xml otomatis saat build.
   sitemap = "daftar isi" semua halaman yang diserahkan ke Google
   supaya cepat ditemukan & diindeks.

   Situs ini masih 1 halaman, jadi isinya baru beranda. Nanti tiap
   menambah halaman baru (mis. /promo, /layanan), tambahkan satu
   objek lagi di array ini. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      // Seberapa sering isi berubah (petunjuk untuk bot, bukan aturan keras).
      changeFrequency: "monthly",
      // Prioritas relatif 0–1; beranda = tertinggi.
      priority: 1,
    },
  ];
}
