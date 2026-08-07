import Image from "next/image";

const BRIDGING_CARDS = [
  {
    title: "Training",
    image: "/images/placement/training.jpg",
    description:
      "The University has signed a Memorandum of Understanding (MoU) with renowned companies and institutions in diverse sectors to increase industry exposure. This helps the learners apply their practical skills to resolve real-life problems in all aspects.",
  },
  {
    title: "Projects",
    image: "/images/placement/projects.jpg",
    description:
      "As a part of the Project-Based Learning (PBL) pedagogy, students complete their research projects and apply their innovative solutions to fix industry-specific problems. The practice ensures project relevance while enabling students to identify the existing and potential requirements of the industry.",
  },
  {
    title: "Corporate Life",
    image: "/images/placement/corporate-life.jpg",
    description:
      "Students undergo in-house training in corporate houses to understand the company hierarchy and office discipline. Graduates acquire hands-on experience of job responsibilities under the supervision of their mentors. The prime objective of the training is to make students industry-ready with apt theoretical and technical skills.",
  },
];

const BridgingAcademiaSection = () => {
  return (
    <section className="relative z-5 py-12 md:py-16 px-6 md:px-8 xl:px-16 max-w-[1530px] mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-12">
        <h2 className="heading-primary text-center mb-6">
          Bridging Academia and Industry
        </h2>
        <p className="font-poppins text-white text-sm sm:text-base md:text-[16px] leading-relaxed font-light">
          Benefit from our strong ties with leading corporations and startups.
          Our partnerships not only bring in expert speakers but also open doors
          for internships and real-world projects, giving you a competitive
          edge.
        </p>
      </div>

      {/* Cards Stack */}
      <div className="flex flex-col gap-6 sm:gap-8 max-w-[1240px] mx-auto">
        {BRIDGING_CARDS.map((card, index) => (
          <div
            key={index}
            className="border border-[#999999] rounded-[10px] p-3 flex flex-col md:flex-row items-center gap-6 sm:gap-8"
          >
            {/* Image Box */}
            <div className="relative w-full md:w-[48%] lg:w-[45%] h-[240px] sm:h-[280px] md:h-[300px] rounded-[10px] overflow-hidden shrink-0">
              <Image
                src={card.image}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                alt={card.title}
                priority={index === 0}
              />
            </div>

            {/* Content Box */}
            <div className="w-full md:w-[52%] lg:w-[55%] flex flex-col justify-center text-left py-2 sm:py-4">
              <h3 className="text-xl sm:text-[22px] font-bold font-poppins text-white mb-3 tracking-wide">
                {card.title}
              </h3>
              <p className="font-poppins text-white text-xs sm:text-sm md:text-[18px] leading-relaxed font-light">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BridgingAcademiaSection;
