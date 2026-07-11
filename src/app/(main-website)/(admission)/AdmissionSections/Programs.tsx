import ProgramCard from "@/app/(main-website)/components/Cards/ProgramCard";
import { programsData } from "@/lib/constants/programs";
import { Button } from "@/lib/types/home";
import Link from "next/link";

interface ProgramProp {
  badge: string;
  highlight: string;
  beforehighlight: string;
  content: string;
  cta: Button;
}

const Programs = ({
  badge,
  highlight,
  beforehighlight,
  content,
  cta,
}: ProgramProp) => {
  return (
    <div id="programs">
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-university-red to-university-blue text-white rounded-full px-6 py-3 shadow-lg mb-6">
              <span className="text-sm uppercase tracking-wide">{badge}</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-800 font-bold">
              {beforehighlight}{" "}
              <span className="text-university-red">{highlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{content}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {programsData &&
              programsData.map((program) => (
                <ProgramCard key={program.id} cardData={program} />
              ))}
          </div>
          <div className="text-center">
            {(cta.buttonclass || cta.buttonlink) && (
              <Link
                data-slot="button"
                href={cta.buttonlink}
                className={`${cta.buttonclass} inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 has-[&gt;svg]:px-3 bg-gradient-to-r from-university-blue to-university-red hover:from-blue-700 hover:to-red-700 text-white px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              >
                {cta.buttontext}
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
