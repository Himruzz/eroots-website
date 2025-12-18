'use client';

import React from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

const menuItems = [
  "Home",
  "About",
  "Services",
  "Courses",
  "Products",
  "Blog",
  "Contact",
];

export default function Navigation({
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
}: NavigationProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 md:py-6 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full w-full max-w-[1100px] transition-all duration-300 ${
          isScrolled
            ? "bg-[#121a15]/80 backdrop-blur-xl border border-white/5 shadow-lg"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* LOGO */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          onClick={() => scrollToSection("home")}
        >
          <div className="relative h-9 w-9 flex items-center justify-center rounded-full bg-white border border-white/10 group-hover:border-[#38e07b]/50 transition-all duration-300 overflow-hidden">
            <Image
              src="/logo.png" // place logo in /public/logo.png
              alt="Eroots Technologies Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>

          <span className="text-white font-bold text-lg tracking-tight group-hover:text-[#38e07b] transition-colors duration-300">
            eroots technologies
          </span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#38e07b] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#38e07b]" />
            </button>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center justify-center h-9 px-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white text-sm font-bold transition-all duration-300 hover:scale-105 hover:border-[#38e07b]/30">
            Login
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 text-white hover:text-[#38e07b] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-full mt-4 w-full max-w-[1100px] rounded-2xl bg-[#121a15]/95 backdrop-blur-xl border border-white/10 shadow-xl md:hidden">
          <div className="flex flex-col divide-y divide-white/10">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setMobileMenuOpen(false);
                }}
                className="px-6 py-4 text-left text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
