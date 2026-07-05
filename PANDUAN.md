# PANDUAN — Prototipe Website KAKIKAKIKU

## Menjalankan di komputermu (pertama kali)

Buka Command Prompt / PowerShell:

```
cd "D:\Company Profile\kakikakiku-web"
npm install
npm run dev
```

Lalu buka **http://localhost:3000** di browser. Selama `npm run dev` jalan,
setiap kali kamu mengedit file dan menyimpan, browser otomatis refresh
(namanya *hot reload*).

> `npm install` hanya perlu sekali (mengunduh dependency ke folder
> `node_modules`). Hari-hari berikutnya cukup `npm run dev`.

## Peta file — mana yang diedit untuk apa

| Ingin mengubah... | Edit file |
|---|---|
| Teks, nomor WA, layanan, promo, jam buka | `src/lib/site.ts` (SATU-SATUNYA file data) |
| Warna brand | `src/app/globals.css` (blok `@theme`) |
| Tampilan per bagian | `src/components/` (Navbar, Hero, Services, dst.) |
| Urutan section halaman | `src/app/page.tsx` |
| Judul tab browser / SEO | `src/app/layout.tsx` |

Semua data dummy yang harus ditanyakan ke owner ditandai `[KONFIRMASI OWNER]`
di `src/lib/site.ts` — cari dengan Ctrl+Shift+F di VS Code.

## Git — latihan pertama untukmu

Repo git sudah di-init dengan 1 commit awal. File PANDUAN.md ini sengaja
belum di-commit. Latihan:

```
git status          # lihat file yang berubah/baru
git add PANDUAN.md
git commit -m "Tambah panduan project"
git log --oneline   # lihat riwayat
```

## Yang BELUM ada (sengaja, sesuai tahap prototipe)

- Foto asli bengkel (hero pakai kartu gejala dulu — minta foto ke owner)
- Halaman terpisah (semua masih 1 halaman — cukup untuk demo owner)
- Panel admin, database, penyimpanan booking (menyusul kalau owner setuju)
- Deploy ke Vercel (langkah berikutnya setelah kamu lihat hasilnya lokal)

## Konsep yang sudah kamu pakai di project ini

1. **Scaffolding** — `npx create-next-app` membuat kerangka standar industri.
2. **Komponen React** — 1 file = 1 bagian UI; `page.tsx` menyusunnya.
3. **Props & `.map()`** — kartu layanan/promo digambar berulang dari data.
4. **Server vs Client Component** — hanya `Booking.tsx` yang `"use client"`.
5. **useState** — "ingatan" form di Booking.
6. **Tailwind mobile-first** — tanpa prefix = HP; `md:` = layar ≥768px.
7. **TypeScript `type`** — kontrak bentuk data di `site.ts`.
8. **Integrasi WhatsApp** — `wa.me/<nomor>?text=<pesan ter-encode>`.
