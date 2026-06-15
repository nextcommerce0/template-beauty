import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsappButton from "./components/WhatsappButton";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clinica de Estética Avançada - Beleza Natural e Resultados Incríveis",
  description:
    "Clínica de Estética Avançada especializada em tratamentos faciais e corporais personalizados. Realce sua beleza natural com segurança, tecnologia de ponta e resultados incríveis. Agende sua avaliação hoje mesmo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WhatsappButton />
        {children}
      </body>
    </html>
  );
}
