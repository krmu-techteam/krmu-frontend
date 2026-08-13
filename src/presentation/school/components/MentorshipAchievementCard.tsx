import Image from "next/image";

const MentorshipAchievementCard = () => {
  return (
    <div className="flex flex-col sm:flex-row rounded-[4px] overflow-hidden h-full border border-blue-900/40">
      <div className="relative overflow-hidden w-full sm:w-[42%] min-h-[300px] sm:min-h-full">
        <Image
          src="/schools/jayant-parashar.jpg"
          alt="Jayant Parashar"
          width={271}
          height={360}
          className="object-cover object-top h-full w-full"
        />
      </div>
      <div className="w-full sm:w-[58%] p-5 sm:p-6 bg-[#002f8e] flex flex-col justify-between">
        <div>
          <p className="text-white font-semibold lg:text-3xl text-xl leading-tight">
            Jayant Parashar
          </p>
          <p className="text-white/90 lg:text-lg text-sm mt-1 pb-3 border-b border-[#4da6ff]/60">
            (B.Tech. CSE, 6th Sem)
          </p>
          <p className="text-white text-3xl lg:text-4xl font-extrabold mt-3 leading-none pb-3 border-b border-[#4da6ff]/60">
            ₹3L
          </p>
          <p className="text-white/90 lg:text-[16px] text-xs mt-2 font-medium">
            Google Stipend · GSoC 2026
          </p>
        </div>

        <div className="relative mt-4 w-full">
          <Image
            src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/1773422694704_886721c56d.png"
            alt="GSoC Logo"
            width={350}
            height={120}
            className="object-cover rounded-sm w-full h-[110px] object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default MentorshipAchievementCard;
