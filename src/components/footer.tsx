import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer-bg p-2 md:flex md:flex-col md:items-center mx-auto w-full">
      <div className="flex flex-col gap-6 bg-brand-brown rounded-md relative p-6 max-w-[1100px] ">
        {/* TODO: REPLACE WITH ACTAL IMAGE */}
        {/* <Image
          src="https://ext.same-assets.com/1332691435/1769299446.jpeg"
          alt="Logo Renacencia"
          fill
          className="absolute z-0 opacity-20"
        /> */}
        <div className="flex flex-col gap-2 text-white z-10">
          <div className="font-bold w-5/6 border-b-2 border-white font-opensans mb-2 leading-4 text-xl md:text-2xl italic">
            Contacto
          </div>
          <div className="md:grid md:grid-cols-3">
            <div className="py-4 flex gap-4">
              <div className="min-w-[40px]">
                <Phone className="text-white" size={40} />
              </div>
              <div>
                <p className="text-sm">
                  <span className="font-bold text-lg md:text-[22px]">
                    Whatsapp
                  </span>{" "}
                </p>
                <p className="text-xs md:text-sm font-bold py-2">
                  +34 123 456 789
                </p>
                <p className="text-xs md:text-sm">
                  Deja tu mensaje. Responderemos tus dudas en horario laboral.
                </p>
              </div>
            </div>
            <div className="py-4 flex gap-4">
              <div className="min-w-[40px]">
                <Image
                  src="https://ext.same-assets.com/1332691435/1769299446.jpeg"
                  alt="Logo Renacencia"
                  width={40}
                  height={40}
                  className="rounded-sm"
                />
              </div>
              <div>
                <p className="font-bold text-lg md:text-[22px]">
                  Redes Sociales
                </p>
                <p className="text-xs md:text-sm py-2">
                  Busca <span className="font-bold">@viacosmos</span>
                </p>
                <p className="text-xs md:text-sm">
                  para estar más cerquita en…Instagram, Youtube y Facebook.
                </p>
              </div>
            </div>
            <div className="py-4 flex gap-4">
              <div className="min-w-[40px]">
                <Mail className="text-white" size={40} />
              </div>
              <div>
                <p className="text-sm">
                  <span className="font-bold text-lg md:text-[22px]">
                    Correo Electrónico
                  </span>{" "}
                </p>
                <p className="text-xs md:text-sm font-bold py-2 underline">
                  infoviacosmos@gmail.com
                </p>
                <p className="text-xs md:text-sm">
                  Respondemos a todas las consultas en un plazo máximo de 24
                  horas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[165px] w-[366px] max-w-[100%] md:h-[397px] md:w-[878px] relative flex justify-center text-center md:self-center">
          <Image
            src="/isotipo/footer-logo.png"
            alt="Logo Renacencia"
            fill
            className=" rounded-lg object-cover md:object-contain bg-white"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
