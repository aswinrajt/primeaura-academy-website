import { MessageCircle, CalendarCheck } from "lucide-react";

export const PHONES: [string, string] = ["96057 66178", "73563 47117"];
export const tel = (p: string) => `tel:+91${p.replace(/\s/g, "")}`;

const DEMO_MSG = encodeURIComponent(
  "Hi PrimeAura Academy, I'd like to book a free demo class.",
);
export const waLink = (phone: string) =>
  `https://wa.me/91${phone.replace(/\s/g, "")}?text=${DEMO_MSG}`;
export const WHATSAPP_URL = waLink(PHONES[0]);


export function CtaButtons({
  size = "md",
  full = false,
  only,
  inverted = false,
}: {
  size?: "sm" | "md";
  full?: boolean;
  only?: "demo" | "whatsapp";
  inverted?: boolean;
}) {
  const pad = size === "sm" ? "px-5 py-2.5 text-sm" : "px-7 py-3.5 text-[0.95rem]";
  const base = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${pad} ${
    full ? "w-full" : ""
  }`;

  const demo = (
    <a
      key="demo"
      href="#demo"
      className={`${base} ${
        inverted
          ? "bg-gold text-gold-foreground shadow-[var(--shadow-gold)] hover:-translate-y-0.5"
          : "bg-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
      }`}
    >
      <CalendarCheck
        className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
        strokeWidth={2}
      />
      Book Free Demo
    </a>
  );

  const whatsapp = (
    <a
      key="wa"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className={`${base} ${
        inverted
          ? "border border-current/30 hover:border-current"
          : "border-border text-foreground hover:border-gold hover:bg-secondary border bg-transparent hover:-translate-y-0.5"
      }`}
    >
      <MessageCircle
        className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
        strokeWidth={2}
      />
      WhatsApp Us
    </a>
  );

  if (only === "demo") return demo;
  if (only === "whatsapp") return whatsapp;

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${full ? "" : "sm:items-center"}`}>
      {demo}
      {whatsapp}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <div className={`rule-gold mt-4 ${centered ? "mx-auto" : ""}`} />
      <h2 className="mt-5 text-[1.75rem] leading-[1.15] sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground mt-4 text-[0.95rem] leading-relaxed sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/** Mobile-only sticky conversion bar. */
export function MobileCtaBar() {
  return (
    <div className="border-border bg-background/90 fixed inset-x-0 bottom-0 z-50 border-t px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href="#demo"
          className="bg-primary text-primary-foreground inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold"
        >
          <CalendarCheck className="h-4 w-4" />
          Free Demo
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="bg-gold text-gold-foreground inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
