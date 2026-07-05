/* =====================================================
   DATA PUSAT SITUS — satu-satunya file yang perlu diedit
   untuk mengganti teks, nomor WA, layanan, atau promo.
   Semua komponen hanya MEMBACA dari sini.

   Tanda [KONFIRMASI OWNER] = data dummy / asumsi,
   wajib ditanyakan ke owner sebelum rilis.
   ===================================================== */

export const site = {
  name: "KAKIKAKIKU",
  tagline: "Teman Berkendara Anda",
  description:
    "Bengkel spesialis kaki-kaki mobil: spooring, balancing, shockbreaker, tie rod, ball joint. Diagnosa akurat, harga transparan, garansi pengerjaan.",

  // Nomor asli bengkel: 0811-916-989
  // Format internasional TANPA tanda + dan tanpa spasi: 08xx → 628xx
  whatsapp: "62811916989",

  instagram: "https://www.instagram.com/kakikakiku_id/",
  tiktok: "https://www.tiktok.com/@kakikakiku_id",

  // Alamat asli (dari listing Google Maps bisnis KAKIKAKIKU)
  address:
    "Pasar Mobil Kemayoran Blok S, Jl. Pintu I No. 42–43, RW 10, Pademangan Timur, Kec. Pademangan, Jakarta 10620",
  addressNote: "Masuk dari Pintu I Pasar Mobil Kemayoran",
  /* Link listing Google Maps bengkel (mengandung ID unik tempat, jadi
     tidak mungkin nyasar). Pencarian by nama terbukti bisa salah alamat. */
  mapsUrl:
    "https://www.google.com/maps/place/KAKIKAKIKU+-+PT+KOLABORASI+KREASI+INTERNUSA/@-6.1505958,106.8445884,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f5e55a841a99:0x6da57638fa95cb15!8m2!3d-6.1505958!4d106.8445884!16s%2Fg%2F11y48ycsh6",
  /* Koordinat persis untuk embed peta di halaman */
  mapsCoords: "-6.1505958,106.8445884",

  // [KONFIRMASI OWNER] jam buka asumsi
  hours: [
    { days: "Senin – Sabtu", time: "08.00 – 17.00" },
    { days: "Minggu", time: "Tutup" },
  ],
};

/* `type` di TypeScript = kontrak bentuk data.
   Kalau ada layanan yang lupa diberi `title`, error langsung
   muncul saat menulis kode — bukan saat web sudah tayang. */
/* Pola "Gejala → Solusi" (diadopsi dari pembanding terbaik):
   pengunjung mengenali MASALAHNYA dulu, baru ditawari solusinya.
   Lebih menjual daripada sekadar deskripsi layanan. */
export type Service = {
  icon: "steering" | "wheel" | "spring" | "joint" | "brake" | "shield";
  title: string;
  gejala: string[]; // keluhan yang dirasakan pengendara
  solusi: string; // apa yang bengkel lakukan
};

export const services: Service[] = [
  {
    icon: "steering",
    title: "Spooring",
    gejala: [
      "Mobil narik ke kiri / kanan",
      "Setir tidak lurus saat jalan lurus",
      "Ban habis tidak rata / sebelah",
    ],
    solusi:
      "Kalibrasi ulang sudut roda — setir kembali lurus, ban jadi awet.",
  },
  {
    icon: "wheel",
    title: "Balancing",
    gejala: [
      "Setir getar di kecepatan 80 km/jam ke atas",
      "Getaran terasa sampai lantai kabin",
    ],
    solusi:
      "Penyeimbangan tiap roda dengan mesin balancing sampai getaran hilang.",
  },
  {
    icon: "spring",
    title: "Shockbreaker & Per",
    gejala: [
      "Mobil limbung / mengayun berlebihan",
      "Bantingan keras atau sering mentok",
      "Rembesan oli di as shockbreaker",
    ],
    solusi:
      "Ganti baru atau rekondisi — disesuaikan kebutuhan dan budget Anda.",
  },
  {
    icon: "joint",
    title: "Tie Rod, Ball Joint & Bushing",
    gejala: [
      "Bunyi gluduk-gluduk di jalan rusak / polisi tidur",
      "Setir terasa kocak atau speleng",
    ],
    solusi:
      "Ganti part presisi hanya di titik yang benar-benar rusak — tanpa tebak-tebakan.",
  },
  {
    icon: "brake",
    title: "Rem & Kampas",
    gejala: [
      "Rem berdecit atau pedal bergetar",
      "Pengereman terasa kurang pakem",
    ],
    solusi:
      "Pemeriksaan menyeluruh sistem rem; kampas / cakram diganti hanya bila perlu.",
  },
  {
    icon: "shield",
    title: "Cek Kaki-Kaki Gratis", // [KONFIRMASI OWNER]
    gejala: [
      "Ada bunyi tapi sumbernya tidak jelas",
      "Mau beli mobil bekas, ragu kondisi kaki-kakinya",
    ],
    solusi:
      "Diagnosa lengkap tanpa biaya — hasil dijelaskan transparan sebelum ada keputusan servis.",
  },
];

export type Promo = {
  badge: string;
  title: string;
  description: string;
  until: string;
  /* Gambar poster promo (rasio 4:5). File ada di folder public/promos/.
     Poster dibuat tim media tiap bulan; teks di bawah tetap ditulis manual
     supaya terbaca Google (SEO) & pembaca layar. [KONFIRMASI OWNER] rasio 4:5 */
  image: string;
};

// [KONFIRMASI OWNER] — semua promo di bawah ini dummy
export const promos: Promo[] = [
  {
    badge: "GRATIS",
    title: "Cek Kaki-Kaki Gratis",
    description:
      "Setiap kunjungan servis apa pun, dapatkan diagnosa kaki-kaki lengkap tanpa biaya.",
    until: "Tanpa batas waktu",
    image: "/promos/promo-1.jpg",
  },
  {
    badge: "-20%",
    title: "Paket Spooring + Balancing",
    description:
      "Hemat 20% untuk pengerjaan spooring dan balancing sekaligus dalam satu kunjungan.",
    until: "s.d. 31 Juli 2026",
    image: "/promos/promo-2.jpg",
  },
  {
    badge: "BONUS",
    title: "Ganti Sepasang Shockbreaker",
    description:
      "Gratis balancing 2 roda untuk setiap penggantian sepasang shockbreaker.",
    until: "s.d. 31 Juli 2026",
    image: "/promos/promo-3.jpg",
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
