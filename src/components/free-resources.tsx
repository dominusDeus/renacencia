import React from "react";
import ResourceCard from "./ui/resource-card";
import Image from "next/image";

const resorces = [
  {
    title: "Artículos",
    description:
      "Exploramos la conexión de duelo, consciencia, vida y muerte. Escritos por nuestros especialistas y colaboradores invitados.",
  },
  {
    title: "Videoteca",
    description:
      "Entrevistas, Podcasts, y diversas intervenciones con  pensadores/as que comparten perspectivas transformadoras sobre la vida y la muerte.",
  },
  {
    title: "Seminarios",
    description:
      "Regularmente ofrecemos seminarios gratuitos reflexivos con recursos y herramientas útiles para todo aquel que quiera o necesite ahondar en ello.",
  },
  {
    title: "Descargables",
    description:
      "Recursos variados para ti que iremos facilitando, para implementar prácticas de sanación, meditaciones guiadas, reflexiones, ejercicios y demás.",
  },
];

const FreeResouces = () => {
  return (
    <div className="w-full pb-10 bt-4 px-4 relative text-black">
      <div className="text-xl [font-montserrat md:text-[45px] md:pt-6 md:pb-14 pb-6 font-bold relative z-20 text-center text-orange-500">
        TAMBIÉN RECURSOS GRATUITOS A TU ALCANCE
      </div>
      <div className="max-w-4xl mx-auto md:max-w-[1100px]">
        <div className="grid md:grid-cols-4 gap-6 md:gap-0">
          {resorces.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              description={resource.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default FreeResouces;
