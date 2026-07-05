import { site, waLink } from "@/lib/site";

/* Menu dibuat sebagai data (array) → menambah menu = menambah 1 baris,
   tanpa menyentuh markup HTML di bawah. */
const menu = [
  { label: "Layanan", href: "#layanan" },
  { label: "Promo", href: "#promo" },
  { label: "Booking", href: "#booking" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  return (
    /* sticky top-0 = navbar menempel di atas saat halaman di-scroll.
       backdrop-blur + bg transparan = efek kaca modern. */
    <header className="sticky top-0 z-50 border-b border-line bg-surface/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#" className="text-lg font-extrabold tracking-tight">
          KAKIKAKI<span className="text-brand">KU</span>
        </a>

        {/* hidden md:flex = disembunyikan di HP, muncul di layar ≥768px.
            Ini inti pendekatan MOBILE-FIRST Tailwind: default untuk HP,
            prefix md:/lg: untuk layar lebih besar. */}
        <ul className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {menu.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition hover:text-brand">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={waLink(`Halo ${site.name}, saya mau tanya soal servis kaki-kaki.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-brand px-4 py-2 text-sm font-bold text-zinc-900 transition hover:bg-brand-dark"
        >
          Chat WhatsApp
        </a>
      </nav>
    </header>
  );
}
