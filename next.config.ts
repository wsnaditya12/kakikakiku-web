import type { NextConfig } from "next";

// ============================================================
// SECURITY HEADERS
// ------------------------------------------------------------
// Ini "instruksi keamanan" yang dikirim server ke browser di
// SETIAP request. Browser lah yang menegakkannya. Tujuannya:
// mempersempit hal yang boleh dilakukan halaman kita -> kalau
// suatu saat ada celah, dampaknya jauh lebih kecil.
//
// PENTING: headers() ini hanya jalan saat Next.js dilayani oleh
// SERVER (Vercel / `next start`). Kalau nanti di-export statis
// ke shared hosting, header harus dipasang lewat .htaccess
// (lihat catatan yang saya jelaskan di chat).
// ============================================================
const securityHeaders = [
  {
    // Paksa browser selalu pakai HTTPS untuk domain ini (2 tahun).
    // Cegah "downgrade" ke HTTP yang bisa disadap.
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    // Larang situs kita ditaruh di dalam <iframe> situs lain.
    // Cegah "clickjacking" (korban diakali klik tombol tak terlihat).
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    // Larang browser "menebak-nebak" tipe file (MIME sniffing),
    // salah satu jalur XSS lama.
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Batasi info alamat situs kita yang bocor saat user klik
    // link keluar. Hanya kirim domain, bukan URL lengkap.
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Matikan akses fitur sensitif yang tidak kita pakai
    // (kamera, mikrofon, lokasi). Default: tolak semua.
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    // CSP = aturan PALING penting. Menentukan dari mana script,
    // style, gambar, dll BOLEH dimuat. Ini benteng utama lawan
    // XSS & injeksi script judol.
    //
    // CATATAN JUJUR: nilai di bawah ini SEMENTARA & agak longgar
    // ('unsafe-inline' masih diizinkan) supaya Tailwind & Next.js
    // dev tidak rusak. Nanti saat produksi kita perketat.
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self'",
      // Izinkan HANYA iframe Google Maps (buat peta di Kontak).
      // Ini "buka celah sekecil mungkin" -> domain lain tetap diblokir.
      "frame-src https://www.google.com",
      // frame-ancestors: cegah SITUS LAIN membingkai situs KITA.
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Terapkan header di atas ke SEMUA halaman.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
