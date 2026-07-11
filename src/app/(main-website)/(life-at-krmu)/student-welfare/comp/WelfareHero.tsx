const WelfareHero = () => {
  return (
    <section
      className="pt-[140px] md:pt-[24%] pb-[3%] px-4 bg-[url(/student-welfare/bg.webp)] bg-cover bg-center bg-no-repeat relative after:content-[''] after:absolute after:top-0
     after:left-0 after:w-full after:h-full after:bg-[#0009]
    "
    >
      <div className="max-w-[1664px] mx-auto w-full text-white">
        <div className=" w-full lg:w-2/3 z-10 relative">
          <h3 className="text-[26px] font-medium leading-[1.3]">
            Student Welfare at K.R. Mangalam University
          </h3>
          <h1 className="text-3xl md:text-5xl font-semibold leading-[1.5] mb-5">
            Nurturing Tomorrow’s Leaders
          </h1>
          <p className="mb-5">
            The Department of Student Welfare (DSW) is committed to the holistic
            development and well-being of students by promoting leadership,
            co-curricular and extracurricular engagement, and skill enhancement.
            The department facilitates a supportive and inclusive learning
            environment by coordinating student-centric initiatives and
            services.
          </p>
          <p>
            DSW also functions as an institutional interface between students
            and the University administration, ensuring effective grievance
            redressal, student representation, and continuous support throughout
            and beyond the academic lifecycle.
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default WelfareHero;
