import { FiMapPin, FiClock, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Location() {
  // ALTERAR NÚMERO
  const numeroWhatsapp = "5491123456789";

  const mensagemWhatsapp =
    "Olá! Gostaria de saber sobre horários e localização da clínica.";

  const whatsappUrl = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
    mensagemWhatsapp
  )}`;

  // Substituir pelo embed real do Google Maps
  const googleMapsIframeUrl =
    "https://www.google.com/maps?q=Av+Paulista+1000+Sao+Paulo&output=embed";

  return (
    <section id="location" className="bg-[#F8F7F4] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="rounded-full bg-[#F3DCD4]/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#B76E79]">
            Localização e Contato
          </span>

          <h2 className="mt-4 mb-4 text-3xl font-bold text-[#8E8E93] sm:text-4xl">
            Venha nos{" "}
            <span className="font-serif font-normal italic text-[#C8A291]">
              visitar
            </span>
          </h2>

          <p className="text-sm text-[#8E8E93]/80 sm:text-base">
            Ambiente planejado com sofisticação e segurança para proporcionar a
            você uma experiência única.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* INFO */}
          <div className="flex flex-col justify-between rounded-4xl border border-[#F3DCD4]/20 bg-white p-8 shadow-sm sm:p-10 lg:col-span-5">
            
            <div className="space-y-8 text-left">
              
              {/* ENDEREÇO */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3DCD4]/50 text-[#B76E79]">
                  <FiMapPin size={20} />
                </div>

                <div>
                  <h4 className="mb-1 text-base font-bold text-[#8E8E93]">
                    Nosso Endereço
                  </h4>

                  <p className="text-sm leading-relaxed text-[#8E8E93]/80">
                    Av. Paulista, 1000 - Sala 121
                    <br />
                    Bela Vista - São Paulo/SP
                    <br />
                    <span className="mt-1 inline-block text-xs font-medium text-[#C8A291]">
                      * Estacionamento conveniado no local
                    </span>
                  </p>
                </div>
              </div>

              {/* HORÁRIO */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3DCD4]/50 text-[#B76E79]">
                  <FiClock size={20} />
                </div>

                <div>
                  <h4 className="mb-1 text-base font-bold text-[#8E8E93]">
                    Horário de Atendimento
                  </h4>

                  <p className="text-sm leading-relaxed text-[#8E8E93]/80">
                    Segunda a Sexta: 09h às 20h
                    <br />
                    Sábados: 09h às 14h
                    <br />
                    <span className="mt-1 inline-block text-xs font-medium text-red-400">
                      * Atendimento exclusivo com hora marcada
                    </span>
                  </p>
                </div>
              </div>

              {/* CONTATO */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3DCD4]/50 text-[#B76E79]">
                  <FiPhone size={20} />
                </div>

                <div>
                  <h4 className="mb-1 text-base font-bold text-[#8E8E93]">
                    Contato Direto
                  </h4>

                  <p className="text-sm text-[#8E8E93]/80">
                    Telefone: (11) 3333-4444
                    <br />
                    WhatsApp: (11) 99999-9999
                  </p>
                </div>
              </div>
            </div>

            {/* BOTÃO */}
            <div className="mt-10 border-t border-[#F3DCD4]/20 pt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-[#20ba59]"
              >
                <FaWhatsapp size={20} />
                Verificar Horários Disponíveis
              </a>
            </div>
          </div>

          {/* MAPA */}
          <div className="min-h-95 overflow-hidden rounded-[2.5rem] border-4 border-white bg-white shadow-md lg:col-span-7">
            <iframe
              src={googleMapsIframeUrl}
              className="h-full min-h-95 w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização da clínica"
            />
          </div>
        </div>
      </div>
    </section>
  );
}