import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Over ons | JN Aannemers & Projectregie",
  description:
    "JN Arbeidsbemiddeling is jouw aannemer met netwerk: één aanspreekpunt voor dak, gevel en verbouwingen. Wij regelen vakmensen, planning en oplevering — vakkundig en transparant.",
  alternates: { canonical: "https://jnarbeidsbemiddeling.nl/over-ons" },
  openGraph: {
    title: "Over ons | JN Aannemers & Projectregie",
    description:
      "Eén aanspreekpunt voor jouw hele bouwproject. Wij regelen betrouwbare vakmensen en houden volledige regie over kwaliteit en planning.",
    url: "https://jnarbeidsbemiddeling.nl/over-ons",
    siteName: "JN Arbeidsbemiddeling",
    type: "website",
    images: [{ url: "https://jnarbeidsbemiddeling.nl/og/over-ons.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Over ons | JN Aannemers & Projectregie",
    description:
      "Eén aanspreekpunt voor jouw bouwproject. Van dak tot complete verbouwing: JN regelt het met vakmensen uit ons netwerk.",
    images: ["https://jnarbeidsbemiddeling.nl/og/over-ons.jpg"],
  },
};

const values = [
  {
    title: "Transparantie",
    description:
      "Heldere offertes, vaste afspraken en duidelijke communicatie. Geen verborgen kosten of verrassingen achteraf.",
  },
  {
    title: "Snel schakelen",
    description:
      "Dankzij korte lijnen en een sterk netwerk kunnen we binnen enkele dagen het juiste team inschakelen.",
  },
  {
    title: "Betrokken & persoonlijk",
    description:
      "We kennen onze vakmensen persoonlijk, blijven aanspreekpunt tot en met oplevering en staan altijd klaar voor nazorg.",
  },
];

const faqs = [
  {
    q: "Welke werkzaamheden voeren jullie uit?",
    a: "Wij verzorgen dakwerk (nieuw en renovatie), gevel- en metselwerk, timmerwerk, badkamer- en keukenrenovaties, stukadoors- en schilderwerk, isolatie en complete verbouwingen. Jij hebt één aanspreekpunt, wij regelen alles.",
  },
  {
    q: "Werken jullie met vaste partners?",
    a: "Ja. We werken met een vast netwerk van gecertificeerde en gecontroleerde vakmensen. Iedereen is geselecteerd op kwaliteit, betrouwbaarheid en planning.",
  },
  {
    q: "Hoe ziet jullie traject eruit?",
    a: "We starten met een vrijblijvende opname, stellen een duidelijke offerte op en plannen de juiste specialisten in. Tijdens de uitvoering blijven we aanspreekpunt en bewaken we kwaliteit en planning.",
  },
  {
    q: "Wat zijn de doorlooptijden?",
    a: "Kleine projecten kunnen vaak binnen 1 à 2 weken starten. Grotere trajecten plannen we in overleg. We communiceren tijdig over levertijden en afhankelijkheden.",
  },
];

export default function OverOnsPage() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JN Arbeidsbemiddeling",
    url: "https://jnarbeidsbemiddeling.nl",
    logo: "https://jnarbeidsbemiddeling.nl/logo.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+31 85 109 1112",
        contactType: "customer service",
        areaServed: "NL",
        availableLanguage: ["Dutch"],
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* Introductie */}
      <section className="rounded-3xl border border-slate-200 bg-white px-8 py-12 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700/80">
          Over ons
        </p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900">
          Eén aanspreekpunt voor jouw bouwproject
        </h1>
        <p className="mt-6 text-lg text-slate-600">
          JN Arbeidsbemiddeling is ontstaan vanuit de behoefte aan échte
          betrouwbaarheid in de bouw. Wij koppelen de juiste vakmensen aan jouw
          project en nemen de volledige regie: van selectie en planning tot
          kwaliteitsbewaking en oplevering. Zo weet jij dat het goed komt —
          zonder stress of losse eindjes.
        </p>

        <p className="mt-6 text-slate-600">
          Of het nu gaat om{" "}
          <Link
            href="/diensten/dak"
            className="font-semibold text-emerald-700 hover:underline"
          >
            dakwerk
          </Link>
          ,{" "}
          <Link
            href="/diensten/gevel"
            className="font-semibold text-emerald-700 hover:underline"
          >
            gevelrenovaties
          </Link>{" "}
          of{" "}
          <Link
            href="/diensten/verbouwing"
            className="font-semibold text-emerald-700 hover:underline"
          >
            complete verbouwingen
          </Link>
          : wij regelen alles met één aanspreekpunt. Bekijk{" "}
          <Link
            href="/projecten"
            className="font-semibold text-emerald-700 hover:underline"
          >
            onze projecten
          </Link>{" "}
          of{" "}
          <Link
            href="/contact"
            className="font-semibold text-emerald-700 hover:underline"
          >
            plan direct een gesprek
          </Link>
          .
        </p>
      </section>

      {/* Waarden & Aanpak */}
      <section className="mt-14 grid gap-10 md:grid-cols-2">
        {/* Waarden */}
        <div className="rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">
            Waar wij voor staan
          </h2>
          <p className="mt-4 text-slate-600">
            We investeren in duurzame relaties. Kwaliteit, eerlijkheid en
            betrouwbaarheid vormen de kern van alles wat we doen.
          </p>
          <ul className="mt-6 space-y-4">
            {values.map((value) => (
              <li
                key={value.title}
                className="rounded-xl border border-slate-200 bg-white p-4"
              >
                <p className="text-lg font-semibold text-slate-900">
                  {value.title}
                </p>
                <p className="text-slate-600">{value.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Aanpak */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Onze aanpak</h2>
          <ol className="mt-6 space-y-5 text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">
                1. Opname & advies
              </span>
              <p>
                We komen langs om de situatie te bekijken en bespreken je
                wensen. Je ontvangt een eerlijk advies over materialen,
                mogelijkheden en planning.
              </p>
            </li>
            <li>
              <span className="font-semibold text-slate-900">
                2. Selectie & planning
              </span>
              <p>
                We schakelen de juiste specialisten uit ons netwerk in en
                stellen een heldere planning op. Jij hebt één contactpersoon.
              </p>
            </li>
            <li>
              <span className="font-semibold text-slate-900">
                3. Uitvoering & oplevering
              </span>
              <p>
                Tijdens de uitvoering houden we strak toezicht op kwaliteit,
                veiligheid en voortgang. Alles wordt netjes opgeleverd volgens
                afspraak.
              </p>
            </li>
          </ol>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-6 py-2 text-sm font-semibold text-emerald-900 transition hover:border-emerald-600"
            >
              Plan een opname
            </Link>
          </div>
        </div>
      </section>

      {/* Veelgestelde vragen */}
      <section className="mt-14 rounded-3xl border border-slate-200 bg-white px-8 py-10">
        <h2 className="text-2xl font-semibold text-slate-900">
          Veelgestelde vragen
        </h2>
        <div className="mt-6 divide-y divide-slate-200">
          {faqs.map((f) => (
            <div key={f.q} className="py-5">
              <h3 className="text-base font-semibold text-slate-900">{f.q}</h3>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-600">
          Staat jouw vraag er niet bij?{" "}
          <Link
            href="/contact"
            className="font-semibold text-emerald-700 hover:underline"
          >
            Neem contact op
          </Link>
          , we denken graag mee.
        </p>
      </section>

      {/* JSON-LD structured data */}
      <Script
        id="org-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
