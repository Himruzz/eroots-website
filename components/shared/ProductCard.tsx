import React from "react";
import { ChevronRight, BatteryCharging, Zap, Cpu, MapPin } from "lucide-react";

interface ProductCardProps {
  title: string;
  desc: string;
  icon: string;
  color: string;
}

const iconMap: Record<string, React.ReactNode> = {
  BatteryCharging: <BatteryCharging size={40} />,
  Zap: <Zap size={40} />,
  Cpu: <Cpu size={40} />,
  MapPin: <MapPin size={40} />,
};

export default function ProductCard({ title, desc, icon, color }: ProductCardProps) {
  return (
    <div className="relative group overflow-hidden bg-[#121a15] rounded-3xl p-1">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      ></div>
      <div className="relative h-full bg-[#0d120f] rounded-[22px] p-6 flex flex-col items-center text-center transition-transform group-hover:-translate-y-1">
        <div
          className={`mb-4 p-4 rounded-2xl bg-gradient-to-br ${color} text-[#0a0f0c] shadow-lg`}
        >
          {iconMap[icon]}
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-500">{desc}</p>
        <button className="mt-6 text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors flex items-center gap-1">
          View Specs <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
