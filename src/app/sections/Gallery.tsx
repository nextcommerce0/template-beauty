import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

interface Procedimento {
  id: number;
  titulo: string;
  descricao: string;
  imagemUrl: string;
  tag: string;
}

export default function Gallery() {
  const procedimentos: Procedimento[] = [
    {
      id: 1,
      titulo: "Toxina Botulínica",
      descricao:
        "Prevenção e suavização de linhas de expressão e rugas faciais com aspecto natural.",
      imagemUrl: "/botox.jpg",
      tag: "Facial",
    },
    {
      id: 2,
      titulo: "Preenchimento Labial",
      descricao:
        "Volume, contorno e hidratação para os lábios, respeitando as proporções do seu rosto.",
      imagemUrl: "/preenchimento.jpg",
      tag: "Lábios",
    },
    {
      id: 3,
      titulo: "Bioestimuladores de Colágeno",
      descricao:
        "Tratamento avançado contra a flacidez, devolvendo a firmeza e a elasticidade da pele.",
      imagemUrl: "/colageno.jpg",
      tag: "Flacidez",
    },
    {
      id: 4,
      titulo: "Peeling Químico",
      descricao:
        "Renovação celular profunda para reduzir manchas, melasma e cicatrizes de acne.",
      imagemUrl: "/peeling.jpg",
      tag: "Pele",
    },
    {
      id: 5,
      titulo: "Lipo de Alta Definição",
      descricao:
        "Protocolos corporais focados na redução de gordura localizada e definição de contornos.",
      imagemUrl: "/lipo.jpg",
      tag: "Corporal",
    },
    {
      id: 6,
      titulo: "Limpeza de Pele Premium",
      descricao:
        "Extração minuciosa combinada com hidratação profunda e fototerapia LED.",
      imagemUrl: "/limpeza.jpg",
      tag: "Cuidados",
    },
  ];

  const getWhatsappLink = (procedimentoNome: string) => {
    const mensagem = `Olá! Vi no site o procedimento de *${procedimentoNome}* e gostaria de agendar uma avaliação para saber mais.`;

    const numeroWhatsapp = "5491123456789"; // ALTERAR

    return `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
      mensagem,
    )}`;
  };

  return (
    <section id="gallery" className="bg-[#F8F7F4] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CABEÇALHO */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-[#F3DCD4]/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#B76E79]">
            Nossos Serviços
          </span>

          <h2 className="mt-4 mb-4 text-3xl font-bold text-[#8E8E93] sm:text-4xl">
            Tratamentos sob medida para o que{" "}
            <br className="hidden sm:inline" />
            você{" "}
            <span className="font-serif font-normal italic text-[#C8A291]">
              deseja transformar
            </span>
          </h2>

          <p className="text-base text-[#8E8E93]/80">
            Escolha o procedimento desejado abaixo e clique para iniciar um
            atendimento personalizado via WhatsApp.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {procedimentos.map((proc) => (
            <article
              key={proc.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#F3DCD4]/20 bg-white shadow-md transition-all duration-300 hover:shadow-xl"
            >
              {/* IMAGEM */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#F3DCD4]/10">
                <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#B76E79] shadow-sm backdrop-blur-sm">
                  {proc.tag}
                </span>

                <Image
                  src={proc.imagemUrl}
                  alt={proc.titulo}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* CONTEÚDO */}
              <div className="flex grow flex-col p-6 text-left">
                <h3 className="mb-2 text-xl font-bold text-[#8E8E93] transition-colors group-hover:text-[#B76E79]">
                  {proc.titulo}
                </h3>

                <p className="mb-6 grow text-sm leading-relaxed text-[#8E8E93]/80">
                  {proc.descricao}
                </p>

                {/* BOTÃO */}
                <a
                  href={getWhatsappLink(proc.titulo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Falar no WhatsApp sobre ${proc.titulo}`}
                  className="group/button inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#B76E79] bg-white px-4 py-3 text-sm font-bold text-[#B76E79] transition-all duration-200 hover:bg-[#B76E79] hover:text-white"
                >
                  <FaWhatsapp
                    size={18}
                    className="transition-colors duration-200 group-hover/button:text-white"
                  />
                  Saber mais no WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
