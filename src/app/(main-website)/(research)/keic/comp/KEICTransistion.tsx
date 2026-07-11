const KEICTransistion = () => {
  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-4xl font-semibold text-center mb-10">
          Transition from Student to Entrepreneur
        </h3>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
          <div className="lg:w-1/2">
            <iframe
              width="100%"
              height="432"
              src="https://www.youtube.com/embed/y0JzVopJJHU?si=CIH3uMa6oFd4LG7c"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="lg:w-1/2">
            <iframe
              width="100%"
              height="432"
              src="https://www.youtube.com/embed/HR6NvaLdToI?si=s87ykP9I2Epi2A4O"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KEICTransistion;
