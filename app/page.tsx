'use client';

import Navigation from "@/components/shared/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CoursesSection from "@/components/sections/CoursesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import BlogSection from "@/components/sections/BlogSection";
import WhyErootsSection from "@/components/sections/WhyErootsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f0c] text-white overflow-x-hidden">
      {/* Navigation is fully self-managed */}
      <Navigation />

      <HeroSection />
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
