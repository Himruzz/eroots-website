import { CheckCircle } from "lucide-react";

interface Props {
  objectives: string[];
}

const CourseObjectives: React.FC<Props> = ({ objectives }) => {
  return (
    <section>
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-zinc-800 pb-2">
        <CheckCircle className="text-[#00ff4a]" />
        COURSE OBJECTIVES
      </h3>

      <div className="space-y-3">
        {objectives.map((item, i) => (
          <div
            key={i}
            className="flex gap-3 bg-zinc-900/40 border-l-4 border-zinc-700 hover:border-[#00ff4a] p-4 transition-all"
          >
            <CheckCircle size={18} className="text-[#00ff4a]" />
            <span className="text-zinc-300">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseObjectives;
