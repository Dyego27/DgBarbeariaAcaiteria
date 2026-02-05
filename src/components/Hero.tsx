"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <header className="bg-black flex items-center h-20 sm:h-24 w-full px-4 sm:px-6">
      <div className="flex items-center gap-3 sm:gap-4 w-full">
        {/* Logo */}
        <Image
          src="/Logo.PNG"
          alt="Logo Barbearia"
          width={70}
          height={60}
          className="object-contain sm:w-[90px] sm:h-[80px]"
          priority
          alt="Logo da Barbearia do Denius"
        />

        {/* Title */}
        <h1 className="text-white text-lg sm:text-2xl md:text-3xl text-center flex-1">
          Barbearia de{" "}
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
    </header>
  );
}
