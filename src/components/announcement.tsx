import React from "react";
import Image from "next/image";
import CharlyBn from "../../public/images/carlos-bn-portrait.png";
import LoreBn from "../../public/images/lore-bn.png";
import Books from "../../public/images/announcement-books.png";
import { Button } from "./ui/button";

const Announcement = () => {
  return (
    <div className="w-full max-w-full">
      <div className="w-full flex flex-col tablet:flex-row justify-center tablet:justify-normal gap-10">
        <div className="relative  w-[150px] h-[176px] tablet:flex shrink-0 hidden">
          <Image src={Books.src} alt="flyers" fill />
        </div>
        <div className="text-sm text-brand-brown tablet:pl-2 max-w-[90vw] mx-auto tablet:max-w-[1100px] tablet:px-0 tablet:text-start text-center flex flex-col">
          TE INVITAMOS A ASISTIR AL{" "}
          <span className="font-bold">
            SEMINARIO GRATUITO “VOLVIENDO A LA VIDA”
          </span>
          , ESPECIALMENTE PREPARADO PARA QUIENES ATRAVIESAN DUELOS O DEBEN
          ACOMPAÑAR A UN SER QUERIDO EN SU PROCESO DE PARTIDA.
          <p className="font-bold pt-6">
            {" "}
            DAREMOS HERRAMIENTAS Y TIPS PARA VUESTRO BIENESTAR{" "}
          </p>
        </div>

        <div className="flex relative tablet:h-[176px] tablet:w-[164px] h-[230px] w-[214px] shrink-0 tablet:left-0 mx-auto tablet:mx-0">
          <Image
            src={CharlyBn.src}
            alt="flyers"
            fill
            className="absolute left-0 tablet:left-0"
          />
          <div className="relative tablet:w-[198px] tablet:h-[176px] h-[230px] w-[258px] flex shrink-0 left-0 tablet:left-[70px]">
            <Image src={LoreBn.src} alt="flyers" fill className="absolute" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button
          className="mt-12 bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-md font-semibold shadow-lg max-w-[90vw] mx-auto tablet:max-w-[1100px] tablet:mx-0"
          size="lg"
        >
          RESERVA TU SITIO AHORA MISMO
        </Button>
      </div>
    </div>
  );
};
export default Announcement;
