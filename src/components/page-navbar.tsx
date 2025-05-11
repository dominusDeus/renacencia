"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import MenuLogo from "../../public/isotipo/renacencia-menu.png";

const PageNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="md:bg-white md:shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="relative w-14 h-12 flex ">
              {/* <span className="text-xl font-semibold text-pink"></span> */}
              <Image src={MenuLogo.src} fill alt="logo" />
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-pink transition-colors"
            >
              Inicio
            </a>
            <a
              href="#resources"
              className="text-gray-700 hover:text-pink transition-colors"
            >
              Recursos
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink transition-colors"
            >
              Seminario
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-pink transition-colors"
            >
              Servicios
            </a>
            <a
              href="#aboutus"
              className="text-gray-700 hover:text-pink transition-colors"
            >
              Nosotros
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-pink transition-colors"
            >
              Contacto
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="block px-3 border-b border-gray-200 py-2 max-w-[80vw] rounded-md text-base font-medium text-gray-700 hover:text-pink hover:bg-gray-50"
          >
            Inicio
          </a>
          <a
            href="#resources"
            className="block px-3 border-b border-gray-200 py-2 max-w-[80vw] rounded-md text-base font-medium text-gray-700 hover:text-pink hover:bg-gray-50"
          >
            Recursos
          </a>
          <a
            href="#"
            className="block px-3 border-b border-gray-200 py-2 max-w-[80vw] rounded-md text-base font-medium text-gray-700 hover:text-pink hover:bg-gray-50"
          >
            Seminario
          </a>
          <a
            href="#services"
            className="block px-3 border-b border-gray-200 py-2 max-w-[80vw] rounded-md text-base font-medium text-gray-700 hover:text-pink hover:bg-gray-50"
          >
            Servicios
          </a>
          <a
            href="#aboutus"
            className="block px-3 border-b border-gray-200 py-2 max-w-[80vw] rounded-md text-base font-medium text-gray-700 hover:text-pink hover:bg-gray-50"
          >
            Nosotros
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 max-w-[80vw] border-b border-gray-200 rounded-md text-base font-medium text-gray-700 hover:text-pink hover:bg-gray-50"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default PageNavbar;
