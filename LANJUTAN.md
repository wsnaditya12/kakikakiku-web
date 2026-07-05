# LANJUTAN PROJECT — dibaca di chat baru

> Ringkasan status per Minggu, 5 Juli 2026. File ini pegangan untuk
> melanjutkan pekerjaan di sesi chat berikutnya.

## Status sekarang

Prototipe **selesai tahap 1** dan sudah di GitHub: `github.com/wsnaditya12/kakikakiku-web`

Yang sudah jadi:
- Landing page lengkap: Hero, Layanan (pola Gejala→Solusi), Promo, Booking→WA, Kontak+peta, Footer, tombol WA melayang
- Stack: Next.js 16.2.10, React 19, TypeScript 5, Tailwind v4
- Logo asli terpasang (SVG 5 KB hasil trace) + favicon dari mark logo
- Warna tema = warna logo (#e8b830 kuning emas + abu gelap)
- Alamat asli + peta koordinat presisi + link listing Google Maps
- Git & GitHub jalan; workflow Wisnu: edit → `git add .` → `git commit` → `git push`

## LANGKAH BERIKUTNYA (urutan prioritas)

1. **Ganti nomor WA** di `src/lib/site.ts`:
   `whatsapp: "6281234567890"` → `whatsapp: "62811916989"`
   (nomor asli: 0811-916-989; format wa.me = 628xx tanpa + dan spasi)
2. **Deploy ke Vercel** — daftar vercel.com pakai akun GitHub → Import
   repo `kakikakiku-web` → Deploy. Dapat URL live untuk owner.
3. **README.md portofolio** — ganti README bawaan Next.js dengan deskripsi
   proyek (screenshot, stack, fitur) — penting untuk rekruter.
4. Tunjukkan ke owner → kumpulkan data asli.

## Masih dummy — tunggu owner ([KONFIRMASI OWNER] di site.ts)

- Jam buka (sekarang: Sen–Sab 08.00–17.00, Minggu tutup — asumsi)
- Promo (3 promo sekarang karangan)
- Statistik hero (10+ tahun, 5.000+ mobil — karangan)
- Layanan "Cek Kaki-Kaki Gratis" — benar ditawarkan?
- **USP** — keunggulan unik vs bengkel lain (alat? garansi? part?)
  → paling menentukan daya jual, lihat kompetitor spesialiskakimobil.com
- Foto bengkel/pengerjaan (minimal 3–5)

## Rencana besar yang sudah disepakati

- Versi sekarang = **draft untuk owner** (Claude kerjakan, Wisnu menyimak)
- Setelah owner setuju: **Wisnu bangun ulang dari nol dengan tangannya
  sendiri**, Claude hanya mengarahkan → hasilnya jadi versi produksi
- Perubahan dari owner selalu masuk draft dulu sampai versi Wisnu selesai

## Catatan teknis untuk Claude sesi berikutnya

- Folder mount menolak delete/rename & pembacaan bisa telat sinkron —
  kerjakan npm/git di `~/build/kakikakiku-web` (sudah ada, node_modules
  terpasang), edit file user via tool Edit di `D:\Company Profile\...`,
  lalu mirror manual ke ~/build (JANGAN rsync file yang baru diedit).
- Build sandbox: font Google harus dipatch dulu (tidak ada internet);
  `timeout 34 npm run build` (jendela 45 detik).
- PowerShell Wisnu tidak kenal `&&` — beri perintah terpisah per baris.
