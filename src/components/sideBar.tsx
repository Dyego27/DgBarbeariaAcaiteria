"use client";
import React, { useState } from "react";
import {
  House,
  Users,
  Calendar,
  ImageSquare,
  InstagramLogo,
  MapTrifold,
} from "phosphor-react";
import { Toolbox, Code } from "lucide-react";
import { useScrollToSection } from "../hooks/useScrollToSection";

export function Sidebar() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const { scrollToSection } = useScrollToSection();

  return (
    <aside
      className="
        fixed top-0 right-0 z-[100] h-screen
        w-14 sm:w-16
        bg-gray-100 border-l shadow-xl
        flex flex-col
      "
    >
      <nav className="flex-1 flex flex-col items-center pt-24 gap-3">
        <SidebarItem
          icon={<House size={22} />}
          active={activeItem === "home"}
          onClick={() => {
            setActiveItem("home");
            scrollToSection("home");
          }}
        />

        <SidebarItem
          icon={<ImageSquare size={22} />}
          active={activeItem === "galeria"}
          onClick={() => {
            setActiveItem("galeria");
            scrollToSection("galeria");
          }}
        />

        <SidebarItem
          icon={<Calendar size={22} />}
          active={activeItem === "agendamento"}
          onClick={() => {
            setActiveItem("agendamento");
            scrollToSection("agendamento");
          }}
        />

        <SidebarItem
          icon={<Users size={22} />}
          active={activeItem === "avaliacoes"}
          onClick={() => {
            setActiveItem("avaliacoes");
            scrollToSection("comentarios");
          }}
        />

        <SidebarItem
          icon={<Toolbox size={22} />}
          active={activeItem === "equipamentos"}
          onClick={() => {
            setActiveItem("equipamentos");
            scrollToSection("equipamentos");
          }}
        />

        <SidebarItem
          icon={<MapTrifold size={22} />}
          active={activeItem === "endereco"}
          onClick={() => {
            setActiveItem("endereco");
            scrollToSection("endereco");
          }}
        />
      </nav>

      <div className="pb-4 flex flex-col items-center gap-3 border-t pt-4">
        <SidebarItem
          icon={<InstagramLogo size={22} />}
          onClick={() =>
            window.open(
              "https://www.instagram.com/barbearia_du_denius?igsh=NnBidjN3bWhqcmlt&utm_source=qr",
              "_blank",
            )
          }
        />

        <SidebarItem
          icon={<Code size={22} />}
          onClick={() => window.open("https://github.com/Dyego27", "_blank")}
        />
      </div>
    </aside>
  );
}

interface SidebarItemProps {
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

function SidebarItem({ icon, active = false, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-10 h-10 sm:w-11 sm:h-11
        flex items-center justify-center
        rounded-xl transition-all
        ${
          active
            ? "bg-amber-500 text-black shadow-md"
            : "text-gray-600 hover:bg-amber-500/20"
        }
      `}
    >
      {icon}
    </button>
  );
}
