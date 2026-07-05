import { promos } from "@/lib/site";

export default function Promos() {
  return (
    <section id="promo" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-3xl font-extrabold">
          Promo <span className="text-brand">Bulan Ini</span>
        </h2>
        <p className="mt-2 text-zinc-400">
          {/* [KONFIRMASI OWNER] semua promo masih contoh — edit di src/lib/site.ts */}
          Penawaran terbatas, langsung amankan slotnya.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {promos.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-xl border border-brand/30 bg-surface-light p-6"
            >
              <span className="self-start rounded-md bg-brand px-3 py-1 text-xs font-extrabold text-zinc-900">
                {p.badge}
              </span>
              <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                {p.description}
              </p>
              <p className="mt-4 text-xs font-semibold text-brand">
                Berlaku: {p.until}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
