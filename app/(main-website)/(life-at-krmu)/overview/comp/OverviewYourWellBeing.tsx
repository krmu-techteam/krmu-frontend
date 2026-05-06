import Link from "next/link";

const OverviewYourWellBeing = () => {
  return (
    <section className="py-12 md:py-20 lg:py-[60px] bg-[#0060aa] px-6 md:px-12 lg:px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
        <div className="lg:w-2/5 text-center lg:text-left">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Your <br className="hidden lg:block" /> Well-Being <br className="hidden lg:block" /> Our Priority
          </h3>
          <Link
            href="/student-welfare"
            target="_blank" rel="noopener noreferrer"
            className="text-black text-sm md:text-base hover:bg-[#034272] hover:text-white bg-white py-2.5 md:py-[11px] px-5 md:px-[23px] rounded-[4px] font-semibold inline-block mt-8 lg:mt-5 transition-all"
          >
            Know more about Student Welfare
          </Link>
        </div>
        <div className="lg:w-3/5 text-white text-center lg:text-left">
          <p className="text-md md:text-lg lg:text-xl leading-relaxed lg:leading-normal">
            Student Welfare provides ample scope, opportunities, and facilities
            for the students’ all-around development of personality and
            leadership qualities. Here, all the activities are undertaken to
            promote opportunities for the youth to enhance their skills and
            talents to boost their confidence. Besides undertaking engagement
            activities regarding the facilitation of outcomes during and after
            the students’ pursuit of academic activities, the office acts as a
            channel of communication between the students and the university
            administration.
          </p>
        </div>
      </div>
    </section>
  );
};


export default OverviewYourWellBeing;
