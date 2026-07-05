"use client";
/* Reveal = pembungkus kecil yang membuat isinya "muncul" (fade + naik sedikit)
   saat pertama kali masuk layar. Dipakai ulang untuk kartu Layanan & Promo.

   Konsep intinya: IntersectionObserver — API browser yang memberi tahu kita
   kapan sebuah elemen masuk ke area pandang (viewport). Saat masuk, kita ubah
   kelasnya dari "tersembunyi" (opacity-0 + turun sedikit) ke "tampil", dan
   CSS transition yang menganimasikan perpindahannya. */

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0, // jeda mulai (ms) — untuk efek muncul berurutan antar kartu
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* Hormati pengguna yang menyalakan "kurangi animasi/gerakan" di setelan
       OS-nya: langsung tampilkan tanpa animasi. Ini praktik aksesibilitas. */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.unobserve(el); // cukup sekali; jangan animasikan tiap scroll
        }
      },
      { threshold: 0.15 } // picu saat ~15% elemen terlihat
    );

    io.observe(el);
    return () => io.disconnect(); // bersih-bersih saat komponen dilepas
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-500 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
