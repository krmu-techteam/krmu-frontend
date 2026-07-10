import Image from "next/image";

const Dean = () => {
  return (
    <div className="flex bg-[linear-gradient(141.49deg,#A598BF_5.3%,#120032_13.48%)] rounded-[10px] p-10 gap-8">
      <div className="w-[15%]">
        <div className="border-2 border-[#ff9d00] border-dashed w-fit rounded-full p-2">
          <Image
            src="/dsw/shweta-bansal.png"
            width={237}
            height={227}
            alt="Shweta Bansal"
            className=""
          />
        </div>
      </div>
      <div className="w-[85%] text-white flex flex-col justify-center">
        <h4 className="text-[26px] font-bold leading-none">
          Prof. (Dr.) Shweta A Bansal,  
        </h4>
        <h5 className="text-[26px]">Dean, Department of Student Welfare  </h5>
        <div className="flex items-baseline gap-5 mt-5">
          <Image
            src="/dsw/quotes.png"
            width={78}
            height={67}
            alt=""
            className=""
          />
          <p className="text-lg">
            Dear Students, Welcome to a vibrant community of learning,
            innovation, and endless opportunities. Your university journey is
            not just about earning a degree, but about discovering your
            potential, building resilience, and shaping values that will guide
            you throughout life. At the Department of Student Welfare, we are
            committed to fostering your holistic growth—academic, personal,
            cultural, emotional, and social—through a supportive and inspiring
            campus environment. We encourage you to actively participate in
            academics, leadership initiatives, co-curricular activities, and
            community engagement, as every experience will help you grow into
            confident, compassionate, and future-ready individuals. Dream
            fearlessly, learn passionately, and lead with integrity, because the
            world needs your ideas, energy, creativity, and positive impact. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dean;
