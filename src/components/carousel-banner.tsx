"use client";
import React, { useState, useEffect, useCallback, type JSX } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import HeroImage from "../../public/images/hero-img.png";
import Butterflies from "../../public/images/butterflies.png";
import Consultorio from "../../public/images/consultorio.png";
import LoreTherapy from "../../public/images/lore-therapy.jpg";
import Seed from "../../public/images/seed.png";
import Unlock from "../../public/images/unlock.png";
import LoreCarlos from "../../public/images/lore-carlos-bn.png";
import Leaflets from "../../public/images/announcement-books.png";
import Hands from "../../public/images/hands.png";
import Image from "next/image";

// Define slide data type
interface Slide {
  id: number;
  backgroundImage: string;
  logo: string;
  title: string;
  description: string;
  longDescription?: string | JSX.Element;
  buttonText?: string;
}

// Sample carousel data
const carouselData: Slide[] = [
  {
    id: 1,
    backgroundImage: Butterflies.src,
    logo: LoreCarlos.src,
    title: "TE INVITAMOS A ASISTIR AL SEMINARIO GRATUITO",
    description: "“VOLVIENDO A LA VIDA”",
    longDescription: (
      <>
        ESPECIALMENTE PREPARADO PARA QUIENES ATRAVIESAN DUELOS O DEBEN ACOMPAÑAR
        A UN SER QUERIDO EN SU PROCESO DE PARTIDA. DAREMOS HERRAMIENTAS Y TIPS
        PARA VUESTRO BIENESTAR
      </>
    ),
    buttonText: "RESERVA TU SITIO AHORA MISMO",
  },
  {
    id: 2,
    backgroundImage: Consultorio.src,
    logo: Leaflets.src,
    title: "TERAPIA GRUPAL ONLINE:",
    description: "CON LA TERAPIA GRUPAL EN 12 SEMANAS descubrirás 3 cosas…",
    longDescription: (
      <>
        1- Tu proceso es natural. 2- El dolor te enseña. 3- Al escuchar a otros
        también trabajas en ti.
      </>
    ),
    buttonText: "Entrevista de Valoración Gratuita",
  },
  {
    id: 3,
    backgroundImage: Seed.src,
    logo: Hands.src,
    title: " SOBRE NOSOTR@S:",
    description: "Cada acción cuenta, cada persona importa.",
    longDescription: (
      <>
        Somos un grupo de psicoterapeutas que nos hemos reunido en esta
        plataforma para apoyarte en tu proceso de duelo y/o de acompañamiento a
        personas que se encuentran atravesando su partida. Queremos que siempre
        cuentes con nuestra compañía. foto aquí.
      </>
    ),
    buttonText: "COMO NACE RENACENCIA",
  },
  // {
  //   id: 4,
  //   backgroundImage: Butterflies.src,
  //   logo: HeroImage.src,
  //   title: "Cuando sientes que todo perdió sentido…",
  //   description:
  //     " Aprender a honrar con nuestra vida a quienes partieron antes lo cambia todo",
  //   longDescription: (
  //     <>
  //       <p className="text-secondary-custom font-bold">
  //         Psicoterapeutas especializadas/os estamos a tu lado.
  //       </p>
  //       {/* <p className="text-base font-semibold italic font-opensans">
  //         Honremos <span className="font-bold">con nuestra vida</span> a quienes
  //         partieron antes
  //       </p> */}
  //       <ul className="list-none text-xs font-opensans font-bold list-inside">
  //         <li>🔹 TERAPIA GRUPAL ESPECIALIZADA EN DUELO</li>
  //         <li>🔹 Seminarios y Talleres sobre Vida y Muerte</li>
  //       </ul>
  //     </>
  //   ),
  //   buttonText: "¡Únete ahora!",
  // },
];

const HeroCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Define minimum swipe distance
  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Touch event handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchEnd || Math.abs(touchEnd - touchStart) < minSwipeDistance) return;

    if (touchEnd > touchStart) {
      // swipe right - go to previous slide
      prevSlide();
    } else {
      // swipe left - go to next slide
      nextSlide();
    }
  };

  return (
    <div
      className="carousel h-[calc(100vh-4rem)] md:h-[500px]"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {carouselData.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-slide relative ${
            index === activeIndex ? "active" : ""
          }`}
        >
          <Image
            src={slide.backgroundImage}
            alt="Conferencia"
            fill
            className="absolute z-0 blur-sm object-cover"
          />
          <div className="container mx-auto h-full flex flex-col md:flex-row items-center justify-center px-6 py-10 md:py-0 relative z-10">
            {/* Logo/Image section */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end p-2 md:p-4">
              <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-transparent rounded-xl">
                <Image
                  src={slide.logo}
                  alt="René Mey Logo"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>

            {/* Text content section */}
            <div className="w-full md:w-1/2 text-white drop-shadow-2xl md:p-4 px-6 md:pl-8 mt-2 md:mt-0 animate-fade">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl mb-2 md:mb-4">
                {slide.description}
              </p>
              <div className="text-xs md:text-sm lg:text-base mb-4 md:mb-6 max-w-lg">
                {slide.longDescription}
              </div>
              {slide.buttonText && (
                <button className="bg-secondary-custom text-white font-bold text-sm md:text-base py-2 px-4 md:px-6 rounded-md hover:bg-pink hover:text-white transition-all duration-300">
                  {slide.buttonText}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <div className="carousel-arrow prev" onClick={prevSlide}>
        <ArrowLeft size={20} className="md:size-24" />
      </div>
      <div className="carousel-arrow next" onClick={nextSlide}>
        <ArrowRight size={20} className="md:size-24" />
      </div>

      {/* Indicators */}
      <div className="carousel-indicators">
        {carouselData.map((_, index) => (
          <div
            key={index}
            className={`carousel-indicator ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
