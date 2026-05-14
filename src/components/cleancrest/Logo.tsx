export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-2 font-display text-2xl font-bold">
      <span className="text-accent text-2xl leading-none">✦</span>
      <span className={light ? "text-primary-foreground" : "text-primary"}>
        CleanCrest
      </span>
    </a>
  );
}
