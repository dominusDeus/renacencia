import React from "react";
import Image from "next/image";
import HeroImage from "../public/images/hero-img.png";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 items-center md:items-start px-4 font-opensans">
      <div className="flex-shrink-0 w-full md:w-1/3">
        <Image
          src={HeroImage.src}
          alt="Mujer con mariposa"
          width={330}
          height={380}
          className="rounded-xl object-cover w-full shadow-lg"
          priority
        />
      </div>
      <div className="flex flex-col gap-5 w-full md:w-2/3">
        <h1 className="text-lg md:text-3xl font-bold leading-tight font-montserrat">
          SI SIENTES que TODO perdió SENTIDO…
        </h1>
        <div className="space-y-3 text-lg">
          <p>Estamos aquí para acompañarte</p>
          <p className="text-secondary-custom">
            Psicoterapeutas especializadas/os queremos estar a tu lado.
          </p>
          <p className="text-base font-semibold">
            Honremos <span className="font-bold">con nuestra vida</span> a
            quienes partieron antes
          </p>
          <ul className="list-none ml-5 text-base font-opensans">
            <li>🔹 Seminarios y Talleres sobre Vida y Muerte</li>
            <li>🔹 Terapia Grupal o Individual con nuestros especialistas</li>
          </ul>
        </div>
        <div className="flex flex-col gap-1 mt-1">
          <Button
            asChild
            className="bg-green-600 hover:bg-green-700 text-white text-base px-6 py-2 rounded-lg font-semibold max-w-xs"
          >
            <a href="#">INSCRÍBETE AL SEMINARIO GRATUITO</a>
          </Button>
          <span className="mt-1 text-sm text-gray-600">
            Próximo Seminario Online Gratuito: 30/05/25
          </span>
        </div>
      </div>
    </div>
  );
};
export default Hero;
