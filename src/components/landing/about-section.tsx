import Image from "next/image";

import { people } from "@/components/landing/content";
import {
  Container,
  MediaFrame,
  Section,
  SectionTitle,
  SimpleCard,
} from "@/components/landing/primitives";
export function AboutSection() {
  return (
    <Section id="nosotros" className="about-section-band scroll-mt-24">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-[0.38] [mask-image:radial-gradient(ellipse_92%_72%_at_50%_42%,#000,transparent)] max-md:hidden"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 right-[8%] hidden h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(249,115,22,0.11),_transparent_68%)] blur-2xl md:block"
        aria-hidden
      />

      <Container className="relative z-[1]">
        <div className="flex flex-col gap-10 lg:gap-14">
          <SectionTitle
            eyebrow="quienes somos"
            title="Nosotros"
            description="Abordar la muerte es afrontar lo desconocido, y  nuestra cultura nos acerca a ella desde el temor al misterio. Renacencia surge de una comprensión central: aunque llegue el fin del cuerpo, la relación con el Ser que le habitaba no desaparece. Y si nos une el amor, el vínculo es indestructible. Al entender que la muerte es transformación, nuestra mirada cambia: La cuestión no es decir adios, sino como aprender a relacionarnos desde esta nueva forma.
Renacencia incluye las palabras renacimiento, resiliencia, consciencia y esencia. Es decir, todo lo que atraviesa quien vive la experiencia de integrar la muerte como parte de la vida."
            className="max-w-[var(--reading-width)]"
          />

          <div className="relative mt-0 lg:mt-1">
            <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
              {people.map((person) => (
                <SimpleCard
                  key={person.name}
                  className="flex h-full flex-col gap-6 p-5 sm:p-6"
                >
                  <MediaFrame className="aspect-[4/4.6] p-2">
                    <div className="relative h-full w-full overflow-hidden rounded-[1.1rem] bg-[var(--color-surface)]">
                      <Image
                        src={person.image}
                        alt={person.alt}
                        fill
                        sizes="(min-width: 768px) 42vw, 100vw"
                        className="object-cover"
                        style={{ objectPosition: person.objectPosition }}
                      />
                    </div>
                  </MediaFrame>
                  <div className="space-y-3">
                    <h3 className="ds-h3 font-semibold text-foreground">
                      {person.name}
                    </h3>
                    <p className="ds-body text-pretty leading-relaxed text-[var(--color-muted-text)]">
                      {person.description}
                    </p>
                  </div>
                </SimpleCard>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
