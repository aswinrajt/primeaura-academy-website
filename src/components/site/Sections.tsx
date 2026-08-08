import {
  BadgeCheck,
  Video,
  UserRoundCheck,
  ClipboardCheck,
  HelpCircle,
  Target,
  Sigma,
  FlaskConical,
  Atom,
  Beaker,
  Leaf,
  BookOpenText,
  Globe2,
  Laptop,
  Sparkles,
  MapPin,
  Phone,
  GraduationCap,
  Check,
  CalendarCheck,
  MessageCircle,
  Globe,
} from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";
import logo from "@/assets/primeaura-logo.png.asset.json";

import { CtaButtons, SectionHeading, PHONES, WHATSAPP_URL, tel } from "./Cta";



export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-14 sm:pt-32 lg:pt-36 lg:pb-24">
      <div aria-hidden className="page-glow pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="bg-gold/10 pointer-events-none absolute top-24 -left-40 h-96 w-96 rounded-full blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1.08fr_1fr] lg:gap-14 lg:px-8">
        <div className="reveal text-center lg:text-left">
          <span className="border-border bg-card/80 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.16em] uppercase backdrop-blur">
            <Sparkles className="text-gold h-3.5 w-3.5" />
            Learn. Understand. Excel.
          </span>

          <h1 className="mt-6 text-[2.15rem] leading-[1.06] font-semibold sm:text-5xl lg:text-[3.6rem]">
            Expert Guidance.
            <br />
            <span className="text-gold-gradient">Better Learning.</span>
          </h1>

          <p className="text-muted-foreground mx-auto mt-5 max-w-xl text-[1rem] leading-relaxed sm:text-lg lg:mx-0">
            Live online tuition with expert mentors, personal attention and exam-focused learning.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
            {["Classes 1–10", "Plus One", "Plus Two"].map((c) => (
              <span
                key={c}
                className="border-border bg-card rounded-full border px-3.5 py-1.5 text-[0.8rem] font-semibold sm:text-sm"
              >
                {c}
              </span>
            ))}
            {["Kerala State Board", "CBSE"].map((c) => (
              <span
                key={c}
                className="bg-accent text-accent-foreground rounded-full px-3.5 py-1.5 text-[0.8rem] font-semibold sm:text-sm"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="text-muted-foreground mt-5 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-[0.82rem] font-medium lg:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <Globe className="text-gold h-4 w-4" />
              Online — available anywhere
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="text-gold h-4 w-4" />
              Offline — Calicut only
            </span>
          </div>

          <div className="mt-7 flex justify-center lg:justify-start">
            <CtaButtons />
          </div>


          <dl className="border-border mt-10 grid grid-cols-3 gap-3 border-t pt-6 text-center lg:text-left">
            {[
              { k: "Live", v: "Interactive classes" },
              { k: "1–12", v: "Classes covered" },
              { k: "Free", v: "First demo class" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-gold text-lg font-bold sm:text-xl">{s.k}</dt>
                <dd className="text-muted-foreground mt-0.5 text-[0.72rem] leading-snug sm:text-xs">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="surface-navy relative overflow-hidden rounded-[2rem] p-6 shadow-[var(--shadow-lift)] sm:p-8">
            <div
              aria-hidden
              className="bg-gold/20 pointer-events-none absolute -top-16 -right-10 h-52 w-52 rounded-full blur-3xl"
            />
            <div className="relative rounded-[1.5rem] bg-white/95 p-4 sm:p-6">
              <img
                src={heroIllustration}
                alt="Illustration of a book, graduation cap, compass, atom and progress graph"
                width={1024}
                height={1024}
                className="float-slow mx-auto h-auto w-full"
              />
            </div>
            <div className="relative mt-5 flex items-center justify-between gap-3">
              <p className="text-sm font-semibold">Online & offline batches</p>
              <span className="bg-gold text-gold-foreground rounded-full px-3 py-1 text-[0.7rem] font-bold tracking-wide uppercase">
                Enrolling
              </span>
            </div>
          </div>

          <div className="border-border bg-card absolute -bottom-5 left-2 hidden rounded-2xl border p-3.5 shadow-[var(--shadow-soft)] sm:left-6 sm:block sm:p-4">
            <p className="eyebrow">Free</p>
            <p className="mt-1 text-[0.82rem] font-semibold sm:text-sm">
              Demo class for every new student
            </p>
          </div>
        </div>
      </div>
    </section>
  );

}

const reasons = [
  {
    icon: BadgeCheck,
    title: "Expert & Qualified Mentors",
    text: "Subject specialists who teach with clarity and patience, class after class.",
  },
  {
    icon: Video,
    title: "Live Interactive Classes",
    text: "Real-time sessions where students ask, answer and stay engaged throughout.",
  },
  {
    icon: UserRoundCheck,
    title: "Personal Attention",
    text: "Small batches so every student is seen, heard and guided individually.",
  },
  {
    icon: ClipboardCheck,
    title: "Regular Tests",
    text: "Periodic assessments that track progress and highlight what to work on next.",
  },
  {
    icon: HelpCircle,
    title: "Doubt Clearing",
    text: "Dedicated doubt sessions so no question is left unanswered.",
  },
  {
    icon: Target,
    title: "Exam Preparation",
    text: "Focused revision, model papers and exam strategy for board confidence.",
  },
];

export function WhyChoose() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why PrimeAura"
          title="A calmer, sharper way to learn"
          subtitle="Everything we do is built around one goal — students who genuinely understand what they study."
        />
        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <article key={title} className="card-premium p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="surface-navy grid h-11 w-11 place-items-center rounded-2xl">
                  <Icon className="text-gold h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="text-muted-foreground/40 font-display text-2xl leading-none font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-[1.05rem] sm:text-lg">{title}</h3>
              <p className="text-muted-foreground mt-2.5 text-sm leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const subjects = [
  { icon: Sigma, name: "Mathematics" },
  { icon: FlaskConical, name: "Science" },
  { icon: Atom, name: "Physics" },
  { icon: Beaker, name: "Chemistry" },
  { icon: Leaf, name: "Biology" },
  { icon: BookOpenText, name: "English" },
  { icon: Globe2, name: "Social Science" },
  { icon: Laptop, name: "Computer Science" },
  { icon: GraduationCap, name: "Other Subjects" },
];

export function Classes() {
  return (
    <section
      id="classes"
      className="border-border bg-secondary/40 border-y py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Classes & Subjects"
          title="Classes 1–10, Plus One and Plus Two"
          subtitle="Kerala State Board and CBSE syllabuses, taught by mentors who specialise in each subject."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-3">
          {subjects.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="card-premium flex items-center gap-3 p-4 sm:gap-4 sm:p-5"
            >
              <span className="bg-accent grid h-10 w-10 shrink-0 place-items-center rounded-xl sm:h-11 sm:w-11">
                <Icon className="text-accent-foreground h-5 w-5" strokeWidth={1.75} />
              </span>
              <p className="min-w-0 truncate text-[0.85rem] font-semibold sm:text-base">{name}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <CtaButtons />
        </div>
      </div>
    </section>
  );
}

const mentors = [
  { name: "Mentor Name", subject: "Subject · Classes" },
  { name: "Mentor Name", subject: "Subject · Classes" },
  { name: "Mentor Name", subject: "Subject · Classes" },
  { name: "Mentor Name", subject: "Subject · Classes" },
];

const mentorPromises = [
  "Every class is taken by a subject mentor, not a substitute",
  "Small batches so each student gets time to ask questions",
  "You meet the mentor in the free demo before you decide",
];

export function Mentors() {
  return (
    <section id="mentors" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Mentors"
          title="The people behind every class"
          subtitle="Mentor profiles are placeholders for now and can be updated with real names, photos and details anytime."
        />

        <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
          {mentorPromises.map((p) => (
            <li
              key={p}
              className="border-border bg-card flex items-start gap-2.5 rounded-2xl border p-4 text-sm leading-relaxed"
            >
              <Check className="text-gold mt-0.5 h-4 w-4 shrink-0" />
              <span className="text-muted-foreground">{p}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-4">
          {mentors.map((m, i) => (
            <article key={i} className="card-premium p-5 text-center sm:p-6">
              <div className="border-gold/40 bg-secondary mx-auto grid h-16 w-16 place-items-center rounded-full border border-dashed sm:h-20 sm:w-20">
                <UserRoundCheck
                  className="text-muted-foreground h-6 w-6 sm:h-7 sm:w-7"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="mt-4 text-[0.98rem] sm:mt-5 sm:text-lg">{m.name}</h3>
              <p className="text-muted-foreground mt-1 text-[0.82rem] sm:text-sm">{m.subject}</p>
              <p className="text-muted-foreground/70 mt-3 text-[0.7rem] sm:mt-4 sm:text-xs">
                Profile details coming soon
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButtons />
        </div>
      </div>
    </section>
  );
}



const modes = [
  {
    icon: Globe,
    title: "Online Classes",
    availability: "Available anywhere",
    note: "Join live from any city or country — all you need is a phone or laptop.",
    points: [
      "Live interactive sessions from home",
      "Flexible batch timings",
      "Doubt clearing and revision support",
    ],
    highlight: true,
  },
  {
    icon: MapPin,
    title: "Offline Classes",
    availability: "Calicut only",
    note: "In-person batches are available at our Calicut centre and nowhere else.",
    points: [
      "In-person classroom learning",
      "Face-to-face mentor guidance",
      "Structured study environment",
    ],
    highlight: false,
  },
];

export function Modes() {
  return (
    <section
      id="modes"
      className="border-border bg-secondary/40 border-y py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Learning Modes"
          title="Online anywhere. Offline in Calicut."
          subtitle="Choose the format that fits your child's routine — the teaching quality stays the same."
        />
        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-2">
          {modes.map(({ icon: Icon, title, availability, note, points, highlight }) => (
            <article
              key={title}
              className={`flex flex-col rounded-3xl p-7 sm:p-9 lg:p-10 ${
                highlight
                  ? "surface-navy shadow-[var(--shadow-lift)]"
                  : "border-border bg-card border shadow-[var(--shadow-soft)]"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${
                    highlight ? "bg-gold text-gold-foreground" : "bg-secondary text-primary"
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-[0.68rem] font-bold tracking-[0.12em] uppercase ${
                    highlight
                      ? "bg-gold text-gold-foreground"
                      : "bg-accent text-accent-foreground"
                  }`}
                >
                  {availability}
                </span>
              </div>
              <h3 className="mt-6 text-xl sm:text-2xl">{title}</h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  highlight ? "opacity-85" : "text-muted-foreground"
                }`}
              >
                {note}
              </p>
              <ul className="mt-6 grid gap-3">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm leading-relaxed">
                    <Check className="text-gold mt-0.5 h-4 w-4 shrink-0" />
                    <span className={highlight ? "opacity-90" : "text-muted-foreground"}>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                <a
                  href="#demo"
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5 ${
                    highlight
                      ? "bg-gold text-gold-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  <CalendarCheck className="h-4 w-4" />
                  Book Free Demo
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors duration-300 ${
                    highlight
                      ? "border-current/30 hover:border-current"
                      : "border-border hover:border-gold hover:bg-secondary"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


export function DemoCta() {
  return (
    <section id="demo" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="surface-navy relative overflow-hidden rounded-[1.75rem] px-6 py-12 text-center sm:rounded-[2rem] sm:px-12 sm:py-16 lg:py-20">
          <div
            aria-hidden
            className="bg-gold/20 pointer-events-none absolute -top-20 -right-16 h-72 w-72 rounded-full blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-gold text-[0.7rem] font-bold tracking-[0.22em] uppercase">
              Free Demo Class
            </p>
            <div className="rule-gold mx-auto mt-4" />
            <h2 className="mt-5 text-[1.9rem] leading-tight sm:text-4xl lg:text-5xl">
              See the difference in one class
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed opacity-85 sm:text-base">
              Book a free demo class for your child — no fees, no commitment. Meet the mentor,
              experience a live session and decide with confidence.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-gold text-gold-foreground inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[0.95rem] font-semibold shadow-[var(--shadow-gold)] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                Book Free Demo on WhatsApp
              </a>
              <a
                href={tel(PHONES[0])}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-current/30 px-7 py-3.5 text-[0.95rem] font-semibold transition-colors duration-300 hover:border-current sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                Call {PHONES[0]}
              </a>
            </div>
            <p className="mt-5 text-[0.8rem] opacity-70">
              Online classes anywhere · Offline classes in Calicut only
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const items = [
    { icon: Phone, label: "Call or WhatsApp", value: PHONES[0], href: tel(PHONES[0]) },
    { icon: Phone, label: "Call or WhatsApp", value: PHONES[1], href: tel(PHONES[1]) },
    { icon: Globe, label: "Online classes", value: "Anywhere" },
    { icon: MapPin, label: "Offline classes", value: "Calicut only" },
  ];

  return (
    <section
      id="contact"
      className="border-border bg-secondary/40 border-t py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Talk to us today"
          subtitle="Call or message us on WhatsApp — we'll help you choose the right batch and mentor."
        />
        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {items.map(({ icon: Icon, label, value, href }, i) => {
            const inner = (
              <>
                <span className="bg-accent grid h-11 w-11 place-items-center rounded-xl">
                  <Icon className="text-accent-foreground h-5 w-5" strokeWidth={1.75} />
                </span>
                <p className="eyebrow mt-5">{label}</p>
                <p className="mt-1 text-[1.05rem] font-semibold sm:text-lg">{value}</p>
              </>
            );
            return href ? (
              <a key={i} href={href} className="card-premium block p-6">
                {inner}
              </a>
            ) : (
              <div key={i} className="card-premium p-6">
                {inner}
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <CtaButtons />
        </div>
      </div>
    </section>
  );
}



export function Footer() {
  return (
    <footer className="surface-navy">
      <div className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-[minmax(0,1.2fr)_auto] sm:items-start">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={logo.url}
              alt="PrimeAura Academy logo"
              width={44}
              height={44}
              loading="lazy"
              className="h-11 w-11 shrink-0 rounded-full"
            />
            <div className="min-w-0">
              <p className="truncate font-semibold">
                Prime<span className="text-gold">Aura</span> Academy
              </p>
              <p className="text-[0.8rem] opacity-75">Learn. Understand. Excel.</p>
              <p className="mt-2 text-[0.8rem] opacity-75">
                Online classes anywhere · Offline classes in Calicut only
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <div className="flex flex-wrap gap-2.5">
              <a
                href="#demo"
                className="bg-gold text-gold-foreground inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
              >
                <CalendarCheck className="h-4 w-4" />
                Book Free Demo
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-current/30 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-current"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
            <p className="text-[0.8rem] opacity-75">
              {PHONES.map((p, i) => (
                <span key={p}>
                  {i > 0 && " · "}
                  <a href={tel(p)} className="hover:underline">
                    {p}
                  </a>
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-current/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[0.82rem] opacity-80">
            {[
              ["Home", "#home"],
              ["Classes", "#classes"],
              ["Mentors", "#mentors"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="hover:text-gold transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-[0.8rem] opacity-70">
            © {new Date().getFullYear()} PrimeAura Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


