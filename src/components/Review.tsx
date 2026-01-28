"use client";

import Image from "next/image";
import { Star } from "phosphor-react";

const reviews = [
  {
    name: "Marcus Johnson",
    role: "Cliente Frequente",
    avatar: "/avatar1.jpg",
    text: "Melhor barbearia da cidade! A atenção aos detalhes é absurda. Meu corte sempre sai perfeito e o ambiente é diferenciado.",
  },
  {
    name: "David Chen",
    role: "Empresário",
    avatar: "/avatar2.jpg",
    highlight: true,
    text: "Frequento há mais de um ano. O serviço é simplesmente premium. Eles não têm pressa e entregam qualidade de verdade.",
  },
  {
    name: "James Rodriguez",
    role: "Diretor Criativo",
    avatar: "/avatar3.jpg",
    text: "O trabalho na barba mudou totalmente meu visual. Os barbeiros são artistas. Atendimento e vibe impecáveis.",
  },
  {
    name: "Tyler Brooks",
    role: "Personal Trainer",
    avatar: "/avatar4.jpg",
    text: "Cortes limpos, serviço profissional e ótimo atendimento. Sempre me sinto bem recebido aqui.",
  },
  {
    name: "Michael Stevens",
    role: "Corretor Imobiliário",
    avatar: "/avatar5.jpg",
    text: "Qualidade excepcional. O corte combina perfeitamente com minha imagem profissional. Sempre pontuais.",
  },
  {
    name: "Alex Turner",
    role: "Designer Gráfico",
    avatar: "/avatar6.jpg",
    text: "Precisão e atenção aos detalhes fora do comum. Eles entendem exatamente o que você quer.",
  },
];

export default function Reviews() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-purple-500 text-xs tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-purple-500" />O que nossos
            clientes dizem
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Client{" "}
            <span className="italic text-purple-500 font-extrabold">
              Reviews
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 bg-zinc-900/80 backdrop-blur-xl border transition
              ${
                review.highlight
                  ? "border-purple-600 shadow-xl shadow-purple-900/40 scale-[1.02]"
                  : "border-zinc-800 hover:border-purple-700/60"
              }`}
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-purple-500/40">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {review.name}
                  </h4>
                  <p className="text-zinc-400 text-xs">{review.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    weight="fill"
                    className="text-purple-500"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-zinc-300 text-sm leading-relaxed">
                “{review.text}”
              </p>
            </div>
          ))}
        </div>

        {/* Footer rating */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 rounded-full px-6 py-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  weight="fill"
                  className="text-purple-500"
                />
              ))}
            </div>

            <span className="text-white font-semibold">4.9/5</span>
            <span className="text-zinc-400 text-sm">
              com base em 200+ avaliações
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
