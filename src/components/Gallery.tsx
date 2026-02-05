"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  { id: 1, src: "/Corte1.jpeg", big: true },
  { id: 2, src: "/Corte2.jpeg" },
  { id: 3, src: "/Corte3.jpeg" },
  { id: 4, src: "/Corte4.jpeg" },
  { id: 5, src: "/Corte5.jpeg" },
];

export default function Gallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 text-white border-t border-zinc-800">
      <div className="text-center mb-14 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-widest">
          Nossa Galeria
        </h1>
        <p className="text-zinc-400 mt-3 text-sm">
          Precision cuts. Bold transformations. Real results.
        </p>
      </div>

      <div
        className="
          max-w-6xl mx-auto px-4
          grid gap-4
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4 lg:grid-rows-2
        "
      >
        {images.map((img) => {
          const isHovered = hovered === img.id;
          const isAnotherHovered = hovered !== null && !isHovered;

          return (
            <div
              key={img.id}
              onMouseEnter={() => setHovered(img.id)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative overflow-hidden rounded-xl
                aspect-[4/5]
                transition-all duration-300 ease-out
                ${img.big ? "lg:col-span-2 lg:row-span-2" : ""}
                ${isHovered ? "lg:scale-105 lg:z-10" : ""}
                ${isAnotherHovered ? "lg:scale-95 lg:opacity-70" : ""}
              `}
            >
              <Image
                src={img.src}
                alt="Gallery image"
                fill
                className="object-cover"
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-14">
        <a
          href="https://www.instagram.com/dg_barbearia135/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative inline-flex items-center justify-center
            px-10 h-12 w-60
            text-sm font-semibold tracking-widest uppercase
            text-black
            bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600
            bg-[length:300%_300%]
            border border-amber-400
            rounded-full
            transition-all duration-300
            hover:animate-[gradient-move_3s_linear_infinite]
            hover:shadow-[0_0_35px_rgba(249,115,22,0.9)]
          "
        >
          Ver mais
        </a>
      </div>
    </section>
  );
}
