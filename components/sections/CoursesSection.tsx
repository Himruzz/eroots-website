import React from "react";
import { Briefcase } from "lucide-react";
import SectionBadge from "@/components/shared/SectionBadge";
import CourseDetail from "@/components/shared/CourseDetail";

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="py-24 px-6 bg-gradient-to-b from-[#0d120f] to-[#0a0f0c]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <SectionBadge text="Featured Program" />
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Eroots Certified <br />
              <span className="text-[#38e07b]">EV Expert (ECEE)</span>
            </h2>
          </div>
          <button className="px-6 py-3 border border-[#38e07b] text-[#38e07b] rounded-full hover:bg-[#38e07b] hover:text-[#0a0f0c] font-bold transition-all">
            Download Syllabus
          </button>
        </div>

        <div className="bg-[#121a15] rounded-3xl p-8 border border-white/5 box-glow hover:border-[#38e07b]/30 transition-all duration-500 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#38e07b]/5 rounded-full blur-3xl group-hover:bg-[#38e07b]/10 transition-all"></div>

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Diploma in EV Technology
                </h3>
                <p className="text-gray-400">
                  A comprehensive 6-month program designed to turn beginners
                  into industry-ready experts.
                </p>
              </div>

              <div className="space-y-4">
                <CourseDetail label="Duration" value="6 Months" />
                <CourseDetail label="Class Time" value="3 Hours / Day" />
                <CourseDetail
                  label="Qualification"
                  value="+2 / ITI / Diploma"
                />
                <CourseDetail label="Certification" value="CTDS Diploma" />
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-[#38e07b]">
                    Career Readiness
                  </span>
                  <span className="text-xs text-gray-500 ml-auto">100%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#38e07b] w-full animate-[width_1.5s_ease-out]"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <div className="bg-[#0a0f0c] p-6 rounded-2xl border border-white/5">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#38e07b]" />
                  Job Roles You Can Target
                </h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38e07b]"></div>
                    EV Service Technician
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38e07b]"></div>
                    Battery Pack Assembler
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38e07b]"></div>
                    Charging Station Manager
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38e07b]"></div>
                    EV Sales Consultant
                  </li>
                </ul>
              </div>
              <button className="w-full py-4 bg-[#38e07b] text-[#0a0f0c] font-bold rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-[#38e07b]/20">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
