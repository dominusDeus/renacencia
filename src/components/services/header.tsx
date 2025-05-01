import React from "react";
import Image from "next/image";
import ShadowWoman from "../../../public/images/shadow-woman.png";
const ServicesHeader = () => {
  return (
    // <section className="w-full py-12 bg-white flex flex-col items-center">
    <div className="max-w-4xl w-full text-center">
      <h2 className="font-bold text-[20px] italic md:text-3xl mb-6">
        Terapia con profesionales que entienden lo que vives
      </h2>
      <div className="flex flex-col md:flex-row items-center md:justify-between justify-center">
        <div className="flex-shrink-0 w-56 h-56 relative">
          <Image
            src={ShadowWoman.src}
            alt="Mujer en terapia"
            fill
            className="rounded-lg object-cover shadow"
          />
        </div>
        <div className="text-left md:text-2xl md:pt-0 pt-6 text-[20px] px-2 max-w-lg italic">
          Detrás de esta plataforma hay{" "}
          <span className="text-secondary-custom font-medium">
            psicoterapeutas y especialistas seleccionados
          </span>{" "}
          <span className="font-bold">
            por su experiencia en duelo, sensibilidad y empatía,
          </span>
          <br />
          que tienen algo más en común: un largo camino personal de
          autoconocimiento.
        </div>
      </div>
    </div>
    // </section>
  );
};
export default ServicesHeader;
