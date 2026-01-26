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
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold tracking-widest">Nossa Galeria</h1>
        <p className="text-zinc-400 mt-3 text-sm">
          Precision cuts. Bold transformations. Real results.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-4 grid-rows-2 gap-4 px-6">
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
    ${img.big ? "col-span-2 row-span-2 aspect-[4/5]" : ""}
    ${isHovered ? "scale-105 z-10" : ""}
    ${isAnotherHovered ? "scale-95 opacity-70" : ""}
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
      inline-flex items-center justify-center
      px-10 h-12 w-60
      text-sm font-semibold tracking-widest uppercase
      text-white
      bg-purple-800
      border border-white
      rounded-full
      hover:bg-purple-700 
      transition-all duration-300
      shadow-lg shadow-purple-700/30
    "
        >
          Ver mais
        </a>
      </div>
    </section>
  );
}
