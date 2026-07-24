const GlobalSection = () => {
  const videos = [
    "https://www.youtube.com/embed/uEQ6iDhLv_Q?si=8FYi9R84RL8H1n3N",
    "https://www.youtube.com/embed/vymc951bNlU?si=fUJ3x5xN2nczybkO",
    "https://www.youtube.com/embed/Q0OyZv7Rybw?si=Q8t8T6vXJXRYOY97",
    "https://www.youtube.com/embed/N5wD_F5O4-M?si=o3aBKaDVKiRQQFDQ",
  ];

  return (
    <section className="pt-8 md:pt-12 xl:pt-20">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-16">
        <h2 className="text-4xl md:text-5xl lg:text-[44px] text-center text-white font-serif font-bold mb-10 lg:mb-14">
          Global Learning Experiences at KRMU
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-10 max-w-5xl mx-auto">
          {videos.map((src, index) => (
            <div key={index} className="w-full interRelGlobalYTIframe">
              <iframe
                width="100%"
                height="315"
                src={src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full object-contain"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalSection;
