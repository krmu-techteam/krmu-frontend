import React from "react";

const ScholarHero = () => {
  return (
    <section className="pt-[140px] lg:pt-[10%] px-4 pb-[14%] bg-[url(/scholarship/scholarship.webp)] bg-cover bg-right sm:bg-center bg-no-repeat">
      <div className="max-w-[1664px] mx-auto w-full flex-col flex lg:flex-row">
        <div className="lg:w-1/2 text-white">
          <h1 className="text-2xl lg:text-9xl font-semibold my-5">
            Scholarship <br className="lg:hidden" /> 2026 Intake
          </h1>
          <p>Only For First 100 students, First Come First Served</p>
        </div>
        <div className="w-1/2 hidden lg:block"></div>
      </div>
    </section>
  );
};

export default ScholarHero;
