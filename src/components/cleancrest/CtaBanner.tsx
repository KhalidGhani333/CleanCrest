import { Phone } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative bg-primary text-primary-foreground py-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-accent text-2xl animate-pulse"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            ✦
          </span>
        ))}
      </div>
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 flex flex-wrap items-center justify-between gap-6">
        <h2 className="text-3xl lg:text-4xl font-bold max-w-xl text-balance">
          Book Your Cleaning Service Appointment Today.
        </h2>
        <a
          href="tel:08001234567"
          className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 rounded-full font-bold text-lg hover:scale-105 transition pulse-glow"
        >
          <Phone className="w-5 h-5" /> 0800 123 4567
        </a>
      </div>
    </section>
  );
}
