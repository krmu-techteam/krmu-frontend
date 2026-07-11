import AboutCard from "@/app/(main-website)/components/Cards/AboutCard";
import AwardsRecognitionCard from "@/app/(main-website)/components/Cards/AwardsRecognitionCard";
import { getFacilityData } from "@/lib/api/common";
import { AchievementsData } from "@/lib/types/admission";

interface AboutWhyChooseProps {
  achievements: AchievementsData[];
  achievementstitle: string;
  achievementsdescriptions: string;
  blueText: string;
  redtext: string;
  beforehighlight: string;
  beforeBlue: string;
  maindesc: string;
  badgeheading: string;
  awardsTitle: string;
}

const About = async ({
  achievements,
  achievementstitle,
  achievementsdescriptions,
  blueText,
  redtext,
  beforehighlight,
  beforeBlue,
  badgeheading,
  awardsTitle,
}: AboutWhyChooseProps) => {
  const facilityData = await getFacilityData();


  return (
    <>
      <div id="about">
        <section className="pt-8 md:pt-12 pb-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-gradient-to-r from-university-red to-university-blue text-white rounded-full px-6 py-3 shadow-lg mb-6">
                <span className="text-sm uppercase tracking-wide">
                  {badgeheading}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-800 font-bold">
                {beforehighlight}{" "}
                <span className="text-university-red">{redtext}</span>{" "}
                {beforeBlue}
                <span className="text-university-blue">{blueText}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {`Discover the unique advantages that set us apart as one of
                India's leading private universities`}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {facilityData &&
                facilityData.map((card) => {
                  return (
                    <AboutCard
                      key={card.id}
                      title={card.title}
                      badgetext={card.badgetext}
                      desc={card.description}
                      url={card.link}
                      image={card.bgimg}
                    />
                  );
                })}
            </div>
            <div className="bg-gradient-to-br from-university-blue to-university-red rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl text-white mb-4 font-bold lg:text-[36px]">
                  {achievementstitle}
                </h3>
                <p className="text-white/90">{achievementsdescriptions}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
                {achievements &&
                  achievements.map((achievement) => {
                    return (
                      <div key={achievement?.id}>
                        <div className="text-3xl text-white mb-2 font-bold">
                          {achievement?.value}
                        </div>
                        <p className="text-white/80 text-sm">
                          {achievement?.content}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl text-gray-800 mb-8">{awardsTitle}</h3>
              <AwardsRecognitionCard />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
