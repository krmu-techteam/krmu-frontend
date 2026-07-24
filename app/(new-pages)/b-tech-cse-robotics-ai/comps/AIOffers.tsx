import Image from "next/image";

const AIOffers = () => {
  return (
    <section className="mt-10 py-20">
      <div className="max-w-[1280px] mx-auto w-full">
        <h3 className="max-w-[800px] text-[32px] font-bold leading-tight">
          Here’s everything KRMU’s B.Tech. CSE Robotics and AI programme has to
          offer:
        </h3>
        <div className="space-y-8 mt-5">
          <div className="flex items-stretch bg-[#deedf2] rounded-[8px] overflow-hidden">
            <div className="w-1/2">
              <Image
                src="/demo/drone-technology.png"
                width={580}
                height={245}
                alt=""
                className="w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center text-center p-10">
              <div className="max-w-[524px] mx-auto">
                <h4 className="font-bold text-xl">Drone Technology Lab</h4>
                <p>
                  A cutting-edge lab where students design, build, and programme
                  drones, gaining hands-on experience in aerial robotics,
                  automation, and real-world applications like surveillance,
                  mapping, and delivery systems.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-stretch bg-[#deedf2] rounded-[8px] overflow-hidden">
            <div className="w-1/2 flex flex-col items-center justify-center text-center p-10">
              <div className="max-w-[524px] mx-auto">
                <h4 className="font-bold text-xl">Addverb Robotics Lab</h4>
                <p>
                  Addverb Robotics Lab Developed in collaboration with Addverb
                  Technologies, this lab is equipped with collaborative robots
                  (cobots), quadruped robots, TurtleBot 4, Intel RealSense
                  cameras, and NVIDIA Jetson kits. It enables students to build
                  and test AI-powered robotic systems for real-world
                  applications.
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <Image
                src="/demo/adverb.png"
                width={580}
                height={245}
                alt=""
                className="w-full"
              />
            </div>
          </div>
          <div className="flex items-stretch bg-[#deedf2] rounded-[8px] overflow-hidden">
            <div className="w-1/2">
              <Image
                src="/demo/coe.png"
                width={580}
                height={245}
                alt=""
                className="w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center text-center p-10">
              <div className="max-w-[524px] mx-auto">
                <h4 className="font-bold text-xl">
                  Centre of Excellence Robotics & AI
                </h4>
                <p>
                  An advanced facility dedicated to innovation in robotics and
                  artificial intelligence, enabling students to work on
                  real-world, industry-driven projects.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-stretch bg-[#deedf2] rounded-[8px] overflow-hidden">
            <div className="w-1/2 flex flex-col items-center justify-center text-center p-10">
              <div className="max-w-[524px] mx-auto">
                <h4 className="font-bold text-xl">Programming Lab</h4>
                <p>
                  A focused environment to develop strong coding skills through
                  hands-on practice across multiple programming languages.
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <Image
                src="/demo/programming-lab.png"
                width={580}
                height={245}
                alt=""
                className="w-full"
              />
            </div>
          </div>
          <div className="flex items-stretch bg-[#deedf2] rounded-[8px] overflow-hidden">
            <div className="w-1/2">
              <Image
                src="/demo/computer-lab.png"
                width={580}
                height={245}
                alt=""
                className="w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center text-center p-10">
              <div className="max-w-[524px] mx-auto">
                <h4 className="font-bold text-xl">Computer Labs</h4>
                <p>
                  Modern, well-equipped labs that support hands-on learning,
                  coding, and project development in a tech-driven environment.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-stretch bg-[#deedf2] rounded-[8px] overflow-hidden">
            <div className="w-1/2 flex flex-col items-center justify-center text-center p-10">
              <div className="max-w-[524px] mx-auto">
                <h4 className="font-bold text-xl">
                  Robotics and Automation Lab
                </h4>
                <p>
                  The Robotics and Automation Lab houses robotic arms,
                  microcontrollers, and sensors, enabling students to build,
                  program, and test automated systems for real-world industrial
                  and service applications.
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <Image
                src="/demo/robotics.png"
                width={580}
                height={245}
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIOffers;
