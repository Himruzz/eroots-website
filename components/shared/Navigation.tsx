'use client';

import React from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  "Home",
  "About",
  "Services",
  "Courses",
  "Products",
  "Blog",
  "Contact",
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

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
        <button
          className="flex items-center gap-3 group"
          onClick={() => scrollToSection("home")}
        >
          <img
            src="/logo.png"
            alt="Eroots Technologies"
            className="h-12 w-12 object-contain group-hover:drop-shadow-[0_0_12px_rgba(56,224,123,0.6)] transition"
          />
          <div className="leading-tight text-left">
            <div className="font-bold text-white group-hover:text-[#38e07b]">
              eroots
            </div>
            <div className="font-bold text-white group-hover:text-[#38e07b]">
              technologies
            </div>
          </div>
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm text-gray-300 hover:text-white relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#38e07b] group-hover:w-full transition-all" />
            </button>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-full mt-4 w-full max-w-[1100px] rounded-2xl bg-[#121a15]/95 backdrop-blur-xl border border-white/10 shadow-xl md:hidden">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="block w-full text-left px-6 py-4 text-sm text-gray-300 hover:text-white hover:bg-white/5"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
