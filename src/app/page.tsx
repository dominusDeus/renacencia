import Hero from "@/components/hero";
import Banner from "@/components/banner";
import ServicesHeader from "@/components/services/header";
import ServicesBody from "@/components/services/body";
import WorkshopsHeader from "@/components/workshops/header";
import WorkShopsBody from "@/components/workshops/body";
import Timeline2 from "@/components/timeline-2";
import FreeResouces from "@/components/free-resources";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col gap-0 w-full min-h-screen overflow-x-hidden">
      <section className="w-full bg-white pt-0 md:py-5 flex justify-center">
        <Hero />
      </section>
      <section className="relative w-full">
        <Banner />
      </section>
      <section className="w-full pt-12 px-6 bg-white flex flex-col items-center">
        <ServicesHeader />
        <ServicesBody />
      </section>

      {/* Testimonial, Talleres y Seminarios section */}
      <section className="w-full px-6 pt-4 flex flex-col items-center justify-center max-w-[1100px] mx-auto">
        <WorkshopsHeader />
        <WorkShopsBody />
      </section>
      <section className=" px-6 py-10">
        <Timeline2 />
      </section>
      {/* ANNOUNCEMENT */}
      <section className="w-full bg-white py-10 px-6 md:px-72 flex flex-col items-center">
        <div className="text-center flex flex-col gap-4 font-montserrat text-[20px] md:text-[27px] font-bold">
          <h4 className=" uppercase">
            PROXIMAMENTE SEMINARIO GRATUITO ONLINE CON CONTENIDO DE CALIDAD PARA
            TODO PÚBLICO
          </h4>
          <div>
            (30/05/2025 - 19.30hs España - 14.30 (Arg/Uru) duración: 1.20hs.
          </div>
          <span className="mt-2 block font-bold ">
            TEMA: El manejo de las emociones en el duelo.
          </span>
        </div>
      </section>

      <section className="w-full">
        <FreeResouces />
      </section>
      {/* Preguntas Frecuentes section */}
      <section className="w-full bg-white py-10 px-4 flex flex-col items-center">
        <Faq />
      </section>
      <Footer />
    </main>
  );
}
