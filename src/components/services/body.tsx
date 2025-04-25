import Image from "next/image";
import {
  HeartIcon,
  UserIcon,
  CalendarIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const ServicesBody = () => {
  return (
    <div className="max-w-4xl w-full mt-14 px-4">
      <h3 className="font-extrabold text-center mb-3 font-montserrat text-5xl">
        CÓMO TE AYUDAREMOS
      </h3>
      <div className="w-full flex justify-center font-opensans text-lg">
        <span className="font-bold">{"1- "}</span> Tu proceso es natural.{" "}
        <span className="font-bold">{" 2- "}</span> El dolor te enseña.{" "}
        <span className="font-bold">{" 3- "}</span> Al escuchar a otros también
        trabajas en ti.
      </div>

      {/* Circle with icons container */}
      <div className="relative w-full max-w-[290px] aspect-square mx-auto mt-8 rotate-45">
        {/* Main circle */}
        <div className="absolute inset-0 border-[15px] border-brand-brown rounded-full "></div>

        {/* Icons */}
        <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 p-2 -rotate-45 rounded-full border-brand-brown bg-brand-brown">
          <HeartIcon className="w-8 h-8 text-white" />
        </div>
        <div className="absolute top-[148px] -right-6 -translate-y-1/2 p-2 -rotate-45 rounded-full border-brand-brown bg-brand-brown">
          <UserIcon className="w-8 h-8 text-white" />
        </div>
        <div className="absolute -bottom-6 left-[52%] -translate-x-1/2 p-2 -rotate-45  rounded-full border-brand-brown bg-brand-brown">
          <CalendarIcon className="w-8 h-8 text-white" />
        </div>
        <div className="absolute top-1/2 -left-4 -translate-y-1/2 p-2 -rotate-45 rounded-full border-brand-brown bg-brand-brown">
          <StarIcon className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  );
};

export default ServicesBody;
