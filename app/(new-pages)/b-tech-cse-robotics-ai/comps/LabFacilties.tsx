import Image from "next/image";
import Link from "next/link";

const LabFacilties = () => {
  return (
    <section className="mb-5">
      <div className="relative">
        <Image
          src="/demo/robotics-lab.jpg"
          width={1920}
          height={574}
          alt=""
          className="w-full h-full"
        />
        <div className="xl:absolute bottom-[-54px] left-0 w-full">
          <div className="max-w-7xl mx-auto">
          <div className="xl:max-w-[560px] w-full bg-[linear-gradient(113.36deg,#DEEDF2_34.92%,#DADADA_101.72%)] p-5 sm:p-8 xl:rounded-[10px]">
            <h3 className="text-3xl sm:text-[46px] font-bold leading-none mb-2 sm:mb-5">
              Labs & Facilities
            </h3>
            <p className="text-sm sm:text-base mb-5 text-justify sm:text-left">
              Touted as the best B.Tech. Robotics and AI College in Gurugram,
              KRMU offers state-of-the-art labs and facilities to provide
              hands-on learning experiences, fostering innovation and practical
              expertise in emerging technologies.
            </p>
            <Link href="#" className="font-bold">
              Read More
            </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabFacilties;
