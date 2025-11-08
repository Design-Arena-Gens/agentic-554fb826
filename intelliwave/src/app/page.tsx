import { ArrowRight, Bot, Sparkles, Workflow, Zap, ShieldCheck, Waves } from "lucide-react";

const services = [
  {
    title: "Chatbots sur mesure",
    description:
      "Assistants conversationnels intelligents finement réglés sur votre ton, vos règles métier et vos outils internes.",
    icon: Bot,
  },
  {
    title: "Workflows n8n orchestrés",
    description:
      "Conception, optimisation et maintenance de scénarios n8n robustes qui automatisent vos tâches répétitives.",
    icon: Workflow,
  },
  {
    title: "Intégration AI & données",
    description:
      "Connexion à vos bases de connaissances, CRMs et APIs pour offrir des réponses contextuelles réellement utiles.",
    icon: Sparkles,
  },
];

const differentiators = [
  "Blueprint opérationnel livré en moins de 10 jours",
  "Veille proactive sur vos automatisations critiques 24/7",
  "Gouvernance des données et conformité RGPD intégrées",
];

const caseStudies = [
  {
    title: "Support client automatisé pour une EdTech",
    result: "85% des tickets résolus sans intervention humaine",
    details:
      "Chatbot multilingue connecté à HubSpot et Notion, orchestrant escalades automatiques via Slack.",
  },
  {
    title: "Onboarding intelligent pour une fintech B2B",
    result: "-60% de temps de traitement des demandes d'ouverture",
    details:
      "Workflow n8n pilotant la collecte de documents, le scoring de risque et la génération d'offres personnalisées.",
  },
];

const steps = [
  {
    title: "Diagnostic express",
    description:
      "Cartographie de vos processus et identification des gains d'automatisation en 72 heures.",
    badge: "Semaine 1",
  },
  {
    title: "Prototype & itérations",
    description:
      "Assemblage d'un chatbot pilote + workflow n8n prioritaire, testé auprès de vos équipes.",
    badge: "Semaine 2",
  },
  {
    title: "Déploiement & monitoring",
    description:
      "Mise en production sécurisée, tableau de bord temps réel et astreinte Intelliwave pour la pérennité.",
    badge: "Semaine 3+",
  },
];

const faqs = [
  {
    question: "Comment assurez-vous la qualité des réponses du chatbot ?",
    answer:
      "Nous combinons entraînement sur vos données, garde-fous n8n pour gérer les exceptions et un monitoring continu avec revue humaine hebdomadaire.",
  },
  {
    question: "Pouvez-vous intégrer nos outils existants ?",
    answer:
      "Oui. Nous avons déjà connecté Salesforce, HubSpot, Airtable, Notion, Zendesk, Slack, Google Workspace, ainsi que des bases SQL/NoSQL spécifiques.",
  },
  {
    question: "Quelle est la durée d'un projet type ?",
    answer:
      "De 3 à 6 semaines selon le périmètre. Nos offres incluent toujours une phase d'optimisation continue pour maximiser le ROI.",
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950 pb-24 text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-[-20rem] z-0 h-[30rem] rounded-full bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.55),_rgba(15,23,42,0.1)_60%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-10 top-24 z-0 h-32 rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.45),_transparent_60%)] blur-3xl" />
      <header className="sticky top-0 z-20 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
              <Waves className="h-6 w-6 text-sky-300" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight text-white">Intelliwave</p>
              <p className="text-xs text-slate-300">
                Agence d&apos;automatisation AI & n8n
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#services">
              Services
            </a>
            <a className="transition hover:text-white" href="#process">
              Méthode
            </a>
            <a className="transition hover:text-white" href="#case-studies">
              Cas clients
            </a>
            <a className="transition hover:text-white" href="#faq">
              FAQ
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/20"
          >
            Discuter d&apos;un projet
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 md:pt-24">
        <section className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/60 bg-indigo-500/15 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-200">
              Automatisation augmentée par l&apos;IA
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Des chatbots n8n qui répondent comme vos meilleurs experts, 24/7.
            </h1>
            <p className="text-lg text-slate-300 md:text-xl">
              Intelliwave fusionne IA générative, orchestrations n8n et connaissance métier
              pour fluidifier vos opérations, renforcer votre service client et créer
              des expériences conversationnelles mémorables.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400"
              >
                Planifier un diagnostic
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
              >
                Découvrir nos cas clients
              </a>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {differentiators.map((item) => (
                <div
                  key={item}
                  className="card-gradient rounded-2xl p-4 text-sm text-slate-300 transition hover:border-indigo-400/40 hover:text-white"
                >
                  <ShieldCheck className="mb-3 h-5 w-5 text-indigo-300" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-full">
            <div className="glow -top-20 -left-10 h-48 w-48 bg-indigo-500/45" />
            <div className="glow -bottom-14 right-0 h-40 w-40 bg-sky-300/40" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_-25px_rgba(14,165,233,0.45)] backdrop-blur">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <p className="font-semibold text-white">Flux n8n : Onboarding client</p>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-200">
                  En ligne
                </span>
              </div>
              <div className="mt-6 space-y-4 text-sm text-slate-200">
                <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                  <p className="text-xs text-indigo-200">Étape 01</p>
                  <p className="font-medium">Détection intention client</p>
                  <p className="text-xs text-slate-400">
                    GPT-4 | Analyse des messages entrants & assignation canal.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs text-indigo-200">Étape 02</p>
                  <p className="font-medium">Collecte automatique des pièces</p>
                  <p className="text-xs text-slate-400">n8n | Webhooks + connecteur Airtable.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs text-indigo-200">Étape 03</p>
                  <p className="font-medium">Validation & scoring</p>
                  <p className="text-xs text-slate-400">
                    n8n | Appel API interne + scoring risque, notification Slack.
                  </p>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-500/20 to-sky-400/10 p-4 text-xs text-slate-200">
                <p className="font-semibold text-white">Résultat</p>
                <p>
                  Temps d&apos;onboarding réduit de <span className="text-sky-200">-58%</span> et
                  NPS +21 pts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Ce que nous construisons pour vous.
            </h2>
            <p className="text-lg text-slate-300">
              Nous combinons artefacts conversationnels et automatisations invisibles pour
              livrer des expériences fluides à vos clients comme à vos équipes internes.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="card-gradient flex h-full flex-col gap-4 rounded-3xl p-6 transition hover:border-indigo-400/40 hover:shadow-[0_20px_50px_-22px_rgba(79,70,229,0.55)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-sm text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Une méthode éprouvée, calibrée pour la vitesse.
            </h2>
            <p className="text-lg text-slate-300">
              Chaque mission Intelliwave est menée par une équipe hybride d&apos;experts IA,
              architectes n8n et product designers conversationnels.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="card-gradient flex h-full flex-col gap-4 rounded-3xl p-6 transition hover:border-sky-300/40"
              >
                <span className="inline-flex w-min whitespace-nowrap rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                  {step.badge}
                </span>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="case-studies" className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Des résultats concrets, mesurables et durables.
              </h2>
              <p className="text-lg text-slate-300">
                Nous pilotons vos indicateurs clés : satisfaction client, productivité des
                équipes et réduction de coûts opérationnels.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200">
              <Zap className="h-4 w-4" />
              ROI moyen x4 sur 12 mois
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((cas) => (
              <article
                key={cas.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-8 transition hover:border-indigo-400/40"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.18),_transparent_65%)] opacity-0 transition group-hover:opacity-100" />
                <div className="relative space-y-4">
                  <p className="text-sm uppercase tracking-[0.22em] text-indigo-200/80">
                    {cas.result}
                  </p>
                  <h3 className="text-2xl font-semibold text-white">{cas.title}</h3>
                  <p className="text-sm text-slate-300">{cas.details}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="splitline grid gap-8 py-16 md:grid-cols-[0.65fr_1fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Pourquoi choisir Intelliwave ?
            </h2>
            <p className="text-lg text-slate-300">
              Nous orchestrons la technologie pour qu&apos;elle serve vos objectifs business,
              pas l&apos;inverse.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="card-gradient rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-white">Expertise n8n certifiée</h3>
              <p className="mt-2 text-sm text-slate-300">
                Une équipe de builders reconnus par la communauté, auteurs de templates et
                contributeurs open-source.
              </p>
            </div>
            <div className="card-gradient rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-white">IA responsable</h3>
              <p className="mt-2 text-sm text-slate-300">
                Data minimisation, logs auditables, supervision humaine : vos utilisateurs
                restent au cœur du dispositif.
              </p>
            </div>
            <div className="card-gradient rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-white">Accompagnement continu</h3>
              <p className="mt-2 text-sm text-slate-300">
                Formations, documentation, support premium et optimisation mensuelle avec nos
                spécialistes conversationnels.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Questions fréquentes
            </h2>
            <p className="text-lg text-slate-300">
              Nous travaillons main dans la main avec vos équipes techniques et métier pour
              sécuriser chaque projet.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="card-gradient rounded-3xl p-6 transition hover:border-indigo-400/40"
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-2 text-sm text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="overflow-hidden rounded-3xl border border-indigo-500/40 bg-gradient-to-br from-indigo-600/80 via-indigo-500/70 to-sky-400/60 p-10 shadow-[0_30px_80px_-32px_rgba(56,189,248,0.55)]"
        >
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Prêts à surfer sur la vague conversationnelle ?
              </h2>
              <p className="text-lg text-slate-100/90">
                Partagez vos objectifs, nous revenons avec un plan d&apos;action n8n + IA
                personnalisé sous 72 heures.
              </p>
              <div className="flex flex-col gap-3 text-sm">
                <p className="inline-flex items-center gap-2 text-white/90">
                  <ShieldCheck className="h-4 w-4" />
                  Audit express offert pour tout nouveau projet.
                </p>
                <p className="inline-flex items-center gap-2 text-white/90">
                  <Zap className="h-4 w-4" />
                  Mise en production pilotée et sécurisée par nos experts.
                </p>
              </div>
            </div>
            <div className="w-full max-w-sm rounded-3xl bg-white/10 p-6 backdrop-blur">
              <form
                className="flex flex-col gap-4 text-sm"
                action="https://formsubmit.co/intelliwave@example.com"
                method="POST"
              >
                <input type="hidden" name="_next" value="https://agentic-554fb826.vercel.app/merci" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Votre nom"
                  className="w-full rounded-2xl border border-white/40 bg-white/20 px-4 py-3 text-white placeholder:text-white/60 focus:border-white/80 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Votre email professionnel"
                  className="w-full rounded-2xl border border-white/40 bg-white/20 px-4 py-3 text-white placeholder:text-white/60 focus:border-white/80 focus:outline-none"
                />
                <textarea
                  name="message"
                  required
                  placeholder="Décrivez votre projet ou les processus à automatiser"
                  rows={4}
                  className="w-full rounded-2xl border border-white/40 bg-white/20 px-4 py-3 text-white placeholder:text-white/60 focus:border-white/80 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-slate-200"
                >
                  Envoyer ma demande
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/5 bg-slate-950/80 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Intelliwave. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a className="transition hover:text-white" href="#services">
              Services
            </a>
            <a className="transition hover:text-white" href="#process">
              Méthode
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
            <a className="transition hover:text-white" href="mailto:bonjour@intelliwave.ai">
              bonjour@intelliwave.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
