import React from "react";
import Image from "next/image";
import HeroImage from "../../public/images/hero-img.png";
import { Button } from "./ui/button";
import Link from "next/link";

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
          Cuando sientes que todo perdió sentido…
        </h1>
        <div className="space-y-3 text-lg">
          <p className="italic font-opensans text-lg">
            Aprender a honrar con nuestra vida a quienes partieron antes lo
            cambia todo
          </p>
          <p className="text-secondary-custom font-bold">
            Psicoterapeutas especializadas/os estamos a tu lado.
          </p>
          <p className="text-base font-semibold italic font-opensans">
            Honremos <span className="font-bold">con nuestra vida</span> a
            quienes partieron antes
          </p>
          <ul className="list-none text-xs font-opensans font-bold list-inside">
            <li>🔹 TERAPIA GRUPAL ESPECIALIZADA EN DUELO</li>
            <li>🔹 Seminarios y Talleres sobre Vida y Muerte</li>
          </ul>
        </div>
        <div className="flex flex-col gap-1 mt-1 self-center md:self-start">
          <Button
            asChild
            className=" bg-green-600 hover:bg-green-700 text-white text-base px-4 py-2 font-opensans rounded-md font-semibold max-w-xs"
          >
            <Link
              href="https://api.whatsapp.com/send/?phone=34624840232&text=Hola%20viacosmos%2C%20me%20interesar%C3%ADa%20inscribirme%20al%20seminario%20gratuito&type=phone_number&app_absent=0"
              className="block truncate w-[calc(327px-2rem)] font-opensans"
            >
              AGENDA TU ENTREVISTA GRATUITA
            </Link>
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
