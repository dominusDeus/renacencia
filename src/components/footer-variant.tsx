"use client";
import React from "react";
import Image from "next/image";
import { Instagram, Youtube, Facebook } from "lucide-react";
import { useForm } from "@formspree/react";
import { Checkbox } from "./ui/checkbox";
import { Textarea } from "./ui/textarea";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  newsletter: boolean;
}

const FooterVariant = () => {
  const [state, handleSubmit, reset] = useForm("manodbpd");

  return (
    <footer className="relative bg-brand-brown p-2 md:flex md:flex-col md:items-center mx-auto w-full">
      {/* Background image with opacity */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/footer-bg.jpg"
          alt="Footer background"
          fill
          className="opacity-20 object-cover"
        />
      </div>

      {/* Main content - Two columns */}
      <div className="flex flex-col md:flex-row gap-8 relative p-6 max-w-[1100px] w-full mx-auto z-10">
        {/* Left column with logo */}
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <div className="h-[350px] w-[350px] relative mb-4">
            <Image
              src="/isotipo/footer-logo.png"
              alt="Logo Renacencia"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right column with form */}
        <div className="md:w-1/2 text-white">
          <h3 className="font-bold text-xl md:text-lg mb-4 border-b-2 border-white pb-2">
            FORMULARIO DE CONTACTO
          </h3>
          <p className="text-sm mb-4">
            Realiza aquí tu consulta, la responderemos a la brevedad. También
            puedes escribir a volviendoalavida@renacencia.com
          </p>
          {state.succeeded ? (
            <p>Gracias por tu interés!</p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 max-w-md"
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="p-2 rounded bg-white/10 border border-white/30 text-white"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-2 rounded bg-white/10 border border-white/30 text-white"
                  placeholder="Tu email"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm mb-1">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  className="p-2 rounded bg-white/10 border border-white/30 text-white min-h-[100px]"
                  placeholder="Escribe tu consulta aquí"
                  required
                />
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox
                  id="newsletter"
                  name="newsletter"
                  className="text-white"
                />
                <label
                  htmlFor="newsletter"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Quiero recibir novedades de Renacencia
                </label>
              </div>
              <button
                type="submit"
                className="mt-2 border border-white bg-brand-orange text-white py-2 px-4 rounded hover:bg-brand-orange/80 transition-colors"
              >
                Enviar
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom section spanning both columns Desktop */}
      <div className=" text-white  justify-center py-3 items-center text-center w-[100vw] mx-auto z-10 px-6 border border-white/20  relative -left-3">
        <p className="text-sm font-bold">
          RENACENCIA es un proyecto de VIACOSMOS
        </p>

        {/* Social media section Desktop */}
        <div className="hidden md:flex items-center justify-center">
          <div className="h-[50px] w-[100px] relative">
            <Image
              src="/images/via-cosmos-no-white.png"
              alt="Via Cosmos"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex gap-6 mt-2">
            <a href="https://www.instagram.com/viacosmos/" target="_blank">
              <div className="flex items-center gap-2">
                <Instagram className="text-white" size={22} />
                <span>Instagram</span>
              </div>
            </a>
            <a href="https://www.youtube.com/@viacosmos" target="_blank">
              <div className="flex items-center gap-2">
                <Youtube className="text-white" size={22} />
                <span>Youtube</span>
              </div>
            </a>
            <a href="https://www.facebook.com/viacosmosok" target="_blank">
              <div className="flex items-center gap-2">
                <Facebook className="text-white" size={22} />
                <span>Facebook</span>
              </div>
            </a>
          </div>
        </div>

        {/* Social media section Mobile*/}
        <div className="md:hidden flex flex-col items-center justify-center pt-6">
          <div className="h-[100px] w-[200px] relative">
            <Image
              src="/images/via-cosmos-no-white.png"
              alt="Via Cosmos"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex gap-4 mt-2 text-sm">
            <a href="https://www.instagram.com/viacosmos/" target="_blank">
              <div className="flex items-center gap-1">
                <Instagram className="text-white" size={22} />
                <span>Instagram</span>
              </div>
            </a>
            <a href="https://www.youtube.com/@viacosmos" target="_blank">
              <div className="flex items-center gap-2">
                <Youtube className="text-white" size={22} />
                <span>Youtube</span>
              </div>
            </a>
            <a href="https://www.facebook.com/viacosmosok" target="_blank">
              <div className="flex items-center gap-2">
                <Facebook className="text-white" size={22} />
                <span>Facebook</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright section */}
      <div className="w-full mt-6 py-4 text-center text-white/70 text-xs z-10">
        <p>
          © {new Date().getFullYear()} RENACENCIA fue hecho por Nuwe design.
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterVariant;
