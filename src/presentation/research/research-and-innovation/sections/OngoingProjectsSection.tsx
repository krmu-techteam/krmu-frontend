import SectionDivider from "@/components/common/SectionDivider";
import { OnGoingProjectSlider } from "../components";
import { OnGoingProjectsSectionProps } from "@/features/research/research-and-innovation";

const OnGoingProjectsSection = ({onGoingProjectsSection} : {onGoingProjectsSection : OnGoingProjectsSectionProps}) => {
    const {title, description_one, description_two, description_three, images} = onGoingProjectsSection;
 

  return (
    <section
      className="relative bg-[#c4d9f4] bg-cover bg-center py-8 md:py-12 xl:py-20"
      id="_ongoing-collab"
    >
      <div className="max-w-[1530px] mx-auto w-full flex flex-col lg:flex-row gap-10 items-center px-6 md:px-7 xl:px-16">
        <div className="lg:w-1/2">
          <OnGoingProjectSlider images={images} />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-3xl md:text-[40px] text-[#3d5fa5] font-semibold mb-5 leading-[1.2]">
            {title}
          </h3>
          <p className="font-poppins">
            {description_one}
          </p>
          <br />
          <p className="font-poppins">
            {description_two}
          </p>
          <p className="font-poppins">
            {description_three}
          </p>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default OnGoingProjectsSection;
