import React from "react";
import Image from "next/image";
import BannerImage from "../public/images/banner.png";

const Banner = () => {
  return (
    <div className="w-full h-48 md:h-[400px] flex items-center justify-center overflow-hidden relative">
      <Image
        src={BannerImage.src}
        alt="Banner mariposa"
        fill
        className="object-cover object-center brightness-90"
        style={{ zIndex: 0 }}
        priority
      />
      <span className="relative z-10 py-3 px-6 md:px-16 md:py-10 bg-white/90 rounded-xl shadow text-xl md:text-4xl font-bold text-center">
        Si lo deseas, te acompañamos en tu camino
      </span>
    </div>
  );
};
export default Banner;
