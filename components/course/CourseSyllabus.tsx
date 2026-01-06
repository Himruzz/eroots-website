import { BookOpen } from "lucide-react";

interface Module {
  title: string;
  duration: string;
}

interface Props {
  syllabus: Module[];
}

const CourseSyllabus: React.FC<Props> = ({ syllabus }) => {
  return (
    <section>
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-zinc-800 pb-2">
        <BookOpen className="text-[#00ff4a]" />
        SYLLABUS
      </h3>

      <div className="space-y-4">
        {syllabus.map((module, i) => (
          <div
            key={i}
            className="bg-zinc-900 border border-zinc-800 p-5 flex justify-between hover:border-[#00ff4a] transition-all"
          >
            <div className="flex gap-4">
              <div className="w-10 h-10 flex items-center justify-center border border-zinc-700 text-zinc-400 font-bold">
                {i + 1}
              </div>
              <div>
                <h4 className="font-bold text-white">{module.title}</h4>
                <p className="text-xs text-zinc-500 uppercase">Core Module</p>
              </div>
            </div>
            <span className="text-xs text-zinc-500 border border-zinc-700 px-3 py-1">
              {module.duration}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseSyllabus;
