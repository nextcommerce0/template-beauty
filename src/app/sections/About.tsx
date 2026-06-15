import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#FFFFFF] py-16 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* COLUNA DA IMAGEM */}
          <div className="order-last lg:order-first lg:col-span-5">
            <div className="relative">
              
              {/* Moldura decorativa */}
              <div className="pointer-events-none absolute -left-4 -top-4 -z-10 h-full w-full rounded-4xl border-2 border-[#F3DCD4]" />

              {/* Container da imagem */}
              <div className="relative aspect-3/4 overflow-hidden rounded-4xl bg-[#F3DCD4]/10 shadow-xl">
                <Image
                  src="/about.jpg"
                  alt="Doutora ou especialista responsável pela clínica"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority={false}
                />
              </div>

              {/* Card flutuante */}
              <div className="absolute -bottom-6 -right-4 max-w-50 rounded-2xl bg-[#C8A291] p-5 text-white shadow-lg">
                <p className="mb-1 font-serif text-3xl font-extrabold">
                  5+
                </p>

                <p className="text-xs font-medium uppercase tracking-wide opacity-90">
                  Anos de experiência transformando faces e corpos.
                </p>
              </div>
            </div>
          </div>

          {/* COLUNA DO TEXTO */}
          <div className="flex flex-col justify-center text-center lg:col-span-7 lg:text-left">
            <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#B76E79]">
              Quem Cuida de Você
            </span>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-[#8E8E93] sm:text-4xl">
              Ciência e sensibilidade para destacar a sua{" "}
              <span className="font-serif font-normal italic text-[#C8A291]">
                verdadeira essência
              </span>
              .
            </h2>

            <div className="mb-8 space-y-4 text-base leading-relaxed text-[#8E8E93]/80">
              <p>
                Fundada com o propósito de humanizar a área da estética
                avançada, nossa clínica une tecnologia de ponta a um olhar
                artístico e individualizado. Acreditamos que a beleza ideal é
                aquela que preserva a sua identidade.
              </p>

              <p>
                Cada detalhe do nosso espaço foi planejado para oferecer uma
                experiência acolhedora, segura e com resultados reais que
                elevam sua autoconfiança desde a primeira sessão.
              </p>
            </div>

            {/* Benefícios */}
            <div className="mx-auto mb-8 grid max-w-xl grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:mx-0">
              
              <div className="flex items-start gap-3">
                <FiCheckCircle
                  className="mt-0.5 shrink-0 text-[#B76E79]"
                  size={20}
                />

                <div>
                  <h4 className="text-sm font-semibold text-[#8E8E93]">
                    Profissionais Especialistas
                  </h4>

                  <p className="mt-0.5 text-xs text-[#8E8E93]/70">
                    Equipe qualificada e em constante atualização.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiCheckCircle
                  className="mt-0.5 shrink-0 text-[#B76E79]"
                  size={20}
                />

                <div>
                  <h4 className="text-sm font-semibold text-[#8E8E93]">
                    Produtos Premium
                  </h4>

                  <p className="mt-0.5 text-xs text-[#8E8E93]/70">
                    Utilizamos apenas as marcas líderes de mercado.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiCheckCircle
                  className="mt-0.5 shrink-0 text-[#B76E79]"
                  size={20}
                />

                <div>
                  <h4 className="text-sm font-semibold text-[#8E8E93]">
                    Protocolos Exclusivos
                  </h4>

                  <p className="mt-0.5 text-xs text-[#8E8E93]/70">
                    O tratamento é desenhado sob medida para você.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiCheckCircle
                  className="mt-0.5 shrink-0 text-[#B76E79]"
                  size={20}
                />

                <div>
                  <h4 className="text-sm font-semibold text-[#8E8E93]">
                    Ambiente Seguro
                  </h4>

                  <p className="mt-0.5 text-xs text-[#8E8E93]/70">
                    Rigor cirúrgico em biossegurança.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-full border border-[#B76E79]/40 px-6 py-3 text-sm font-semibold text-[#B76E79] transition-all duration-200 hover:border-[#C8A291]/40 hover:text-[#C8A291]"
              >
                Conheça nossos procedimentos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}