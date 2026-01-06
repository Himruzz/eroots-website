import { Clock, Users, GraduationCap } from "lucide-react";

interface CourseHeaderProps {
  course: {
    title: string;
    category: string;
    mode: string;
    description: string;
    duration: string;
    timing?: string;
    students: string;
    eligibility?: string;
    thumbnail: string;
  };
}

const CourseHeader: React.FC<CourseHeaderProps> = ({ course }) => {
  return (
    <section className="relative border-b border-zinc-800 bg-zinc-900/30">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-12 relative z-10">
        {/* LEFT */}
        <div>
          <div className="flex gap-3 mb-6">
            <span className="border border-[#00ff4a] text-[#00ff4a] px-3 py-1 text-xs font-bold uppercase bg-[#00ff4a]/5">
              {course.category}
            </span>
            <span className="border border-zinc-700 text-zinc-400 px-3 py-1 text-xs font-bold uppercase">
              {course.mode}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            {course.title}
          </h1>

          <p className="text-lg text-zinc-400 border-l-2 border-[#00ff4a] pl-6 mb-8">
            {course.description}
          </p>

          <div className="flex flex-wrap gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="text-[#00ff4a]" size={18} />
              {course.duration}
              {course.timing && (
                <span className="text-zinc-500"> | {course.timing}</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-[#00ff4a]" size={18} />
              {course.students}
            </div>
          </div>

          {course.eligibility && (
            <div className="p-4 bg-zinc-900/60 border border-zinc-800 mb-8">
              <h4 className="text-[#00ff4a] text-sm font-bold mb-1 flex items-center gap-2 uppercase">
                <GraduationCap size={16} /> Eligibility
              </h4>
              <p className="text-zinc-300 text-sm">{course.eligibility}</p>
            </div>
          )}

          <div className="flex gap-4">
            <button className="bg-[#00ff4a] text-black px-8 py-3 font-bold skew-x-[-10deg]">
              <span className="inline-block skew-x-[10deg]">ENROLL NOW</span>
            </button>
            <button className="border border-zinc-600 px-8 py-3 font-bold skew-x-[-10deg]">
              <span className="inline-block skew-x-[10deg]">
                DOWNLOAD SYLLABUS
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff4a] to-emerald-600 blur-lg opacity-30" />
          <img
            src={course.thumbnail}
            alt={course.title}
            className="relative w-full aspect-video object-cover border border-zinc-800"
          />
        </div>
      </div>
    </section>
  );
};

export default CourseHeader;
