import Image from "next/image";

const WhyStudyCard = () => {
  return (
    <div>
      <div className="h-[200px] relative rounded-2xl overflow-hidden">
        <Image
          src="/international-admission/thumbnail.png"
          fill
          alt=""
          className="w-full"
        />
      </div>
      <div className="bg-[#edece4] pt-10 pb-5 px-5 font-poppins -mt-5">
        <h5 className="leading-9 font-bold">World-Class Education</h5>
        <p>
          Home to globally recognised IITs, IIMs, and NAAC accredited
          universities. Renowned for excellence in Engineering, Technology,
          Medicine, Business, and Sciences.
        </p>
      </div>
    </div>
  );
};

export default WhyStudyCard;
