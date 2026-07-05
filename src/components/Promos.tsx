import Image from "next/image";
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
              className="flex flex-col overflow-hidden rounded-xl border border-brand/30 bg-surface-light"
            >
              {/* SLOT POSTER 4:5.
                  - relative + aspect-[4/5] = wadah dengan rasio tetap 4:5
                    supaya semua poster seragam walau file aslinya beda.
                  - Image fill = gambar mengisi penuh wadah;
                    object-cover = dipangkas rapi tanpa gepeng.
                  - badge ditumpuk di atas gambar (absolute) sebagai penanda. */}
              <div className="relative aspect-[4/5] w-full bg-surface">
                <Image
                  src={p.image}
                  alt={`Poster promo ${p.title}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-md bg-brand px-3 py-1 text-xs font-extrabold text-zinc-900">
                  {p.badge}
                </span>
              </div>

              {/* TEKS PROMO — tetap teks nyata (bukan di dalam gambar) supaya
                  terbaca Google & pembaca layar. */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                  {p.description}
                </p>
                <p className="mt-4 text-xs font-semibold text-brand">
                  Berlaku: {p.until}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
