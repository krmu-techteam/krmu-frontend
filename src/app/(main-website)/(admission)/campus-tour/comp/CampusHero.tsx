import Image from "next/image";
import TourWidget from "./TourWidget";

const CampusHero = () => {
  return (
    <section className="pt-[140px] px-4 md:pt-[9%] pb-20 md:pb-10 bg-[url(/campus/campusbg.webp)] bg-cover bg-no-repeat bg-center">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-5">
        <div className="lg:w-1/2 text-white">
          <h1 className="text-2xl md:text-5xl font-semibold leading-[1.2] md:leading-[1.5] mb-5">
            Schedule Your Exclusive <br />
            <span className="text-[#cb000d]">Campus Tour</span> Today!
          </h1>
          <p>
            At K.R Mangalam University, we believe that the first step towards
            an exceptional educational journey begins with exploration. That’s
            why we invite you to schedule an exclusive campus tour and discover
            the extraordinary environment we’ve crafted for you.
          </p>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          {/* Here form */}
          <TourWidget />
        </div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex flex-col md:flex-row mt-10 md:mt-0 gap-20">
        <div className="lg:w-1/3 text-white md:pt-[50px] md:px-[35px] md:pb-[35px]">
          <Image src="/campus/search.webp" width={44} height={46} alt="" />
          <h4 className="text-2xl font-semibold mt-5">
            Personalized Exploration
          </h4>
          <p>
            Our campus tours go beyond standard visits; they’re tailored
            journeys that resonate with your interests and aspirations
          </p>
        </div>
        <div className="lg:w-1/3 text-white md:pt-[50px] md:px-[35px] md:pb-[35px]">
          <Image src="/campus/pin.webp" width={44} height={46} alt="" />
          <h4 className="text-2xl font-semibold mt-5">
            Connect with Your Future
          </h4>
          <p>
            {` This isn’t just a tour; it’s the beginning of your future, where
            you’ll envision walking these paths, attending classes, and forging
            lifelong friendships.`}
          </p>
        </div>
        <div className="lg:w-1/3 text-white md:pt-[50px] md:px-[35px] md:pb-[35px]">
          <Image src="/campus/whiteheart.webp" width={44} height={46} alt="" />
          <h4 className="text-2xl font-semibold mt-5">
            Feel the Campus Vibrancy
          </h4>
          <p>
            Immerse yourself in the dynamic campus ambiance, providing a genuine
            taste of campus life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CampusHero;
