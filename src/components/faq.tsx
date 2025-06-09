import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqList = [
  {
    title: "¿Los seminarios son gratuitos siempre?",
    description: (
      <>
        Sí, entre las muchas actividades realizamos varios seminarios gratuitos
        al año, con el fin de divulgar herramientas y reflexiones que ayuden a
        las personas que necesitan un apoyo en determinado momento de su vida.
      </>
    ),
  },
  {
    title:
      "¿Cuales son los descuentos anunciados para terapia grupal e individual?",
    description: (
      <>
        Los descuentos no se aplican sobre sesiones sueltas sino sobre los
        diferentes paquetes. Por ejemplo: En terapia grupal al pagar las 12
        sesiones grupales se aplica un descuento del 10%, lo mismo que al
        concretar todo el mes (o más) de terapia individual.
      </>
    ),
  },
  {
    title: "¿La terapia es online o presencial?",
    description: (
      <>
        "Las terapias grupales se realizan de manera online, las terapias
        individuales pueden realizarse de modo online o presencial, dependiendo
        coincidencia de ubicación vuestra con la de las/os especialistas.
      </>
    ),
  },
  {
    title: "¿Qué tipo de terapeutas trabajan en las sesiones?",
    description: (
      <>
        En nuestra plataforma encontrarás especialistas de psicología con
        titulación oficial y terapeutas que han recorrido un sendero de
        conocimiento interior desde la sensibilidad humana y el anhelo de
        evolución personal. Sabemos que la autenticidad y la experiencia
        personal son fundamentales para acompañarte en un proceso de sanación,
        pues tenemos claro que la terapia es ante todo un encuentro humano.
      </>
    ),
  },
  {
    title: "¿En qué se diferencia la psicología consciente de la tradicional?",
    description: (
      <>
        "En
        <span className="font-bold"> RENACENCIA,</span>
        priorizamos la importancia del funcionamiento del sistema nervioso en
        nuestra regulación emocional, y todos los determinantes sociales de la
        salud (DSS) desde un enfoque tradicional de la psicología, sin dejar de
        considerar que además de personas, somos alma y esencia.{" "}
        <span className="font-bold">
          Ofrecemos una visión integrada, mirando lo trascendente con los pies
          en la tierra.
        </span>
      </>
    ),
  },
  {
    title: "¿Cómo sé si necesito terapia grupal o individual?",
    description: (
      <>
        "Ofrecemos una{" "}
        <span className="font-bold">sesión de evaluación gratuita</span> donde
        exploramos juntos tu situación particular. Dependiendo de donde te
        encuentres en tu proceso te sugeriremos formar parte de un grupo, o bien
        acceder a consultas personales.{" "}
        <a
          href="https://api.whatsapp.com/send/?phone=34624840232&text=Hola%20viacosmos%2C%20quisiera%20una%20entrevista%20gratuita%20de%20valoraci%C3%B3n&type=phone_number&app_absent=0"
          className="text-secondary-custom no-underline border-b border-secondary-custom border-dashed"
        >
          ¿Quieres una sesión de evaluación gratuita? Clic aquí.
        </a>
      </>
    ),
  },
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
