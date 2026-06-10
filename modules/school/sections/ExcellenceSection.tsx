 
import { ExcellenceSectionProps,ExcellenceCard } from "@/modules/school";
import SectionDivider from "@/components/common/SectionDivider";

const ExcellenceSection = ({ title1, title2, btn1, btn2 }: ExcellenceSectionProps) => {
  return (
    <section className="relative py-10 sm:py-20 px-4">
      <div className="max-w-[1530px] mx-auto w-full grid lg:grid-cols-2 gap-8">
        <ExcellenceCard
          title={title1}
          btnLink={btn1?.buttonlink}
          btnText={btn1?.buttontext}
          btnClass={btn1?.buttonclass}
          gradientDirection="r"
        />

        <ExcellenceCard
          title={title2}
          btnLink={btn2?.buttonlink}
          btnText={btn2?.buttontext}
          btnClass={btn2?.buttonclass}
          gradientDirection="l"
        />
      </div>

      {/* Darker Glow Effects */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-900 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-900 opacity-30 rounded-full blur-3xl"></div>
      <SectionDivider />
    </section>
  );
};

export default ExcellenceSection;
