import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { MobileCtaBar } from "@/components/site/Cta";
import {
  Hero,
  WhyChoose,
  Classes,
  Mentors,
  Modes,
  DemoCta,
  Contact,
  Footer,
} from "@/components/site/Sections";

const title = "PrimeAura Academy | Online Tuition for Classes 1–12";
const description =
  "Live online tuition for Classes 1–10, Plus One and Plus Two. Kerala State Board & CBSE. Expert mentors, personal attention. Book a free demo class.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background min-h-screen pb-20 lg:pb-0">
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <Classes />
        <Mentors />
        <Modes />
        <DemoCta />
        <Contact />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
