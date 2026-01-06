import Link from "next/link";

interface Course {
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
  duration: string;
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-[#38e07b] transition">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-5 space-y-3">
        <span className="text-xs text-[#38e07b] font-semibold">
          {course.category}
        </span>

        <h3 className="text-lg font-bold">{course.title}</h3>

        <p className="text-sm text-zinc-400">{course.duration}</p>

        <Link
          href={`/courses/${course.slug}`}
          className="inline-block mt-3 text-sm font-semibold text-[#38e07b]"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
