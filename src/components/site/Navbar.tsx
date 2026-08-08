import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/primeaura-logo.png.asset.json";
import { CtaButtons } from "./Cta";

const links = [
  { label: "Home", href: "#home" },
  { label: "Classes", href: "#classes" },
  { label: "Mentors", href: "#mentors" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 border-border border-b shadow-[var(--shadow-soft)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8 lg:py-4">
        <a href="#home" className="flex min-w-0 items-center gap-2.5">
          <img
            src={logo.url}
            alt="PrimeAura Academy logo"
            width={44}
            height={44}
            className="h-10 w-10 shrink-0 rounded-full lg:h-11 lg:w-11"
          />
          <span className="min-w-0">
            <span className="block truncate text-[1.05rem] leading-tight font-bold tracking-tight">
              Prime<span className="text-gold">Aura</span>
            </span>
            <span className="text-muted-foreground block text-[0.6rem] font-semibold tracking-[0.25em] uppercase">
              Academy
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          <ul className="flex items-center gap-7 text-sm font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-muted-foreground hover:text-foreground after:bg-gold relative transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <CtaButtons size="sm" only="demo" />
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="border-border bg-card text-foreground grid h-10 w-10 place-items-center rounded-xl border lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="bg-background/95 border-border animate-in fade-in slide-in-from-top-2 border-t px-5 pt-4 pb-6 backdrop-blur-xl duration-200 lg:hidden">
          <ul className="grid gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="hover:bg-secondary block rounded-xl px-3 py-3 text-base font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <CtaButtons full />
          </div>
        </div>
      )}
    </header>
  );
}
