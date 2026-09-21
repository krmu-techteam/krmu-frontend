import ProgCard2 from "./Cards/ProgCard2";
import { ProgrammeCardItem } from "../btech-2026-demo/contentype";

type Props = {
  badge?: string;
  title: string;
  subtitle: string;
  programmes: ProgrammeCardItem[];
};

const ProgrammeSection = ({ badge, title, subtitle, programmes }: Props) => {
  return (
    <section className="py-10 bg-[#f9fafb]" id="programs">
      <div className="max-w-[1200px] px-4 sm:px-6 mx-auto">
        {/* HEADER */}
        <div className="max-w-[700px] mx-auto mb-12 text-center">
          {badge && (
            <span className="inline-block py-1 px-3 bg-[#2c7da01a] text-[#2c7da0] text-sm font-bold uppercase rounded-full mb-4">
              {badge}
            </span>
          )}

          <h2 className="text-2xl md:text-[40px] mb-4 font-bold">{title}</h2>

          <p className="text-[#4b5563] text-lg">{subtitle}</p>
        </div>

        {/* GRID */}
        <div className="max-w-[1664px] mx-auto w-full px-4 md:px-5 2xl:px-0">
          <div
            className={`grid gap-6 ${programmes.length === 1 ? "justify-items-center" : "md:grid-cols-2 xl:grid-cols-3"}`}
          >
            {programmes.map((prog) => (
              <ProgCard2 key={prog.id} data={prog} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;
