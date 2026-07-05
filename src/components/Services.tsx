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
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {s.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
