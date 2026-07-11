const InterRelationHero = () => {
  return (
    <section className="pt-[140px] lg:pt-56 pb-[9%] bg-[url(/inter-relation/bg.webp)] bg-cover bg-no-repeat bg-center px-4">
      <div className="max-w-[1664px] mx-auto w-full flex items-center flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl text-center md:text-left md:text-[64px] font-semibold text-white">
            International Relations
          </h1>
        </div>
        <div className="w-full lg:w-1/2 interRelYTIframe">
          <iframe
            width="100%"
            height="422"
            src="https://www.youtube.com/embed/uEQ6iDhLv_Q?si=DY_X1ggkXiYdjjYr"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default InterRelationHero;
