import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { seminarUrl } from "@/components/landing/content";
import { Container, Section } from "@/components/landing/primitives";
import { Button } from "@/components/ui/button";

export function SeminarCta() {
  return (
    <Section className="py-8 sm:py-10 lg:py-14">
      <Container>
        <div className="surface-card bg-grid-subtle relative overflow-hidden rounded-[2rem] border border-[var(--color-border-subtle)] px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div className="absolute -right-14 top-1/2 hidden h-40 w-40 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(249,115,22,0.14),_transparent_68%)] blur-2xl sm:block" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="ds-kicker">proximo paso</p>
              <h2 className="ds-h2 text-balance font-semibold text-foreground">
                Un primer encuentro puede abrir una manera distinta de habitar
                lo que duele.
              </h2>
              <p className="ds-body-lg max-w-xl text-[var(--color-muted-text)]">
                Si querés profundizar esta mirada, podés sumarte al seminario y
                recibir la informacion de los proximos encuentros.
              </p>
            </div>

            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link
                href={seminarUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Inscribirte al seminario en un formulario externo"
              >
                Inscríbete al seminario
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
