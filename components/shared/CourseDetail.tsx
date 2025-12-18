import React from "react";

interface CourseDetailProps {
  label: string;
  value: string;
}

export default function CourseDetail({ label, value }: CourseDetailProps) {
  return (
    <div className="flex justify-between items-center border-b border-white/5 pb-2">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="text-white font-medium text-sm">{value}</span>
    </div>
  );
}
