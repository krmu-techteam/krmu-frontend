import Image from "next/image";

export async function generateMetadata() {
  return {
    title: "CUET Counselling: Register & Apply | K.R. Mangalam University",
    description:
      "Apply for undergraduate admissions at K.R. Mangalam University through CUET scores. Register for CUET counselling, explore eligible UG courses & secure your seat.",
    alternates: {
      canonical: "https://www.krmangalam.edu.in/cuet-counselling",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const page = () => {
  return (
    <>
      <section
        className="relative  bg-[linear-gradiant(180deg,#032139_50%,#859cb7_100%)] h-[500px] sm:h-[500px] md:h-[750px] lg:h-[650px] xl:h-[840px] overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(90deg,#032139 0%,#27405a 20%,#8ca3be 100%)",
        }}
      >
        {/* Mobile Banner */}
        <Image
          src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Moblie_480_X602_jpg_4267594d30.jpeg"
          alt="CUET Website Banner"
          fill
          className="lg:hidden  "
          // priority
        />
        {/* Desktop Banner */}
        <Image
          src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/CUET_Website_Banner_1905_X834_jpg_0fa471c8c6.jpeg"
          alt="CUET Website Banner"
          fill
          className="hidden lg:block mt-10"
          // priority
        />
      </section>
      <section className="relative mx-[25px] sm:mx-[50px] lg:mx-[50px] xl:mx-[150px] h-[200px] sm:h-[200px] md:h-[350px] lg:h-[350px] xl:h-[600px] overflow-hidden">
        <Image
          src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/CUET_Image_jpg_743ab83697.jpeg"
          fill
          alt=""
          className=" object-contain "
        />

        {/* <div className="w-full md:w-1/2">
            <Image src="/cuet-right.webp" width={768} height={624} alt="" className="w-full h-full object-contain" />
          </div> */}
      </section>
    </>
  );
};

export default page;
