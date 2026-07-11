import PHDRegulationSlide from "./PHDRegulationSlide";

const PHDRegulationHero = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-20">
      <div className="w-full xl:w-3/5 text-white">
        <h1 className="text-3xl md:text-[43px] font-semibold mb-5">Ph.D. Programmes</h1>
        <p className="text-justify leading-[2]">
          {`   The Ph.D. Cell at K.R. Mangalam University is dedicated to fostering a
          culture of research excellence that aligns with the University’s
          mission to enhance employability, entrepreneurship, and lifelong
          learning through a futuristic curriculum, progressive pedagogy, and
          cutting-edge technology. By integrating global needs and expectations
          through collaborations with premier institutions, industries, and
          research centers, the Ph.D. Cell aims to cultivate leaders who are
          equipped with ethical values and an understanding of environmental
          realities. This vision supports the University’s aspiration to become
          an internationally recognized institution of higher learning, driving
          innovation and preparing socially responsible scholars who contribute
          meaningfully to nation-building.`}
        </p>
      </div>
      <div className="w-full xl:w-2/5">
        <PHDRegulationSlide />
      </div>
    </div>
  );
};

export default PHDRegulationHero;
