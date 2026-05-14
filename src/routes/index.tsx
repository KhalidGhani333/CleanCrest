import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/cleancrest/Navbar";
import { Hero } from "@/components/cleancrest/Hero";
import { Services } from "@/components/cleancrest/Services";
import { TrustStrip } from "@/components/cleancrest/TrustStrip";
import { About } from "@/components/cleancrest/About";
import { HowItWorks } from "@/components/cleancrest/HowItWorks";
import { Testimonials } from "@/components/cleancrest/Testimonials";
import { BookingForm } from "@/components/cleancrest/BookingForm";
import { Blog } from "@/components/cleancrest/Blog";
import { CtaBanner } from "@/components/cleancrest/CtaBanner";
import { Footer } from "@/components/cleancrest/Footer";
import { PageLoader } from "@/components/cleancrest/PageLoader";

export const Route = createFileRoute("/")({
  head: () => ({
    title: "CleanCrest — Professional Cleaning Service",
    meta: [
      {
        name: "description",
        content:
          "CleanCrest provides professional, eco-friendly residential & commercial cleaning across the UK. DBS-checked staff, transparent pricing from £15/hr.",
      },
      { property: "og:title", content: "CleanCrest — UK Home & Commercial Cleaning" },
      {
        property: "og:description",
        content:
          "Trusted, eco-friendly cleaning services across the UK. Book your CleanCrest today.",
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
        <Testimonials />
        <BookingForm />
        <Blog />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
