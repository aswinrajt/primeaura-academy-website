import { useEffect, useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
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
        scrolled ? "bg-background/85 border-border border-b backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span className="surface-navy grid h-10 w-10 shrink-0 place-items-center rounded-xl">
            <GraduationCap className="text-gold h-5 w-5" strokeWidth={1.75} />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-lg leading-none font-semibold tracking-tight">
              PrimeAura
            </span>
            <span className="text-muted-foreground block text-[0.68rem] tracking-[0.18em] uppercase">
              Academy
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7 text-sm font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-muted-foreground hover:text-foreground relative transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
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
          onClick={() => setOpen((v) => !v)}
          className="border-border text-foreground grid h-10 w-10 place-items-center rounded-xl border lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="bg-background/95 border-border border-t px-5 pt-4 pb-6 backdrop-blur-xl lg:hidden">
          <ul className="grid gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="hover:bg-secondary block rounded-lg px-3 py-3 text-base font-medium"
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
