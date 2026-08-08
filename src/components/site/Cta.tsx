import { CalendarCheck } from "lucide-react";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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
      <WhatsAppIcon
        className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
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
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
