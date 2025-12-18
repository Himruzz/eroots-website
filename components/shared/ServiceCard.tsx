import React from "react";
import {
  GraduationCap,
  Battery,
  Wrench,
  Settings,
  MapPin,
  Cpu,
  Users,
  Briefcase,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  icon: string;
}

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap size={28} />,
  Battery: <Battery size={28} />,
  Wrench: <Wrench size={28} />,
  Settings: <Settings size={28} />,
  MapPin: <MapPin size={28} />,
  Cpu: <Cpu size={28} />,
  Users: <Users size={28} />,
  Briefcase: <Briefcase size={28} />,
};

export default function ServiceCard({ title, icon }: ServiceCardProps) {
  return (
    <div className="group bg-[#121a15] p-6 rounded-2xl border border-white/5 hover:border-[#38e07b] hover:bg-[#38e07b]/10 transition-all duration-300 cursor-pointer text-center flex flex-col items-center gap-4">
      <div className="p-4 rounded-full bg-[#0a0f0c] text-white group-hover:text-[#38e07b] group-hover:scale-110 transition-all duration-300 shadow-inner">
        {iconMap[icon]}
      </div>
      <h3 className="font-semibold text-sm md:text-base group-hover:text-white transition-colors">
        {title}
      </h3>
    </div>
  );
}
