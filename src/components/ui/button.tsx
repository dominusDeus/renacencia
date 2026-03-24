import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-[-0.01em] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-accent-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-45 disabled:shadow-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-accent)] text-[var(--color-fg)] shadow-[0_14px_40px_-24px_rgba(249,115,22,0.88)] hover:bg-[var(--color-accent-hover)] active:bg-[var(--color-accent-active)]",
        default:
          "bg-[var(--color-accent)] text-[var(--color-fg)] shadow-[0_14px_40px_-24px_rgba(249,115,22,0.88)] hover:bg-[var(--color-accent-hover)] active:bg-[var(--color-accent-active)]",
        secondary:
          "border border-[var(--color-border-subtle)] bg-white text-[var(--color-fg)] shadow-[0_14px_40px_-28px_rgba(12,10,9,0.2)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] active:bg-[rgba(249,115,22,0.12)]",
        ghost:
          "bg-transparent text-[var(--color-fg)] hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-fg)] active:bg-[rgba(249,115,22,0.12)]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-[var(--color-border-subtle)] bg-background shadow-sm hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-fg)]",
        link: "rounded-none px-0 text-[var(--color-fg)] underline-offset-4 hover:text-[var(--color-accent-hover)] hover:underline",
      },
      size: {
        default: "min-h-12 px-5 py-3",
        sm: "min-h-10 px-4 py-2 text-xs",
        lg: "min-h-14 px-7 py-4 text-[0.95rem]",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
