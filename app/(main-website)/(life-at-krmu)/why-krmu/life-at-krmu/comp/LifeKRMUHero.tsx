const LifeKRMUHero = () => {
  return (
    <section className="pt-[140px] lg:pt-[12%] pb-[9%] bg-[url(/gradient-4.webp)] bg-cover bg-no-repeat bg-center px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 text-white ">
          <h1 className="text-3xl md:text-[40px] leading-[1.2] md:leading-[1] font-semibold mb-5">
            Embark on a Transformative Journey: Campus Life at K.R. Mangalam
            University
          </h1>
          <p>
            Welcome to K.R. Mangalam University, where campus life is an
            exhilarating blend of academic rigor, personal development, and a
            myriad of opportunities to explore passions and interests. Here,
            every student embarks on a transformative journey that goes beyond
            the classroom.
          </p>
        </div>
        <div className="lg:w-1/2 mt-5 lg:mt-0">
          <div className=" w-full rounded-md overflow-hidden shadow-2xl">
            <iframe
              className="aspect-video rounded-md w-full"
              src="https://www.youtube.com/embed/0icBakkiipA?si=lsC0UYYVPfBScKJZ"
            ></iframe>
          </div>
          {/* <iframe
            width="100%"
            height="421"
            src="https://www.youtube.com/embed/0icBakkiipA?si=lsC0UYYVPfBScKJZ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe> */}
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/0icBakkiipA?si=lsC0UYYVPfBScKJZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        </div>
      </div>
    </section>
  );
};

export default LifeKRMUHero;
