import Image from "next/image";

import { cn } from "@/lib/utils";

type LogoVariant = "wordmark" | "icon";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  decorative?: boolean;
  variant?: LogoVariant;
};

const logoSources: Record<LogoVariant, { src: string; width: number; height: number }> = {
  wordmark: {
    src: "/images/darv-digital-logo.png",
    width: 2496,
    height: 1664
  },
  icon: {
    src: "/images/DARV-Digital-Icon.png",
    width: 1248,
    height: 832
  }
};

export function BrandLogo({
  className,
  priority = false,
  decorative = false,
  variant = "wordmark"
}: BrandLogoProps) {
  const logo = logoSources[variant];

  return (
    <Image
      src={logo.src}
      alt={decorative ? "" : `DARV Digital ${variant} logo`}
      width={logo.width}
      height={logo.height}
      priority={priority}
      aria-hidden={decorative || undefined}
      className={cn("h-auto w-auto object-contain", className)}
    />
  );
}
