import PASlide from "./PASlide";

const ResearchHighlight = () => {
  const rhSlide = [
    {
      imgUrl: "/research-innovation/highlight-1.png",
      link: "https://www.sciencedirect.com/science/article/pii/S1110866525000179",
      content:
        "ADVANCED SEGMENTATION METHOD FOR INTEGRATING MULTI-OMICS DATA FOR EARLY CANCER DETECTION",
    },
    {
      imgUrl: "/research-innovation/highlight2.png",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S1386142525000368",
      content:
        "INVESTIGATION INTO THE VIBRATIONAL CHARACTERISTICS OF MONOLAYERED RUDDLESDEN-POPPER COMPOUNDS (SR, BA)2HFO4",
    },
    {
      imgUrl: "/research-innovation/highlight-3.png",
      link: "https://www.sciencedirect.com/science/article/pii/S2352012425000207",
      content:
        "UTILIZATION OF NUMERICAL AND MACHINE LEARNING TO PREDICT THE MONOTONIC COMPRESSIVE RESPONSE OF SQUARE DOUBLE-SKIN TUBULAR COLUMNS (SDSTC)",
    },
    {
      imgUrl: "/research-innovation/highlight-4.png",
      link: "https://doi.org/10.1007/s11831-025-10253-4",
      content:
        "ADVANCING PULMONARY INFECTION DIAGNOSIS: A COMPREHENSIVE REVIEW OF DEEP LEARNING APPROACHES IN RADIOLOGICAL DATA ANALYSIS",
    },
  ];

  return (
    <section className="bg-[url(/research/gradient-1.webp)] bg-cover bg-no-repeat py-8 px-4" id="_res-highlights">
      <div className="text-white max-w-[1664px] mx-auto w-full">
        <h3 className="text-3xl md:text-5xl font-semibold">Research Highlights</h3>

        <div className="w-full mt-10">
          <PASlide slide={rhSlide} />
        </div>
      </div>
    </section>
  );
};

export default ResearchHighlight;
