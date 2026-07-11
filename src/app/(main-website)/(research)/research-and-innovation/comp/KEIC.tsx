import Link from "next/link";
import KeicSlide from "./KeicSlide";

const KEIC = () => {
  return (
    <section className="bg-black bg-cover bg-center pt-[50px] pb-[30px] px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10 items-center">
        <div className="lg:w-2/5">
          <KeicSlide />
        </div>
        <div className="text-white lg:w-3/5">
          <h3 className="text-3xl md:text-[44px] font-semibold mb-5 leading-[1.2]">
            K.R. Mangalam Entrepreneurship <br /> and Innovation Center (KEIC)
          </h3>
          <p>
            KEIC is the cornerstone of our innovation ecosystem. This dynamic
            center offers an incubation program to nurture start-ups, a
            state-of-the-art maker lab for prototyping and creative exploration,
            and coworking spaces that encourage collaborative ventures. The
            center is also home to our pioneering BBA in Entrepreneurship
            program, developed in collaboration with the GCEC Global Foundation
            [https://www.gcecglobal.com], preparing the next generation of
            entrepreneurial leaders.
          </p>
          <Link href="/keic" className="blink-effect common-btn-3 mt-5">
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KEIC;
