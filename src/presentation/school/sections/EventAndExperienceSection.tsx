import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/lib/types/home";
import { EventsAndExperienceCard } from "@/lib/types/schools";
import { EventsAndExperiencesCards } from "@/presentation/school";;
import SectionDivider from "@/components/common/SectionDivider";

type Props = {
  title: string;
  desc: string;
  btn: Button;
  eventsexp: EventsAndExperienceCard[];
};

const EventAndExperienceSection = ({ title, desc, btn, eventsexp }: Props) => {
  return (
    <section className="relative w-full py-6 xl:py-14 px-6 md:px-8 lg:px-11 2xl:px-16 overflow-hidden font-poppins">
      {/* Background radial gradient */}
      <div 
        className="absolute -top-[100px] left-[88%] -translate-x-1/2 w-[948px] h-[948px] bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.05)_0%,transparent_85%)] rounded-full blur-[140px] z-0 pointer-events-none transition-opacity"
        style={{ opacity: 0.66 }}
      ></div>

      <div className="w-full max-w-[1530px] mx-auto relative z-10">
        <h2 className="text-3xl md:text-[45px] font-serif font-bold text-white leading-tight mb-4">
          {title}
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-6xl">
            {desc && <p className="text-white/70 text-sm md:text-md font-normal leading-relaxed tracking-wide">{desc}</p>}
          </div>
          <div className="flex-shrink-0">
            {(btn?.buttonclass || btn?.buttonlink || btn?.buttontext) && (
              <Link 
                href={btn?.buttonlink || "#"} 
                className="flex cursor-pointer items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center transition-all overflow-hidden relative shadow-lg">
                  <ArrowRight className="w-3.5 h-3.5 text-white transition-all duration-500 ease-in-out transform group-hover:translate-x-5 group-hover:opacity-0" />
                  <ArrowRight className="w-3.5 h-3.5 text-white transition-all duration-500 ease-in-out absolute -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
                <span className="font-normal tracking-wide text-md">{btn?.buttontext || "Explore"}</span>
              </Link>
            )}
          </div>
        </div>

        <div className="mt-6">
          <EventsAndExperiencesCards eventsexp={eventsexp} />
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default EventAndExperienceSection;
