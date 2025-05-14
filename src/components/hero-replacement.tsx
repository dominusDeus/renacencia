import React from "react";
import Image from "next/image";
import Butterflies from "../../public/images/butterflies.png";
import Booklets from "../../public/images/announcement-books.png";
import LoreAndCharly from "../../public/images/lore-carlos-color.png";
import HeroImg from "../../public/images/hero-img.png";

const HeroReplacement = () => {
  return (
    <div className="w-full font-opensans">
      {/* Header text */}
      <div className="w-full relative py-4 bg-yellow-50">
        <Image
          src={Butterflies.src}
          alt="Butterflies"
          fill
          className="object-cover opacity-50 blur-sm"
        />
        <div className="relative z-10 text-xl text-center px-4">
          <span className="font-bold text-orange-500">
            Psicología Consciente
          </span>{" "}
          para la <span className="font-bold">Vida</span> y la{" "}
          <span className="font-bold">Muerte</span> - Terapia con profesionales
          que te comprenden
        </div>
      </div>

      {/* Main content - two column layout for desktop, stacked for mobile */}
      <div className="flex flex-col md:flex-row md:justify-center w-full">
        {/* Left column - Hero image (full width on mobile, half width on desktop) */}
        <div className="w-full md:w-[500px] relative h-[300px] sm:h-[350px] md:h-[500px]">
          <Image
            src={HeroImg.src}
            alt="Butterflies in forest"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right column - Content and images */}
        <div className="w-full md:w-1/2 p-4 md:p-6">
          {/* Seminar title */}
          <div className="text-2xl font-bold text-orange-600 mb-6 text-center md:text-left">
            SEMINARIO ONLINE GRATUITO "VOLVIENDO A LA VIDA"
          </div>

          {/* Content area with responsive image layout */}
          <div className="relative text-sm md:text-base text-red-700">
            {/* Booklet image - centered on mobile, float left on desktop */}
            <div className="relative w-[150px] h-[174px] mx-auto mb-4 md:float-left md:mr-4 md:mb-2 md:mx-0">
              <Image
                src={Booklets.src}
                alt="Volviendo a la Vida booklet"
                fill
                className="object-contain"
              />
            </div>

            <p className="mb-3 text-center md:text-left">
              Cuando la muerte se hace presente en nuestra vida, sea por la
              partida de un ser querido, o por un proceso que requiere nuestro
              acompañamiento, el mundo se detiene y todo lo que parecía central,
              ahora deja de serlo.
            </p>

            <div className="mb-3 text-center md:text-left">
              En este{" "}
              <span className="font-bold text-red-700">seminario gratuito</span>
              , reflexionaremos acerca de lo que la presencia de la muerte
              significa en nuestra vida. En un diálogo con la{" "}
              {/* Lore and Charly image floating right */}
              <div className="relative w-[320px] h-[187px] float-right ml-4 mb-2 mt-2 hidden md:block">
                <Image
                  src={LoreAndCharly.src}
                  alt="Lorena y Carlos"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-red-700">
                psicóloga sanitaria con formación en duelo y terapeuta Gestalt,
                Lorena Leiro Paz
              </span>
              , nos compartirá desde su experiencia profesional reflexiones y
              herramientas que podemos aprovechar para volver a equilibrarnos y
              abordar nuestros días desde una perspectiva nueva y superadora.
            </div>

            <div className="md:hidden relative w-[320px] h-[187px] float-right ml-4 mb-2 mt-2">
              <Image
                src={LoreAndCharly.src}
                alt="Lorena y Carlos"
                fill
                className="object-contain"
              />
            </div>

            {/* Button */}
            <div className="clear-both pt-3 text-center">
              <button className="bg-green-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 transition-colors w-full sm:w-auto">
                INSCRIBIRME AL SEMINARIO ONLINE GRATUITO "VOLVIENDO A LA VIDA"
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroReplacement;
