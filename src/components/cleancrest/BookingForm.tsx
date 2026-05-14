import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import img from "@/assets/booking.jpg";

type FormValues = {
  name: string;
  contact: string;
  service: string;
  date: string;
  postcode: string;
  message: string;
};

function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-primary uppercase tracking-wider">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}

export function BookingForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Quote request", data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  const inputCls =
    "w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition";

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <img
          src={img}
          alt="Tidy living space"
          loading="lazy"
          className="w-full h-[600px] object-cover rounded-3xl hidden lg:block"
        />
        <div>
          <SectionLabel>Get a Free Quote</SectionLabel>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-primary text-balance">
            Book Any Kind of Cleaning Schedule
          </h2>
          <p className="mt-3 text-muted-foreground">
            Tell us a little about your space and we'll come back with a tailored quote within
            the hour.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Full Name" error={errors.name?.message}>
              <input
                {...register("name", { required: "Required" })}
                placeholder="Jane Smith"
                className={inputCls}
              />
            </Field>
            <Field label="Email or Phone" error={errors.contact?.message}>
              <input
                {...register("contact", { required: "Required" })}
                placeholder="jane@example.co.uk"
                className={inputCls}
              />
            </Field>
            <Field label="Service Type">
              <select {...register("service")} className={inputCls}>
                <option>Domestic</option>
                <option>Commercial</option>
                <option>Deep Clean</option>
                <option>End of Tenancy</option>
                <option>Eco-Friendly</option>
              </select>
            </Field>
            <Field label="Preferred Date">
              <input type="date" {...register("date")} className={inputCls} />
            </Field>
            <Field label="Postcode" error={errors.postcode?.message}>
              <input
                {...register("postcode", { required: "Required" })}
                placeholder="SW1A 1AA"
                className={inputCls}
              />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Message">
                <textarea
                  rows={4}
                  {...register("message")}
                  placeholder="Tell us about your space..."
                  className={inputCls}
                />
              </Field>
            </div>
            <button
              type="submit"
              className="sm:col-span-2 group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-4 rounded-full font-semibold hover:scale-[1.02] transition-transform pulse-glow"
            >
              Get A Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
          </form>

          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-5 flex items-center gap-3 bg-primary/10 text-primary px-5 py-3 rounded-xl"
              >
                <CheckCircle2 className="w-5 h-5" />
                Thanks! We'll be in touch within the hour.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
