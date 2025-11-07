import Script from "next/script";

export const metadata = {
  title: "Contact | JN Arbeidsbemiddeling",
  description:
    "Neem contact op met JN Arbeidsbemiddeling. Eén aanspreekpunt voor jouw bouwproject. Bel, mail of laat je gegevens achter voor een snelle reactie binnen één werkdag.",
  alternates: { canonical: "https://jnarbeidsbemiddeling.nl/contact" },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* Intro */}
      <section className="rounded-3xl py-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700/80">
          Contact
        </p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900">
          Neem gerust contact met ons op
        </h1>
        <p className="mt-4 text-slate-600">
          Bel of mail ons direct. Liever dat wij contact opnemen? Laat je
          gegevens achter en we reageren binnen één werkdag.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Bel direct
            </p>
            <a
              href="tel:+310851091112"
              className="mt-2 block text-2xl font-bold text-slate-900 hover:text-emerald-600"
            >
              +31 (085) 109 1112
            </a>
          </div>
          <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Mail ons
            </p>
            <a
              href="mailto:info@jnarbeidsbemiddeling.nl"
              className="mt-2 block text-2xl font-bold text-slate-900 hover:text-emerald-600"
            >
              info@jnarbeidsbemiddeling.nl
            </a>
          </div>
        </div>
      </section>

      {/* Contactformulier */}
      <section className="mt-12 rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">
          Stuur ons een bericht
        </h2>
        <form
          className="mt-8 space-y-6"
          action="/api/contact"
          method="POST"
          aria-label="Contactformulier"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Naam
              <input
                required
                type="text"
                name="name"
                className="rounded-xl border border-slate-200 px-4 py-3 text-base text-slate-900 focus:border-emerald-600 focus:outline-none"
                placeholder="Voor- en achternaam"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Bedrijf
              <input
                type="text"
                name="company"
                className="rounded-xl border border-slate-200 px-4 py-3 text-base text-slate-900 focus:border-emerald-600 focus:outline-none"
                placeholder="Bedrijfsnaam (optioneel)"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            E-mail
            <input
              required
              type="email"
              name="email"
              className="rounded-xl border border-slate-200 px-4 py-3 text-base text-slate-900 focus:border-emerald-600 focus:outline-none"
              placeholder="naam@bedrijf.nl"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Bericht
            <textarea
              required
              name="message"
              rows={5}
              className="rounded-xl border border-slate-200 px-4 py-3 text-base text-slate-900 focus:border-emerald-600 focus:outline-none"
              placeholder="Vertel ons waar je mee geholpen wilt worden"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-500 md:w-auto"
          >
            Verstuur bericht
          </button>
        </form>
      </section>

      {/* LocalBusiness JSON-LD */}
      <Script
        id="localbusiness-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Contractor",
            name: "JN Arbeidsbemiddeling",
            url: "https://jnarbeidsbemiddeling.nl",
            telephone: "+31 85 109 1112",
            email: "info@jnarbeidsbemiddeling.nl",
            address: {
              "@type": "PostalAddress",
              addressCountry: "NL",
            },
            areaServed: { "@type": "Country", name: "Netherlands" },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
