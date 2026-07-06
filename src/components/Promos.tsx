import Image from "next/image";
import { promos } from "@/lib/site";
import Reveal from "./Reveal";

export default function Promos() {
  return (
    <section id="promo" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-3xl font-extrabold">
          Promo <span className="text-brand">Bulan Ini</span>
        </h2>
        <p className="mt-2 text-zinc-400">
          {/* [KONFIRMASI OWNER] semua promo masih contoh, edit di src/lib/site.ts */}
          Penawaran terbatas, langsung amankan slotnya.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {promos.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90} className="h-full">
            <article
              className="flex h-full flex-col overflow-hidden rounded-xl border border-brand/30 bg-surface-light"
            >
              {/* SLOT POSTER 4:5.
                  - relative + aspect-[4/5] = wadah dengan rasio tetap 4:5
                    supaya semua poster seragam walau file aslinya beda.
                  - Image fill = gambar mengisi penuh wadah;
                    object-cover = dipangkas rapi tanpa gepeng.
                  - badge ditumpuk di atas gambar (absolute) sebagai penanda. */}
              <div className="relative aspect