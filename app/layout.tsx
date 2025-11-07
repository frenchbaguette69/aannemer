// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Script from "next/script";

const SITE_URL = "https://jnarbeidsbemiddeling.nl";
const SITE_NAME = "JN Arbeidsbemiddeling";
const SITE_DESC =
  "Eén aanspreekpunt voor dak, gevel en verbouwingen. Wij regelen vakmensen, planning en oplevering — vakkundig en transparant.";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Aannemer & Projectregie`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESC,
  applicationName: SITE_NAME,
  keywords: [
    "aannemer",
    "dakrenovatie",
    "gevelrenovatie",
    "verbouwing",
    "bouwproject",
    "vakmensen",
    "projectregie",
    "JN Arbeidsbemiddeling",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Aannemer & Projectregie`,
    description: SITE_DESC,
    images: [{ url: "/og/home.jpg" }], // plaats dit bestand in /public/og/home.jpg
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Aannemer & Projectregie`,
    description: SITE_DESC,
    images: ["/og/home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  category: "construction",
  creator: SITE_NAME,
  publisher: SITE_NAME,
  // Handige defaults die child pages kunnen overriden
  other: {
    "theme-color": "#0a1128",
    "color-scheme": "light",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1128",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`, // zet /public/logo.png
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

  return (
    <html lang="nl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Skip to content for a11y */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-emerald-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Ga naar hoofdinhoud
        </a>

        <div className="flex min-h-screen flex-col bg-white">
          <NavBar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>

        {/* Site-wide Organization JSON-LD */}
        <Script
          id="org-jsonld-global"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
