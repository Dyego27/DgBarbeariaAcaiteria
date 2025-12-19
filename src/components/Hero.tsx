"use client";
import Image from "next/image";
import { List } from "phosphor-react";

export default function Hero() {
  return (
    <header className="bg-black flex justify-between items-center ">
      <div className="ml-6">
        <Image
          src="/IMG_3539.PNG"
          alt="Logo Barbearia"
          width={110}
          height={100}
          priority
        />
      </div>
      <h1 className="text-white text-2xl">
        Dg Barbearia{" "}
        <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-500 bg-clip-text text-transparent font-bold">
          Açaiteria
        </span>
      </h1>
      <div className="mr-6">
        <List size={50} color="white" className="cursor-pointer" />
      </div>
    </header>
  );
}
