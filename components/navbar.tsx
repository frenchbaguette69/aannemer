"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";

const links = [
  { href: "/", label: "Home" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export function NavBar() {
  const pathname = usePathname();

  const renderLinks = (variant: "desktop" | "mobile" = "desktop") => (
    <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
      {links.map((link) => {
        const isActive = pathname === link.href;
        const baseClasses = "text-base font-medium transition-colors";
        const activeClasses = isActive
          ? "text-slate-950"
          : "text-slate-500 hover:text-slate-900";

        return (
          <li key={link.href}>
            {variant === "mobile" ? (
              <SheetClose asChild>
                <Link
                  className={`${baseClasses} ${activeClasses} inline-flex w-full text-left`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </SheetClose>
            ) : (
              <Link className={`${baseClasses} ${activeClasses}`} href={link.href}>
                {link.label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <header className="sticky top-0 z-40 shadow-md bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logos/JNArbeidsBemiddeling.png"
            alt="JN Arbeidsbemiddeling logo"
            width={140}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:block">{renderLinks("desktop")}</nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              aria-label="Open navigatie"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200"
            >
              <div className="space-y-1.5">
                <span className="block h-0.5 w-6 bg-slate-900" />
                <span className="block h-0.5 w-6 bg-slate-900" />
                <span className="block h-0.5 w-6 bg-slate-900" />
              </div>
            </SheetTrigger>
            <SheetContent>
              <div className="flex items-center justify-between">
                <Image
            src="/logos/JNArbeidsBemiddeling.png"
            alt="JN Arbeidsbemiddeling logo"
            width={140}
            height={40}
            priority
            className="h-10 w-auto"
          />
                <SheetClose className="rounded-md border border-slate-200 px-3 py-1 text-sm font-medium text-slate-600">
                  Sluiten
                </SheetClose>
              </div>
              <div className="mt-8">{renderLinks("mobile")}</div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
