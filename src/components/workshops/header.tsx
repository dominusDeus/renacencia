import Link from "next/link";
import { Button } from "../ui/button";

const WorkshopsHeader = () => {
  return (
    <div className="w-full flex flex-col gap-6 items-center">
      <div className="text-5xl font-bold">
        ¿Necesitas un espacio más íntimo?
      </div>
      <p className="">
        Si sientes que aún no es tiempo de abrirte al grupo, pide sesiones de
        terapia personalizadas con especialistas en duelo
      </p>
      <div className="flex flex-col gap-1">
        <Button
          asChild
          className="bg-green-600 hover:bg-green-700 text-white text-base px-8 py-6 rounded-lg font-semibold"
        >
          <Link href="https://api.whatsapp.com/send/?phone=34624840232&text=Hola+viacosmos%2C+me+interesa+la+sesi%C3%B3n+de+terapia+grupal&type=phone_number&app_absent=0">
            AGENDA TU ENTREVISTA GRATUITA DE VALORACION
          </Link>
        </Button>
        <span className="mt-1 text-sm text-gray-600 text-center">
          Próximo Seminario Online Gratuito: 30/05/25
        </span>
      </div>
    </div>
  );
};
export default WorkshopsHeader;
