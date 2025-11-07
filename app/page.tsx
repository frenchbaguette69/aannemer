import Hero from "@/components/hero";
import ServicesSection from "@/components/ServicesSection";
import Link from "next/link";

const checks = [
  "Uitgebreid netwerk van topvakmensen in elke discipline",
  "Eén aanspreekpunt: wij regelen alle uitvoerders",
  "Van offerte tot oplevering volledig gecoördineerd",
  "Kwaliteit gegarandeerd, zonder onverwachte kosten",
];

const steps = [
  {
    title: "Kennismaking & opname",
    text:
      "We luisteren naar je plannen, meten in en adviseren over de beste aanpak. Jij krijgt een helder beeld van mogelijkheden, materialen en planning.",
  },
  {
    title: "Selectie van specialisten",
    text:
      "Via ons vaste netwerk koppelen we de juiste vakmensen aan je project dakdekkers, timmerlieden, installateurs of stukadoors, allemaal met bewezen kwaliteit.",
  },
  {
    title: "Coördinatie & oplevering",
    text:
      "Wij blijven aanspreekpunt tijdens de hele uitvoering. We sturen aan, bewaken planning en zorgen dat alles volgens afspraak wordt opgeleverd.",
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Hero />

      {/* Propositie */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="relative overflow-hidden rounded-[32px] bg-white p-12 shadow-[0_25px_80px_-30px_rgba(2,6,23,0.15)] ring-1 ring-slate-200">
            {/* zachte accentglow */}
            <div className="pointer-events-none absolute -top-24 right-10 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-700/70">
                  Regie in bouw & renovatie
                </p>
                <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                  Eén aanspreekpunt, alle vakmensen jouw project perfect geregeld
                </h1>
                <p className="mt-5 text-lg text-slate-600">
                  Of het nu gaat om een nieuw dak, gevelrenovatie of complete verbouwing wij zetten ons netwerk van
                  betrouwbare specialisten in om jouw project van A tot Z te regelen. Jij hebt maar één contactpersoon,
                  wij doen de rest.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
                  >
                    Vraag vrijblijvend advies
                  </Link>
                  <Link
                    href="/projecten"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-base font-semibold text-slate-900 transition hover:border-slate-900"
                  >
                    Bekijk onze projecten
                  </Link>
                </div>

                {/* nette stats */}
                <dl className="mt-10 grid grid-cols-3 gap-6">
                  <div>
                    <dd className="text-3xl font-semibold">120+</dd>
                    <dt className="mt-1 text-xs uppercase tracking-wide text-slate-500">Afgeronde projecten</dt>
                  </div>
                  <div className="border-l border-slate-200 pl-6">
                    <dd className="text-3xl font-semibold">48u</dd>
                    <dt className="mt-1 text-xs uppercase tracking-wide text-slate-500">
                      Reactietijd bij aanvragen
                    </dt>
                  </div>
                  <div className="border-l border-slate-200 pl-6">
                    <dd className="text-3xl font-semibold">9,6</dd>
                    <dt className="mt-1 text-xs uppercase tracking-wide text-slate-500">Klantwaardering</dt>
                  </div>
                </dl>
              </div>

              {/* Concierge-lijst */}
              <div className="md:col-span-5 md:border-l md:border-slate-200 md:pl-10">
                <h3 className="text-xl font-semibold">De kracht van ons netwerk</h3>
                <p className="mt-2 text-slate-600">
                  Geen losse aannemers meer, maar één partij die het totale project regisseert en afstemt.
                </p>
                <ul className="mt-6 space-y-3">
                  {checks.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <svg aria-hidden viewBox="0 0 24 24" className="mt-1 h-5 w-5 flex-none text-emerald-500">
                        <path
                          d="M20 6L9 17l-5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-slate-700">{c}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 p-4 ring-1 ring-emerald-100">
                  <p className="text-sm text-emerald-900">
                    “Van dak tot interieurafwerking één telefoontje en wij zorgen dat het wordt uitgevoerd door de
                    beste mensen uit ons netwerk.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aanpak — timeline */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-0 md:pt-0">
          <div className="mx-auto max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-700/70">Onze werkwijze</p>
            <h2 className="mt-3 text-3xl font-semibold">Van plan tot oplevering strak gecoördineerd</h2>

            <ol className="mt-10 space-y-10">
              {steps.map((s, i) => (
                <li key={s.title} className="relative pl-10">
                  {/* lijn */}
                  {i !== steps.length - 1 && (
                    <span className="absolute left-[11px] top-7 h-[calc(100%-1.75rem)] w-px bg-slate-200" />
                  )}
                  {/* bullet */}
                  <span className="absolute left-0 top-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-slate-600">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Services */}
      <ServicesSection />

      {/* Slot / CTA */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-20">
          <div className="rounded-[28px] bg-gradient-to-r from-emerald-50 to-teal-50 p-10 ring-1 ring-emerald-100">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-semibold text-emerald-900">
                  Jij wilt bouwen, wij regelen het.
                </h3>
                <p className="mt-2 text-emerald-900/80">
                  Eén contactpersoon, één planning, één factuur wij zorgen dat de juiste mensen op het juiste moment
                  aan jouw project werken.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-3 text-white shadow-md shadow-emerald-600/30 transition hover:bg-emerald-500"
                >
                  Vraag een offerte aan
                </Link>
                <Link
                  href="/over-ons"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-300 bg-white px-7 py-3 text-emerald-900 transition hover:border-emerald-700"
                >
                  Meer over onze aanpak
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
