import Image from "next/image";

const Dean = () => {
  return (
    <div className="flex bg-[linear-gradient(141.49deg,#A598BF_5.3%,#120032_13.48%)] rounded-[10px] p-5">
      <div className="w-1/4">
        <div>
          <Image
            src="/dsw/shweta-bansal.png"
            width={237}
            height={227}
            alt="Shweta Bansal"
            className=""
          />
        </div>
      </div>
      <div className="w-3/4"></div>
    </div>
  );
};

export default Dean;
