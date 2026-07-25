import Image from "next/image";
import Link from "next/link";

const LabFacilties = () => {
  return (
    <section className="mb-20">
      <div className="relative">
        <Image src="/demo/robotics-lab.jpg" width={1920} height={574} alt="" className="w-full h-full" />
        <div className="xl:max-w-[492px] w-full xl:absolute -bottom-16 left-[6%] bg-[linear-gradient(113.36deg,#DEEDF2_34.92%,#DADADA_101.72%)] p-8 xl:rounded-[10px]">
          <h3 className="text-3xl sm:text-[46px] font-bold leading-none mb-5">Labs & Facilities</h3>
          <p className="mb-5">
            Touted as the best B.Tech. Robotics and AI College in Gurugram, KRMU
            offers state-of-the-art labs and facilities to provide hands-on
            learning experiences, fostering innovation and practical expertise
            in emerging technologies.
          </p>
          <Link href="#" className="font-bold">Read More</Link>
        </div>
      </div>
    </section>
  );
};

export default LabFacilties;
