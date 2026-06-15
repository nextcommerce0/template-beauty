'use client';

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Número + mensagem pronta
  const whatsappUrl =
    'https://wa.me/5511923736213?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.';

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navItems = [
    { href: '#about', label: 'Sobre Nós' },
    { href: '#gallery', label: 'Procedimentos' },
    { href: '#testimonials', label: 'Depoimentos' },
    { href: '#faq', label: 'Dúvidas' },
    { href: '#location', label: 'Contato' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#F3DCD4]/30 bg-[#F8F7F4]/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <div className="shrink-0">
            <a
              href="#"
              className="text-xl font-bold uppercase tracking-widest text-[#C8A291]"
            >
              Clínica
              <span className="font-light text-[#B76E79]">
                Estética
              </span>
            </a>
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  group relative inline-flex
                  text-sm font-medium text-[#8E8E93]
                  transition-all duration-300
                  hover:text-[#B76E79]
                "
              >
                {item.label}

                {/* Linha animada hover */}
                <span
                  className="
                    absolute -bottom-1 left-0
                    h-0.5 w-0
                    rounded-full
                    bg-[#B76E79]
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </nav>

          {/* CTA DESKTOP */}
          <div className="hidden md:block">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                rounded-full
                bg-[#B76E79]
                px-6 py-3
                text-sm font-semibold text-white
                shadow-md
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#C8A291]
                hover:shadow-lg
              "
            >
              <FaWhatsapp
                className="text-base text-white"
              />
              Agendar Avaliação
            </a>
          </div>

          {/* BOTÃO MOBILE */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="
                p-2 text-[#8E8E93]
                transition-colors duration-300
                hover:text-[#B76E79]
                focus:outline-none
              "
              aria-label={
                isOpen ? 'Fechar menu' : 'Abrir menu'
              }
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiX size={28} />
              ) : (
                <HiMenu size={28} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`absolute left-0 top-20 w-full border-b border-[#F3DCD4]/40 bg-[#F8F7F4] shadow-xl transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 px-4 pb-6 pt-4 text-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="
                w-full py-2
                text-base font-medium
                text-[#8E8E93]
                transition-colors duration-300
                hover:text-[#B76E79]
              "
            >
              {item.label}
            </a>
          ))}

          {/* CTA MOBILE */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="
              flex w-full max-w-xs
              items-center justify-center gap-2
              rounded-full
              bg-[#B76E79]
              px-6 py-3
              font-bold text-white
              shadow-md
              transition-all duration-300
              hover:scale-[1.02]
              hover:bg-[#C8A291]
            "
          >
            <FaWhatsapp
              size={20}
              className="text-white"
            />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}