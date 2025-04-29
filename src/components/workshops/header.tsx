import Link from "next/link";
import { Button } from "../ui/button";

const WorkshopsHeader = () => {
  return (
    <div className="w-full flex flex-col text-[32px] gap-6 items-center">
      <div className="md:text-5xl text-[32PX] font-bold text-center">
        ¿Necesitas un espacio más íntimo?
      </div>
      <p className="text-base text-center font-opensans italic">
        Si sientes que aún no es tiempo de abrirte al grupo, pide sesiones de
        terapia personalizadas con especialistas en duelo
      </p>
      <div className="flex flex-col gap-1">
        <Button className="py-6 px-5 justify-start bg-green-600 hover:bg-green-700 text-white text-base rounded-lg font-semibold max-w-[327px] w-full">
          <Link
            href="https://api.whatsapp.com/send/?phone=34624840232&text=Hola+viacosmos%2C+me+interesa+la+sesi%C3%B3n+de+terapia+grupal&type=phone_number&app_absent=0"
            className="block truncate w-[calc(327px-2rem)] font-opensans"
          >
            AGENDA TU ENTREVISTA GRATUITA DE VALORACION
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default WorkshopsHeader;
