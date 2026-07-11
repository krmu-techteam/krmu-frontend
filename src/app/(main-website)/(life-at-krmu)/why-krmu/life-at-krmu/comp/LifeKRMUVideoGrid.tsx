export const LifeKRMUVideoGrid = () => {
  return (
    <section className="pt-[80px] pb-[60px] px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-5 lg:gap-16">
        <div className="lg:w-1/3">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/eiHfb9HVJws?si=PvxpDBKznICzGq5g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <h4 className="text-2xl font-semibold mt-5">EDM Fiesta 2025</h4>
          <p>K.R. Mangalam University</p>
        </div>
        <div className="lg:w-1/3">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/f3hA3WhmYN8?si=6xyMpeI5V8rSqKyq"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <h4 className="text-2xl font-semibold mt-5">Aarambh 2025</h4>
          <p>Our campus was delighted with the presence of Mr. Aman Gupta</p>
        </div>
        <div className="lg:w-1/3">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/lvRHcBBKoHc?si=Yb40DywuHIwApQlJ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <h4 className="text-2xl font-semibold mt-5">
            Padma Shri Kangana Ranaut
          </h4>
          <p>at K.R. Mangalam University</p>
        </div>
      </div>
    </section>
  );
};
