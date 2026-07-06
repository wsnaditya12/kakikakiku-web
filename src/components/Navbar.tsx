"use client";
/* "use client" = komponen ini berjalan di browser, bukan cuma di server.
   Wajib ada karena kita memakai useState (mengingat menu terbuka/tertutup)
   dan onClick. Tanpa ini, Next.js menganggapnya server component yang tidak
   boleh punya state interaktif. */

import { useState } from "react";
import Image from "next/image";
import { site, waLink } from "@/lib/site";

/* Menu dibuat sebagai data (array) → menambah menu = menambah 1 baris,
   tanpa menyentuh markup HTML di bawah. */
const menu = [
  { label: "Layanan", href: "#layanan" },
  { label: "Promo", href: "#promo" },
  { label: "Booking", href: "#booking" },
  { label: "Kontak", href: "#kontak" },
];

const waMessage = `Halo ${site.name}, saya mau tanya soal servis kaki-kaki.`;

export default function Navbar() {
  /* open = apakah menu mobile sedang terbuka. setOpen mengubahnya.
     Setiap kali nilainya berubah, React menggambar ulang bagian terkait. */
  const [open, setOpen] = useState(false);

  return (
    /* sticky top-0 = navbar menempel di atas saat halaman di-scroll.
       backdrop-blur + bg transparan = efek kaca modern. */
    <header className="sticky top-0 z-50 border-b border-line bg-surface/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo. Klik logo juga menutup menu mobile bila terbuka. */}
        <a href="#" aria-label={site.name} onClick={() => setOpen(false)}>
          <Image
            src="/logo.svg"
            alt={`Logo ${site.name}`}
            width={165}
            height={30}
            priority
          />
        </a>

        {/* MENU DESKTOP.
            hidden md:flex = disembunyikan di HP, mun