import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode
} from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
};

type LinkProps = CommonProps &
  Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "className"> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  Omit<
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    "className"
  > & {
    href?: undefined;
  };

type ButtonProps = LinkProps | NativeButtonProps;

const baseClasses =
  "inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-glow hover:bg-[#4C92FF] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50",
  secondary:
    "border border-white/20 bg-white/5 text-mist-100 hover:border-accent/50 hover:bg-white/10 active:scale-[0.99]",
  ghost: "text-mist-200 hover:text-white"
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 text-sm",
  md: "px-5 text-sm",
  lg: "px-7 text-base"
};

export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if ("href" in props && props.href) {
    const { href, children, ...rest } = props;

    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { children, type = "button", ...rest } = props as NativeButtonProps;

  return (
    <button className={classes} type={type} {...rest}>
      {children}
    </button>
  );
}
