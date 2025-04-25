import React from "react";
import Image from "next/image";
import BannerImage from "../public/images/banner.png";

const Banner = () => {
  return (
    <section className="relative w-full">
      <div className="w-full h-48 md:h-[400px] flex items-center justify-center overflow-hidden relative">
        <Image
          src={BannerImage.src}
          alt="Banner mariposa"
          fill
          className="object-cover object-center brightness-90"
          style={{ zIndex: 0 }}
          priority
        />
        <span className="relative z-10 py-3 px-6 bg-white/80 rounded-xl shadow text-xl md:text-2xl font-bold text-center">
          Si lo deseas, te acompañamos en tu camino
        </span>
      </div>
    </section>
  );
};
export default Banner;
