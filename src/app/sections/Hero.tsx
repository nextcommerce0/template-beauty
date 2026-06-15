"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const whatsappUrl =
    "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-[#F8F7F4] py-16 lg:py-24">
      {/* Glow Background */}
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-[#F3DCD4]/50 blur-3xl opacity-70 md:h-96 md:w-96" />

      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-[#B76E79]/10 blur-3xl opacity-60" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* TEXTO */}
          <div className="z-10 flex flex-col justify-center text-center lg:col-span-7 lg:text-left">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-[#4B4B52] sm:text-5xl lg:text-6xl">
              Realce seus traços com <br className="hidden sm:inline" />
              <span className="font-serif font-normal italic text-[#C8A291]">
                naturalidade
              </span>{" "}
              e segurança.
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-[#8E8E93] sm:text-lg lg:mx-0">
              Tratamentos estéticos personalizados e tecnologia de ponta para
              cuidar do seu rosto e corpo com leveza, sofisticação e resultados
              naturais.
            </p>

            {/* BOTÕES */}
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex w-full items-center justify-center gap-3
                  rounded-full
                  bg-[#B76E79]
                  px-8 py-4
                  text-lg font-bold
                  text-white
                  shadow-md
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#A45D68]
                  hover:shadow-lg
                  sm:w-auto
                "
              >
                <FaWhatsapp size={22} />
                Agendar Minha Avaliação
              </a>

              <a
                href="#gallery"
                className="
                  p-2 text-sm font-semibold
                  text-[#8E8E93]
                  underline
                  decoration-[#F3DCD4]
                  underline-offset-4
                  transition-colors duration-300
                  hover:text-[#B76E79]
                "
              >
                Ver procedimentos disponíveis
              </a>
            </div>

            {/* MICROPROVA SOCIAL */}
            <div className="mt-8 flex items-center justify-center gap-3 text-xs text-[#8E8E93] lg:justify-start">
              <div className="flex -space-x-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#F3DCD4] text-[9px] font-bold text-[#B76E79]">
                  A
                </div>

                <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#C8A291] text-[9px] font-bold text-white">
                  B
                </div>

                <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#B76E79] text-[9px] font-bold text-white">
                  C
                </div>
              </div>

              <span>
                Mais de <strong>1.200 clientes</strong> com a autoestima
                renovada.
              </span>
            </div>
          </div>

          {/* IMAGEM */}
          <div className="flex w-full justify-center lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-4/5 w-full max-w-sm overflow-hidden rounded-[2.5rem] border-4 border-white/70 bg-[#F3DCD4]/20 shadow-2xl sm:max-w-md lg:max-w-none">
              <Image
                src="/hero.jpg"
                alt="Procedimento estético"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* SELO */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-[#F3DCD4] bg-white/95 px-4 py-3 shadow-md backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-[#B76E79] animate-pulse" />

                <p className="text-xs font-medium text-[#4B4B52]">
                  Atendimento com <br />
                  <strong className="text-[#B76E79]">
                    Biossegurança Rigorosa
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
