import SectionDivider from "@/components/common/SectionDivider";

const interRoles = [
  {
    desc: `Facilitate short immersion programmes with international
              universities`,
  },
  {
    desc: `Support for international activities enhancing intercultural relations`,
  },
  {
    desc: `Support for hosting engaging seminars series featuring international experts and faculties`,
  },
  {
    desc: `Establish progressive academic programmes`,
  },
  {
    desc: `Facilitating Master class certification by Australian Universities`,
  },
  {
    desc: `Support information for worldwide scholarships`,
  },
  {
    desc: `Support for students aspiring study abroad by providing free IELTS/TOFEL preparation classes`,
  },
  {
    desc: `Support for international students and foreign visiting faculty`,
  },
  {
    desc: `Faculty development programmes with international support`,
  },
];

const RolesSection = () => {
  return (
    <section className="py-8 md:py-12 xl:py-20 w-full relative">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-16">
        <h2 className="text-3xl md:text-5xl lg:text-[44px] text-center text-white font-serif font-bold mb-6 md:mb-16 xl:mb-20">
          Role of International Relations
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {interRoles &&
            interRoles?.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`text-white w-full flex items-center justify-center p-4 md:p-8 xl:p-12 min-h-[100px] md:min-h-[120px] xl:min-h-[160px]
                    border-solid border-white/20
                    ${i < 8 ? "border-b" : ""}
                    ${i >= 6 && i < 8 ? "lg:border-b-0" : ""}
                    ${(i + 1) % 3 !== 0 ? "lg:border-r" : ""}
                  `}
                >
                  <p className="text-center font-poppins   w-[280px] text-[16px] text-gray-300 max-w-sm leading-relaxed">
                    {item?.desc}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default RolesSection;
