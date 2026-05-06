const logos = ["AURORA", "NORTHWIND", "BRIGHTON & CO", "OAKLEAF", "MERIDIAN", "HENLEY GROUP"];

export function TrustStrip() {
  const doubled = [...logos, ...logos];
  return (
    <section className="py-16 bg-card">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-center text-sm font-semibold tracking-wider text-muted-foreground mb-8">
          TRUSTED BY 1,000+ HOMES & BUSINESSES ACROSS THE UK
        </p>
        <div className="overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-card to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-card to-transparent z-10" />
          <div className="marquee gap-16">
            {doubled.map((l, i) => (
              <span
                key={i}
                className="font-display text-2xl font-bold text-muted-foreground/60 whitespace-nowrap shrink-0"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
