import Image from "next/image";

const features = [
  {
    icon: "/demo/internship.png",
    title: "Hands-On Learning with Real-World Exposure",
    description:
      "15% of the total credits are earned through internships and hands-on projects.",
  },
  {
    icon: "/demo/round-table.png",
    title: "MakerSpace: Build from Day One",
    description:
      "Replacing outdated workshop classes, students now take a hands-on “MakerSpace” course with...",
  },
  {
    icon: "/demo/ibm.png",
    title: "Learn with IBM",
    description:
      "KRMU has partnered with IBM, a global leader in AI and enterprise technology.",
  },
  {
    icon: "/demo/workspace.png",
    title: "Unmatched Industry Experience",
    description:
      "The university has tie-ups with over 800 recruiters and industry giants to offer Internship.",
  },
  {
    icon: "/demo/lab.png",
    title: "Cutting-Edge Labs & Equipment",
    description:
      "Futuristic Engineering Kitchen and Research Units equipped with advanced labs like the IoT Lab, Robotics & Automation Lab, and Advanced iOS Lab.",
  },
  {
    icon: "/demo/robot.png",
    title: "Build Intelligent Robots, Shape the Future",
    description:
      "The B.Tech. CSE (Robotics & Artificial Intelligence) program equips students with the knowledge and practical skills to design, develop, and deploy intelligent robotic systems.",
  },
];

const ProgrammeKeyFeature = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold leading-tight sm:leading-none mb-2 sm:mb-8 text-center sm:text-left">
          Programme Key Features
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2">
          {/* Center Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-[#E5E8EB] -translate-x-1/2" />

          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                flex flex-col sm:flex-row gap-5 sm:gap-6
                py-4 sm:py-6 lg:py-8
                px-0 md:px-4
                border-b border-[#E5E8EB]
                last:border-b-0
                md:[&:nth-last-child(-n+2)]:border-b-0
                ${index % 2 === 0 ? "md:pr-10" : "md:pl-10"}
              `}
            >
              {/* Icon */}
              <div className="flex-shrink-0 flex justify-center sm:justify-start">
                <Image
                  src={feature.icon}
                  width={55}
                  height={55}
                  alt={feature.title}
                  className="w-14 h-14 sm:w-16 sm:h-16 lg:w-[55px] lg:h-[55px] object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-[#001732] text-base font-bold leading-snug mb-1">
                  {feature.title}
                </h3>

                <p className="text-[#23354D] text-sm sm:text-base leading-tight sm:leading-7 lg:leading-snug">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammeKeyFeature;
