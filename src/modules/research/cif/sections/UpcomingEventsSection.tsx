import Image from "next/image";
import { UpcomingEventsSectionProps } from "../types";

const UpcomingEventsSection = ({
  upcomingEventsSection,
}: {
  upcomingEventsSection: UpcomingEventsSectionProps;
}) => {
  const { title, imageUrl } = upcomingEventsSection;
  return (
    <section className="py-8 md:py-12 xl:py-20 bg-[url(/research/color-gradient.webp)] bg-cover bg-no-repeat px-4">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-7 xl:px-16">
        <h3 className="text-white w-fit text-3xl md:text-5xl font-bold relative after:content-[''] after:absolute after:-top-10 md:after:top-0 after:left-0  md:after:right-[-58px] after:w-[57px] after:h-[40px] after:bg-[url(/research/new-icon-gif-animation-14.gif)] after:bg-cover mb-10">
          {title}
        </h3>
        <div className="flex justify-center">
          <Image src={imageUrl} width={490} height={490} alt="" />
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
