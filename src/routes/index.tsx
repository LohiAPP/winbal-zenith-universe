import { createFileRoute } from "@tanstack/react-router";
import { CursorGlow } from "@/components/CursorGlow";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Universe } from "@/components/Universe";
import { Destinations } from "@/components/Destinations";
import { Intelligence } from "@/components/Intelligence";
import { Membership } from "@/components/Membership";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Winbal Travel Club — A Private Universe of Luxury Travel" },
      {
        name: "description",
        content:
          "An invitation-only travel membership offering 5,000+ destinations, AI travel intelligence, and a 24/7 global concierge. Travel smarter, experience more, pay less.",
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
      <Universe />
      <Destinations />
      <Intelligence />
      <Membership />
      <Footer />
    </main>
  );
}
