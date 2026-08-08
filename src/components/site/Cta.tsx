import { MessageCircle, CalendarCheck } from "lucide-react";

export const PHONES: [string, string] = ["96057 66178", "73563 47117"];
export const WHATSAPP_URL = "https://wa.me/919605766178?text=Hi%20PrimeAura%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20class.";

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
  const pad = size === "sm" ? "px-4 py-2.5 text-sm" : "px-6 py-3.5 text-[0.95rem]";
  const base = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ${pad} ${
    full ? "w-full" : ""
  }`;

  const demo = (
    <a
      key="demo"
      href="#demo"
      className={`${base} bg-primary text-primary-foreground hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5`}
    >
      <CalendarCheck className="h-4 w-4" strokeWidth={2} />
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
          ? "bg-gold text-gold-foreground hover:-translate-y-0.5"
          : "border-border text-foreground hover:border-gold hover:bg-accent border bg-transparent"
      }`}
    >
      <MessageCircle className="h-4 w-4" strokeWidth={2} />
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
      <p className="text-muted-foreground text-xs font-semibold tracking-[0.22em] uppercase">
        {eyebrow}
      </p>
      <div className={`rule-gold mt-4 ${centered ? "mx-auto" : ""}`} />
      <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="text-muted-foreground mt-4 text-base leading-relaxed">{subtitle}</p>}
    </div>
  );
}
