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
                    <DialogTitle>
                      TÉRMINOS, CONDICIONES Y AVISO LEGAL
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                      Condiciones generales de uso del sitio Renacencia.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4 text-sm leading-relaxed text-[var(--color-muted-text)]">
                    <section className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground">
                        1. TITULARIDAD Y OBJETO
                      </h3>
                      <p>
                        El presente documento regula el acceso y uso del sitio
                        web renacencia.com (en adelante, &quot;el Sitio&quot;).
                        El Sitio es gestionado por el equipo de Renacencia (en
                        adelante, &quot;el Titular&quot;), cuya vía de contacto
                        principal es volviendoalavida@renacencia.com. El acceso
                        a la web le atribuye la condición de Usuario, lo cual
                        implica la aceptación plena y sin reservas de todas y
                        cada una de las disposiciones incluidas en este Aviso
                        Legal.
                      </p>
                    </section>

                    <section className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground">
                        2. NATURALEZA DE LOS CONTENIDOS Y SERVICIOS
                      </h3>
                      <p>
                        Los contenidos, materiales y posibles propuestas de
                        acompañamiento disponibles en el Sitio tienen una
                        finalidad informativa, divulgativa y pedagógica. Si bien
                        el proyecto cuenta con supervisión de profesionales del
                        ámbito de la psicología sanitaria, el uso del Sitio no
                        establece de forma automática una relación
                        facultativo-paciente ni constituye un diagnóstico
                        clínico. El Titular se reserva el derecho a modificar,
                        suspender o cancelar la oferta de contenidos o servicios
                        en cualquier momento y sin previo aviso, incluyendo la
                        futura implementación de servicios remunerados bajo
                        condiciones que serán especificadas en su momento.
                      </p>
                    </section>

                    <section className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground">
                        3. EXONERACIÓN DE RESPONSABILIDAD
                      </h3>
                      <p>
                        El Usuario accede al Sitio bajo su propia
                        responsabilidad. El Titular no se hace responsable de:
                      </p>
                      <ul className="list-disc space-y-1 pl-5">
                        <li>
                          La interpretación errónea o malintencionada de la
                          información publicada.
                        </li>
                        <li>
                          Las decisiones personales, de salud o legales tomadas
                          por el Usuario basadas en el contenido del Sitio.
                        </li>
                        <li>
                          Situaciones de crisis o urgencias médicas del Usuario,
                          quien reconoce que este Sitio no es un servicio de
                          emergencia.
                        </li>
                        <li>
                          Posibles errores tecnológicos, virus o interrupciones
                          en el servicio.
                        </li>
                      </ul>
                    </section>

                    <section className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground">
                        4. PROPIEDAD INTELECTUAL Y USO DE CONTENIDOS
                      </h3>
                      <p>
                        La totalidad de este sitio (textos, logotipos, imágenes,
                        audios y estructura de navegación) está protegida por
                        las leyes de Propiedad Intelectual nacionales e
                        internacionales. Queda terminantemente prohibida la
                        reproducción, transformación, distribución o
                        explotación comercial de cualquier elemento del Sitio
                        sin el consentimiento expreso y por escrito del Titular.
                        El uso no autorizado dará lugar a las acciones legales
                        correspondientes.
                      </p>
                    </section>

                    <section className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground">
                        5. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS
                      </h3>
                      <p>
                        En cumplimiento de los estándares de protección de
                        datos, se informa que la información facilitada
                        voluntariamente por el Usuario a través del correo
                        electrónico de contacto será tratada con la única
                        finalidad de gestionar la consulta o solicitud
                        realizada. El Titular no cede datos a terceros salvo
                        obligación legal. El Usuario puede ejercer sus derechos
                        de acceso, rectificación o supresión enviando una
                        comunicación al correo de contacto indicado.
                      </p>
                    </section>

                    <section className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground">
                        6. ENLACES A TERCEROS
                      </h3>
                      <p>
                        El Sitio puede contener enlaces a plataformas externas
                        (redes sociales, formularios, etc.). El Titular no
                        asume responsabilidad alguna por las políticas de
                        privacidad, contenidos o prácticas de dichos sitios
                        externos.
                      </p>
                    </section>

                    <section className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground">
                        7. MODIFICACIONES Y JURISDICCIÓN
                      </h3>
                      <p>
                        El Titular se reserva el derecho a actualizar estos
                        términos para adaptarlos a novedades legislativas o
                        comerciales. Cualquier controversia derivada del uso del
                        Sitio se someterá a la legislación vigente y a la
                        competencia de los juzgados y tribunales del país de
                        origen del Titular, renunciando el Usuario a cualquier
                        otro fuero que pudiera corresponderle.
                      </p>
                    </section>
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
