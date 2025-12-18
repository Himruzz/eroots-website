import React from "react";
import { Globe, Award } from "lucide-react";
import SectionBadge from "@/components/shared/SectionBadge";
import Card from "@/components/shared/Card";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-[#0d120f]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <SectionBadge text="About Us" />
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Pioneering the{" "}
            <span className="text-[#38e07b]">EV Revolution</span> in Kerala
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              Eroots Technologies is a startup company headquartered at{" "}
              <span className="text-white font-medium">
                KINFRA, Kakkancheri, Kerala
              </span>
              . Established in 2022 and operating as an LLP, we are proud to
              be the region's first exclusive EV training institute.
            </p>
            <p>
              We integrate EV training, service centers, skilled technician
              development, and lithium battery manufacturing under one unified
              platform. Our core focus lies in sustainability, innovation, and
              fostering entrepreneurship in the green energy sector.
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <Card
            title="Our Vision"
            icon={<Globe className="text-[#38e07b]" />}
          >
            To become the leading technology training provider creating highly
            skilled technopreneurs with ethical values, supporting
            eco-friendly and sustainable enterprises.
          </Card>
          <Card
            title="Our Mission"
            icon={<Award className="text-yellow-400" />}
          >
            To provide up-to-date EV and green energy technology training and
            build skilled manpower for the EV industry.
          </Card>
        </div>
      </div>
    </section>
  );
}
