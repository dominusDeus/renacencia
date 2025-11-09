import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqList = [
  {
    title: "¿Qué tipo de corriente de psicología y conocimiento utilizan?",
    description: (
      <>
        Nuestro enfoque es desde la psicología humanista, integrando en ella el
        desarrollo desde un enfoque trascendental, presente en culturas de
        conocimiento interior milenarias. Cada profesional tiene invariablemente
        su propio recorrido íntimo y sigue en constante formación y
        profundización en su compromiso con la sensibilidad humana. Esto nos
        permite compartir y acompañar desde un lugar más consciente de cada
        proceso.
      </>
    ),
  },
  {
    title: "¿En qué consiste el trabajo grupal?",
    description: (
      <>
        El trabajo grupal es un viaje de 12 semanas que emprendemos en conjunto,
        guiado por profesionales que acompañan la dinámica para facilitar en
        aquello que enriquezca la experiencia. Exploramos diferentes ángulos
        para reconocernos en el reflejo, conociendo en otras experiencias las
        propias limitaciones y accediendo a nuevas posibilidades de
        transformación.
      </>
    ),
  },
  {
    title: "¿Me ayudará más la terapia grupal o individual?",
    description: (
      <>
        "Depende del momento en que te encuentres internamente. En la entrevista
        de valoración gratuita sopesaremos junta/os qué es lo más adecuado para
        ti.{" "}
        <a
          href="https://api.whatsapp.com/send/?phone=34624840232&text=Hola%20viacosmos%2C%20quisiera%20una%20entrevista%20gratuita%20de%20valoraci%C3%B3n&type=phone_number&app_absent=0"
          className="text-secondary-custom no-underline border-b border-secondary-custom border-dashed"
        >
          Clic aquí si quieres acceder a ella.
        </a>
      </>
    ),
  },
  {
    title: "¿Cómo empiezo terapia?",
    description: (
      <>
        "El primer paso es agendar tu entrevista de valoración gratuita para
        valorar el plan que mejor se adapte a tu proceso actual.{" "}
        <a
          href="https://api.whatsapp.com/send/?phone=34624840232&text=Hola%20viacosmos%2C%20quisiera%20una%20entrevista%20gratuita%20de%20valoraci%C3%B3n&type=phone_number&app_absent=0"
          className="text-secondary-custom no-underline border-b border-secondary-custom border-dashed"
        >
          Haz clic aquí para agendarla.
        </a>
      </>
    ),
  },
];

const Faq = () => {
  return (
    <div className="max-w-[1100px] w-full">
      <h4 className="text-2xl md:text-4xl font-bold mb-6 md:py-8 text-center">
        Preguntas Frecuentes
      </h4>

      <Accordion
        type="single"
        collapsible
        className="w-full font-opensans pb-10"
      >
        {faqList.map((item, index) => (
          <AccordionItem
            value={(index + 1).toString()}
            key={item.title + "-" + index}
          >
            <AccordionTrigger className="md:text-xl">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="md:text-xl">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {/* <div className=" pl-6 my-16 border-l-2 font-opensans border-secondary-custom md:text-lg flex justify-center items-center text-center font-bold">
        <p>
          "…La vida y la muerte son un solo hilo, la misma línea pero vista
          desde diferentes lados" -{" "}
          <span className="font-normal"> Lao Tsé</span>
        </p>
      </div> */}
    </div>
  );
};
export default Faq;
