import Image from "next/image";

const SOASPanel = () => {
  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.krmangalam.edu.in/wp-content/uploads/2025/06/Picture3-800x457.jpg"
            width={600}
            height={300}
            alt=""
            className="border w-full h-[400px] object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">
            Session on Our Earth, Our Responsibility
          </h3>
          <p className="mb-5 text-lg">
            The School of Agricultural Sciences (SOAS) organised an impactful
            session titled “Our Earth, Our Responsibility” aligned with
            Sustainable Development Goal (SDG) 13: Climate Action. The keynote
            speaker, Dr. C. M. Bhagat, Managing Director of Bhagat Farms, Sohna,
            shared insights on sustainable agricultural practices, including
            organic farming, composting, rainwater harvesting, and renewable
            energy. He emphasised the importance of small daily actions—like
            reducing plastic use and planting trees—as meaningful steps toward a
            healthier planet. The session featured engaging discussions on
            climate-resilient crops, organic certification, and youth leadership
            in climate action.
          </p>
        </div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10 my-10">
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">
            Seminar on Post-Harvest and Food Processing
          </h3>
          <p className="mb-5 text-lg">
            The School of Agricultural Sciences in collaboration with Verdanta
            Food Industry, organised a seminar and hands-on session on “Quality
            and Post-Harvest Food Processing.” The session provided students
            with practical exposure to post-harvest handling, food preservation
            techniques, and food safety standards.
          </p>
          <p className="mb-5 text-lg">
            Led by Ms. Richa Gupta, Proprietor of Verdanta Food Industry, the
            event included an interactive discussion on industry practices and a
            hands-on activity involving the preparation of Aonla Jam and Aonla
            Candy. The session enhanced students understanding of quality
            control, food processing, and commercial applications, equipping
            them with essential industry-relevant skills.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.krmangalam.edu.in/wp-content/uploads/2026/01/food-800x600.jpg"
            width={600}
            height={300}
            alt=""
            className="border w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SOASPanel;
