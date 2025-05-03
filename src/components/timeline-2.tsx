import { Moon, Sun, Flame } from "lucide-react";
import Link from "next/link";

interface TimelineItem {
  icon: React.ReactNode;
  title: string;
  description: JSX.Element;
}

export default function Timeline2() {
  const items: TimelineItem[] = [
    {
      icon: <Moon className="w-6 h-6" />,
      title: "Eleva la mirada",
      description: (
        <>
          "Nos encaminamos a{" "}
          <span className="font-bold">acceder a una nueva percepción, </span>
          mediante reflexiones, comprensiones y meditación."
        </>
      ),
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Círculo de Ancestros",
      description: (
        <>
          "Honrar a quien partió es hacer de nuestra vida una obra de amor.
          Buscaremos
          <span className="font-bold"> crear un puente de conexión </span>
          entre la vida y la muerte."
        </>
      ),
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: "Alquimia del dolor y el temor",
      description: (
        <>
          "Recorre la sabiduría antigua para transmutar{" "}
          <span className="font-bold">el dolor </span>
          en gratitud y consciencia."
        </>
      ),
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-12">
        Algunos de Nuestros TALLERES Y SEMINARIOS
      </h2>

      {/* Mobile Layout */}
      <div className="md:hidden relative">
        {/* Vertical connecting line */}
        <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-200" />

        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index} className="relative flex items-start">
              {/* Horizontal connecting line */}
              <div className="absolute left-0 top-5 w-16 h-0.5 bg-gray-200" />

              <div className="flex-shrink-0 relative z-10">
                <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              <div className="ml-12 pt-[5px]">
                <h3 className="font-bold text-lg text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative">
        {/* Vertical center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-timeline-border" />

        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="relative flex items-center">
              {/* Center icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10 top-0">
                <div className="w-10 h-10 bg-timeline-bg border-2 border-timeline-border rounded-md flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              {/* Content container */}
              <div className="w-full flex justify-center items-center">
                {/* Left side content */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-16 pt-[5px]" : "opacity-0"
                  }`}
                >
                  <div className="text-right">
                    <h3 className="font-bold text-lg text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </div>
                  {/* Horizontal connecting line */}
                  <div className="absolute right-1/2 top-5 w-10 h-0.5 bg-gray-200" />
                </div>

                {/* Right side content */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 1 ? "pl-16 pt-[5px]" : "opacity-0"
                  }`}
                >
                  <div className="text-left">
                    <h3 className="font-bold text-lg text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </div>
                  {/* Horizontal connecting line */}
                  <div className="absolute left-1/2 top-5 w-12 h-0.5 bg-gray-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors font-bold">
          <Link
            href="https://api.whatsapp.com/send/?phone=34624840232&text=Hola%20viacosmos%2C%20me%20interesa%20saber%20m%C3%A1s%20acerca%20de%20los%20talleres&type=phone_number&app_absent=0"
            className="block truncate w-[calc(327px-2rem)] font-opensans"
          >
            MÁS INFO SOBRE TALLERES Y SEMINARIOS
          </Link>
        </button>
      </div>
    </div>
  );
}
