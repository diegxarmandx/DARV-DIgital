import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "left"
}: SectionHeaderProps) {
  return (
    <header className={cn("space-y-4", align === "center" ? "mx-auto max-w-3xl text-center" : "", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">{eyebrow}</p>
      ) : null}
      <h2 className="font-heading text-3xl leading-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-relaxed text-mist-300">{description}</p> : null}
    </header>
  );
}
