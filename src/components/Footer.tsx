"use client";
import Image from "next/image";
import { InstagramLogo } from "phosphor-react";
import { useScrollToSection } from "../hooks/useScrollToSection";
export default function Footer() {
  const { scrollToSection } = useScrollToSection();
  return (
    <footer className="bg-gradient-to-t from-black to-neutral-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full  flex items-center justify-center font-bold">
              <Image
                src="/Logo.PNG"
                width={100}
                height={100}
                alt="Logo da Barbearia do Denius"
              />
            </div>
            <span className="text-lg font-semibold">Barbershop</span>
          </div>

          <p className="text-sm text-neutral-400 max-w-sm">
            Serviços premium de barbearia em Mamanguape. Experimente a arte do
            cuidado masculino com profissionais qualificados.
          </p>
        </div>

        <div className="md:text-center">
          <h4 className="text-sm font-semibold mb-4">Links Rápidos</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-purple-400 transition"
              >
                Home
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("endereco")}
                className="hover:text-purple-400 transition"
              >
                Localização
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("agendamento")}
                className="hover:text-purple-400 transition"
              >
                agendamento
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("galeria")}
                className="hover:text-purple-400 transition"
              >
                Nossa Galeria
              </button>
            </li>
          </ul>
        </div>

        <div className="md:text-right">
          <h4 className="text-sm font-semibold mb-4">Siga-nos</h4>

          <div className="flex md:justify-end gap-3">
            <a
              href="https://www.instagram.com/dg_barbearia135/"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-700 transition"
            >
              <InstagramLogo />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-neutral-500 text-center md:text-left">
          © 2026 Barbershop. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
