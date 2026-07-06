import { site, waLink } from "@/lib/site";

/* Tombol WA melayang di pojok kanan bawah, pola umum situs bisnis
   di Indonesia; selalu terlihat walau user sudah scroll jauh. */
export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink(`Halo ${site.name}, saya mau tanya soal servis kaki-kaki.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition hover:scale-110"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    </a>
  );
}
