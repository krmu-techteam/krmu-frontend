import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

const ProgrammesOurLocation = () => {
  const studyData = [
    {
      year: "YEAR ONE",
      number: "01",
      title: "Professional Practice & Multimedia Foundations",
      description:
        "You reconnect with advanced media theory and move quickly into professional multimedia production.",
      points: [
        "Communication theory applied to real platforms and audience behaviour",
        "Current affairs, global media and connecting local stories with global context",
        "Fact-checking, verification and media literacy in professional newsrooms",
        "Multimedia journalism — writing, visuals and digital-first formats",
        "Photography, image editing and visual storytelling",
        "Graphic design and AI tools for modern media production",
        "Media law and ethics",
        "Advertising, brand communication and TV/video journalism",
        "Radio, podcasting and audio storytelling",
        "Audio and video editing for news, features and digital content",
      ],
      dark: false,
    },
    {
      year: "YEAR TWO",
      number: "02",
      title: "Creator Economy, Research & Digital Entrepreneurship",
      description:
        "You shift from producing content to researching audiences, building communities and designing media ventures.",
      points: [
        "Communication research methods and audience insight design",
        "The creator economy - building and managing communities around media brands",
        "Integrated marketing communication and 360-degree campaign planning",
        "Film and OTT production - concept to screen",
        "Data journalism and visualisation",
        "Digital marketing - campaigns, funnels and performance measurement",
        "Mobile journalism - reporting, shooting and publishing on mobile-first workflows",
        "Development communication - media's role in policy and social change",
        "Digital media entrepreneurship — planning and launching a media or content venture",
        "Dissertation or capstone project + MOOC certification",
      ],
      dark: true,
    },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#001B44] leading-tight md:leading-[56px]">
            What you will study over 2 years
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#44474F] leading-6 sm:leading-5 max-w-2xl mx-auto">
            From theory and global media to creator economy, research, data
            journalism and digital entrepreneurship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-14">
          {studyData.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 lg:p-10 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                item.dark
                  ? "bg-[#001B44] text-white"
                  : "bg-white text-[#001B44]"
              }`}
            >
              <span
                className={`absolute top-4 right-4 sm:top-5 sm:right-5 text-5xl sm:text-6xl md:text-7xl font-serif opacity-10 ${
                  item.dark ? "text-white" : "text-black"
                }`}
              >
                {item.number}
              </span>

              <p
                className={`text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] font-light uppercase mb-4 sm:mb-5 ${
                  item.dark ? "text-[#E2DFFF]" : "text-[#011B44]"
                }`}
              >
                {item.year}
              </p>

              <h3 className="text-2xl sm:text-3xl font-serif font-semibold leading-snug max-w-[95%]">
                {item.title}
              </h3>

              <div
                className={`w-full h-px my-5 sm:my-6 ${
                  item.dark ? "bg-white/20" : "bg-gray-200"
                }`}
              />

              <p
                className={`text-sm sm:text-base leading-7 font-bold ${
                  item.dark ? "text-[#FFFFFF]" : "text-[#001B44]"
                }`}
              >
                {item.description}
              </p>

              <ul className="mt-6 sm:mt-8 space-y-4">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 text-sm sm:text-[15px] leading-6 sm:leading-7 ${
                      item.dark ? "text-gray-300" : "text-[#000000]"
                    }`}
                  >
                    <ArrowRightCircle
                      size={18}
                      className={`mt-1 shrink-0 ${
                        item.dark ? "text-[#bad7f0]" : "text-[#1a1919]"
                      }`}
                    />

                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 sm:mt-16 max-w-4xl mx-auto px-2">
          <p className="text-lg sm:text-xl md:text-[22px] font-serif font-semibold text-[#000000] leading-6 sm:leading-7">
            By the end of two years you do not just complete a syllabus – you
            complete a portfolio, a research project and a set of industry level
            skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgrammesOurLocation;
