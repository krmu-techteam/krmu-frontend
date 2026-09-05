import Image from "next/image";

const advisoryBoard = [
  {
    name: "ASHISH KUMAR",
    designation: "Designation- Manager",
    company: "Tata Consultancy Services",
    image: "/images/advisory-board/ashish-kumar.jpg",
  },
  {
    name: "PRADEEP RAI",
    designation: "Designation- Senior Advocate",
    company: "Supreme Court of India",
    image: "/images/advisory-board/pradeep-rai.jpg",
  },
  {
    name: "PAWAN DUGGAL",
    designation: "Designation- Advocate",
    company: "Supreme Court of India",
    image: "/images/advisory-board/pawan-duggal.jpg",
  },
  {
    name: "RUCHIKA VOHRA",
    designation: "Designation- MANAGER- TALENT ACQUISITION",
    company: "BLUSMART",
    image: "/images/advisory-board/ruchika-vohra.jpg",
  },
  {
    name: "PUNIT SHARMA",
    designation: "Designation- CHRO",
    company: "PROCMART",
    image: "/images/advisory-board/punit-sharma.jpg",
  },
];

const CorporateAdvisoryBoard = () => {
  return (
    <section className="bg-[#f7f4ef] py-10 md:py-12">
      <div className="mx-auto max-w-[1250px] px-6 md:px-8 lg:px-10">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <h2 className="font-newsreader text-[38px] leading-none text-[#172a42] sm:text-[44px] md:text-[48px]">
            Corporate Advisory Board
          </h2>

          <p className="text-[13px] text-[#454545]">
            Guiding students from enrollment to employment.
          </p>
        </div>

        {/* Board Members */}
        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {advisoryBoard.map((member) => (
            <article key={member.name} className="min-w-0">
              {/* Image */}
              <div className="relative aspect-[1/1] overflow-hidden bg-[#eee]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="pt-3">
                <h3 className="text-[14px] font-bold tracking-[0.03em] text-[#252525]">
                  {member.name}
                </h3>

                <p className="mt-1 text-[13px] leading-[1.25] text-[#343434]">
                  {member.designation}
                </p>

                <p className="text-[13px] leading-[1.25] text-[#343434]">
                  {member.company}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateAdvisoryBoard;