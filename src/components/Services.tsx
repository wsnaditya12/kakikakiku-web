import { services } from "@/lib/site";
import Icon from "./Icons";

export default function Services() {
  return (
    /* id="layanan" = target link #layanan di navbar */
    <section id="layanan" className="border-t border-line bg-surface-light/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-3xl font-extrabold">
          Layanan <span className="text-brand">Kami</span>
        </h2>
        <p className="mt-2 max-w-xl text-zinc-400">
          Fokus di satu hal dan menguasainya: seluruh masalah kaki-kaki mobil Anda.
        </p>

        {/* .map() = ulangi kartu untuk tiap layanan di src/lib/site.ts.
            Tambah layanan baru = tambah 1 objek di file data, tanpa
            menyentuh komponen ini sama sekali. */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-xl border border-line bg-surface-light p-6 transition hover:border-brand/50"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/15 text-brand">
                <Icon name={s.icon} className="h-6 w-6" />
              </div>
              <h3 className="font-bold">{s.title}</h3>

              {/* daftar gejala: pengunjung "merasa dikenali" masalahnya */}
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Gejala
              </p>
              <ul className="mt-1 space-y-1">
                {s.gejala.map((g) => (
                  <li
                    key={g}
                    className="flex items-start gap-2 text-sm text-zinc-400"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/70" />
                    {g}
                  </li>
                ))}
              </ul>

              {/* solusi: ditonjolkan dengan blok kuning tipis */}
              <p className="mt-4 rounded-lg bg-brand/10 p-3 text-sm leading-relaxed text-brand">
                {s.solusi}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
