import Image from "next/image";

const page = () => {
  return (
    <div className="mt-20 py-20 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-5 max-w-[1440px] mx-auto px-5">
      <div className="border border-gray-200">
        <Image
          src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Adtiya_Birla_Group_Logo_f87b5ee50b.png"
          width={250}
          height={80}
          alt=""
        />
      </div>
      <div className="border border-gray-200">
        <Image
          src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/AIIMS_logo_189ff03744.png"
          width={250}
          height={80}
          alt=""
        />
      </div>
      <div className="border border-gray-200">
        <Image
          src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Adidas_logo_685a00ae39.png"
          width={250}
          height={80}
          alt=""
        />
      </div>
      <div className="border border-gray-200">
        <Image
          src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Aimil_Logo_2f51d3c240.png"
          width={250}
          height={80}
          alt=""
        />
      </div>
      <div className="border border-gray-200">
        <Image
          src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Airtel_Logo_471cb5be51.png"
          width={250}
          height={80}
          alt=""
        />
      </div>
      <div className="border border-gray-200">
        <Image
          src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Adobe_Logo_4ef3d7dc42.png"
          width={250}
          height={80}
          alt=""
        />
      </div>
    </div>
  );
};

export default page;
