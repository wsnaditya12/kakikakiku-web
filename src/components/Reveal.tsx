"use client";
/* Reveal = membungkus kartu agar "muncul" (fade + naik) saat masuk layar.

   Dua pengaman supaya konten TIDAK PERNAH hilang:
   1) armed: konten default terlihat. Baru disembunyikan setelah JS aktif &
      observer didukung. → kalau JS gagal total, kartu tetap tampil.
   2) reduced-motion: hormati setelan "kurangi animasi" OS → tampil tanpa animasi.

   Animasi dipicu HANYA saat kartu benar-benar masuk layar (bukan timer), jadi
   efek muncul-saat-scroll tetap terasa walau kamu membaca lama di section atas. */

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0, // jeda antar kartu (ms) untuk efek beruntun
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Tak dukung observer / user minta kurangi animasi → tampil biasa.
    if (typeof IntersectionObserver === "undefined" || reduce) {
      return; // armed tetap false → konten terlihat, tanpa animasi
    }

    setArmed(true); // aman menyembunyikan dulu, lalu animasikan saat terlihat

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Sembunyikan HANYA saat sudah armed tapi belum masuk layar.
  const hidden = armed && !shown;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        hidden ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}
