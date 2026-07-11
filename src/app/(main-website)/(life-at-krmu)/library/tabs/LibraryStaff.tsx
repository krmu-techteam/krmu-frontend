import Image from "next/image";

const LibraryStaff = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full libtabcontent flex flex-col lg:flex-row gap-10">
      <div className="w-full lg:w-1/2">
        <p>Assistance at Every Step</p>
        <h2>
          Library staffs are ready to help users, if they need so. Remember,
          politeness always pays in form of personalized service.
        </h2>
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

export default LibraryStaff;
