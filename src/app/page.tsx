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
import FreeResouces from "@/components/free-resources";

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
      <section className=" px-6 py-10">
        <Timeline2 />
      </section>
      {/* ANNOUNCEMENT */}
      <section className="w-full bg-white py-10 px-6 md:px-72 flex flex-col items-center">
        <div className="text-center flex flex-col gap-4 font-montserrat text-[20px] md:text-[27px] font-bold">
          <h4 className=" uppercase">
            PROXIMAMENTE SEMINARIO GRATUITO ONLINE CON CONTENIDO DE CALIDAD PARA
            TODO PÚBLICO
          </h4>
          <div>
            (30/05/2025 - 19.30hs España - 14.30 (Arg/Uru) duración: 1.20hs.
          </div>
          <span className="mt-2 block font-bold ">
            TEMA: El manejo de las emociones en el duelo.
          </span>
        </div>
      </section>

      <section className="w-full">
        <FreeResouces />
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
