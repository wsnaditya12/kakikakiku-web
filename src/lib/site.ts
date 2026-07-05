/* =====================================================
   DATA PUSAT SITUS — satu-satunya file yang perlu diedit
   untuk mengganti teks, nomor WA, layanan, atau promo.
   Semua komponen hanya MEMBACA dari sini.

   Tanda [KONFIRMASI OWNER] = data dummy / asumsi,
   wajib ditanyakan ke owner sebelum rilis.
   ===================================================== */

export const site = {
  name: "KAKIKAKIKU",
  tagline: "Spesialis Kaki-Kaki Mobil",
  description:
    "Bengkel spesialis kaki-kaki mobil: spooring, balancing, shockbreaker, tie rod, ball joint. Diagnosa akurat, harga transparan, garansi pengerjaan.",

  // [KONFIRMASI OWNER] nomor placeholder.
  // Format internasional TANPA tanda + dan tanpa spasi: 08xx → 628xx
  whatsapp: "6281234567890",

  instagram: "https://www.instagram.com/kakikakiku_id/",
  tiktok: "https://www.tiktok.com/@kakikakiku_id",

  // [KONFIRMASI OWNER] alamat dummy
  address: "Jl. Raya Otomotif No. 88, Kota Contoh",

  // [KONFIRMASI OWNER] jam buka asumsi
  hours: [
    { days: "Senin – Sabtu", time: "08.00 – 17.00" },
    { days: "Minggu", time: "Tutup" },
  ],
};

/* `type` di TypeScript = kontrak bentuk data.
   Kalau ada layanan yang lupa diberi `title`, error langsung
   muncul saat menulis kode — bukan saat web sudah tayang. */
export type Service = {
  icon: "steering" | "wheel" | "spring" | "joint" | "brake" | "shield";
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "steering",
    title: "Spooring",
    description:
      "Meluruskan sudut roda agar setir kembali lurus, mobil tidak narik ke satu sisi, dan ban tidak habis sebelah.",
  },
  {
    icon: "wheel",
    title: "Balancing",
    description:
      "Menyeimbangkan putaran roda untuk menghilangkan getaran setir di kecepatan tinggi.",
  },
  {
    icon: "spring",
    title: "Shockbreaker & Per",
    description:
      "Ganti atau rekondisi shockbreaker agar mobil tidak limbung, tidak mentok, dan tetap nyaman di jalan rusak.",
  },
  {
    icon: "joint",
    title: "Tie Rod, Ball Joint & Bushing",
    description:
      "Atasi bunyi gluduk-gluduk, setir kocak, dan kaki-kaki oblak dengan penggantian part yang presisi.",
  },
  {
    icon: "brake",
    title: "Rem & Kampas",
    description:
      "Pemeriksaan dan penggantian kampas, cakram, serta sistem rem agar pengereman selalu pakem.",
  },
  {
    icon: "shield",
    title: "Cek Kaki-Kaki Gratis", // [KONFIRMASI OWNER]
    description:
      "Diagnosa menyeluruh kondisi kaki-kaki sebelum servis — transparan, tanpa biaya, tanpa paksaan servis.",
  },
];

export type Promo = {
  badge: string;
  title: string;
  description: string;
  until: string;
};

// [KONFIRMASI OWNER] — semua promo di bawah ini dummy
export const promos: Promo[] = [
  {
    badge: "GRATIS",
    title: "Cek Kaki-Kaki Gratis",
    description:
      "Setiap kunjungan servis apa pun, dapatkan diagnosa kaki-kaki lengkap tanpa biaya.",
    until: "Tanpa batas waktu",
  },
  {
    badge: "-20%",
    title: "Paket Spooring + Balancing",
    description:
      "Hemat 20% untuk pengerjaan spooring dan balancing sekaligus dalam satu kunjungan.",
    until: "s.d. 31 Juli 2026",
  },
  {
    badge: "BONUS",
    title: "Ganti Sepasang Shockbreaker",
    description:
      "Gratis balancing 2 roda untuk setiap penggantian sepasang shockbreaker.",
    until: "s.d. 31 Juli 2026",
  },
];

// [KONFIRMASI OWNER] — angka dummy untuk hero
export const stats = [
  { value: "10+", label: "Tahun Pengalaman" },
  { value: "5.000+", label: "Mobil Ditangani" },
  { value: "100%", label: "Garansi Pengerjaan" },
];

/* Membuat URL WhatsApp dengan pesan terisi otomatis.
   encodeURIComponent mengubah spasi/baris baru menjadi
   format yang aman dibawa lewat URL. */
export function waLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
