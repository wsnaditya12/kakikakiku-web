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
            hidden md:flex = disembunyikan di HP, muncul di layar ≥768px. */}
        <ul className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {menu.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition hover:text-brand">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Tombol WhatsApp — hanya desktop (hidden di HP).
              Di HP, tombol WA melayang sudah selalu terlihat, jadi tak perlu
              menaruhnya lagi di header supaya header mobile tetap lega. */}
          <a
            href={waLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-brand px-4 py-2 text-sm font-bold text-zinc-900 transition hover:bg-brand-dark md:inline-block"
          >
            Chat WhatsApp
          </a>

          {/* TOMBOL HAMBURGER — hanya mobile (md:hidden = hilang di desktop).
              Ikon berubah: garis-garis (☰) saat tertutup, silang (✕) saat terbuka.
              aria-* membantu pembaca layar & aksesibilitas. */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-zinc-200 md:hidden"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* PANEL MENU MOBILE.
          Kunci animasi: panel SELALU dirender (tidak pakai {open && ...}).
          Elemen yang mendadak muncul/hilang tak bisa dianimasikan — harus ada
          keadaan "dari" dan "ke". Jadi kita cukup mengubah kelasnya:
          - tertutup : max-h-0 + opacity-0  (tinggi & transparansi nol)
          - terbuka  : max-h-96 + opacity-100
          transition-all + duration-300 = perubahan meluncur mulus 0,3 detik.
          overflow-hidden = isi terpotong rapi saat tinggi menyusut ke 0.
          Padding ditaruh di div DALAM agar tidak memaksa tinggi saat tertutup. */}
      <div
        aria-hidden={!open}
        className={`overflow-hidden bg-surface transition-all duration-300 ease-out md:hidden ${
          open ? "max-h-96 border-t border-line opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4">
          <ul className="flex flex-col gap-1 text-sm text-zinc-200">
            {menu.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 transition hover:bg-surface-light hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-lg bg-brand px-4 py-3 text-center text-sm font-bold text-zinc-900 transition hover:bg-brand-dark"
          >
            Chat WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
