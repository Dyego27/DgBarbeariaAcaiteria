"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <header className="bg-black flex justify-between items-center h-24 w-full px-6">
      <div className="flex-shrink-0">
        <Image
          src="/LogoDg.PNG"
          alt="Logo Barbearia"
          width={90}
          height={80}
          className="object-contain"
          priority
        />
      </div>

      <h1 className="text-white text-xl md:text-3xl text-center flex-1 px-4">
        DG Barbearia{" "}
        <span className="bg-gradient-to-r from-purple-400 --hsl-purple-600 to-purple-600 bg-clip-text text-transparent font-bold ">
          Açaiteria
        </span>
      </h1>
    </header>
  );
}
