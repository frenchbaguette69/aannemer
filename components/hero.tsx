import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative isolate w-full overflow-hidden bg-neutral-950">
      {/* Achtergrondafbeelding */}
      <Image
        src="/montagesinhuis.jpg"
        alt="dak en gevel renovatie"
        width={1920}
        height={1080}
        priority
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[70vh] items-center">
        <div className="mx-auto flex w-full max-w-7xl justify-start px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Eén aanspreekpunt voor jouw hele bouwproject
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80">
              Of het nu gaat om een nieuw dak, gevelrenovatie of complete verbouwing wij regelen alles.  
              Dankzij ons vaste netwerk van betrouwbare vakmensen wordt jouw project vakkundig uitgevoerd
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400"
              >
                Vraag vrijblijvend advies
              </Link>

              <a
                href="tel:+310851091112"
                className="text-base font-semibold text-white underline-offset-4 hover:underline"
              >
                Bel direct: +31 (085) 109 1112
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Zachte vignette onderaan */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
    </section>
  );
};

export default Hero;
