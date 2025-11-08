import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  "Arbeidsbemiddeling", "Projectondersteuning", "Technische staffing",
];

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logos/JNArbeidsBemiddeling.png"
              alt="JN Arbeidsbemiddeling logo"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-sm text-slate-500">
            Premium arbeidsbemiddeling voor bouw- en techniekopdrachten in Nederland en België.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Navigatie</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="transition hover:text-slate-900" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Diensten</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {serviceLinks.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Bedrijfsgegevens</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>Handelsnaam: <span className="font-semibold text-slate-900">JN Arbeidsbemiddeling</span></li>
            <li>Omschrijving: Het bemiddelen tussen opdrachten en uitvoerende werkzaamheden in de bouw en installatietechniek.</li>
            <li>KVK-nummer: <span className="font-semibold text-slate-900">94536376</span></li>
            <li>Rechtsvorm: Eenmanszaak</li>
            <li>Vestigingstype: Hoofdvestiging</li>
            <li>Vestigingsnummer: 000059997125</li>
            <li>Adres: Hugo van der Goeslaan 2, 5613 LG Eindhoven</li>
            <li>Telefonisch: <a className="font-semibold text-slate-900" href="tel:+310851091112">+31 (085) 109 1112</a></li>
            <li>E-mail: <a className="font-semibold text-slate-900" href="mailto:info@jnarbeidsbemiddeling.nl">info@jnarbeidsbemiddeling.nl</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-slate-500">
  © {new Date().getFullYear()} JN Arbeidsbemiddeling. Alle rechten voorbehouden. <br />
  <p className="text-white">Website laten maken door{" "}</p>
  <a
    href="https://upseo.nl"
    className="text-white"
    target="_blank"
    rel="dofollow"
  >
    UPSEO
  </a>
  .
</div>

    </footer>
  );
}
