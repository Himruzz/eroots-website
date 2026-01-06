import { Calendar, Award, MapPin, BookOpen } from "lucide-react";

interface Props {
  duration: string;
  modulesCount: number;
  mode: string;
}

const CourseSidebar: React.FC<Props> = ({
  duration,
  modulesCount,
  mode,
}) => {
  return (
    <aside className="sticky top-28 bg-zinc-900/80 border border-zinc-800 p-6 backdrop-blur-md">
      <h4 className="text-sm font-bold text-white uppercase border-b border-zinc-800 pb-2 mb-6">
        Course Features
      </h4>

      <ul className="space-y-4 text-sm text-zinc-400 mb-6">
        <li className="flex gap-3">
          <Calendar className="text-[#00ff4a]" size={18} /> {duration}
        </li>
        <li className="flex gap-3">
          <BookOpen className="text-[#00ff4a]" size={18} /> {modulesCount} Modules
        </li>
        <li className="flex gap-3">
          <Award className="text-[#00ff4a]" size={18} /> Certification Provided
        </li>
      </ul>

      <h4 className="text-sm font-bold text-white uppercase border-b border-zinc-800 pb-2 mb-4">
        Training Location
      </h4>

      <div className="bg-black border border-zinc-800 h-28 flex flex-col items-center justify-center mb-6">
        <MapPin className="text-[#00ff4a]" size={22} />
        <span className="text-xs mt-2 uppercase tracking-widest">
          {mode} Center
        </span>
      </div>

      <button className="w-full border border-[#00ff4a] text-[#00ff4a] py-3 font-bold hover:bg-[#00ff4a] hover:text-black transition-all">
        CONTACT INSTRUCTOR
      </button>
    </aside>
  );
};

export default CourseSidebar;
