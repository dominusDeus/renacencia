import { BookOpen, Sparkles, UsersRound, type LucideIcon } from "lucide-react";

import { activities } from "@/components/landing/content";
import {
  Container,
  Section,
  SectionTitle,
  SimpleCard,
} from "@/components/landing/primitives";
import { cn } from "@/lib/utils";

const activityIcons = {
  group: UsersRound,
  seminar: BookOpen,
  workshop: Sparkles,
} satisfies Record<(typeof activities)[number]["icon"], LucideIcon>;

export function ActivitiesSection() {
  return (
    <Section id="servicios" className="scroll-mt-24">
      <Container>
        <SectionTitle title="Servicios" />

        <div className="relative mt-10 lg:mt-14">
          <div
            className="pointer-events-none absolute -inset-x-4 -inset-y-6 rounded-[2rem] bg-grid-subtle opacity-[0.45] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000,transparent)] max-md:hidden"
            aria-hidden
          />
          <div className="relative grid gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
            {activities.map((activity) => {
              const Icon = activityIcons[activity.icon];

              return (
                <SimpleCard
                  key={activity.title}
                  className={cn(
                    "group relative flex h-full flex-col gap-4 overflow-hidden sm:gap-5",
                    "border-stone-200/90 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset]",
                    "transition-[box-shadow,border-color,transform] duration-300 ease-out",
                    "hover:-translate-y-0.5 hover:border-stone-300/95 hover:shadow-[var(--shadow-soft)]"
                  )}
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <div
                      className={cn(
                        "flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.15rem] border border-stone-200/75 sm:h-16 sm:w-16 sm:rounded-[1.25rem]",
                        "bg-[linear-gradient(160deg,rgba(255,247,237,0.95)_0%,rgba(255,255,255,0.7)_100%)]",
                        "text-[var(--color-accent)] shadow-[inset_0_1px_0_rgba(255,255,255,0.98),0_8px_22px_-14px_rgba(249,115,22,0.32)]",
                        "transition-[color,transform,border-color,box-shadow] duration-300",
                        "group-hover:border-[var(--color-accent)]/40 group-hover:text-[var(--color-accent-hover)]",
                        "group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.98),0_12px_30px_-12px_rgba(249,115,22,0.38)]",
                        "motion-safe:group-hover:scale-[1.02]"
                      )}
                    >
                      <Icon
                        className="h-7 w-7 sm:h-8 sm:w-8"
                        strokeWidth={1.4}
                        aria-hidden
                      />
                    </div>
                    <h3 className="ds-h3 min-w-0 flex-1 font-semibold leading-snug tracking-[-0.02em] text-foreground">
                      {activity.title}
                    </h3>
                  </div>
                  <p className="ds-body text-[var(--color-muted-text)] leading-relaxed">
                    {activity.description}
                  </p>
                </SimpleCard>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
