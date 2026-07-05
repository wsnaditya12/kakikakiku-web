"use client";

/* "use client" WAJIB di file ini karena komponen ini INTERAKTIF
   (menyimpan isi form dengan useState, merespons klik).

   Konsep penting Next.js modern:
   - Server Component (default): dirender di server, tanpa JavaScript
     di browser → cepat. Hero, Services, dll. termasuk ini.
   - Client Component ("use client"): dikirim ke browser sebagai JS
     karena butuh interaksi. Pakai HANYA saat perlu. */

import { useState } from "react";
import { site, waLink } from "@/lib/site";

const formKosong = {
  nama: "",
  hp: "",
  mobil: "",
  keluhan: "",
  waktu: "Pagi (08.00 – 11.00)",
};

/* satu string class untuk semua input agar konsisten & mudah diubah */
const inputCls =
  "w-full rounded-lg border border-line bg-surface px-4 py-2.5 text-sm " +
  "placeholder:text-zinc-500 focus:border-brand focus:outline-none";

export default function Booking() {
  /* useState = "ingatan" komponen. Setiap kali nilainya berubah,
     React otomatis menggambar ulang tampilan dengan nilai terbaru. */
  const [form, setForm] = useState(formKosong);

  function update(field: keyof typeof formKosong, value: string) {
    /* {...form} = salin semua isi form lama, lalu timpa 1 field.
       State di React tidak boleh diubah langsung — selalu buat salinan. */
    setForm({ ...form, [field]: value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // cegah reload halaman (perilaku bawaan form HTML)

    const pesan = [
      `Halo ${site.name}, saya mau booking servis.`,
      `Nama: ${form.nama}`,
      `No. HP: ${form.hp}`,
      `Mobil: ${form.mobil}`,
      `Keluhan: ${form.keluhan}`,
      `Rencana datang: ${form.waktu}`,
    ].join("\n");

    /* buka WhatsApp dengan pesan sudah terisi — pelanggan tinggal kirim */
    window.open(waLink(pesan), "_blank");
  }

  return (
    <section id="booking" className="border-t border-line bg-surface-light/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
        <div className="self-center">
          <h2 className="text-3xl font-extrabold">
            Booking <span className="text-brand">Servis</span>
          </h2>
          <p className="mt-3 max-w-md text-zinc-400">
            Isi form ini, lalu Anda langsung tersambung ke WhatsApp kami dengan
            pesan yang sudah terisi otomatis. Keluhan kaki-kaki perlu
            didiskusikan dulu — jadi konsultasinya gratis, jadwalnya fleksibel.
          </p>
          <ol className="mt-6 space-y-3 text-sm text-zinc-300">
            {[
              "Isi data & keluhan mobil Anda",
              "Klik kirim → terhubung ke WhatsApp kami",
              "Konsultasi & sepakati jadwal servis",
            ].map((langkah, i) => (
              <li key={langkah} className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-xs font-extrabold text-zinc-900">
                  {i + 1}
                </span>
                {langkah}
              </li>
            ))}
          </ol>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-line bg-surface-light p-6"
        >
          <input
            required
            placeholder="Nama Anda"
            value={form.nama}
            onChange={(e) => update("nama", e.target.value)}
            className={inputCls}
          />
          <input
            required
            type="tel"
            placeholder="No. HP / WhatsApp"
            value={form.hp}
            onChange={(e) => update("hp", e.target.value)}
            className={inputCls}
          />
          <input
            required
            placeholder="Merk & tipe mobil (mis. Avanza 2019)"
            value={form.mobil}
            onChange={(e) => update("mobil", e.target.value)}
            className={inputCls}
          />
          <textarea
            required
            rows={3}
            placeholder="Keluhan (mis. bunyi gluduk di roda depan kiri)"
            value={form.keluhan}
            onChange={(e) => update("keluhan", e.target.value)}
            className={inputCls}
          />
          <select
            value={form.waktu}
            onChange={(e) => update("waktu", e.target.value)}
            className={inputCls}
          >
            <option>Pagi (08.00 – 11.00)</option>
            <option>Siang (11.00 – 14.00)</option>
            <option>Sore (14.00 – 17.00)</option>
          </select>
          <button
            type="submit"
            className="w-full rounded-lg bg-brand py-3 font-bold text-zinc-900 transition hover:bg-brand-dark"
          >
            Kirim via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
