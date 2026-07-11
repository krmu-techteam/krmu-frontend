import Image from "next/image";

const Workshop = () => {
  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <h3 className="text-[38px] font-bold mb-5">
            Workshop on Idea Forge: Navigating Problem Solving Ideation
          </h3>
          <p className="mb-5 text-lg">
            K.R. Mangalam University in collaboration with KEIC organized a
            workshop on Idea Forge: Navigating Problem Solving & Ideation. Held
            on April 2nd, 2024, attendees benefitted greatly from the expertise
            of Mr. Awijit Singh, General Manager at Mamaearth, Honasa Consumer
            Limited, who was the keynote speaker of the session. With a focus on
            innovative problem-solving techniques, participants were left
            inspired and equipped to tackle challenges creatively. The event
            marked a significant milestone in fostering a culture of ingenuity
            and collaboration.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.krmangalam.edu.in/wp-content/uploads/2024/04/ind-conn-9-768x576.webp"
            width={600}
            height={300}
            alt=""
            className="border w-full h-[400px] object-cover"
          />
        </div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10 my-10">
        <div className="w-full lg:w-1/2">
          <Image
            src="/wp-content/images/leadership.webp"
            width={600}
            height={300}
            alt=""
            className="border w-full h-[400px] object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-[38px] font-bold mb-5">
            Leadership Talk on Inspiring the Young Generations of Leaders
          </h3>
          <p className="mb-5 text-lg">
            The event began with an opening address by Dr. Indira Bhardwaj,
            Dean, SOMC, highlighting the need to foster leadership among youth,
            followed by a welcome note from Prof. Raghuveer Singh, Hon’ble Vice
            Chancellor, who stressed the importance of such sessions in shaping
            future leaders.
          </p>
          <p className="text-lg">
            Air Marshal Jeetendra Mishra, AVSM, VSM, Air Officer
            Commanding-in-Chief, Western Air Command, IAF, delivered an
            inspiring keynote, drawing from his four decades of service. He
            spoke about the core values of leadership—vision, discipline,
            resilience, and integrity—leaving a lasting impact on the audience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Workshop;
