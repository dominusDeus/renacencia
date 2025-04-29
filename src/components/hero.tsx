import React from "react";
import Image from "next/image";
import HeroImage from "../public/images/hero-img.png";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="max-w-5xl w-full flex flex-col md:flex-row md:gap-8 md:items-start md:px-4 font-opensans">
      <div className="flex-shrink-0 w-full md:w-1/3">
        <Image
          src={HeroImage.src}
          alt="Mujer con mariposa"
          width={330}
          height={380}
          className="rounded-none md:rounded-xl object-cover w-full h-full shadow-lg"
          priority
        />
      </div>
      <div className="flex flex-col gap-5 w-full md:w-2/3 px-6 py-11 md:py-0 md:px-0">
        <h1 className="text-2xl md:text-3xl font-bold leading-tight font-montserrat">
          SI SIENTES que TODO perdió SENTIDO…
        </h1>
        <div className="space-y-3 text-lg">
          <p className="italic font-opensans text-lg">
            Estamos aquí para acompañarte
          </p>
          <p className="text-secondary-custom font-bold">
            Psicoterapeutas especializadas/os queremos estar a tu lado.
          </p>
          <p className="text-base font-semibold italic font-opensans">
            Honremos <span className="font-bold">con nuestra vida</span> a
            quienes partieron antes
          </p>
          <ul className="list-none text-xs font-opensans font-bold list-inside">
            <li>🔹 Seminarios y Talleres sobre Vida y Muerte</li>
            <li>🔹 Terapia Grupal o Individual con nuestros especialistas</li>
          </ul>
        </div>
        <div className="flex flex-col gap-1 mt-1 self-center md:self-start">
          <Button
            asChild
            className=" bg-green-600 hover:bg-green-700 text-white text-base px-4 py-2 font-opensans rounded-md font-semibold max-w-xs"
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
