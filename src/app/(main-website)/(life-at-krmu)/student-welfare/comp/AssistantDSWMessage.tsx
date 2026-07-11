import Image from "next/image";

const AssistantDSWMessage = () => {
  return (
    <section className="py-[50px] bg-[url(/gradient-2.webp)] bg-no-repeat bg-cover bg-center px-4">
      <div
        className="p-[30px] max-w-[1600px] mx-auto w-full text-white"
        style={{
          background: `rgba(255,255,255,.13)`,
        }}
      >
        <h2 className="text-3xl md:text-5xl font-semibold leading-[1.5] mb-5">
          Assistant Dean Message
        </h2>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:w-1/5">
            <Image
              src="/life-at-krmu/shivani-seh.jpg"
              width={304}
              height={234}
              alt="Assistant DSW"
              className="h-[330px] object-contain"
            />
            <h4 className="text-white text-[15px] mt-2.5">
              Dr. Shivani Sehgal, Assistant Dean DSW
            </h4>
          </div>
          <div className="lg:w-4/5">
            <p>
              The Department of Student Welfare is dedicated to the holistic
              development of students—academically, personally, and socially.
              Guided by our vision of integrated growth, we strive to equip
              students with essential life skills, emotional resilience, and
              ethical grounding to thrive in a diverse and global society.
              Through structured initiatives, counseling support, and
              experiential learning, we nurture confident individuals with
              strong moral values and a sense of purpose. Our focus is on
              developing leadership, adaptability, and well-being beyond
              classroom learning. We believe in transforming students into
              capable, compassionate, and future-ready global citizens—prepared
              not only to succeed, but to lead with integrity.  
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistantDSWMessage;
