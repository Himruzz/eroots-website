import { Briefcase } from "lucide-react";

interface Props {
  careers: string[];
}

const CareerOpportunities: React.FC<Props> = ({ careers }) => {
  return (
    <section>
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-zinc-800 pb-2">
        <Briefcase className="text-[#00ff4a]" />
        CAREER OPPORTUNITIES
      </h3>

      <div className="flex flex-wrap gap-3">
        {careers.map((job, i) => (
          <span
            key={i}
            className="bg-zinc-900 border border-zinc-700 px-5 py-2 text-sm hover:border-[#00ff4a] hover:text-[#00ff4a] transition-all"
          >
            {job}
          </span>
        ))}
      </div>
    </section>
  );
};

export default CareerOpportunities;
