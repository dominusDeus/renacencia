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
import Announcement from "@/components/announcement";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import PageNavbar from "@/components/page-navbar";
import HeroCarousel from "@/components/carousel-banner";
import FooterVariant from "@/components/footer-variant";
import HeroReplacement from "@/components/hero-replacement";

export default function Home() {
  return (
    <main className="flex flex-col gap-0 w-full min-h-screen overflow-x-hidden">
      <PageNavbar />
      {/* <section>
        <HeroCarousel />
      </section> */}
      {/* <section className="w-full bg-white pt-0 md:py-5 flex justify-center">
        <Hero />
      </section> */}
      <section className="">
        <HeroReplacement />
      </section>
      <section
        className="w-full pt-12 md:pt-0 px-6 bg-white flex flex-col items-center"
        id="services"
      >
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
      {/* <section className="w-full bg-white tablet:py-10 py-2 pb-10 px-6 tablet:px-36 flex flex-col items-center max-w-[1100px] mx-auto">
        <Announcement />
      </section> */}

      <section className="w-full" id="resources">
        <FreeResouces />
      </section>
      <div className="max-w-[1100px] mx-auto pl-6 my-10 border-l-2 font-opensans border-secondary-custom md:text-lg flex justify-center items-center text-center font-bold">
        <p>
          "…La vida y la muerte son un solo hilo, la misma línea pero vista
          desde diferentes lados" -{" "}
          <span className="font-normal"> Lao Tsé</span>
        </p>
      </div>
      {/* <section className="relative w-full">
        <Banner />
      </section> */}
      {/* Preguntas Frecuentes section */}
      <section className="w-full bg-white py-10 md:pt-0 px-4 flex flex-col items-center">
        <Faq />
      </section>
      <section id="contact">
        {/* <Footer /> */}
        {/* Replacing the first gamma design footer */}
        <FooterVariant />
      </section>
    </main>
  );
}
