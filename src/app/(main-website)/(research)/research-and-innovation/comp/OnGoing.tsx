import RISlide from "./RISlide";

const OnGoing = () => {
  const onGoingImgSlies = [
    {
      imgUrl: "/ongoing/item-1.webp",
    },
    {
      imgUrl: "/ongoing/item-2.webp",
    },
    {
      imgUrl: "/ongoing/item-3.jpg",
    },
  ];

  return (
    <section className="bg-[#c4d9f4] bg-cover bg-center pt-[50px] pb-[30px] px-4" id="_ongoing-collab">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10 items-center">
        <div className="lg:w-1/2">
          <RISlide slide={onGoingImgSlies} />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-3xl md:text-[44px] text-[#3d5fa5] font-semibold mb-5 leading-[1.2]">
            Ongoing Projects and <br /> Collaborations
          </h3>
          <p>
            Our University takes pride in actively promoting research endeavors
            among both faculty and students. At K. R. Mangalam University, we
            have successfully secured substantial research funding from esteemed
            sources, including government bodies and corporate houses. Notably,
            our institution has achieved significant milestones by securing
            projects exceeding 4 Crores from renowned entities such as DST,
            DST-FICCI, DST-SEED, ICSSR and various corporate houses. Apart from
            research funding more that 2 Cr consultancy projects were also in
            record.
          </p>
          <br />
          <p>
            Join us on a journey of academic discovery and contribute to the
            cutting-edge research landscape at K.R. Mangalam University!
          </p>
          <p>
            We are engaged in numerous pioneering research projects, many in
            collaboration with industry leaders, government bodies, and
            international institutions. These projects not only contribute to
            academic knowledge but also have tangible impacts on communities and
            industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OnGoing;
