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
  Wifi,
  MapPin,
  Phone,
  Clock,
  GraduationCap,
  Check,
} from "lucide-react";
import heroImage from "@/assets/hero-study.jpg";
import { CtaButtons, SectionHeading, PHONES, WHATSAPP_URL } from "./Cta";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 lg:pb-24">
      <div
        aria-hidden
        className="bg-accent/60 pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="bg-gold/15 pointer-events-none absolute top-40 -left-32 h-96 w-96 rounded-full blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        <div className="reveal">
          <span className="border-border bg-card text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide">
            <Sparkles className="text-gold h-3.5 w-3.5" />
            Learn. Understand. Excel.
          </span>

          <h1 className="mt-6 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            Expert Guidance.
            <br />
            <span className="text-gold-gradient">Better Learning.</span>
          </h1>

          <p className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
            Live online tuition with expert mentors, personal attention and exam-focused learning.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {["Classes 1–10", "Plus One", "Plus Two"].map((c) => (
              <span
                key={c}
                className="border-border bg-card rounded-full border px-4 py-2 text-sm font-medium"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {["Kerala State Board", "CBSE"].map((c) => (
              <span
                key={c}
                className="bg-accent text-accent-foreground rounded-full px-4 py-2 text-sm font-medium"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-9">
            <CtaButtons />
          </div>
        </div>

        <div className="reveal relative">
          <div className="border-border overflow-hidden rounded-[2rem] border shadow-[var(--shadow-lift)]">
            <img
              src={heroImage}
              alt="Student desk set up for a live online PrimeAura Academy class"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="border-border bg-card absolute -bottom-6 left-4 rounded-2xl border p-4 shadow-[var(--shadow-soft)] sm:left-8">
            <p className="text-muted-foreground text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
              Free
            </p>
            <p className="mt-1 text-sm font-semibold">Demo class for every new student</p>
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
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why PrimeAura"
          title="A calmer, sharper way to learn"
          subtitle="Everything we do is built around one goal — students who genuinely understand what they study."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card-premium p-7">
              <span className="bg-secondary grid h-11 w-11 place-items-center rounded-xl">
                <Icon className="text-primary h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-lg">{title}</h3>
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
    <section id="classes" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Classes & Subjects"
          title="Classes 1–10, Plus One and Plus Two"
          subtitle="Kerala State Board and CBSE syllabuses, taught by mentors who specialise in each subject."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map(({ icon: Icon, name }) => (
            <div key={name} className="card-premium flex items-center gap-4 p-5">
              <span className="bg-accent grid h-11 w-11 shrink-0 place-items-center rounded-xl">
                <Icon className="text-accent-foreground h-5 w-5" strokeWidth={1.75} />
              </span>
              <p className="min-w-0 truncate font-medium">{name}</p>
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
  { name: "Mentor Name", subject: "Subject" },
  { name: "Mentor Name", subject: "Subject" },
  { name: "Mentor Name", subject: "Subject" },
  { name: "Mentor Name", subject: "Subject" },
];

export function Mentors() {
  return (
    <section id="mentors" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Mentors"
          title="The people behind every class"
          subtitle="Mentor profiles are placeholders and can be updated with real names, photos and details anytime."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mentors.map((m, i) => (
            <article key={i} className="card-premium p-6 text-center">
              <div className="bg-secondary border-border mx-auto grid h-20 w-20 place-items-center rounded-full border border-dashed">
                <UserRoundCheck className="text-muted-foreground h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-lg">{m.name}</h3>
              <p className="text-muted-foreground mt-1 text-sm">{m.subject}</p>
              <p className="text-muted-foreground/70 mt-4 text-xs">Profile details coming soon</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const modes = [
  {
    icon: Wifi,
    title: "Online Classes",
    availability: "Available for students anywhere",
    points: [
      "Live interactive sessions from home",
      "Flexible batch timings",
      "Doubt clearing and recorded revision support",
    ],
    highlight: true,
  },
  {
    icon: MapPin,
    title: "Offline Classes",
    availability: "Available in Calicut only",
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
    <section className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Learning Modes"
          title="Online anywhere. Offline in Calicut."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {modes.map(({ icon: Icon, title, availability, points, highlight }) => (
            <article
              key={title}
              className={`rounded-3xl p-8 sm:p-10 ${
                highlight
                  ? "surface-navy shadow-[var(--shadow-lift)]"
                  : "border-border bg-card border shadow-[var(--shadow-soft)]"
              }`}
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl ${
                  highlight ? "bg-gold text-gold-foreground" : "bg-secondary text-primary"
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-2xl">{title}</h3>
              <p className={`mt-2 text-sm ${highlight ? "text-gold" : "text-muted-foreground"}`}>
                {availability}
              </p>
              <ul className="mt-6 grid gap-3">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm leading-relaxed">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${highlight ? "text-gold" : "text-accent-foreground"}`}
                    />
                    <span className={highlight ? "opacity-90" : "text-muted-foreground"}>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DemoCta() {
  return (
    <section id="demo" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="surface-navy relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12 lg:py-20">
          <div
            aria-hidden
            className="bg-gold/20 pointer-events-none absolute -top-20 -right-16 h-72 w-72 rounded-full blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-gold text-xs font-semibold tracking-[0.22em] uppercase">
              Free Demo Class
            </p>
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              See the difference in one class
            </h2>
            <p className="mt-5 text-base leading-relaxed opacity-85">
              Book a free demo class for your child — no fees, no commitment. Meet the mentor,
              experience a live session and decide with confidence.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-gold text-gold-foreground inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
              >
                Book Free Demo
              </a>
              <a
                href={`tel:${PHONES[0].replace(/\s/g, "")}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-current/30 px-6 py-3.5 text-[0.95rem] font-semibold transition-colors duration-300 hover:border-current sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                Call {PHONES[0]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Talk to us today"
          subtitle="Call or message us on WhatsApp — we'll help you choose the right batch and mentor."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PHONES.map((p) => (
            <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="card-premium p-6">
              <span className="bg-accent grid h-11 w-11 place-items-center rounded-xl">
                <Phone className="text-accent-foreground h-5 w-5" strokeWidth={1.75} />
              </span>
              <p className="text-muted-foreground mt-5 text-xs tracking-[0.18em] uppercase">Phone</p>
              <p className="mt-1 text-lg font-semibold">{p}</p>
            </a>
          ))}
          <div className="card-premium p-6">
            <span className="bg-accent grid h-11 w-11 place-items-center rounded-xl">
              <MapPin className="text-accent-foreground h-5 w-5" strokeWidth={1.75} />
            </span>
            <p className="text-muted-foreground mt-5 text-xs tracking-[0.18em] uppercase">
              Offline Classes
            </p>
            <p className="mt-1 text-lg font-semibold">Calicut</p>
          </div>
          <div className="card-premium p-6">
            <span className="bg-accent grid h-11 w-11 place-items-center rounded-xl">
              <Clock className="text-accent-foreground h-5 w-5" strokeWidth={1.75} />
            </span>
            <p className="text-muted-foreground mt-5 text-xs tracking-[0.18em] uppercase">
              Online Classes
            </p>
            <p className="mt-1 text-lg font-semibold">Anywhere</p>
          </div>
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
    <footer className="border-border border-t py-10">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <span className="surface-navy grid h-9 w-9 shrink-0 place-items-center rounded-lg">
            <GraduationCap className="text-gold h-4 w-4" strokeWidth={1.75} />
          </span>
          <div className="min-w-0">
            <p className="truncate font-semibold">PrimeAura Academy</p>
            <p className="text-muted-foreground text-sm">Learn. Understand. Excel.</p>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} PrimeAura Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
