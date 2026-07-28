import Image from "next/image";

const offers = [
  {
    title: "Drone Technology Lab",
    image: "/demo/drone-technology.png",
    description:
      "A cutting-edge lab where students design, build, and programme drones, gaining hands-on experience in aerial robotics, automation, and real-world applications like surveillance, mapping, and delivery systems.",
  },
  {
    title: "Addverb Robotics Lab",
    image: "/demo/adverb.png",
    description:
      "Developed in collaboration with Addverb Technologies, this lab is equipped with collaborative robots (cobots), quadruped robots, TurtleBot 4, Intel RealSense cameras, and NVIDIA Jetson kits. It enables students to build and test AI-powered robotic systems for real-world applications.",
  },
  {
    title: "Centre of Excellence Robotics & AI",
    image: "/demo/coe.png",
    description:
      "An advanced facility dedicated to innovation in robotics and artificial intelligence, enabling students to work on real-world, industry-driven projects.",
  },
  {
    title: "Programming Lab",
    image: "/demo/programming-lab.png",
    description:
      "A focused environment to develop strong coding skills through hands-on practice across multiple programming languages.",
  },
  {
    title: "Computer Labs",
    image: "/demo/computer-lab.png",
    description:
      "Modern, well-equipped labs that support hands-on learning, coding, and project development in a tech-driven environment.",
  },
  {
    title: "Robotics and Automation Lab",
    image: "/demo/robotics.png",
    description:
      "The Robotics and Automation Lab houses robotic arms, microcontrollers, and sensors, enabling students to build, program, and test automated systems for real-world industrial and service applications.",
  },
];

const AIOffers = () => {
  return (
    <section className="py-12 md:py-16 lg:pt-20 lg:pb-5 px-5">
      <div className="max-w-7xl mx-auto">
        <h3 className="max-w-4xl text-3xl md:text-4xl lg:text-[32px] font-bold leading-tight">
          Here's everything KRMU's B.Tech. CSE Robotics and AI programme has to
          offer:
        </h3>

        <div className="space-y-6 lg:space-y-8 mt-8">
          {offers.map((offer, index) => (
            <div
              key={offer.title}
              className={`flex flex-col lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } bg-[#deedf2] rounded-[8px] overflow-hidden`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <Image
                  src={offer.image}
                  width={580}
                  height={245}
                  alt={offer.title}
                  className="w-full h-60 md:h-72 lg:h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-10 text-center">
                <div className="max-w-[520px]">
                  <h4 className="text-xl font-bold mb-1">
                    {offer.title}
                  </h4>

                  <p className="text-base md:text-lg leading-7 text-[#23354D]">
                    {offer.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIOffers;