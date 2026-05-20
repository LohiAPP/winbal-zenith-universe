import { createFileRoute } from "@tanstack/react-router";
import { CursorGlow } from "@/components/CursorGlow";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Universe } from "@/components/Universe";
import { HowItWorks } from "@/components/HowItWorks";
import { Packages } from "@/components/Packages";
import { PackageStructure } from "@/components/PackageStructure";
import { Destinations } from "@/components/Destinations";
import { Intelligence } from "@/components/Intelligence";
import { Benefits } from "@/components/Benefits";
import { Membership } from "@/components/Membership";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Winbal Travel Club — Travel Smarter. Experience More. Pay Less." },
      {
        name: "description",
        content:
          "An invitation-only travel membership offering 5,000+ destinations, luxury resorts, AI travel intelligence and a 24/7 concierge. Members save up to 60% on travel.",
      },
      { property: "og:title", content: "Winbal Travel Club — Private Travel Membership" },
      { property: "og:description", content: "Luxury holidays, rare destinations and lifetime experiences — by membership alone." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-hidden">
      <SmoothScroll />
      <CursorGlow />
      <Nav />
      <Hero />
      <WhyChooseUs />
      <Universe />
      <HowItWorks />
      <Packages />
      <PackageStructure />
      <Destinations />
      <Intelligence />
      <Benefits />
      <Membership />
      <Footer />
    </main>
  );
}
