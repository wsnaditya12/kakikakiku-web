# KAKIKAKIKU — Website Bengkel Spesialis Kaki-Kaki Mobil

Company profile + landing page untuk **Bengkel KAKIKAKIKU**, spesialis kaki-kaki mobil
(spooring, balancing, shockbreaker, tie rod, ball joint) di Pasar Mobil Kemayoran, Jakarta.

Situs dirancang **mobile-first** karena mayoritas calon pelanggan membuka dari HP, dengan
alur booking yang langsung mengarah ke WhatsApp — sesuai cara bengkel benar-benar bekerja
(keluhan mobil perlu dikonsultasikan dulu sebelum servis).

> **Status:** prototipe tahap 1. Beberapa data (jam buka, promo, statistik) masih dummy dan
> ditandai `[KONFIRMASI OWNER]` di `src/lib/site.ts`, menunggu data asli dari owner.

<!-- Setelah deploy, ganti baris ini dengan URL live-nya:
**🔗 Live demo:** https://kakikakiku-web.vercel.app -->

---

## ✨ Fitur

- **Hero** dengan tagline, statistik singkat, dan CTA ganda (booking + WhatsApp).
- **Layanan** memakai pola **Gejala → Solusi**: pengunjung mengenali masalahnya dulu
  (setir narik, ban habis sebelah, bunyi gluduk-gluduk), baru ditawari solusinya. Lebih
  menjual daripada sekadar daftar jasa.
- **Promo** dalam bentuk kartu, mudah di-update lewat satu file data.
- **Booking → WhatsApp**: form (nama, no. HP, jenis mobil, keluhan, waktu) yang otomatis
  menyusun pesan WhatsApp terisi lengkap lewat `wa.me`.
- **Kontak & Lokasi**: alamat asli + peta Google Maps embed dengan koordinat presisi.
- **Tombol WhatsApp melayang** yang selalu terlihat di semua bagian.
- **Responsif penuh** — enak dibuka di HP maupun desktop.

## 🛠️ Tech Stack

| Kategori   | Teknologi                     |
|------------|-------------------------------|
| Framework  | Next.js 16.2.10 (App Router)  |
| UI Library | React 19                      |
| Bahasa     | TypeScript 5                  |
| Styling    | Tailwind CSS v4               |
| Deploy     | Vercel                        |

**Kenapa stack ini:** Next.js + Tailwind + TypeScript adalah kombinasi yang sedang paling
dicari industri front-end. Proyek ini sekaligus jadi latihan langsung memakainya.

## 🎨 Catatan Desain

- **Warna tema** diambil dari warna logo asli bengkel — kuning emas `#e8b830` dengan aksen
  abu gelap — supaya identitas visualnya konsisten.
- **Logo** asli terpasang sebagai SVG (hasil trace, ~5 KB) beserta favicon dari mark-nya.
- Satu **sumber data terpusat** di `src/lib/site.ts`: teks, nomor WA, layanan, dan promo
  semuanya dibaca dari sini, jadi owner/developer cukup mengedit satu file untuk mengubah isi.

## 📁 Struktur Proyek

```
src/
├─ app/
│  ├─ layout.tsx          # Root layout, metadata, font
│  ├─ page.tsx            # Menyusun semua section jadi satu halaman
│  └─ globals.css         # Tailwind + variabel warna tema
├─ components/
│  ├─ Navbar.tsx          # Navigasi + anchor ke tiap section
│  ├─ Hero.tsx            # Bagian pembuka + CTA
│  ├─ Services.tsx        # Layanan (pola Gejala → Solusi)
│  ├─ Promos.tsx          # Kartu promo
│  ├─ Booking.tsx         # Form booking → WhatsApp
│  ├─ Contact.tsx         # Alamat + peta
│  ├─ Footer.tsx
│  ├─ FloatingWhatsApp.tsx
│  └─ Icons.tsx           # Ikon SVG inline
└─ lib/
   └─ site.ts             # ⭐ Satu-satunya file data yang perlu diedit
```

## 🚀 Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

Build produksi:

```bash
npm run build
npm start
```

## 📸 Tampilan

<!-- TODO: tambahkan screenshot setelah deploy.
     Simpan gambar di folder /docs atau /screenshots, lalu:
     ![Hero](docs/hero.png)
     ![Layanan](docs/layanan.png)
     ![Booking](docs/booking.png) -->

_Screenshot menyusul setelah deploy ke Vercel._

## 🗺️ Rencana Selanjutnya

- Kumpulkan data asli dari owner (jam buka, promo, USP, foto bengkel).
- Panel admin sederhana agar owner bisa update promo/konten sendiri.
- Penyimpanan data booking (bila owner butuh, di luar WhatsApp).
- Optimasi SEO, domain khusus, dan hosting.

---

Dibuat oleh **Wisnu Aditya Putra** sebagai proyek nyata sekaligus bahan portofolio.
