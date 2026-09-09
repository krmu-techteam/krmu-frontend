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
    <section
      className="
        bg-[#f7f4ef]
        px-5
        py-10
        sm:py-12
        md:py-16
        lg:py-20
        xl:px-0
      "
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div
          className="
            flex
            flex-col
            gap-3
            sm:gap-4
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <h2
            className="
              font-newsreader
              text-[32px]
              font-medium
              leading-[1.05]
              text-[#172a42]
              sm:text-[38px]
              md:text-[44px]
              lg:text-[48px]
            "
          >
            Corporate Advisory Board
          </h2>

          <p
            className="
              max-w-[320px]
              font-poppins
              text-xs
              leading-5
              text-[#454545]
              sm:text-[13px]
              md:max-w-none
              md:text-right
            "
          >
            Guiding students from enrollment to employment.
          </p>
        </div>

        {/* Board Members */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-x-5
            gap-y-10
            sm:mt-12
            sm:grid-cols-2
            sm:gap-y-12
            md:mt-14
            md:grid-cols-3
            lg:grid-cols-5
            lg:gap-x-5
            lg:gap-y-0
          "
        >
          {advisoryBoard.map((member) => (
            <article
              key={member.name}
              className="min-w-0"
            >
              {/* Image */}
              <div
                className="
                  relative
                  aspect-square
                  w-full
                  overflow-hidden
                  bg-[#eee]
                "
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="
                    (max-width: 639px) 100vw,
                    (max-width: 767px) 50vw,
                    (max-width: 1023px) 33vw,
                    20vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-300
                    hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="pt-3">
                <h3
                  className="
                    font-poppins
                    text-[13px]
                    font-bold
                    leading-[1.25]
                    tracking-[0.03em]
                    text-[#252525]
                    sm:text-[14px]
                  "
                >
                  {member.name}
                </h3>

                <p
                  className="
                    mt-1
                    font-poppins
                    text-xs
                    leading-[1.35]
                    text-[#343434]
                    sm:text-[13px]
                  "
                >
                  {member.designation}
                </p>

                <p
                  className="
                    font-poppins
                    text-xs
                    leading-[1.35]
                    text-[#343434]
                    sm:text-[13px]
                  "
                >
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