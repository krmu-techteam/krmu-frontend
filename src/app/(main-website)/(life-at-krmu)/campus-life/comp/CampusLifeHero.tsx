const CampusLifeHero = () => {
  return (
    <section className="pt-[120px] pb-[100px] px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2"> 
          <h1 className="text-3xl md:text-6xl lg:text-[80px] leading-[1.2] blue-gradient font-semibold">
            Discover You <br /> Second Home
          </h1>
          <h3 className="text-2xl font-semibold mb-5">
            KRMU Hostels – Bringing Your Home Closer
          </h3>
          <p className="text-lg">
            A student’s living place has a pivotal role in their academic
            journey, and that is why KRMU’s hostels are not just buildings but a
            haven of vibrant communities that foster friendships, learning, and
            unforgettable experiences.
          </p>
        </div>
        <div className="lg:w-1/2 customIframeStyle">
          <iframe
            width="100%"
            height="420px"
            src="https://www.youtube.com/embed/0FECW-Go_oc?si=ZbWaooI79dxAfE1M"
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

export default CampusLifeHero;
