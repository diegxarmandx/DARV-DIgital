import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type CardShellProps = HTMLAttributes<HTMLDivElement>;

export function CardShell({ className, ...props }: CardShellProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 shadow-card backdrop-blur-sm transition duration-300 hover:border-accent/45",
        className
      )}
      {...props}
    />
  );
}
