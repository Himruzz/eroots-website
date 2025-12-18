import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  type: "link" | "external";
}

export default function ContactCard({
  icon,
  label,
  value,
  href,
  type,
}: ContactCardProps) {
  return (
    <a
      href={href}
      target={type === "external" ? "_blank" : "_self"}
      rel={type === "external" ? "noopener noreferrer" : undefined}
      className="group relative flex items-center gap-5 p-2 pr-8 rounded-full bg-white/5 border border-white/10 hover:border-[#38e07b]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,224,123,0.1)] hover:bg-white/10"
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#122017] border border-[#38e07b]/20 group-hover:bg-[#38e07b] group-hover:text-[#122017] group-hover:border-[#38e07b] transition-colors duration-300 shadow-lg text-[#38e07b]">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold group-hover:text-[#38e07b] transition-colors">
          {label}
        </span>
        <span className="text-base md:text-lg font-medium text-white">
          {value}
        </span>
      </div>
      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
        {type === "external" ? (
          <ExternalLink className="w-5 h-5 text-[#38e07b]" />
        ) : (
          <ArrowRight className="w-5 h-5 text-[#38e07b]" />
        )}
      </div>
    </a>
  );
}
