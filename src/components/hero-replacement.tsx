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
      <div className="flex flex-col md:flex-row md:justify-center w-full min-h-[500px]">
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
        <div className="w-full md:w-1/2 flex flex-col justify-between p-4 md:p-6 bg-white">
          {/* Seminar title */}
          <div>
            <div className="text-2xl md:text-2xl font-bold text-orange-500 mb-2 text-center">
              SEMINARIO ONLINE GRATUITO “VOLVIENDO A LA VIDA”
            </div>
            <div className="mb-4 text-center">
              <div className="bg-yellow-100 rounded-md px-2 py-1 inline-block text-xs font-semibold text-red-700 shadow-sm">
                <span className="align-middle">🎁</span> DE REGALO:{" "}
                <span className="font-bold">Un cupón de descuento</span> en
                terapia grupal o individual para quienes participen del
                seminario
              </div>
            </div>
            <div className="text-base md:text-base text-red-800 mb-4">
              <span className="font-bold">
                Cuando la muerte se hace presente en nuestra vida
              </span>
              , el mundo se detiene y todo lo que parecía central ahora deja de
              serlo. En este{" "}
              <span className="font-bold">seminario gratuito abordaremos</span>{" "}
              reflexiones y herramientas que podremos aprovechar para volver a
              nuestro centro de equilibrio interior.
            </div>
          </div>

          {/* Speakers and Booklet section */}
          <div className="flex flex-col md:flex-row items-center md:items-end md:justify-between mt-4 mb-6 md:mb-8">
            {/* Speaker photo */}
            <div className="relative w-[270px] h-[203px] md:w-[200px] md:h-[150px] mb-4 md:mb-0 md:mr-4 top-2">
              <Image
                src={LoreAndCharly.src}
                alt="Lorena y Carlos"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col items-center md:items-start pb-2 border-b-2 border-orange-500 border-dashed">
              <div className="text-2xl md:text-3xl font-light text-orange-500 mb-2 text-center md:text-left">
                Impartirán el Seminario
              </div>
              <div className="text-[15px] md:text-xs text-gray-800 text-center md:text-left font-bold">
                Lorena Leiro Paz, Psicóloga Sanitaria con formación en duelo y
                terapeuta Gestalt
                <br />
                junto a Carlos Alberto Vega, fundador de Renacencia.com,
                escritor, divulgador
                <br />
                de conocimiento interior y musicoterapeuta.
              </div>
            </div>
            {/* Booklet image */}
            <div className="relative w-[240px] h-[277px] md:w-[120px] md:h-[140px] ml-0 md:ml-4 mt-4 md:mt-0 top-1">
              <Image
                src={Booklets.src}
                alt="Volviendo a la Vida booklet"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Button */}
          <div className="pt-3 text-center w-full">
            <button className="bg-green-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 transition-colors w-full sm:w-auto">
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
  );
};

export default HeroReplacement;

// Cuando la muerte se hace presente en nuestra vida, el mundo se detiene y todo lo que parecía central, ahora deja de serlo. En este seminario gratuito, reflexionaremos acerca de lo que la presencia de la muerte significa en nuestra vida.

// La psicóloga sanitaria con formación en duelo y terapeuta Gestalt, Lorena Leiro Paz, nos compartirá desde su experiencia profesional, reflexiones y herramientas que podremos aprovechar para volver a equilibrarnos y abordar nuestros días desde una perspectiva nueva y superadora.
