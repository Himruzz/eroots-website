'use client';

import React from "react";
import {
  ArrowRight,
  PlayCircle,
  GraduationCap,
  Briefcase,
  Users,
  BatteryCharging,
  Zap,
} from "lucide-react";
import StatItem from "@/components/shared/StatItem";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f0c]"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
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
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#38e07b]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#38e07b]/10 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center space-y-8 mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#38e07b]/10 border border-[#38e07b]/30 rounded-full backdrop-blur-sm">
              <Zap className="w-4 h-4 text-[#38e07b]" />
              <span className="text-[#38e07b] text-sm font-semibold">
                Future of EV Mobility
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Sustainable progress for the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38e07b] to-[#2dd36f]">
                Next Generation
              </span>
              .
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Kerala's first exclusive EV technology training institute
              delivering innovation through education, products, and services.
              Master the future of mobility today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection("courses")}
                className="group flex items-center justify-center h-12 px-8 bg-[#38e07b] text-[#0a0f0c] text-base font-bold rounded-full shadow-[0_0_20px_rgba(56,224,123,0.4)] hover:shadow-[0_0_30px_rgba(56,224,123,0.6)] hover:scale-105 transition-all duration-300"
              >
                Explore Courses
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="group flex items-center justify-center h-12 px-8 bg-transparent border border-white/20 text-white text-base font-bold rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              >
                <PlayCircle className="mr-2 w-5 h-5" />
                Contact Us
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-20">
            {/* <div className="col-span-2 md:col-span-1 bg-gradient-to-br from-[#38e07b]/20 to-[#38e07b]/5 backdrop-blur-md border border-[#38e07b]/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#38e07b]/20 rounded-lg">
                  <BatteryCharging className="w-6 h-6 text-[#38e07b]" />
                </div>
                <span className="text-white/60 text-sm font-medium">
                  Battery Health
                </span>
              </div>
              <div className="text-4xl font-bold text-white mb-1">98%</div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[98%] bg-gradient-to-r from-[#38e07b] to-[#2dd36f] rounded-full" />
              </div>
            </div>

            <div className="col-span-2 md:col-span-1 bg-gradient-to-br from-[#38e07b]/20 to-[#38e07b]/5 backdrop-blur-md border border-[#38e07b]/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#38e07b]/20 rounded-lg">
                  <Zap className="w-6 h-6 text-[#38e07b]" />
                </div>
                <span className="text-white/60 text-sm font-medium">
                  Range
                </span>
              </div>
              <div className="text-4xl font-bold text-white">450 km</div>
            </div> */}

            <StatItem
              icon={<GraduationCap className="w-6 h-6" />}
              value="5000+"
              label="Students Trained"
            />

            <StatItem
              icon={<Briefcase className="w-6 h-6" />}
              value="100%"
              label="Job Assistance"
            />

            <StatItem
              icon={<Users className="w-6 h-6" />}
              value="50+"
              label="Industry Partners"
            />
          </div>
        </div>
      </div>
    </section>
  );
}