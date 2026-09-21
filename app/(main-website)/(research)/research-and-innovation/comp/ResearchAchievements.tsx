import ResearchAchievementCard from "../global-comp/ResearchAchievementCard";

const ResearchAchievements = () => {
  const ResAchievSlide = [
    {
      name: "Dr. Saroj Verma",
      desg: "Associate Professor",
      school: "School of Medical and Allied Sciences",
      imgUrl: "/research-achievement/saroj.png",
      certUrl: "/research-achievement/saroj-cert.jpeg",
      content:
        'The WHO published a report titled “Pathogens Prioritization: A Scientific Framework for Epidemic and Pandemic Research Preparedness". This comprehensive report involved the collaborative efforts of more than 200 scientists from 50 countries, who evaluated 1,652 pathogens across 28 virus families and one core group of bacteria. The published report provides a structured method for ranking pathogens based on their potential to cause epidemics or pandemics. This framework will aid researchers and policymakers in allocating resources effectively for preparedness and response. By identifying high-risk pathogens, the framework aims to guide research efforts towards preventing, detecting, and controlling future outbreaks.',
    },
    {
      name: "Dr. Rishi Ranjan Kumar",
      desg: "Associate Professor",
      school: "School of Basic & Applied Sciences",
      imgUrl: "/research-achievement/rishi.jpeg",
      certUrl: "/research-achievement/rishi-cert.png",
      content:
        "Dr. Rishi Ranjan Kumar from SBAS has been honoured with the InRes Young Researcher Award 2024 by the Institute of Researchers, recognised and registered by the Ministry of MSME, Government of India, for his outstanding contributions to research. Along with this prestigious award, he has also been granted lifetime membership in the institute.",
    },
  ];

  return (
    <section
      className="bg-[url(/research/gradient-3.webp)] bg-cover py-8 px-4"
      id="research-achievements"
    >
      <div className="max-w-[1664px] mx-auto w-full">
        <h2 className="text-3xl md:text-5xl text-white font-semibold mb-5 md:mb-10">
          Research Achievements
        </h2>
        <div>
          <ResearchAchievementCard slide={ResAchievSlide} />
        </div>
      </div>
    </section>
  );
};

export default ResearchAchievements;
