"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-96px)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/FundoPage.jpeg"
          alt="Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <Image
          src="/Logo.PNG"
          alt="Logo Barbearia Brasão"
          width={320}
          height={320}
          className="
            object-contain
            w-[220px]
            sm:w-[300px]
            md:w-[380px]
          "
          priority
        />

        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl mt-6 leading-tight">
          Seja Bem-Vindo à barbearia de{" "}
          <span
            className="
              bg-gradient-to-r 
              from-yellow-300 
              via-orange-500 
              to-red-600
              bg-[length:400%_400%]
              animate-[gradient-move_3s_linear_infinite]
              bg-clip-text 
              text-transparent 
              font-extrabold
              tracking-wide
            "
          >
            Denius
          </span>
        </h1>
      </div>
    </section>
  );
}
