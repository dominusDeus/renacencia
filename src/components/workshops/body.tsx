import React from "react";
import Image from "next/image";
import AuthorImage from "../../../public/images/carlos-bn.png";

const WorkShopsBody = () => {
  return (
    <div className="pt-24 md:pt-14">
      <div className="mb-9 md:flex md:justify-between md: items-center">
        <div className="md:text-right mb-10">
          <div className="text-brand-brown font-montserrat text-[20px] md:text-[27px] text-right font-bold md:text-right">
            "Ampliar nuestra CONSCIENCIA sobre la vida y la muerte es el mejor
            consuelo al que podemos aspirar"
          </div>
          <p className="text-xs md:text-sm text-right">
            Carlos Vega, fundador de{" "}
            <span className="text-secondary-custom">Renacencia</span> y{" "}
            <span className="font-bold">@viacosmos</span>
          </p>
        </div>
        <div className="h-[230px] md:h-[260px] md:aspect-[3/2] relative">
          <Image src={AuthorImage.src} fill alt="Autor Carlos" />
        </div>
      </div>
      <div>
        <p className="font-opensans text-center italic md:text-lg">
          Tomes o no terapia, siempre podrás participar de nuestros{" "}
          <span className="font-bold">seminarios y talleres</span>, accediendo a
          material exclusivo. Lo importante para nosotros es estimular y ayudar
          en el
          <span className="font-bold">
            crecimiento de la consciencia sobre Vida y Muerte
          </span>
        </p>
      </div>
    </div>
  );
};

export default WorkShopsBody;
