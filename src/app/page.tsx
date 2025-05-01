import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Hero from "@/components/hero";
import Banner from "@/components/banner";
import ServicesHeader from "@/components/services/header";
import ServicesBody from "@/components/services/body";
import WorkshopsHeader from "@/components/workshops/header";
import WorkShopsBody from "@/components/workshops/body";
import Timeline2 from "@/components/timeline-2";

export default function Home() {
  return (
    <main className="flex flex-col gap-0 w-full min-h-screen overflow-x-hidden">
      <section className="w-full bg-white pt-0 md:py-5 flex justify-center">
        <Hero />
      </section>
      <section className="relative w-full">
        <Banner />
      </section>
      <section className="w-full pt-12 px-6 bg-white flex flex-col items-center">
        <ServicesHeader />
        <ServicesBody />
      </section>

      {/* Testimonial, Talleres y Seminarios section */}
      <section className="w-full px-6 pt-4 flex flex-col items-center justify-center">
        <WorkshopsHeader />
        <WorkShopsBody />
      </section>
      <section>
        <Timeline2 />
      </section>
      {/* Próximo seminario section */}
      <section className="w-full bg-white py-8 px-4 flex flex-col items-center">
        <div className="max-w-2xl text-center flex flex-col gap-2">
          <h4 className="text-lg font-bold uppercase mb-2">
            PRÓXIMAMENTE SEMINARIO GRATUITO ONLINE CON CONTENIDO DE CALIDAD PARA
            TODO PÚBLICO
          </h4>
          <div className="text-base">
            <b>
              (30/05/2025 - 19.30hs España - 14.30 (Arg/Uru) duración: 1.20hs.)
            </b>
          </div>
          <span className="mt-2 block text-lg font-bold text-brand-rose">
            TEMA: El manejo de las emociones en el duelo.
          </span>
        </div>
      </section>
      {/* Recursos gratuitos */}
      <section className="w-full bg-brand-brown py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8">
            También: Recursos Gratuitos a tu alcance
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white bg-opacity-90 rounded-lg shadow p-5 flex flex-col items-center gap-3">
              <span className="text-xl text-brand-brown font-bold">
                Artículos
              </span>
              <span className="block text-brand-dark text-center text-sm">
                Textos y reflexiones para acompañarte en tu proceso.
              </span>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg shadow p-5 flex flex-col items-center gap-3">
              <span className="text-xl text-brand-brown font-bold">
                Videoteca
              </span>
              <span className="block text-brand-dark text-center text-sm">
                Videos y recursos visuales para explorar el duelo y la
                consciencia.
              </span>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg shadow p-5 flex flex-col items-center gap-3">
              <span className="text-xl text-brand-brown font-bold">
                Seminarios
              </span>
              <span className="block text-brand-dark text-center text-sm">
                Clases disponibles, formaciones y encuentros gratuitos.
              </span>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg shadow p-5 flex flex-col items-center gap-3">
              <span className="text-xl text-brand-brown font-bold">
                Descargables
              </span>
              <span className="block text-brand-dark text-center text-sm">
                Guías para ayudarte a lidiar con la pérdida.
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* About / Origen section (no blurred face) */}
      <section className="bg-brand-sand py-12 px-4 flex flex-col items-center">
        <div className="max-w-3xl w-full space-y-3 text-center">
          <h4 className="text-2xl font-bold mb-3">¿Cómo Surgió Renacencia?</h4>
          <p className="text-base md:text-lg">
            Desde niño, la muerte me ha fascinado y desafiado a la vez. Tras el
            duelo, nació la pregunta: "¿Cómo continuar cuando quienes más amamos
            ya no están?" Así surge este espacio de acompañamiento, con el
            anhelo de transformar el dolor en sentido, de reconstrucción y
            esperanza.
          </p>
          <p className="text-base md:text-lg">
            Ahora, con profesionales de la psicología y estudiosos del camino,
            creamos RENACENCIA, desde Hermosura y acompañamiento a quienes nos
            necesiten.
          </p>
        </div>
      </section>
      {/* Preguntas Frecuentes section */}
      <section className="w-full bg-white py-10 px-4 flex flex-col items-center">
        <div className="max-w-3xl w-full text-center">
          <h4 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h4>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="1">
              <AccordionTrigger>
                ¿Los seminarios son gratuitos siempre?
              </AccordionTrigger>
              <AccordionContent>
                Sí, los seminarios son de acceso gratuito para el público en
                general.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>
                ¿La terapia es online o presencial?
              </AccordionTrigger>
              <AccordionContent>
                Ofrecemos ambas modalidades, según disponibilidad de
                especialistas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger>
                ¿Qué tipo de terapeutas trabajan en las sesiones?
              </AccordionTrigger>
              <AccordionContent>
                Profesionales seleccionados según experiencia en duelo,
                psicología y acompañamiento.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="4">
              <AccordionTrigger>
                ¿En qué se diferencia la psicología consciente de la
                tradicional?
              </AccordionTrigger>
              <AccordionContent>
                Integramos prácticas contemporáneas y de consciencia, centradas
                en el crecimiento personal y acompañamiento en el dolor.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="5">
              <AccordionTrigger>
                ¿Cómo sé si necesito terapia grupal o individual?
              </AccordionTrigger>
              <AccordionContent>
                Ofrecemos una entrevista de valoración personalizada para
                recomendar la modalidad más adecuada.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="6">
              <AccordionTrigger>
                ¿Qué tipo de corriente de psicología y conocimiento utilizan?
              </AccordionTrigger>
              <AccordionContent>
                Abordamos desde la psicología humanista, existencial y enfoques
                integrativos de duelo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="7">
              <AccordionTrigger>
                ¿En qué consiste el trabajo grupal?
              </AccordionTrigger>
              <AccordionContent>
                Espacios de acompañamiento colectivo, desarrollando el sentido y
                la pertenencia entre participantes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="8">
              <AccordionTrigger>
                ¿Me ayudará más la terapia grupal o individual?
              </AccordionTrigger>
              <AccordionContent>
                Cada caso es particular; ambas pueden ser útiles y
                complementarias según la persona.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="9">
              <AccordionTrigger>¿Cómo empiezo terapia?</AccordionTrigger>
              <AccordionContent>
                Puedes contactarnos por WhatsApp o correo, y gestionaremos la
                primera entrevista gratuita.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full bg-brand-brown pt-10 pb-2 px-4 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2 text-white">
            <span className="font-bold">Contacto</span>
            <span className="text-sm">
              <span className="font-semibold">Whatsapp</span> <br />
              +34 123 456 789
            </span>
            <span className="text-sm">
              <span className="font-semibold">Redes Sociales</span> <br />
              Instagram | Facebook
            </span>
            <span className="text-sm">
              <span className="font-semibold">Correo electrónico</span> <br />
              info@renacencia.com
            </span>
          </div>
          <div className="flex-shrink-0 mt-4 md:mt-0">
            <Image
              src="https://ext.same-assets.com/1332691435/1769299446.jpeg"
              alt="Logo Renacencia"
              width={110}
              height={110}
              className="mx-auto"
            />
            <div className="text-white text-center mt-2 font-serif text-lg">
              Renacencia
              <br />
              <span className="text-xs font-normal tracking-wide">
                psicología consciente
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
