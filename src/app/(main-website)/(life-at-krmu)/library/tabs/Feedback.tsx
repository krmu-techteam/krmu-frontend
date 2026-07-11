import Image from "next/image";

const Feedback = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full libtabcontent flex flex-col lg:flex-row gap-10">
      <div className="w-full lg:w-1/2">
        <p>
          Your valuable suggestion may be useful for improvement of Library
          Services.
        </p>
        <h2>Therefore you are requested to fill & submit true data.</h2>
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

export default Feedback;
