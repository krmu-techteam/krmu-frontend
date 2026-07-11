import Image from "next/image";

const PhdWelcomeUniversity = () => {
  return (
    <section className="py-10 bg-[#F8F9FA] px-4">
      <div className="max-w-[1300px] mx-auto w-full flex flex-col xl:flex-row gap-10">
        <div className="w-full xl:w-1/3">
          <h3 className="text-[32px] font-semibold mb-5">
           Welcome to K.R. Mangalam University
          </h3>
          <div className="custom-border"></div>
          <p className="my-5">
            K.R. Mangalam University has steadily emerged as a leading hub of education, research, and innovation in the Delhi NCR region. Established under the Haryana Private Universities Act, the University is NAAC ‘A’ accredited, reflecting its commitment to high standards of academic excellence, governance, and institutional quality.
          </p>
          <p className="mb-5">
           The University offers over 100 undergraduate, postgraduate, and doctoral programmes across diverse disciplines. Backed by the legacy of the prestigious KR Mangalam Group, KRMU emphasises research-led learning, industry relevance, and global exposure.
          </p>
           <p className="mb-5">
            With modern infrastructure, experienced faculty, international collaborations, and strong industry partnerships, K.R. Mangalam University provides a dynamic and future-ready academic environment—preparing students to succeed in an increasingly interconnected world.
          </p>
        </div>
        <div className="w-full xl:w-1/3">
          <Image
            src="/landingpage/phd/welcome.webp"
            width={364}
            height={430}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full xl:w-1/3 flex flex-col gap-5 text-center sm:text-left md:gap-x-10 md:gap-y-20">
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <h4 className="text-2xl sm:text-3xl text-[#E50404] font-semibold">
               18,000+ 
              </h4>
              <h5 className="font-semibold">Alumni Base</h5>
            </div>
            <div className="flex flex-col">
              <h4 className="text-2xl sm:text-3xl text-[#005DA9] font-semibold">12,000+ </h4>
              <h5 className="font-semibold">Students On Campus</h5>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <h4 className="text-2xl sm:text-3xl text-[#005DA9] font-semibold">800+ </h4>
              <h5 className="font-semibold">Recruiters</h5>
            </div>
            <div className="flex flex-col">
              <h4 className="text-2xl sm:text-3xl text-[#E50404] font-semibold">100% </h4>
              <h5 className="font-semibold">Placement Assistance </h5>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <h4 className="text-2xl sm:text-3xl text-[#E50404] font-semibold">700+ </h4>
              <h5 className="font-semibold">Experienced Educators </h5>
            </div>
            <div className="flex flex-col">
              <h4 className="text-2xl sm:text-3xl text-[#005DA9] font-semibold">28+ </h4>
              <h5 className="font-semibold">Acres Campus </h5>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <h4 className="text-2xl sm:text-3xl text-[#E50404] font-semibold">Up to 100% </h4>
              <h5 className="font-semibold">Scholarships </h5>
            </div>
            <div className="flex flex-col">
              <h4 className="text-2xl sm:text-3xl text-[#005DA9] font-semibold">Fully Sponsored </h4>
              <h5 className="font-semibold">International Study Tour </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhdWelcomeUniversity;
