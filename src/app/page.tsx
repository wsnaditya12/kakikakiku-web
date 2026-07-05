import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Promos from "@/components/Promos";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

/* Halaman utama (/) — hanya MENYUSUN komponen, tanpa logika.
   Tiap section punya file sendiri di src/components/ supaya
   mudah dicari, diubah, dan dipakai ulang. */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Promos />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
