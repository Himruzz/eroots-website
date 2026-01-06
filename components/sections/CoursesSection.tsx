'use client';

import CourseCard from "@/components/shared/CourseCard";

const courses = [
  {
    slug: "ecee",
    title: "Eroots Certified EV Expert (ECEE)",
    category: "CERTIFICATION",
    thumbnail: "/images/ecee.jpg",
    duration: "6 Months",
  },
  {
    slug: "lithium-battery",
    title: "Lithium Battery Technology",
    category: "SHORT TERM",
    thumbnail: "/images/lithium.jpg",
    duration: "1 Week",
  },
  {
    slug: "ev-two-wheeler",
    title: "EV Two Wheeler Repairing",
    category: "SKILL COURSE",
    thumbnail: "/images/twowheeler.jpg",
    duration: "1 Month",
  },
  {
    slug: "workshops",
    title: "EV & Battery Workshops",
    category: "WORKSHOP",
    thumbnail: "/images/workshop.jpg",
    duration: "1 Day",
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12">
          TRAINING PROGRAMS
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
