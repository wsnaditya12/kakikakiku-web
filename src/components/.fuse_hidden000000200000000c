import type { Service } from "@/lib/site";

/* Ikon SVG sederhana bergaya garis (stroke).
   stroke="currentColor" = ikon otomatis mengikuti warna teks
   dari class Tailwind pembungkusnya (mis. text-brand → kuning). */

type IconName = Service["icon"];

export default function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

const icons: Record<IconName, React.ReactNode> = {
  steering: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 14.5V21M9.8 10.8 3.4 8.6M14.2 10.8l6.4-2.2" />
    </>
  ),
  wheel: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v5M12 16v5M3.5 9.5 8.3 11M15.7 13l4.8 1.5" />
    </>
  ),
  spring: <path d="M5 4h14M5 20h14M8 4l8 2.7-8 2.6 8 2.7-8 2.6 8 2.7" />,
  joint: (
    <>
      <circle cx="12" cy="7" r="3.5" />
      <path d="M12 10.5V15M12 15l-3 6M12 15l3 6" />
    </>
  ),
  brake: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 12h.01" />
    </>
  ),
  shield: (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1 1 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};
