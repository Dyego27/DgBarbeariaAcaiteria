"use client";
import {
  Scissors,
  Drop,
  PaintBrush,
  Armchair,
  Fire,
  TestTube,
  ShieldCheck,
  Wind,
} from "phosphor-react";

const equipment = [
  {
    title: "Máquinas Profissionais",
    description:
      "Máquinas de corte de alta precisão para acabamentos perfeitos e lâminas afiadas, sem comprometer a qualidade.",
    icon: Scissors,
  },
  {
    title: "Máquinas de Acabamento Premium",
    description:
      "Ferramentas avançadas para desenhos detalhados, linhas precisas e acabamento impecável.",
    icon: Drop,
  },
  {
    title: "Pentes e Escovas Profissionais",
    description:
      "Ferramentas de modelagem premium criadas para cortes precisos e técnicas de finalização perfeitas.",
    icon: PaintBrush,
  },
  {
    title: "Cadeiras de Barbeiro Hidráulicas",
    description:
      "Assentos ergonômicos de alto padrão com ajuste de altura suave para máximo conforto e precisão.",
    icon: Armchair,
  },
  {
    title: "Sistemas de Alisamento",
    description:
      "Produtos profissionais para cabelos lisos, suaves e alinhados, sem agredir os fios.",
    icon: Fire,
  },
  {
    title: "Produtos de Estilização Premium",
    description:
      "Pomadas, ceras e modeladores exclusivos para estilo duradouro e acabamento natural.",
    icon: TestTube,
  },
  {
    title: "Fixadores de Longa Duração",
    description:
      "Sprays e géis profissionais que garantem fixação flexível e duradoura o dia todo.",
    icon: ShieldCheck,
  },
  {
    title: "Ambiente climatizado",
    description:
      "Ambiente aromatizado e climatizado com um ar-condicionado de ponta.",
    icon: Wind,
  },
];

export default function Equipment() {
  return (
    <section className="relative bg-gradient-to-b from-black via-zinc-950 to-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            Equipamentos & Produtos Premium
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Utilizamos apenas equipamentos e produtos profissionais de alto
            padrão para garantir resultados excepcionais em cada atendimento.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {equipment.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="
              cursor-pointer group relative rounded-xl
              bg-zinc-900/80 p-6 border border-zinc-800
              transition-all duration-300 hover:-translate-y-2
              hover:border-amber-500/40
              hover:shadow-[0_0_30px_rgba(251,191,36,0.25)]
            "
              >
                <div
                  className="
                mb-4 flex h-12 w-12 items-center justify-center rounded-lg
                bg-amber-500/15 text-amber-400
                group-hover:bg-amber-500/25 group-hover:text-amber-300
                transition
              "
                >
                  <Icon size={24} weight="duotone" />
                </div>

                <h3 className="text-white font-semibold mb-2">{item.title}</h3>

                <p className="text-sm text-gray-400 group-hover:text-gray-200 transition">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
