import { site, stats, waLink } from "@/lib/site";

const gejala = [
  "Setir getar atau narik ke satu sisi",
  "Bunyi gluduk-gluduk di jalan rusak",
  "Mobil limbung saat menikung",
  "Ban habis tidak rata",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* lingkaran kuning blur = aksen dekoratif di background */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />

      {/* grid 1 kolom di HP, 2 kolom di layar ≥768px (md:grid-cols-2) */}
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 inline-block rounded-full border border-brand/40 bg-brand/10 px-4 py-1 text-sm font-semibold text-brand">
            {site.tagline}
          </p>

          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Kaki-Kaki Bermasalah?{" "}
            <span className="text-brand">Beres di Sini.</span>
          </h1>

          <p className="mt-4 max-w-md text-zinc-400">{site.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#booking"
              className="rounded-lg bg-brand px-6 py-3 font-bold text-zinc-900 transition hover:bg-brand-dark"
            >
              Booking Servis
            </a>
            <a
              href={waLink(
                `Halo ${site.name}, mobil saya ada keluhan di kaki-kaki. Boleh konsultasi dulu?`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-line px-6 py-3 font-semibold text-zinc-200 transition hover:border-brand hover:text-brand"
            >
              Konsultasi Dulu
            </a>
          </div>

          {/* [KONFIRMASI OWNER] angka diambil dari src/lib/site.ts */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-extrabold text-brand">{s.value}</p>
                <p className="text-xs text-zinc-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* kartu gejala — pengisi visual pengganti foto untuk prototipe.
            Nanti bisa diganti foto bengkel/mobil asli dari owner. */}
        <div className="self-center rounded-2xl border border-line bg-surface-light p-6">
          <h2 className="text-lg font-bold">Sering merasakan ini?</h2>
          <ul className="mt-4 space-y-3">
            {gejala.map((g) => (
              <li key={g} className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="mt-0.5 font-bold text-brand">✓</span>
                {g}
              </li>
            ))}
          </ul>
          <p className="mt-5 rounded-lg bg-brand/10 p-3 text-sm text-brand">
            Jangan tunggu parah - kerusakan kaki-kaki bisa menjalar ke part lain.
          </p>
        </div>
      </div>
    </section>
  );
}
