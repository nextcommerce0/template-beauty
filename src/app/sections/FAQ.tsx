"use client";

import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

interface FaqItem {
  id: number;
  pergunta: string;
  resposta: string;
}

export default function Faq() {
  const [openId, setOpenId] = useState<number | null>(null);

  // ALTERAR NÚMERO
  const numeroWhatsapp = "5491123456789";

  const mensagemWhatsapp =
    "Olá! Estou com uma dúvida sobre os procedimentos da clínica.";

  const whatsappUrl = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
    mensagemWhatsapp
  )}`;

  const perguntas: FaqItem[] = [
    {
      id: 1,
      pergunta: "Os procedimentos estéticos injetáveis doem?",
      resposta:
        "O desconforto é mínimo e totalmente suportável. Para garantir o seu total conforto e bem-estar, utilizamos pomadas anestésicas tópicas de alta eficácia e técnicas de resfriamento da pele antes de qualquer aplicação com agulhas ou microcânulas.",
    },
    {
      id: 2,
      pergunta:
        "É necessário passar por uma avaliação antes de fazer o tratamento?",
      resposta:
        "Sim, obrigatoriamente. Cada rosto e corpo possui uma anatomia única. Na nossa consulta de avaliação profissional, analisamos suas metas, histórico de saúde e montamos um protocolo exclusivo e seguro para as suas necessidades reais.",
    },
    {
      id: 3,
      pergunta: "Quanto tempo demora para ver os resultados finais?",
      resposta:
        "Isso varia de acordo com o procedimento. Tratamentos como o preenchimento labial oferecem resultados imediatos (com leve inchaço nos primeiros dias). Já a Toxina Botulínica começa a agir em 48h com resultado final em 15 dias, e os bioestimuladores trazem o auge do resultado em até 3 meses devido à produção natural de colágeno.",
    },
    {
      id: 4,
      pergunta:
        "Quais são as formas de pagamento aceitas na clínica?",
      resposta:
        "Buscamos facilitar ao máximo o cuidado com a sua autoestima. Aceitamos pagamentos à vista via Pix, cartões de débito e parcelamos seus tratamentos em até 10x sem juros nos cartões de crédito (consulte condições de parcelamento para cada protocolo).",
    },
    {
      id: 5,
      pergunta:
        "Posso voltar à minha rotina normal logo após a sessão?",
      resposta:
        "Na grande maioria dos procedimentos, sim! No entanto, existem recomendações simples para as primeiras 24 a 48 horas, como evitar exposição direta ao sol, não praticar exercícios físicos intensos no dia e não massagear a área tratada.",
    },
  ];

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="bg-[#F8F7F4] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="rounded-full bg-[#F3DCD4]/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#B76E79]">
            Dúvidas Frequentes
          </span>

          <h2 className="mt-4 mb-4 text-3xl font-bold text-[#8E8E93] sm:text-4xl">
            Perguntas{" "}
            <span className="font-serif font-normal italic text-[#C8A291]">
              Frequentes
            </span>
          </h2>

          <p className="text-sm text-[#8E8E93]/80 sm:text-base">
            Esclarecemos os principais pontos para que você realize o seu
            procedimento com total segurança e tranquilidade.
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-12 space-y-4">
          {perguntas.map((item) => {
            const isOpen = openId === item.id;

            return (
              <article
                key={item.id}
                className="overflow-hidden rounded-2xl border border-[#F3DCD4]/20 bg-white shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-[#8E8E93] transition-colors duration-200 hover:text-[#B76E79] sm:p-6 sm:text-base"
                >
                  <span>{item.pergunta}</span>

                  <span className="shrink-0 text-[#C8A291]">
                    {isOpen ? (
                      <HiChevronUp size={22} />
                    ) : (
                      <HiChevronDown size={22} />
                    )}
                  </span>
                </button>

                {/* CONTEÚDO */}
                <div
                  id={`faq-answer-${item.id}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-125 opacity-100 border-t border-[#F3DCD4]/10"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-[#F8F7F4]/20 p-5 text-xs leading-relaxed text-[#8E8E93]/80 sm:p-6 sm:text-sm">
                    {item.resposta}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-xl rounded-3xl border border-[#F3DCD4]/30 bg-white p-6 text-center shadow-sm sm:p-8">
          <p className="mb-4 text-sm font-medium text-[#8E8E93]">
            Sua dúvida não está listada aqui? Fale diretamente com o nosso
            suporte técnico!
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp com suporte"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-[#20ba59] hover:shadow-lg"
          >
            <FaWhatsapp size={18} />
            Tirar Minha Dúvida Agora
          </a>
        </div>
      </div>
    </section>
  );
}