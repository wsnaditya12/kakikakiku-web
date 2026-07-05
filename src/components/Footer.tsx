import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-8 text-center text-sm text-zinc-500">
        <p className="font-extrabold text-zinc-200">
          KAKIKAKI<span className="text-brand">KU</span>
        </p>
        <p>{site.tagline}</p>
        <p className="mt-2">
          © {new Date().getFullYear()} {site.name}. Seluruh hak cipta.
        </p>
      </div>
    </footer>
  );
}
