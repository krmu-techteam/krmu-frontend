import Image from "next/image";
import Link from "next/link";

const VirtualSchedule = () => {
  return (
    <div className="flex flex-col lg:flex-row px-4 gap-10 max-w-[1664px] mx-auto w-full">
      <div className="lg:w-[30%]">
        <h4 className="text-2xl md:text-4xl font-semibold leading-[1.5] mt-2.5 mb-[15px]">
          Schedule Your <br /> Exclusive Campus <br /> Tour Today!
        </h4>
        <p className="mb-5">
          At K.R Mangalam University, we believe that the first step towards an
          exceptional educational journey begins with exploration. That’s why we
          invite you to schedule an exclusive campus tour and discover the
          extraordinary environment we’ve crafted for you.
        </p>
        <Link
          href="/campus-tour"
          className="bg-[#cb000d] text-white rounded-full py-[13px] px-[29px] inline-block"
          target="_blank" rel="noopener noreferrer"
        >
          Schedule Your Tour
        </Link>
      </div>
      <div className="lg:w-[30%]">
        <div className="flex gap-5">
          <div className="w-1/12">
            <div>
              <Image
                src="/virtual-tour/exploration.webp"
                width={40}
                height={40}
                alt="Exploration"
              />
            </div>
          </div>
          <div className="w-10/12">
            <h6 className="text-xl">
              <strong>Personalized Exploration</strong>
            </h6>
            <p>
              Our campus tours go beyond standard visits; they’re tailored
              journeys that resonate with your interests and aspirations
            </p>
          </div>
        </div>
        <div className="flex gap-5 my-5">
          <div className="w-1/12">
            <div>
              <Image
                src="/virtual-tour/connect.webp"
                width={40}
                height={40}
                alt="Exploration"
              />
            </div>
          </div>
          <div className="w-10/12">
            <h6 className="text-xl">
              <strong>Connect with Your Future</strong>
            </h6>
            <p>
              This isn’t just a tour; it’s the beginning of your future, where
              you’ll envision walking these paths, attending classes, and
              forging lifelong friendships.
            </p>
          </div>
        </div>
        <div className="flex gap-5 ">
          <div className="w-1/12">
            <div>
              <Image
                src="/virtual-tour/campus.webp"
                width={40}
                height={40}
                alt="Exploration"
              />
            </div>
          </div>
          <div className="w-10/12">
            <h6 className="text-xl">
              <strong>Feel the Campus Vibrancy</strong>
            </h6>
            <p>
              Immerse yourself in the dynamic campus ambiance, providing a
              genuine taste of campus life.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[40%]">
        <Image
          src="/virtual-tour/schedule.webp"
          width={600}
          height={600}
          alt=""
        />
      </div>
    </div>
  );
};

export default VirtualSchedule;
