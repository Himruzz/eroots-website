import React from "react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export default function StatItem({ icon, value, label }: StatItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-full bg-white/5 text-[#38e07b] shadow-[0_0_10px_rgba(56,224,123,0.1)]">
        {React.cloneElement(icon as React.ReactElement, { size: 20 })}
      </div>
      <div>
        <p className="text-white font-bold text-lg">{value}</p>
        <p className="text-gray-500 text-xs uppercase tracking-wide font-semibold">
          {label}
        </p>
      </div>
    </div>
  );
}
