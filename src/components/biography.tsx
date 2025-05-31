import React from "react";
import Image from "next/image";

export const Biography = () => {
  return (
    <div className="w-full py-10 relative bg-brand-brown">
      <Image
        src="/images/butterflies.png"
        alt="Girl walking in the forest with butterflies"
        fill
        className="object-cover object-center absolute opacity-20 z-0"
      />
      <div
        id="aboutus"
        className="text-3xl px-4 md:text-[40px] font-montserrat md:text-4xl font-bold relative z-20 text-center text-white py-6 md:py-10"
      >
        ¿Cómo surgió Renacencia?
      </div>

      {/* MOBILE LAYOUT */}
      <div className="md:hidden px-4">
        <div className="h-[260px] flex justify-center w-full">
          <Image
            src="/images/carlos-vega-3.jpeg"
            alt="Autor Carlos Vega"
            width={260}
            height={400}
            className="object-cover"
          />
        </div>
        <p className="text-xs text-white pt-4 pb-3 text-center font-opensanspt-1 relative z-20 max-w-[90%] mx-auto">
          <span className="font-bold">Carlos Vega</span> es escritor y
          musicoterapeuta.
        </p>
        <div className="text-white pt-5 relative z-20 font-opensans">
          <p className="pb-4">
            Desde niño, la muerte me ha fascinado y desafiado a la vez. Durante
            más de <span className="font-bold">25 años</span> me sumergí a
            explorar sus misterios a través del estudio de conocimiento
            interior.
          </p>
          <p className="pb-4">
            Cuando mi esposa partió repentinamente de este plano,
            <span className="font-bold">
              {" "}
              tuve que poner en práctica todo lo aprendido y llevar mi
              comprensión a otro nivel.
            </span>{" "}
            Desde entonces condenso ese proceso en enseñanzas que ayudan a otros
            a mirar la muerte desde nuevas perspectivas.
          </p>
          <p>
            Ahora, con{" "}
            <span className="font-bold">
              profesionales de la psicología y estudiosos del camino
            </span>
            creamos RENACENCIA, dando herramientas y acompañamiento a quienes
            más lo necesiten.
          </p>
        </div>
      </div>
      {/* DESKTOP LAYOUT */}
      <div className="hidden md:flex md: justify-center relative z-20 w-full md:max-w-[1080px] mx-auto">
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <div className="w-[293px] h-[293px] flex">
              <Image
                src="/images/carlos-vega-3.jpeg"
                alt="Autor Carlos Vega"
                width={293}
                height={395}
                className="object-cover"
              />
            </div>

            <p className="text-sm text-white py-5 text-center font-opensanspt-1 relative z-20">
              <span className="font-bold">Carlos Vega</span> es escritor y
              musicoterapeuta.
            </p>
          </div>
          <div className="text-white relative z-20 font-opensans flex flex-col gap-5 max-w-[60%] md:justify-start md:pt-4">
            <p className="pb-4">
              Desde niño, la muerte me ha fascinado y desafiado a la vez.
              Durante más de <span className="font-bold">25 años</span> me
              sumergí a explorar sus misterios a través del estudio de
              conocimiento interior.
            </p>
            <p className="pb-4">
              Cuando mi esposa partió repentinamente de este plano,
              <span className="font-bold">
                {" "}
                tuve que poner en práctica todo lo aprendido y llevar mi
                comprensión a otro nivel.
              </span>{" "}
              Desde entonces condenso ese proceso en enseñanzas que ayudan a
              otros a mirar la muerte desde nuevas perspectivas.
            </p>
            <p>
              Ahora, con{" "}
              <span className="font-bold">
                profesionales de la psicología y estudiosos del camino
              </span>{" "}
              creamos RENACENCIA, dando herramientas y acompañamiento a quienes
              más lo necesiten.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
