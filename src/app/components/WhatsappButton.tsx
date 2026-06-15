"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const [isVisible, setIsVisible] = useState(false);

  const numeroWhatsapp = "5491123456789";

  const mensagem =
    "Olá! Gostaria de agendar uma avaliação.";

  const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
    mensagem
  )}`;

  useEffect(() => {
    // delay inicial (evita aparecer instantaneamente)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="group fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <span className="absolute -left-40 bottom-3 hidden whitespace-nowrap rounded-full bg-black/80 px-3 py-1 text-xs text-white opacity-0 transition-all duration-200 group-hover:block group-hover:opacity-100">
        Fale conosco no WhatsApp
      </span>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}