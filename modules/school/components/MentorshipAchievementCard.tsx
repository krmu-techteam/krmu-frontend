import Image from "next/image";

const MentorshipAchievementCard = () => {
  return (
    <div className="flex flex-col sm:flex-row rounded-sm overflow-hidden h-full">
      <div className="relative overflow-hidden w-full sm:w-2/5">
        <Image
          src="/schools/OP.JPG"
          alt="Jayant Parashar"
          width={271}
          height={360}
          className="object-cover object-top-left sm:object-top h-[420px] sm:h-full w-full"
        />
      </div>
      <div className="w-full sm:w-3/5 p-5 bg-[#002f8e] flex flex-col justify-center">
        <p className="text-white font-semibold lg:text-3xl text-xl leading-tight">
          Jayant Parashar
        </p>
        <p className="text-white lg:text-xl mt-1 pb-3 border-b border-[#4da6ff]">
          (B.Tech. CSE, 6th Sem)
        </p>
        <p className="text-white text-4xl font-extrabold mt-3 leading-none pb-3 border-b border-[#4da6ff] ">
          ₹3L
        </p>
        <p className="text-white lg:text-[17px] text-sm mt-2">
          Google Stipend · GSoC 2026
        </p>

        <div className="relative mt-3 w-full">
          <Image
            src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/1773422694704_886721c56d.png"
            alt="GSoC Logo"
            width={350}
            height={120}
            className="object-cover rounded-sm w-full h-[120px] object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default MentorshipAchievementCard;
