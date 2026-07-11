import Image from "next/image";

const KEICHero = () => {
  return (
    <section
      className="pt-[10%] pb-[5%] px-4 bg-[url(/keic/keicbg.webp)] bg-cover bg-center bg-no-repeat relative after:content-[''] after:absolute after:top-0 after:left-0
    after:w-full after:h-full after:bg-[#fffc]"
    >
      <div className="max-w-[1664px] mx-auto w-full flex items-center flex-col lg:flex-row relative z-10">
        <div className="lg:w-1/3">
          <Image src="/keic/keicx.png" width={490} height={490} alt="" />
        </div>
        <div className="lg:w-2/3">
          <h1 className="text-[#0162b0] text-3xl md:text-[55px] font-semibold text-center leading-[1.2]">
            K.R. Mangalam Entrepreneurship and Incubation Centre
          </h1>
        </div>
      </div>
    </section>
  );
};

export default KEICHero;
