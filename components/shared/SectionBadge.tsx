import React from "react";

interface SectionBadgeProps {
  text: string;
}

export default function SectionBadge({ text }: SectionBadgeProps) {
  return (
    <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#38e07b] text-xs font-bold uppercase tracking-widest mb-2">
      {text}
    </div>
  );
}
