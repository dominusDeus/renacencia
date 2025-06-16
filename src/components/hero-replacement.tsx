import React from "react";
import Image from "next/image";
import Butterflies from "../../public/images/butterflies.png";
import Booklets from "../../public/images/announcement-books.png";
import LoreAndCharly from "../../public/images/lore-carlos-bn.png";
import HeroImg from "../../public/images/hero-img.png";
import Link from "next/link";

const HeroReplacement = () => {
  return (
    <div className="w-full font-opensans">
      {/* Header text */}
      <div className="w-full relative md:py-4 py-2 bg-yellow-50">
        <Image
          src={Butterflies.src}
          alt="Butterflies"
          fill
          className="object-cover opacity-50 blur-sm"
        />
        <div className="relative z-10 md:text-xl text-sm text-center md:px-4 px-2">
          <span className="font-bold text-orange-500">
            Psicología Consciente
          </span>{" "}
          para la <span className="font-bold">Vida</span> y la{" "}
          <span className="font-bold">Muerte </span>
          <span className="hidden md:inline-block">
            -{" "}
            <span className="italic">
              Renace al presente transformando tu dolor
            </span>
          </span>
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
        {/* ///SECOND LINE MOBILE */}
        <div className="second-line-mobile w-full relative py-2 md:hidden">
          <Image
            src={Butterflies.src}
            alt="Butterflies"
            fill
            className="object-cover opacity-50 blur-sm"
          />
          <div className=" relative z-10 text-[11px] font-bold text-center">
            Renace al presente transformando tu dolor
          </div>
        </div>

        {/* Right column - Content and images */}
        <div className="w-full md:w-1/2 p-4 md:p-6">
          {/* Seminar title */}
          <div className="text-xl font-bold text-orange-600 mb-3 text-center md:text-center">
            SEMINARIO ONLINE GRATUITO "VOLVIENDO A LA VIDA"
          </div>
          <div className="mb-4 text-center">
            <div className="italic bg-opacity-50 text-red-700 text-[11px] bg-yellow-100 inline-block px-2 py-1">
              <span className="font-bold">
                🎁 DE REGALO: Un cupón de descuento
              </span>{" "}
              en el próximo taller para quienes participen del seminario
            </div>
          </div>
          {/* Content area with responsive image layout */}
          <div className="relative text-sm text-red-700">
            {/* Booklet image - centered on mobile, float left on desktop */}
            <div className="relative block tablet:hidden xl:block w-[150px] h-[174px] mx-auto mb-4 xl:float-left xl:mr-4 xl:mb-2 xl:mx-0">
              <Image
                src={Booklets.src}
                alt="Volviendo a la Vida booklet"
                fill
                className="object-contain"
              />
            </div>

            <p className="mb-3 text-center md:text-left">
              Cuando la muerte se hace presente en nuestra vida, el mundo se
              detiene y todo lo que parecía central, ahora deja de serlo.
            </p>

            <div className="mb-3 text-center md:text-left">
              En este{" "}
              <span className="font-bold text-red-700">seminario gratuito</span>
              , reflexionaremos acerca de lo que la presencia de la muerte
              significa en nuestra vida.
              {/* Lore and Charly image floating right */}
              <div className="relative w-[210px] h-[123px] xl:w-[280px] xl:h-[164px] float-right ml-4 mb-2 mt-2  hidden md:block">
                <Image
                  src={LoreAndCharly.src}
                  alt="Lorena y Carlos"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-red-700">
                La psicóloga sanitaria con formación en duelo y terapeuta
                Gestalt, Lorena Leiro Paz
              </span>
              , nos compartirá desde su experiencia profesional reflexiones y
              herramientas que podemos aprovechar para volver a equilibrarnos y
              abordar nuestros días desde una perspectiva nueva y superadora.
            </div>

            <div className="md:hidden relative w-[320px] h-[187px] float-right ml-4 mt-2">
              <Image
                src={LoreAndCharly.src}
                alt="Lorena y Carlos"
                fill
                className="object-contain"
              />
            </div>
            {/* <p className="text-[10px] font-bold text-center max-w-screen md:hidden">
              Lorena Leiro Psicóloga Sanitaria - Carlos Vega Musicoterapeuta
            </p> */}

            {/* Button */}
            <div className="clear-both pt-3 text-center">
              <button className="xl:mt-8 bg-green-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 transition-colors w-full sm:w-auto">
                <Link
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeQD0BumxsIx6WassCzSXblOKnxpFqFtPdajQ9xngSkXkAS9Q/viewform?usp=sf_link"
                >
                  INSCRIBIRME AL SEMINARIO ONLINE GRATUITO "VOLVIENDO A LA VIDA"
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroReplacement;

// Cuando la muerte se hace presente en nuestra vida, el mundo se detiene y todo lo que parecía central, ahora deja de serlo. En este seminario gratuito, reflexionaremos acerca de lo que la presencia de la muerte significa en nuestra vida.

// La psicóloga sanitaria con formación en duelo y terapeuta Gestalt, Lorena Leiro Paz, nos compartirá desde su experiencia profesional, reflexiones y herramientas que podremos aprovechar para volver a equilibrarnos y abordar nuestros días desde una perspectiva nueva y superadora.
