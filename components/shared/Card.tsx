import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

export default function Card({ title, children, icon }: CardProps) {
  return (
    <div className="bg-[#121a15] p-6 rounded-2xl border border-white/5 hover:border-[#38e07b]/30 transition-colors duration-300">
      <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{children}</p>
    </div>
  );
}
