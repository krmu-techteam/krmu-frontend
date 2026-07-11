import Image from "next/image";

const DSWMessage = () => {
  return (
    <section className="py-[50px] bg-[url(/gradient-2.webp)] bg-no-repeat bg-cover bg-center px-4">
      <div
        className="p-[30px] max-w-[1600px] mx-auto w-full text-white"
        style={{
          background: `rgba(255,255,255,.13)`,
        }}
      >
        <h2 className="text-3xl md:text-5xl font-semibold leading-[1.5] mb-5">
          Dean Message
        </h2>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:w-1/5">
            <Image
              src="/life-at-krmu/shweta-mam.jpg"
              width={304}
              height={234}
              alt="Anjana Singh DSW"
            />
            <h4 className="text-white text-[15px] mt-2.5">
              Dr. Shweta Bansal, Dean DSW
            </h4>
          </div>
          <div className="lg:w-4/5">
            <p>
              Dear Students,Welcome to our vibrant academic community, where
              learning meets purpose and growth goes beyond the classroom. Your
              university journey is not just about learning a degree, but about
              discovering your strengths, building resilience, and shaping
              values for life. At the Department of Student Welfare, we are
              committed to your holistic development—intellectual, emotional,
              cultural, and social—ensuring a supportive and inspiring campus
              for all.We encourage you to engage actively in academics,
              co-curricular activities, and social initiatives. Each experience
              will help you grow into thoughtful,responsible, and compassionate
              individuals.Dream big, learn continuously, and lead with
              integrity—the world needs your ideas, energy, and empathy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DSWMessage;
