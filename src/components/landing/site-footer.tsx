import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

import { instagramUrl } from "@/components/landing/content";
import {
  Container,
  FooterLink,
  Section,
} from "@/components/landing/primitives";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function SiteFooter() {
  return (
    <Section
      as="footer"
      id="contacto"
      className="scroll-mt-24 border-t border-[var(--color-border-subtle)] py-10 sm:py-12"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-end lg:gap-12">
          <div className="max-w-xl">
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
          </div>

          <div className="grid gap-6 border-t border-[var(--color-border-subtle)] pt-6 text-left sm:grid-cols-2 sm:gap-10 sm:border-t-0 sm:pt-0 lg:justify-self-end">
            <div className="grid content-start gap-3 sm:min-w-[15rem]">
              <p className="ds-caption text-[var(--color-muted-text)]">
                contacto
              </p>
              <FooterLink href="mailto:volviendoalavida@renacencia.com">
                <Mail className="h-4 w-4" />
                volviendoalavida@renacencia.com
              </FooterLink>
              <FooterLink href={instagramUrl} target="_blank" rel="noreferrer">
                <Instagram className="h-4 w-4" />
                @renacencia.vida
              </FooterLink>
            </div>

            <div className="grid content-start gap-3 sm:min-w-[15rem]">
              <p className="ds-caption text-[var(--color-muted-text)]">
                legales
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="inline-flex w-fit items-center gap-2 text-sm text-[var(--color-muted-text)] underline-offset-4 hover:text-foreground hover:underline focus-visible:ring-4 focus-visible:ring-[var(--color-accent-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    Términos y condiciones
                  </button>
                </DialogTrigger>

                <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Términos y condiciones</DialogTitle>
                    <DialogDescription>
                      Condiciones generales de uso del sitio Renacencia.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4 text-sm leading-relaxed text-[var(--color-muted-text)]">
                    <p>
                      Este sitio tiene como objetivo compartir información sobre
                      actividades, talleres y propuestas de acompañamiento en
                      torno a la vida, la muerte y el duelo. El uso de este
                      sitio implica la aceptación de estos términos.
                    </p>
                    <p>
                      El contenido publicado es de carácter informativo y
                      educativo. No reemplaza atención médica, psicológica o de
                      emergencia. Si atravesás una situación crítica o de
                      urgencia, te recomendamos contactar a servicios
                      profesionales y de emergencia de tu zona.
                    </p>
                    <p>
                      Las personas usuarias se comprometen a utilizar este sitio
                      de forma respetuosa, sin realizar acciones que puedan
                      afectar su funcionamiento o vulnerar derechos de terceros.
                    </p>
                    <p>
                      Los textos, imágenes, materiales y elementos de identidad
                      visual de Renacencia son de uso reservado. No está
                      permitida su reproducción total o parcial con fines
                      comerciales sin autorización previa.
                    </p>
                    <p>
                      Este sitio puede incluir enlaces a plataformas externas
                      (por ejemplo, formularios o redes sociales). Renacencia no
                      controla ni asume responsabilidad por contenidos,
                      políticas o prácticas de terceros.
                    </p>
                    <p>
                      Para consultas legales o sobre el uso de contenidos, podés
                      escribir a{" "}
                      <a
                        href="mailto:volviendoalavida@renacencia.com"
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        volviendoalavida@renacencia.com
                      </a>
                      .
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
