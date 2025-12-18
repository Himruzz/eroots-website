import React from "react";
import SectionBadge from "@/components/shared/SectionBadge";
import ServiceCard from "@/components/shared/ServiceCard";
import { services } from "@/lib/data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-[#0a0f0c]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionBadge text="Our Expertise" />
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            comprehensive <span className="text-[#38e07b]">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
