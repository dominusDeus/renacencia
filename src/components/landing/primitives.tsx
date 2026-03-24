import * as React from "react";

import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return <div className={cn("ds-container", className)} {...props} />;
}

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "footer";
};

export function Section({
  as = "section",
  className,
  children,
  ...props
}: SectionProps) {
  const Comp = as;

  return (
    <Comp className={cn("ds-section relative", className)} {...props}>
      {children}
    </Comp>
  );
}

type SectionTitleProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({
  title,
  eyebrow,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow ? <p className="ds-kicker">{eyebrow}</p> : null}
      <h2 className="ds-h2 text-balance font-semibold text-foreground">
        {title}
      </h2>
      {description ? (
        <p className="ds-body-lg text-pretty text-[var(--color-muted-text)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

type SimpleCardProps = React.HTMLAttributes<HTMLDivElement>;

export function SimpleCard({ className, ...props }: SimpleCardProps) {
  return (
    <div
      className={cn(
        "surface-card rounded-[1.25rem] border border-[var(--color-border-subtle)] p-6 sm:p-8",
        className
      )}
      {...props}
    />
  );
}

type MediaFrameProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: "default" | "warm";
};

export function MediaFrame({
  tone = "default",
  className,
  ...props
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "surface-frame relative overflow-hidden rounded-[1.5rem] border border-[var(--color-border-subtle)]",
        tone === "warm" && "bg-[var(--color-accent-soft)]",
        className
      )}
      {...props}
    />
  );
}

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function NavLink({ className, ...props }: LinkProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center rounded-full px-3 py-2 text-sm font-medium text-[var(--color-muted-text)] hover:text-foreground focus-visible:ring-4 focus-visible:ring-[var(--color-accent-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      {...props}
    />
  );
}

export function FooterLink({ className, ...props }: LinkProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-2 text-sm text-[var(--color-muted-text)] hover:text-foreground focus-visible:ring-4 focus-visible:ring-[var(--color-accent-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      {...props}
    />
  );
}
