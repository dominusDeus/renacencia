import Image from "next/image";
import {
  HeartIcon,
  UserIcon,
  CalendarIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const ServicesBody = () => {
  return (
    <div className="max-w-[1100px] w-full mt-14 px-4">
      <h3 className="font-extrabold text-secondary-custom text-center mb-3 font-montserrat text-lg md:text-3xl">
        CON TERAPIA GRUPAL EN 12 SEMANAS descubrirás 3 cosas…
      </h3>
      <div className="w-full md:flex md:justify-center font-opensans text-lg pb-5 text-center">
        <p className="inline md:block">
          <span className="font-bold">1- </span>
          {"  "} Tu proceso es natural.
        </p>
        <p className="inline md:block">
          <span className="font-bold pl-1">2- </span> El dolor te enseña.
        </p>
        <p className="inline md:block">
          <span className="font-bold pl-1">3- </span> Al escuchar a otros
          también trabajas en ti.
        </p>
      </div>
      <div className="md:grid md:grid-cols-3 md:grid-rows-2">
        <div className="hidden col-span-1 row-span-1 md:flex md:flex-col md:justify-center pr-7 md:text-end">
          <div className="font-bold font-montserrat pb-3 text-xl flex justify-end">
            Acompañamiento
          </div>
          <p>
            <span className="font-bold">Grupos pequeños </span>
            (no más de 7 personas), donde te sentirás escuchada/o sin juicios.
          </p>
        </div>
        {/* Circle with icons container */}
        <div className="flex flex-col md:col-span-1 md:row-span-2 relative w-full max-w-[290px] aspect-square mx-auto mt-8 rotate-45 -translate-y-4">
          {/* Main circle */}
          <div className="absolute inset-0 border-[15px] border-orange-400 rounded-full "></div>

          {/* Icons */}
          <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 p-2 -rotate-45 rounded-full border-orange-400 bg-orange-400">
            <HeartIcon className="w-8 h-8 text-white" />
          </div>
          <div className="absolute top-[148px] -right-6 -translate-y-1/2 p-2 -rotate-45 rounded-full border-orange-400 bg-orange-400">
            <UserIcon className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -bottom-6 left-[52%] -translate-x-1/2 p-2 -rotate-45  rounded-full border-orange-400 bg-orange-400">
            <CalendarIcon className="w-8 h-8 text-white" />
          </div>
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 p-2 -rotate-45 rounded-full border-orange-400 bg-orange-400">
            <StarIcon className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="hidden md:col-span1  md:row-span-1 md:flex md:flex-col md:justify-center pl-7">
          <div className="font-bold font-montserrat pb-3 text-xl flex justify-start">
            Conexión
          </div>
          <p>
            Verás tu propia historia en otras vidas y descubrirás que
            <span className="font-bold">tu sentir es humano y compartido.</span>
          </p>
        </div>
        <div className="hidden md:col-span1 md:flex md:flex-col md:justify-center pr-7 text-end">
          <div className="font-bold font-montserrat pb-3 text-xl flex justify-end">
            Flexibilidad
          </div>
          <p>
            Únete en grupos desde tu hogar, por la mañana o la tarde.{" "}
            <span className="font-bold">Trabaja profundo con terapia </span>
            por la pantalla
          </p>
        </div>
        <div className="hidden md:col-span1 md:flex md:flex-col md:justify-center pl-7">
          <div className="font-bold font-montserrat pb-3 text-xl flex justify-starr">
            Transformación
          </div>
          <p>
            {"Terapia moderna integrada con filosofías milenarias. "}
            <span className="font-bold">
              Apuntando al cielo con los pies en la tierra.
            </span>
          </p>
        </div>
        {/* /// MOBILE CARDS /// */}
        <div className="flex flex-col md:hidden pt-4">
          <div className="card flex gap-4 items-start w-full">
            <div className="bg-orange-400 rounded-md margin-0 p-2">
              <HeartIcon className="w-5 h-5 text-white" />
            </div>
            <div className="">
              <div className="font-bold text-lg">Acompañamiento</div>
              <p>
                <span className="font-bold">Grupos pequeños </span>
                (no más de 6 personas), donde te sentirás escuchada/o sin
                juicios.
              </p>
            </div>
          </div>
          <div className="card flex gap-4 items-start w-full pt-6">
            <div className="bg-orange-400 rounded-md margin-0 p-2">
              <UserIcon className="w-5 h-5 text-white" />
            </div>
            <div className="">
              <div className="font-bold text-lg">Conexión</div>
              <p>
                Verás tu propia historia en otras vidas y descubrirás que
                <span className="font-bold">
                  tu sentir es humano y compartido.
                </span>
              </p>
            </div>
          </div>
          <div className="card flex gap-4 items-start w-full pt-6">
            <div className="bg-orange-400 rounded-md margin-0 p-2">
              <UserIcon className="w-5 h-5 text-white" />
            </div>
            <div className="">
              <div className="font-bold text-lg">Flexibilidad</div>
              <p>
                Únete en grupos desde tu hogar, por la mañana o la tarde.{" "}
                <span className="font-bold">Trabaja profundo con terapia </span>
                por la pantalla
              </p>
            </div>
          </div>
          <div className="card flex gap-4 items-start w-full pt-6">
            <div className="bg-orange-400 rounded-md margin-0 p-2">
              <CalendarIcon className="w-5 h-5 text-white" />
            </div>
            <div className="">
              <div className="font-bold text-lg">Transformación</div>
              <p>
                Terapia moderna integrada con filosofías milenarias.
                <span className="font-bold">
                  Apuntando al cielo con los pies en la tierra.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBody;
