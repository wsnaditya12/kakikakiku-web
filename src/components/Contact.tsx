import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="kontak" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
        <div>
          <h2 className="text-3xl font-extrabold">
            Kontak & <span className="text-brand">Lokasi</span>
          </h2>

          <div className="mt-6 space-y-5 text-sm">
            <div>
              <p className="font-bold text-zinc-200">Alamat</p>
              <p className="mt-1 text-zinc-400">{site.address}</p>
            </div>

            <div>
              <p className="font-bold text-zinc-200">Jam Buka</p>
              {site.hours.map((h) => (
                <p key={h.days} className="mt-1 flex justify-between gap-6 text-zinc-400 sm:max-w-xs">
                  <span>{h.days}</span>
                  <span>{h.time}</span>
                </p>
              ))}
            </div>

            <div>
              <p className="font-bold text-zinc-200">Media Sosial</p>
              <div className="mt-2 flex gap-4">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline"
                >
                  Instagram
                </a>
                <a
                  href={site.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* [KONFIRMASI OWNER] peta mengikuti site.address — ganti dengan
            alamat asli (atau link share Google Maps bengkel) sebelum rilis */}
        <div className="overflow-hidden rounded-2xl border border-line">
          <iframe
            title="Lokasi KAKIKAKIKU"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
            className="h-72 w-full md:h-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
