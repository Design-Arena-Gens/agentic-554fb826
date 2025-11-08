import Link from "next/link";

export default function Merci() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-24 text-white">
      <div className="max-w-md space-y-6 rounded-3xl border border-white/10 bg-slate-900/80 p-10 text-center shadow-[0_25px_80px_-30px_rgba(79,70,229,0.45)]">
        <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-200">
          Message reçu
        </span>
        <h1 className="text-3xl font-semibold">Merci pour votre message</h1>
        <p className="text-sm text-slate-300">
          Notre équipe reviendra vers vous sous 48 heures ouvrées pour planifier un diagnostic
          et explorer les automatisations possibles avec Intelliwave.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-slate-200"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
