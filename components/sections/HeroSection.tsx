'use client';

import React from "react";
import {
  ArrowRight,
  PlayCircle,
  GraduationCap,
  Briefcase,
  Users,
  Zap,
} from "lucide-react";
import StatItem from "@/components/shared/StatItem";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f0c]"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/Luxury_EV_Commercial_for_Website.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0c]/80 via-[#0a0f0c]/60 to-[#0a0f0c]/90" />
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#38e07b]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#38e07b]/10 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-8 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#38e07b]/10 border border-[#38e07b]/30 rounded-full">
            <Zap className="w-4 h-4 text-[#38e07b]" />
            <span className="text-[#38e07b] text-sm font-semibold">
              Future of EV Mobility
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white">
            Sustainable progress for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38e07b] to-[#2dd36f]">
              Next Generation
            </span>
            .
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Kerala's first exclusive EV technology training institute delivering
            innovation through education, products, and services.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button
              onClick={() => scrollToSection("courses")}
              className="flex items-center gap-2 h-12 px-8 bg-[#38e07b] text-black font-bold rounded-full hover:scale-105 transition"
            >
              Explore Courses <ArrowRight />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-2 h-12 px-8 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition"
            >
              <PlayCircle /> Contact Us
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mt-20">
          <StatItem icon={<GraduationCap />} value="5000+" label="Students Trained" />
          <StatItem icon={<Briefcase />} value="100%" label="Job Assistance" />
          <StatItem icon={<Users />} value="50+" label="Industry Partners" />
        </div>
      </div>
    </section>
  );
}
