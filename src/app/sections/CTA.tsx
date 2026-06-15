import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiShield } from "react-icons/fi";

export default function Cta() {
  // ALTERAR NÚMERO
  const numeroWhatsapp = "5491123456789";

  const mensagemWhatsapp =
    "Olá! Gostaria de agendar uma avaliação e saber mais sobre os procedimentos.";

  const whatsappUrl = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
    mensagemWhatsapp,
  )}`;

  return (
    <section className="bg-[#FFFFFF] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CARD CTA */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#B76E79] px-6 py-12 text-center shadow-xl sm:p-16 lg:p-20">
          {/* BG DECORATIVO */}
          <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-20 -translate-y-20 rounded-full bg-white/10 blur-2xl opacity-60" />

          <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-20 translate-y-20 rounded-full bg-[#F3DCD4]/20 blur-2xl opacity-40" />

          {/* CONTEÚDO */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="mb-6 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
              Agendamento Exclusivo
            </span>

            <h2 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Não adie o cuidado e o carinho que a sua{" "}
              <span className="font-serif font-normal italic text-[#F3DCD4]">
                pele merece
              </span>
              .
            </h2>

            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              Os horários para este mês são limitados. Clique no botão abaixo,
              fale com nosso atendimento e garanta a sua vaga na próxima semana.
            </p>

            {/* BOTÃO */}
            <div className="mb-10 flex justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar avaliação no WhatsApp"
                className="inline-flex w-full transform items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-extrabold text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#20BA59] hover:shadow-lg sm:w-auto sm:px-10 sm:py-5 sm:text-xl"
              >
                <FaWhatsapp
                  size={24}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                Quero Agendar Agora
              </a>
            </div>

            {/* MICRO GATILHOS */}
            <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-6 border-t border-white/20 pt-8 text-xs text-white/80 sm:flex-row sm:text-sm">
              <div className="flex items-center gap-2">
                <FiClock size={16} className="shrink-0 text-[#F3DCD4]" />

                <span>
                  Resposta rápida em até <strong>5 minutos</strong>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FiShield size={16} className="shrink-0 text-[#F3DCD4]" />

                <span>Avaliação individualizada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
