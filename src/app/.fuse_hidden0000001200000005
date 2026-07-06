import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/* Next.js mengubah file ini menjadi /robots.txt otomatis saat build.
   robots.txt = "papan aturan" untuk bot mesin pencari:
   - siapa yang diatur (userAgent: "*" = semua bot)
   - boleh menjelajah apa (allow: "/" = seluruh situs)
   - di mana peta situs (sitemap) berada. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Contoh kalau nanti ada halaman yang tak ingin diindeks:
      // disallow: ["/admin"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
