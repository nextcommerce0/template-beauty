import { AiFillStar } from "react-icons/ai";

interface Depoimento {
  id: number;
  nome: string;
  idade: string;
  texto: string;
  procedimento: string;
  iniciais: string;
}

export default function Testimonials() {
  const depoimentos: Depoimento[] = [
    {
      id: 1,
      nome: "Mariana Silva",
      idade: "34 anos",
      texto:
        "Fiz o preenchimento labial e amei o resultado! Ficou super natural, exatamente como eu queria. O atendimento e o cuidado com a biossegurança me deixaram muito tranquila.",
      procedimento: "Preenchimento Labial",
      iniciais: "MS",
    },
    {
      id: 2,
      nome: "Beatriz Oliveira",
      idade: "28 anos",
      texto:
        "A limpeza de pele premium é maravilhosa. Minha pele mudou completamente após os protocolos exclusivos que montaram para mim. Espaço lindo e muito aconchegante!",
      procedimento: "Limpeza de Pele Premium",
      iniciais: "BO",
    },
    {
      id: 3,
      nome: "Camila Rodrigues",
      idade: "42 anos",
      texto:
        "O botox superou minhas expectativas. As rugas sumiram, mas eu não perdi a minha expressão natural. Indico de olhos fechados para todas as minhas amigas.",
      procedimento: "Toxina Botulínica",
      iniciais: "CR",
    },
  ];

  return (
    <section id="testimonials" className="bg-[#FFFFFF] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-[#F3DCD4]/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#B76E79]">
            Depoimentos
          </span>

          <h2 className="mt-4 mb-4 text-3xl font-bold text-[#8E8E93] sm:text-4xl">
            Histórias reais de quem{" "}
            <br className="hidden sm:inline" />
            transformou a{" "}
            <span className="font-serif italic font-normal text-[#C8A291]">
              autoestima
            </span>
          </h2>

          <p className="text-base text-[#8E8E93]/80">
            A maior satisfação da nossa equipe é ver o sorriso e a confiança
            de cada cliente após os nossos cuidados.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {depoimentos.map((dep) => (
            <article
              key={dep.id}
              className="flex h-full flex-col justify-between rounded-3xl border border-[#F3DCD4]/20 bg-[#F8F7F4]/40 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                {/* STARS */}
                <div
                  className="mb-4 flex gap-0.5 text-[#C8A291]"
                  aria-label="Avaliação de 5 estrelas"
                >
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar key={i} size={18} />
                  ))}
                </div>

                {/* TEXTO (CORRIGIDO) */}
                <blockquote className="mb-6 text-sm italic leading-relaxed text-[#8E8E93]/90 sm:text-base">
                  {dep.texto}
                </blockquote>
              </div>

              {/* CLIENTE */}
              <div className="flex items-center gap-4 border-t border-[#F3DCD4]/30 pt-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F3DCD4] text-sm font-bold text-[#B76E79]">
                  {dep.iniciais}
                </div>

                <div className="text-left">
                  <h4 className="text-sm font-bold text-[#8E8E93] sm:text-base">
                    {dep.nome}
                  </h4>

                  <p className="text-xs text-[#8E8E93]/60">
                    {dep.idade} •{" "}
                    <span className="font-medium text-[#C8A291]">
                      {dep.procedimento}
                    </span>
                  </p>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}