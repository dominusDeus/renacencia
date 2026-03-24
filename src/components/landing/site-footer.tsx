import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

import { instagramUrl } from "@/components/landing/content";
import { Container, FooterLink, Section } from "@/components/landing/primitives";

export function SiteFooter() {
  return (
    <Section
      as="footer"
      id="contacto"
      className="scroll-mt-24 border-t border-[var(--color-border-subtle)] py-10 sm:py-12"
    >
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-4 rounded-full focus-visible:ring-4 focus-visible:ring-[var(--color-accent-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src="/isotipo/renacencia-menu.png"
                  alt="Logo de Renacencia"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-semibold tracking-[-0.03em] text-foreground">
                Renacencia
              </span>
            </Link>

            <p className="ds-body max-w-lg text-[var(--color-muted-text)]">
              Un proyecto para reflexionar sobre la vida, la muerte y el duelo
              con una mirada serena, clara y profundamente humana.
            </p>
          </div>

          <div className="grid gap-3 text-left sm:min-w-[16rem]">
            <p className="ds-caption text-[var(--color-muted-text)]">contacto</p>
            <FooterLink href="mailto:hola@renacencia.com">
              <Mail className="h-4 w-4" />
              hola@renacencia.com
            </FooterLink>
            <FooterLink href={instagramUrl} target="_blank" rel="noreferrer">
              <Instagram className="h-4 w-4" />
              @renacencia.vida
            </FooterLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
