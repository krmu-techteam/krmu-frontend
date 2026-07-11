import Image from "next/image";

const SPRSPanel = () => {
  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <p className="mb-5 text-lg">
            The School of Physiotherapy and Rehabilitation successfully
            organised KRMU PHYSIOCON 2.0 under the theme “Towards Holistic
            Healthcare – Integrating Indian Knowledge System” Dr. Monika and Dr.
            Kiran from the AYUSH Department, District Gurugram, conducted
            “Prakriti Parikshan”, an app-based body constitution analysis
            grounded in Ayurvedic principles.
          </p>
          <p className="mb-5 text-lg">
            Through this initiative, participants received personalised meal
            plans and nutrition guidance based on their individual Prakriti
            (body type). The session offered a unique opportunity to experience
            the seamless integration of traditional knowledge with modern
            healthcare practices.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="/wp-content/images/health.webp"
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

export default SPRSPanel;
