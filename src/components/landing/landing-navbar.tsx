"use client";

import { Instagram, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { instagramUrl, whatsappUrl } from "@/components/landing/content";
import { Container, NavLink } from "@/components/landing/primitives";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#servicios", label: "¿Qué hacemos?" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
] as const;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.04 2a9.84 9.84 0 0 0-8.4 14.95L2 22l5.2-1.62A9.94 9.94 0 1 0 12.04 2Zm0 17.99a8.04 8.04 0 0 1-4.1-1.12l-.3-.18-3.08.96 1-3-.2-.31a7.96 7.96 0 1 1 6.68 3.65Zm4.4-5.96c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2a7.3 7.3 0 0 1-1.34-1.67c-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.5.58.19 1.1.16 1.51.1.46-.07 1.43-.59 1.63-1.15.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-[var(--z-nav)] border-b border-[rgba(231,229,228,0.88)] bg-white/88 backdrop-blur-xl">
      <Container className="flex min-h-[var(--nav-height)] items-center justify-between gap-4 py-3">
        <div className="flex min-w-0 flex-1 items-center gap-3.5 sm:gap-4.5">
          <Link
            href="/"
            aria-label="Ir al inicio de Renacencia"
            className="relative h-[3.2rem] w-[3.2rem] shrink-0 rounded-full focus-visible:ring-4 focus-visible:ring-[var(--color-accent-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-[3.7rem] sm:w-[3.7rem]"
          >
            <Image
              src="/isotipo/logo-navbar.png"
              alt="Logo de Renacencia"
              fill
              sizes="(min-width: 640px) 60px, 52px"
              className="object-contain pb-1"
              priority
            />
          </Link>
          <p className="min-w-0 text-xs italic leading-5 text-[var(--color-muted-text)] sm:text-sm">
            Otra mirada de la{" "}
            <strong className="font-semibold text-foreground">muerte</strong>{" "}
            <br />
            otra mirada de la{" "}
            <strong className="font-semibold text-foreground">vida</strong>
          </p>
        </div>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Navegacion principal"
        >
          {navItems.map((item) => (
            <NavLink
              className="hover:text-brand-orange"
              key={item.href}
              href={item.href}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir Instagram de Renacencia"
            className="px-1.5 text-[rgba(249,115,22,0.88)] hover:text-[rgba(249,115,22,0.88)]"
          >
            <Instagram className="h-4 w-4" />
          </NavLink>
          <NavLink
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir WhatsApp de Renacencia"
            className="px-1.5 text-[rgba(249,115,22,0.88)] hover:text-[rgba(249,115,22,0.88)]"
          >
            <WhatsAppIcon className="relative -top-px h-[1.125rem] w-[1.125rem]" />
          </NavLink>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-subtle)] text-foreground md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-full border-b border-[rgba(231,229,228,0.88)] bg-white/96 opacity-0 backdrop-blur-xl transition-all duration-200 md:hidden",
          isOpen && "pointer-events-auto opacity-100",
        )}
      >
        <Container
          id="mobile-navigation"
          className={cn(
            "grid overflow-hidden transition-[grid-template-rows,padding] duration-200",
            isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr] pb-0",
          )}
        >
          <div className="overflow-hidden">
            <nav
              className="flex flex-col gap-2 pt-4"
              aria-label="Navegacion principal mobile"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="justify-between rounded-[1rem] border border-transparent bg-[var(--color-surface)] px-4 py-3 text-base capitalize"
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="justify-between rounded-[1rem] border border-transparent bg-[var(--color-surface)] px-4 py-3 text-base"
              >
                Instagram
                <Instagram className="h-4 w-4 text-[rgba(249,115,22,0.88)]" />
              </NavLink>
              <NavLink
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="justify-between rounded-[1rem] border border-transparent bg-[var(--color-surface)] px-4 py-3 text-base"
              >
                WhatsApp
                <WhatsAppIcon className="relative -top-px h-[1.125rem] w-[1.125rem] text-[rgba(249,115,22,0.88)]" />
              </NavLink>
            </nav>
          </div>
        </Container>
      </div>
    </header>
  );
}
