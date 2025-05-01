import React from "react";
import { Moon, Sun, Flame } from "lucide-react";
import { Button } from "./ui/button";

const timelineItems = [
  {
    icon: <Moon className="text-primary" size={32} />, // moon icon
    title: "Eleva la mirada",
    description: (
      <>
        Nos encaminamos a <b>acceder a una nueva percepción</b>, mediante
        reflexiones, comprensiones y meditación.
      </>
    ),
  },
  {
    icon: <Sun className="text-primary" size={32} />, // sun/star icon
    title: "Círculo de Ancestros",
    description: (
      <>
        Honrar a quien partió es hacer de nuestra vida una obra de amor.
        Buscaremos <b>crear un puente de conexión</b> entre la vida y la muerte.
      </>
    ),
  },
  {
    icon: <Flame className="text-primary" size={32} />, // fire icon
    title: "Alquimia del dolor y el temor",
    description: (
      <>
        Recorre la sabiduría antigua para transmutar <b>el dolor</b> en gratitud
        y consciencia.
      </>
    ),
  },
];

const Timeline = () => {
  return (
    <section className="w-full flex flex-col items-center py-8 px-2">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Algunos de Nuestros{" "}
        <span className="text-primary">TALLERES Y SEMINARIOS</span>
      </h2>
      <div className="flex flex-col md:flex-row md:justify-center md:items-start w-full max-w-5xl gap-12 md:gap-0 relative">
        {/* Timeline line */}
        <div
          className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 z-0"
          style={{ transform: "translateX(-50%)" }}
        />
        <div className="flex flex-col md:flex-row w-full z-10">
          {/* Left column (first and third items) */}
          <div className="flex-1 flex flex-col justify-between md:pr-8">
            {/* First item */}
            <div className="flex md:justify-end md:text-right mb-12 md:mb-0">
              <div className="max-w-xs">
                <div className="flex items-center md:justify-end mb-2">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-gray-100 border border-gray-200 mr-4 md:mr-0 md:ml-4">
                    {timelineItems[0].icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">
                  {timelineItems[0].title}
                </h3>
                <p className="text-gray-700">{timelineItems[0].description}</p>
              </div>
            </div>
            {/* Third item (on desktop, bottom left) */}
            <div className="hidden md:flex md:justify-end md:text-right mt-24">
              <div className="max-w-xs">
                <div className="flex items-center md:justify-end mb-2">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-gray-100 border border-gray-200 mr-4 md:mr-0 md:ml-4">
                    {timelineItems[2].icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">
                  {timelineItems[2].title}
                </h3>
                <p className="text-gray-700">{timelineItems[2].description}</p>
              </div>
            </div>
          </div>
          {/* Center column (icons and lines for desktop) */}
          <div className="flex flex-col items-center md:mx-8">
            {/* For mobile, show all items vertically */}
            <div className="flex flex-col gap-12 md:hidden">
              {timelineItems.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-gray-100 border border-gray-200 mr-4">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* For desktop, show only the middle icon (second item) */}
            <div className="hidden md:flex flex-col items-center justify-center h-full">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-gray-100 border border-gray-200 mb-2">
                  {timelineItems[1].icon}
                </span>
                <h3 className="text-xl font-bold mb-1 text-center">
                  {timelineItems[1].title}
                </h3>
                <p className="text-gray-700 text-center max-w-xs">
                  {timelineItems[1].description}
                </p>
              </div>
            </div>
          </div>
          {/* Right column (third item for desktop) */}
          <div className="flex-1 flex flex-col justify-between md:pl-8">
            {/* Third item for mobile only (already rendered above for desktop) */}
            <div className="md:hidden mt-12">
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-gray-100 border border-gray-200 mr-4">
                  {timelineItems[2].icon}
                </span>
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    {timelineItems[2].title}
                  </h3>
                  <p className="text-gray-700">
                    {timelineItems[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        className="mt-12 bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-md font-semibold shadow-lg"
        size="lg"
      >
        MÁS INFO SOBRE TALLERES Y SEMINARIOS
      </Button>
    </section>
  );
};

export default Timeline;
