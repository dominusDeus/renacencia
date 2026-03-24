import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Renacencia",
  description:
    "Renacencia propone una mirada serena y humana sobre la vida, la muerte y el duelo.",
  icons: {
    icon: "/isotipo/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="font-montserrat bg-background text-foreground antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
