import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // ALTERAR NÚMERO
  const numeroWhatsapp = "5491123456789";

  const mensagemWhatsapp = "Olá! Gostaria de agendar uma avaliação na clínica.";

  const whatsappUrl = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
    mensagemWhatsapp,
  )}`;

  return (
    <footer className="border-t border-[#F3DCD4]/30 bg-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 gap-10 border-b border-[#F3DCD4]/20 pb-12 text-center md:grid-cols-12 md:gap-8 md:text-left">
          {/* LOGO */}
          <div className="space-y-4 md:col-span-5">
            <a
              href="#"
              className="inline-block text-xl font-bold uppercase tracking-widest text-[#C8A291]"
            >
              Clínica
              <span className="font-light text-[#B76E79]">Estética</span>
            </a>

            <p className="mx-auto max-w-sm text-sm leading-relaxed text-[#8E8E93]/80 md:mx-0">
              Dedicados a realçar a sua beleza natural com tratamentos de alta
              tecnologia, segurança médica e atendimento individualizado.
            </p>

            {/* REDES SOCIAIS */}
            <div className="flex justify-center gap-4 pt-2 md:justify-start">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F3DCD4] text-[#8E8E93] transition-all duration-200 hover:border-[#B76E79] hover:bg-[#B76E79] hover:text-white"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F3DCD4] text-[#8E8E93] transition-all duration-200 hover:bg-[#25D366] hover:text-white hover:border-transparent"
              >
                <FaWhatsapp size={18} />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F3DCD4] text-[#8E8E93] transition-all duration-200 hover:bg-[#C8A291] hover:text-white hover:border-transparent"
              >
                <FaFacebookF size={16} />
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div className="space-y-4 md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#8E8E93]">
              Navegação
            </h4>

            <ul className="space-y-2 text-sm text-[#8E8E93]/80">
              <li>
                <a href="#about" className="hover:text-[#B76E79]">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#B76E79]">
                  Procedimentos
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#B76E79]">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#B76E79]">
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#B76E79]">
                  Onde Estamos
                </a>
              </li>
            </ul>
          </div>

          {/* CONTATO */}
          <div className="space-y-4 md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#8E8E93]">
              Fale Conosco
            </h4>

            <ul className="space-y-2 text-sm text-[#8E8E93]/80">
              <li>contato@clinicaestetica.com</li>
              <li>(11) 3333-4444</li>
              <li>Av. Paulista, 1000 - Sala 121</li>
              <li>São Paulo - SP</li>
            </ul>
          </div>
        </div>

        {/* RODAPÉ FINAL */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center text-xs text-[#8E8E93]/60 sm:flex-row sm:text-left">
          <div>
            <p>
              © {currentYear} Clínica Estética. Todos os direitos reservados.
              Desenvolvido por{" "}
              <Link
                href="https://nextcommerce.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B76E79]"
              >
                Next Commerce
              </Link>
            </p>
            <p>
              CNPJ: 00.000.000/0001-00 • RT: Nome do Profissional • Registro:
              XXX/SP 0000
            </p>
          </div>

          <div className="space-x-4">
            <a
              href="#"
              className="underline underline-offset-2 hover:text-[#B76E79]"
            >
              Políticas de Privacidade
            </a>
            <a
              href="#"
              className="underline underline-offset-2 hover:text-[#B76E79]"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
