import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Building2, Sparkles, AppWindow, KeyRound, Leaf } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import domesticImg from "@/assets/service-domestic.jpg";
import commercialImg from "@/assets/service-commercial.jpg";
import deepImg from "@/assets/service-deep.jpg";
import windowImg from "@/assets/service-window.jpg";
import tenancyImg from "@/assets/service-tenancy.jpg";
import ecoImg from "@/assets/service-eco.jpg";

const services = [
  {
    icon: Home,
    name: "Domestic Cleaning",
    shortDesc: "Regular home cleaning tailored to your schedule and routine.",
    longDesc: "Our domestic cleaning service is designed to give you back your free time. We cover all aspects of home cleaning, including vacuuming, dusting, mopping, and thorough sanitization of kitchens and bathrooms. Whether you need a weekly, bi-weekly, or one-off visit, we tailor our service to meet your specific household needs.",
    image: domesticImg,
  },
  {
    icon: Building2,
    name: "Commercial Cleaning",
    shortDesc: "Office and workspace cleaning for businesses of every size.",
    longDesc: "A clean office is a productive office. We provide reliable commercial cleaning services for offices, retail units, and other business premises. Our team works discreetly and efficiently, often outside of your business hours, to ensure your workspace remains professional, hygienic, and welcoming for both staff and clients.",
    image: commercialImg,
  },
  {
    icon: Sparkles,
    name: "Deep Cleaning",
    shortDesc: "Thorough top-to-bottom clean for any property, inside out.",
    longDesc: "Our deep cleaning service goes beyond the surface. We target the hidden grime in hard-to-reach places, behind appliances, and inside cupboards. It's the perfect solution for a seasonal spring clean, preparing for a special occasion, or simply giving your property a fresh start and a comprehensive hygienic overhaul.",
    image: deepImg,
  },
  {
    icon: AppWindow,
    name: "Window & Door Cleaning",
    shortDesc: "Crystal-clear windows and doors, inside and out.",
    longDesc: "Let the light in with our professional window and door cleaning. We remove streaks, smudges, and environmental buildup from all glass surfaces, frames, and sills. Our specialized techniques ensure a crystal-clear finish that enhances the curb appeal and brightness of your property, inside and out.",
    image: windowImg,
  },
  {
    icon: KeyRound,
    name: "End of Tenancy Cleaning",
    shortDesc: "Full clean to ensure you get your full deposit back.",
    longDesc: "Moving can be stressful, so let us handle the cleaning. Our end-of-tenancy service is designed to meet the strict requirements of landlords and estate agents. We provide a deep, comprehensive clean of the entire property, ensuring it's in top condition for the next tenant and helping you secure your full security deposit.",
    image: tenancyImg,
  },
  {
    icon: Leaf,
    name: "Eco-Friendly Cleaning",
    shortDesc: "100% non-toxic, child and pet-safe cleaning products.",
    longDesc: "We believe in a clean home and a clean planet. Our eco-friendly cleaning service uses only non-toxic, biodegradable, and sustainable cleaning products. These are highly effective yet safe for your family, pets, and the environment. Enjoy a spotless home with the peace of mind that comes from using green cleaning solutions.",
    image: ecoImg,
  },
];

export function Services() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl mb-14">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-primary text-balance">
            Spotless Spaces, Stress-Free Living
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => setSelectedService(s)}
              className="group relative bg-card rounded-3xl p-7 border border-border/60 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer before:absolute before:left-0 before:top-1/4 before:bottom-1/4 before:w-1 before:bg-accent before:rounded-full before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:origin-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/15 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{s.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.shortDesc}</p>
              
              <div className="mt-4 flex items-center text-accent font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                View Details
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="max-w-3xl overflow-hidden p-0 border-none bg-background rounded-3xl">
          {selectedService && (
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                <DialogHeader className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-4">
                    <selectedService.icon className="w-6 h-6" />
                  </div>
                  <DialogTitle className="text-2xl font-bold text-primary">{selectedService.name}</DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                  {selectedService.longDesc}
                </DialogDescription>
                <div className="mt-8">
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-full font-bold hover:bg-primary/90 transition-colors"
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
