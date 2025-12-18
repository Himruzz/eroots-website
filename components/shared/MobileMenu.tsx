'use client';

import React from "react";

interface MobileMenuProps {
  isOpen: boolean;
  scrollToSection: (id: string) => void;
}

const menuItems = ["Home", "About", "Services", "Courses", "Products", "Blog", "Contact"];

export default function MobileMenu({ isOpen, scrollToSection }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-[#0a0f0c]/95 backdrop-blur-lg pt-24 px-6 md:hidden">
      <div className="flex flex-col gap-6 text-center">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="text-xl font-bold text-white hover:text-[#38e07b]"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
