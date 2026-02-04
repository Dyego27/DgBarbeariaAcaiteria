"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Download } from "phosphor-react";

export default function HomePage() {
  return (
    <section className="relative w-full min-h-[calc(100vh-96px)] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/FundoPage.jpeg"
          alt="Background"
          fill
          className="object-cover opacity-30 blur-xs "
          priority
        />

        <div className="absolute inset-0 bg-black/50 z-0" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex justify-center">
          <Image
            src="/Logo-brasao.PNG"
            alt="Logo Barbearia Brasao"
            width={450}
            height={450}
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-white text-4xl text-center mt-6">
          Seja Bem-Vindo a DG Barbearia e{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent font-bold">
            Açaiteria
          </span>
        </h1>
      </div>
    </section>
  );
}
