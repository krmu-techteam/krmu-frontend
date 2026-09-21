import Image from "next/image";

const SingleImage = () => {
  return (
    <div className="relative w-full h-[180px] sm:h-[250px] md:h-[200px] lg:h-[250px] xl:h-[250px]">
      <Image
        src="/international-admission/black-white-university.webp"
        alt="K.R. Mangalam University campus building"
        width={1440}
        height={1440}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default SingleImage;