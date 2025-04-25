import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-0 w-full min-h-screen">
      <section className="w-full bg-white pt-8 pb-2 flex justify-center">
        <Hero />
      </section>
      {/* Banner section (butterfly woman background) */}
      <section className="relative w-full">
        <div className="w-full h-48 md:h-64 flex items-center justify-center overflow-hidden relative">
          <Image
            src="https://ext.same-assets.com/1332691435/4117865777.jpeg"
            alt="Banner mariposa"
            fill
            className="object-cover object-center brightness-90"
            style={{ zIndex: 0 }}
            priority
          />
          <span className="relative z-10 py-3 px-6 bg-white/80 rounded-xl shadow text-xl md:text-2xl font-bold text-center">
            Si lo deseas, te acompañamos en tu camino
          </span>
        </div>
      </section>
      {/* Servicios section */}
      <section className="w-full py-12 bg-white flex flex-col items-center">
        <div className="max-w-4xl w-full text-center px-4">
          <h2 className="font-bold text-lg md:text-xl mb-6">
            Terapia con profesionales que entienden lo que vives
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex-shrink-0 w-48 h-44 relative">
              <Image
                src="https://ext.same-assets.com/1332691435/1843696397.jpeg"
                alt="Mujer en terapia"
                fill
                className="rounded-lg object-cover shadow"
              />
            </div>
            <div className="text-left md:text-base text-sm px-2 max-w-lg">
              Detrás de esta plataforma hay{" "}
              <span className="text-brand-brown font-medium">
                psicoterapeutas y especialistas seleccionados
              </span>{" "}
              por su experiencia en duelo, sensibilidad y formación.
              <br />
              Es un espacio único para quienes hayan pasado pérdidas de vida,
              con guías que acompañan el proceso personal de reconstrucción de
              sentido.
            </div>
          </div>
        </div>
        {/* Cómo te ayudaremos */}
        <div className="max-w-4xl w-full mt-14 px-4">
          <h3 className="text-xl font-extrabold text-center mb-3">
            CÓMO TE AYUDAREMOS
          </h3>
          <p className="text-center text-brand-gold mb-7">
            con <b>TERAPIA GRUPAL</b>: En 12 semanas descubrirás 3 cosas…
          </p>
          <div className="flex flex-col md:flex-row gap-7 items-center justify-center">
            {/* Acompañamiento */}
            <div className="flex-1 flex flex-col items-center text-center gap-2">
              <Image
                src="https://ext.same-assets.com/1332691435/2681452056.png"
                alt="Acompañamiento"
                width={88}
                height={88}
              />
              <h4 className="font-semibold">Acompañamiento</h4>
              <p className="text-sm">
                Grupos apoyados por especialistas que entienden tu
                proceso. Avanzarás a tu ritmo, sintiendo pertenencia y escucha
                verdadera.
              </p>
            </div>
            {/* Conexión */}
            <div className="flex-1 flex flex-col items-center text-center gap-2">
              <Image
                src="https://ext.same-assets.com/1332691435/3296664310.jpeg"
                alt="Conexión"
                width={88}
                height={88}
              />
              <h4 className="font-semibold">Conexión</h4>
              <p className="text-sm">
                Transformarás tu visión del duelo y aprenderás a encontrar
                nuevos vínculos y propósitos desde la memoria y el amor.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial, Talleres y Seminarios section */}
      <section className="w-full bg-brand-sand py-10 px-4 flex flex-col items-center">
        <blockquote className="max-w-3xl italic text-lg font-medium text-brand-brown border-l-4 border-brand-gold pl-6 mb-6">
          “Ampliar nuestra CONSCIENCIA sobre la vida y la muerte es el mejor
          consuelo al que podemos aspirar”
          <br />{" "}
          <span className="text-xs not-italic">
            Grupo local Renacencia y Bienamare
          </span>
        </blockquote>
        <div className="w-full max-w-4xl text-center">
          <h3 className="font-bold text-xl mb-8">
            Algunos de Nuestros TALLERES Y SEMINARIOS
          </h3>
          <div className="grid md:grid-cols-3 gap-7 mb-8">
            <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 items-center">
              <h4 className="font-semibold text-brand-brown">
                Eleva la mirada
              </h4>
              <p className="text-sm">
                Crecimiento personal, percepciones, meditación y expansión de
                consciencia.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 items-center">
              <h4 className="font-semibold text-brand-brown">
                Círculo de Ancestros
              </h4>
              <p className="text-sm">
                Espacio de homenaje y conexión con quienes partieron antes, para
                encontrar sentido a nuestro paso en la tierra.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 items-center">
              <h4 className="font-semibold text-brand-brown">
                Alquimia del dolor y el temor
              </h4>
              <p className="text-sm">
                Recuperar sentido, transformar la experiencia de la muerte y la
                tristeza.
              </p>
            </div>
          </div>
          <Button
            asChild
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-7 py-2 rounded-lg mt-2"
          >
            <a href="#">MÁS INFO SOBRE TALLERES Y SEMINARIOS</a>
          </Button>
        </div>
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
            Desde niña, la muerte me ha fascinado y desafiado a la vez. Tras el
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
