import React from "react";
import LifePeekSlide from "./LifePeekSlide";

const LifeKRMUPeek = () => {
  return (
    <section className="py-10 px-4">
      <div className="flex flex-col lg:flex-row max-w-[1664px] mx-auto w-full items-center">
        <div className="w-full lg:w-2/3">
          <h4 className="text-3xl md:text-5xl font-semibold leading-[1.3]">
            A Peek into the Vibrant Student
            <br className="hidden md:block" /> Experience at K.R. Mangalam
            <br className="hidden md:block" /> University
          </h4>
          <p className="mt-2.5">
            K.R. Mangalam University encourages students to participate in
            extracurricular activities for overall growth and development. The
            University encourages student-centric bodies, cultural clubs, and
            sports cells that cater to diverse needs and interests. These
            platforms provide opportunities for students to explore their
            passion, develop leadership skills, and foster a sense of community.
          </p>
        </div>
        <div className="w-full lg:w-1/3 mt-5 lg:mt-0">
          <LifePeekSlide />
        </div>
      </div>
    </section>
  );
};

export default LifeKRMUPeek;
