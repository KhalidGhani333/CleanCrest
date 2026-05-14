export function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase ${
        light ? "text-accent" : "text-primary"
      }`}
    >
      <span className="w-8 h-px bg-accent" />
      {children}
    </span>
  );
}
