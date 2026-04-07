import Link from "next/link";
import SchoolEventsAndExperiencesCard from "./schoolglobalcomponent/SchoolEventsAndExperiencesCard";
import { Button } from "@/lib/types/home";
import { EventsAndExperienceCard } from "@/lib/types/schools";

type Props = {
  title: string;
  desc: string;
  btn: Button;
  eventsexp: EventsAndExperienceCard[];
};

const SchoolEventAndExperience = ({ title, desc, btn, eventsexp }: Props) => {
  return (
    // <section className="bg-[url(/schools/events-bg.webp)] bg-cover bg-center py-[30px] px-4">
    <section className="bg-[#051630] bg-cover bg-center pt-20 pb-8 px-4">
      <div className="max-w-4xl mx-auto w-full text-white text-center">
        <h3 className="text-3xl sm:text-5xl lg:text-7xl  mb-5 font-semibold">
          {title}
        </h3>

        <p>{desc}</p>
        
      </div>
      <div className="max-w-[1664px] mx-auto w-full">
        <SchoolEventsAndExperiencesCard eventsexp={eventsexp} />
        <div className="flex justify-center">
          {(btn?.buttonclass || btn?.buttonlink) && (
          <Link
            href={btn?.buttonlink}
            className="py-3.5 px-8 bg-white font-bold rounded-sm inline-block text-black mt-5 hover:text-white hover:bg-transparent hover:border hover:border-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            {btn?.buttontext}
          </Link>
        )}
        </div>
      </div>
    </section>
  );
};

export default SchoolEventAndExperience;
