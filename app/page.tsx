'use client';

import React, { useState, useEffect } from "react";
import Navigation from "@/components/shared/Navigation";
import MobileMenu from "@/components/shared/MobileMenu";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CoursesSection from "@/components/sections/CoursesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import BlogSection from "@/components/sections/BlogSection";
import WhyErootsSection from "@/components/sections/WhyErootsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f0c] text-white font-sans selection:bg-[#38e07b] selection:text-[#0a0f0c] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700;800&display=swap');

        :root {
          --primary: #38e07b;
          --bg-dark: #0a0f0c;
          --glass-nav: rgba(18, 26, 21, 0.7);
        }

        body {
          font-family: 'Spline Sans', sans-serif;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0f0c;
        }
        ::-webkit-scrollbar-thumb {
          background: #29382f;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #38e07b;
        }

        .text-glow {
          text-shadow: 0 0 20px rgba(56, 224, 123, 0.4);
        }
        .box-glow {
          box-shadow: 0 0 20px rgba(56, 224, 123, 0.15);
        }
        .box-glow-hover:hover {
          box-shadow: 0 0 30px rgba(56, 224, 123, 0.3);
        }

        @keyframes flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-flow {
          background-size: 200% 200%;
          animation: flow 3s ease infinite;
        }

        .animate-fade-in-up {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>

      <Navigation
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      <MobileMenu isOpen={mobileMenuOpen} scrollToSection={scrollToSection} />

      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ServicesSection />
      <CoursesSection />
      <ProductsSection />
      <BlogSection />
      <WhyErootsSection />
      <ContactSection />
    </div>
  );
}
