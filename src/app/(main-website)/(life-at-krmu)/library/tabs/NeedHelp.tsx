import Image from "next/image";

const NeedHelp = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full libtabcontent flex flex-col lg:flex-row gap-10">
      <div className="w-full lg:w-1/2">
        <p>Need Help?</p>
        <h2>Yes, a due weightage is given</h2>
        <p>
          Library staffs are ready to help users, if they need so. Remember.
          politeness always pays in form of personalized service.
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <Image
          src="/library/liabrary.webp"
          width={540}
          height={768}
          alt="Overview"
        />
      </div>
    </div>
  );
};

export default NeedHelp;
