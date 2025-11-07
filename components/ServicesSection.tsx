// app/components/ServicesSection.tsx
"use client";

import React from "react";

type Service = {
  title: string;
  href?: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

// --- ICONS (volledig inline SVG's, lichtgewicht, geen libs) ---
const IconPlusHome: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M3 11.5 12 4l9 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 10.5V20a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1v-9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 3h4M9 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconAc: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="4" width="18" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5.5 8h13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 17c2 0 2-2 4-2s2 2 4 2 2-2 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconBath: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="11" width="18" height="6" rx="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 11V7a2 2 0 0 1 4 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M5 17l-1 3M19 17l1 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconPaving: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="3" width="8" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="13" y="3" width="8" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="3" y="13" width="8" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="13" y="13" width="8" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const IconBoiler: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="6" y="3" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 7h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconRoof: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 12 12 5l9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 12v7h5v-5h2v5h5v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconDormer: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 12l8-6 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="8" y="12" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const IconElectrician: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M11 2L5 13h5l-1 9 6-11h-5l1-9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const IconGlass: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 3v18M16 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconInterior: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="13" width="18" height="7" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 13V8a4 4 0 0 1 8 0v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconInsulation: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 7l10 10M17 7L7 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconKitchen: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="10" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 10V6h10v4M8 14h2M14 14h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconWindows: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconTurf: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6 17V9M9 17V7M12 17V10M15 17V8M18 17V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconPlumber: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 8h8v4H4z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 10h4a4 4 0 0 1 4 4v5h-4v-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconMason: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 12h18M6 7h12M6 17h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="5" y="9" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="13" y="9" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const IconShutter: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="4" width="16" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 12h16M4 16h16M4 20h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconPaint: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 3h12v5H6z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 8v9a3 3 0 1 0 6 0V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="18" cy="16" r="2" fill="currentColor"/>
  </svg>
);

const IconFence: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M5 5l2-2 2 2v14H5V5zm10 0l2-2 2 2v14h-4V5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M3 10h18M3 14h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconConservatory: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 12l9-6 9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="6" y="12" width="12" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 12v7" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const IconDemo: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="10" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 10V7l4-3 3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconPlaster: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="5" y="5" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconTiler: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="4" width="7" height="7" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="13" y="4" width="7" height="7" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="4" y="13" width="7" height="7" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="13" y="13" width="7" height="7" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const IconVeranda: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 10h16M6 10v9M12 10v9M18 10v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3 10l9-5 9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconCarpenter: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 14l8-8 4 4-8 8H4v-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M14 6l4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconCarpenterIn: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 14l5-5 3 3-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const IconStairs: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M5 19h14M7 17h4v-3h4v-3h4V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconGarden: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 18h16M7 18c0-4 2-6 5-6s5 2 5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 6v4M9 8h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconFlooring: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 9h18M7 3h10M6 13h12M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconUnderfloorHeating: React.FC<React.SVGProps<SVGSVGElement>> = (props)=>(
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 16c0 2 2 3 3 3s3-1 3-3-2-3-3-3-3-1-3-3 2-3 3-3 3 1 3 3M13 6c0 2 2 3 3 3s3-1 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3 20h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// --- DATA ---
const services: Service[] = [
  { title: "Aanbouw of uitbouw", icon: IconPlusHome },
  { title: "Airco", icon: IconAc },
  { title: "Badkamer en sanitair", icon: IconBath },
  { title: "Bestrating", icon: IconPaving },
  { title: "CV-ketel / verwarmingsketel", icon: IconBoiler },
  { title: "Dakbedekking", icon: IconRoof },
  { title: "Dakkapel", icon: IconDormer },
  { title: "Elektricien", icon: IconElectrician },
  { title: "Glas", icon: IconGlass },
  { title: "Interieuradvies", icon: IconInterior },
  { title: "Isolatie", icon: IconInsulation },
  { title: "Keuken", icon: IconKitchen },
  { title: "Kozijnen", icon: IconWindows },
  { title: "Kunstgras", icon: IconTurf },
  { title: "Loodgieter", icon: IconPlumber },
  { title: "Metselaar", icon: IconMason },
  { title: "Rolluiken", icon: IconShutter },
  { title: "Schilder- en spuitwerken", icon: IconPaint },
  { title: "Schutting", icon: IconFence },
  { title: "Serre", icon: IconConservatory },
  { title: "Sloopwerk", icon: IconDemo },
  { title: "Stukadoor", icon: IconPlaster },
  { title: "Tegelzetter", icon: IconTiler },
  { title: "Terrasoverkapping / veranda", icon: IconVeranda },
  { title: "Timmerman", icon: IconCarpenter },
  { title: "Timmerman binnenwerk", icon: IconCarpenterIn },
  { title: "Trap", icon: IconStairs },
  { title: "Tuinaanleg", icon: IconGarden },
  { title: "Vloeren", icon: IconFlooring },
  { title: "Vloerverwarming", icon: IconUnderfloorHeating },
];

type Props = {
  title?: string;
  highlight?: string; // bv. "Bestrating" om die kaart groen te maken
};

export default function ServicesSection({ title = "Onze services", highlight }: Props) {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#0a0f1f] to-black py-16">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-10 flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
            {title}
          </h2>
          <p className="text-sm text-white/60">
            Kies een service om meer te lezen of een offerte aan te vragen.
          </p>
        </header>

        <ul
          role="list"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {services.map((s) => {
            const Active = s.title === highlight;
            return (
              <li key={s.title}>
                <a
                  href={s.href ?? "#"}
                  className={[
                    "group block rounded-2xl border border-white/10 p-5",
                    "bg-white/[0.02] hover:bg-white/[0.06] focus:bg-white/[0.08]",
                    "outline-none transition shadow-[0_1px_0_0_rgba(255,255,255,0.05)]",
                    Active ? "ring-2 ring-emerald-500 bg-emerald-500/15" : "",
                  ].join(" ")}
                  aria-label={s.title}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 group-hover:bg-white/10">
                    <s.icon className="h-6 w-6 text-white/80" />
                  </div>
                  <div className="mt-4 text-sm font-medium text-white">
                    {s.title}
                  </div>
                  <div className="mt-1 text-xs text-white/50">
                    Bekijk details
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* zachte vignette */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(80%_60%_at_50%_20%,#000_60%,transparent_100%)]" />
    </section>
  );
}
