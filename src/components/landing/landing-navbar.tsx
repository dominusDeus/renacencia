"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Menu, X } from "lucide-react";

import { instagramUrl } from "@/components/landing/content";
import { Container, NavLink } from "@/components/landing/primitives";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#actividades", label: "Actividades" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
] as const;

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
        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
          <Link
            href="/"
            aria-label="Ir al inicio de Renacencia"
            className="relative h-11 w-11 shrink-0 rounded-full focus-visible:ring-4 focus-visible:ring-[var(--color-accent-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-12 sm:w-12"
          >
            <Image
              src="/isotipo/renacencia-menu.png"
              alt="Logo de Renacencia"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </Link>
          <p className="min-w-0 text-xs italic leading-5 text-[var(--color-muted-text)] sm:text-sm">
            Otra mirada de la{" "}
            <strong className="font-semibold text-foreground">muerte</strong>{" "}
            para aprender a{" "}
            <strong className="font-semibold text-foreground">vivir</strong>
          </p>
        </div>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Navegacion principal"
        >
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
          <NavLink
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir Instagram de Renacencia"
            className="px-2.5"
          >
            <Instagram className="h-4 w-4" />
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
          isOpen && "pointer-events-auto opacity-100"
        )}
      >
        <Container
          id="mobile-navigation"
          className={cn(
            "grid overflow-hidden transition-[grid-template-rows,padding] duration-200",
            isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr] pb-0"
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
                <Instagram className="h-4 w-4" />
              </NavLink>
            </nav>
          </div>
        </Container>
      </div>
    </header>
  );
}
