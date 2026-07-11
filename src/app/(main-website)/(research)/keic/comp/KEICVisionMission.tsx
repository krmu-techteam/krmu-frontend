const KEICVisionMission = () => {
  return (
    <section className="py-[30px] px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row lg:gap-20">
        <div className="lg:w-1/2 bg-[url(/keic/keic-gradient-1.webp)] bg-cover bg-center bg-no-repeat p-5 text-white mb-2.5">
          <h3 className="text-5xl font-semibold leading-[1.5] ">Vision</h3>
          <p className="mb-5 leading-[1.5]">
            To be a catalyst for entrepreneurial excellence by empowering
            students to create innovative solutions that address societal, IT
            challenges and sustainability.
          </p>
        </div>
        <div className="lg:w-1/2 bg-[url(/keic/keic-gradient-2.webp)] bg-cover bg-center bg-no-repeat p-5 text-white mb-2.5">
          <h3 className="text-5xl font-semibold leading-[1.5] ">Mission</h3>
          <p className="mb-5 leading-[1.5]">
            Foster a thriving entrepreneurial ecosystem that inspires
            creativity, provides resources and mentorship, and supports students
            in launching successful businesses and social enterprises.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KEICVisionMission;
