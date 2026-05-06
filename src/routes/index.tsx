import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/sparkle/Navbar";
import { Hero } from "@/components/sparkle/Hero";
import { Services } from "@/components/sparkle/Services";
import { TrustStrip } from "@/components/sparkle/TrustStrip";
import { About } from "@/components/sparkle/About";
import { HowItWorks } from "@/components/sparkle/HowItWorks";
import { Pricing } from "@/components/sparkle/Pricing";
import { Testimonials } from "@/components/sparkle/Testimonials";
import { BookingForm } from "@/components/sparkle/BookingForm";
import { Blog } from "@/components/sparkle/Blog";
import { CtaBanner } from "@/components/sparkle/CtaBanner";
import { Footer } from "@/components/sparkle/Footer";
import { WhatsAppButton } from "@/components/sparkle/WhatsAppButton";
import { PageLoader } from "@/components/sparkle/PageLoader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SparkleNest — A Cleaner Home. A Happier Life. | UK Cleaning Service" },
      {
        name: "description",
        content:
          "SparkleNest provides professional, eco-friendly residential & commercial cleaning across the UK. DBS-checked staff, transparent pricing from £15/hr.",
      },
      { property: "og:title", content: "SparkleNest — UK Home & Commercial Cleaning" },
      {
        property: "og:description",
        content:
          "Trusted, eco-friendly cleaning services across the UK. Book your sparkle today.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TrustStrip />
        <About />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <BookingForm />
        <Blog />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
