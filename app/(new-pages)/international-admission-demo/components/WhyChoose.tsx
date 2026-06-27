import Image from "next/image";

const WhyChoose = () => {
  return (
    <section className="relative pt-[600px] pb-[200px] -mt-40 bg-[url(/international-admission/sunset.jpg)] bg-cover bg-no-repeat bg-top">
       <Image
          src="/international-admission/girl-3.png"
          width={438}
          height={671}
          className="absolute bottom-0 right-36"
          alt=""
        />
      <div className="max-w-[1664px] mx-auto flex items-center z-40 relative">
       
        <div className="w-2/3">
          <h3 className="text-6xl font-extrabold font-poppins text-white leading-tight mb-5">
            Why Choose K.R. Mangalam University for International Admission in
            India?
          </h3>
          <h4 className="text-4xl text-[#FF9D00] font-semibold font-fraunces mb-5">
            A University Built for Global Learners
          </h4>
          <p className="text-lg font-poppins text-white max-w-[687px]">
            At K.R. Mangalam University, we believe education goes beyond
            classrooms. Our academic ecosystem is designed to help international
            students learn, innovate, connect, and thrive in a globally
            competitive environment.
          </p>
        </div>
        <div className="w-1/3"></div>
      </div>
    </section>
  );
};

export default WhyChoose;
