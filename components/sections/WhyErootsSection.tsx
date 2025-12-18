import React from "react";

export default function WhyErootsSection() {
  const features = [
    { val: "1st", label: "Exclusive EV Institute in Kerala" },
    { val: "15+", label: "Years Industry Experience" },
    { val: "30+", label: "Years Academic Experience" },
    { val: "R&D", label: "Own Research Wing" },
    { val: "Labs", label: "State-of-the-art EV Labs" },
    { val: "Service", label: "Own Service Centers" },
    { val: "Support", label: "Industry Expert Support" },
    { val: "Quality", label: "ISO 9001:2015 Standards" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#38e07b]/5 skew-y-3 transform origin-top-left scale-110"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose <span className="text-[#38e07b]">Eroots?</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121a15]/80 backdrop-blur border border-white/5 p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 group"
            >
              <h3 className="text-3xl font-black text-[#38e07b] mb-2 group-hover:scale-110 transition-transform">
                {item.val}
              </h3>
              <p className="text-sm text-gray-400 font-medium uppercase tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
