import Image from "next/image";

const WhyChoose = () => {
  return (
    <section
      className="
        relative
        bg-[url('/international-admission/sunset.jpg')]
        bg-cover
        bg-top
        bg-no-repeat
        pt-[280px]
        sm:pt-[350px]
        md:pt-[420px]
        lg:pt-[520px]
        xl:pt-[425px]
        
        sm:-mt-20
        lg:-mt-40
      "
      id="why-choose"
    >
      {/* Girl Image */}

      <div className="relative z-20 max-w-[1427px] mx-auto">
        <Image
          src="/international-admission/girl-3.png"
          alt="Girl"
          width={438}
          height={671}
          className="
          absolute
          bottom-0
          right-0
          sm:right-6
          md:right-10
          lg:right-20
          xl:right-0
          w-[180px]
          sm:w-[220px]
          md:w-[280px]
          lg:w-[360px]
          xl:w-[438px]
          h-auto
          z-10
        "
        />
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-2/3 pb-[188px]">
            <h3
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-extrabold
                font-poppins
                text-white
                leading-tight
                mb-4
              "
            >
              Why Choose K.R. Mangalam University for International Admission in
              India?
            </h3>

            <h4
              className="
                text-xl
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
                text-[#FF9D00]
                font-semibold
                font-fraunces
                mb-4
              "
            >
              A University Built for Global Learners
            </h4>

            <p
              className="
                text-base
                md:text-lg
                text-white
                font-poppins
                max-w-[700px]
                leading-8
              "
            >
              At K.R. Mangalam University, we believe education goes beyond
              classrooms. Our academic ecosystem is designed to help
              international students learn, innovate, connect, and thrive in a
              globally competitive environment.
            </p>
          </div>

          {/* Right Space */}
          <div className="hidden lg:block lg:w-1/3" />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
