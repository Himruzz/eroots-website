"use client";

import { useRouter } from "next/navigation";

import CourseHeader from "@/components/course/CourseHeader";
import CourseObjectives from "@/components/course/CourseObjectives";
import CourseSyllabus from "@/components/course/CourseSyllabus";
import CareerOpportunities from "@/components/course/CareerOpportunities";
import CourseSidebar from "@/components/course/CourseSidebar";

/* =========================
   TYPES (MATCH COMPONENTS)
   ========================= */
type Module = {
  title: string;
  duration: string;
};

type Course = {
  title: string;
  category: string;
  mode: string;
  description: string;
  duration: string;
  timing?: string;
  students: string;
  eligibility?: string;
  thumbnail: string;

  objectives: string[];
  syllabus: Module[];
  careers: string[];
};

export default function CoursePage({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();
  const course = getCourseData(params.slug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Course not found
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* BACK BUTTON */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <button
          onClick={() => router.back()}
          className="px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-sm"
        >
          ← Back
        </button>
      </div>

      {/* HEADER */}
      <CourseHeader course={course} />

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-[1fr_380px] gap-12">
        <div className="space-y-16">
          <CourseObjectives objectives={course.objectives} />
          <CourseSyllabus syllabus={course.syllabus} />
          <CareerOpportunities careers={course.careers} />
        </div>

        {/* SIDEBAR — FIXED PROPS */}
        <CourseSidebar
          duration={course.duration}
          modulesCount={course.syllabus.length}
          mode={course.mode}
        />
      </div>
    </div>
  );
}

/* =========================
   COURSE DATA
   ========================= */
function getCourseData(slug: string): Course | null {
  const courses: Record<string, Course> = {
    ecee: {
      title: "Eroots Certified EV Expert (ECEE)",
      category: "CERTIFICATION",
      mode: "Offline",
      description:
        "Industry-oriented EV certification with hands-on vehicle training.",
      duration: "6 Months",
      timing: "Full Time",
      students: "Limited Seats",
      eligibility: "+2 / Diploma / ITI",
      thumbnail: "/images/ecee.jpg",

      objectives: [
        "Placement Assistance",
        "Industry Oriented Training",
        "Live Vehicle Practical Training",
      ],

      syllabus: [
        { title: "Electrical & Electronics", duration: "2 Weeks" },
        { title: "EV Systems", duration: "2 Weeks" },
        { title: "Battery & BMS", duration: "1 Week" },
        { title: "Diagnostics & Troubleshooting", duration: "1 Week" },
      ],

      careers: [
        "EV Service Engineer",
        "Battery Technician",
        "Charging Station Manager",
      ],
    },
  };

  return courses[slug] || null;
}
