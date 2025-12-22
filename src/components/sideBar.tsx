"use client";
import React, { useState } from "react";
import {
  House,
  Users,
  FileText,
  Calendar,
  ImageSquare,
  InstagramLogo,
  Question,
  Code,
  CaretLeft,
  CaretRight,
  CaretDown,
} from "phosphor-react";

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside
      className={`fixed top-0 right-0 z-[100] h-screen transition-all duration-300 
      ${
        isExpanded ? "w-64" : "w-20"
      } bg-white border-l flex flex-col shadow-2xl`}
    >
      <div className="p-4 flex justify-start items-center h-20">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          {isExpanded ? (
            <CaretRight size={20} weight="bold" />
          ) : (
            <CaretLeft size={20} weight="bold" />
          )}
        </button>
      </div>

      <nav className="flex-1 px-3 space-y-2">
        <SidebarItem
          icon={<House size={24} />}
          text="Home"
          expanded={isExpanded}
          active
        />
        <SidebarItem
          icon={<Users size={24} />}
          text="Comentarios"
          expanded={isExpanded}
        />
        <SidebarItem
          icon={<Calendar size={24} />}
          text="Agende um horario"
          expanded={isExpanded}
        />
        <SidebarItem
          icon={<ImageSquare size={24} />}
          text="Nossa galeria"
          expanded={isExpanded}
        />
      </nav>

      <div className="p-3 border-t space-y-2">
        <SidebarItem
          icon={<InstagramLogo size={24} />}
          text="Instagram"
          expanded={isExpanded}
        />
        <SidebarItem
          icon={<Code size={24} />}
          text="Criador do Site"
          expanded={isExpanded}
          subItems={["Linkedin", "Github", "Instagram"]}
        />
      </div>
    </aside>
  );
}

function SidebarItem({
  icon,
  text,
  expanded,
  active = false,

  subItems = [],
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative group">
      <div
        onClick={() => subItems.length > 0 && setIsOpen(!isOpen)}
        className={`flex items-center py-3 px-3 rounded-md cursor-pointer transition-all
          ${
            active
              ? "bg-purple-50 text-purple-700"
              : "hover:bg-gray-50 text-gray-600"
          }
          
        `}
      >
        {icon}
        <span
          className={`transition-all overflow-hidden whitespace-nowrap ${
            expanded ? "w-40 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {expanded && subItems.length > 0 && (
          <CaretDown
            size={14}
            className={`ml-auto ${isOpen ? "rotate-180" : ""}`}
          />
        )}

        {!expanded && (
          <div className="absolute right-full mr-4 rounded-md px-2 py-1 bg-gray-900 text-white text-xs invisible opacity-0 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap">
            {text}
          </div>
        )}
      </div>
      {expanded && isOpen && subItems.length > 0 && (
        <div className="ml-8 mt-1 flex flex-col border-l-2 border-gray-100">
          {subItems.map((s, i) => (
            <button
              key={i}
              className="text-left text-sm py-2 px-4 text-gray-500 hover:text-purple-600 transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
