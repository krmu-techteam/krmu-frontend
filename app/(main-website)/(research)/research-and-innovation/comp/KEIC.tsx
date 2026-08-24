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
          <h2 className="text-3xl md:text-[44px] font-semibold mb-5 leading-[1.2]">
            K.R. Mangalam Entrepreneurship <br /> and Innovation Centre (KEIC)
          </h2>
          <p>
            KEIC is the cornerstone of our innovation ecosystem. This dynamic
            centre offers an incubation programme to nurture start-ups, a
            state-of-the-art maker lab for prototyping and creative exploration,
            and co-working spaces that encourage collaborative ventures. The
            centre is also home to our pioneering BBA in Entrepreneurship
            programme, developed in collaboration with the GCEC Global
            Foundation, preparing the next generation of entrepreneurial
            leaders.
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
