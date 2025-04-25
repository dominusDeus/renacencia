import React from "react";
import Image from "next/image";
import ShadowWoman from "../../public/images/shadow-woman.png";
const ServicesHeader = () => {
  return (
    // <section className="w-full py-12 bg-white flex flex-col items-center">
    <div className="max-w-4xl w-full text-center px-4">
      <h2 className="font-bold text-lg md:text-xl mb-6">
        Terapia con profesionales que entienden lo que vives
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="flex-shrink-0 w-48 h-44 relative">
          <Image
            src={ShadowWoman.src}
            alt="Mujer en terapia"
            fill
            className="rounded-lg object-cover shadow"
          />
        </div>
        <div className="text-left md:text-base text-sm px-2 max-w-lg">
          Detrás de esta plataforma hay{" "}
          <span className="text-secondary-custom font-medium">
            psicoterapeutas y especialistas seleccionados
          </span>{" "}
          por su experiencia en duelo, sensibilidad y formación.
          <br />
          Es un espacio único para quienes hayan pasado pérdidas de vida, con
          guías que acompañan el proceso personal de reconstrucción de sentido.
        </div>
      </div>
    </div>
    // </section>
  );
};
export default ServicesHeader;
