import Image from "next/image";

const CulinaryDelight = () => {
  return (
    <section className="bg-[#051630]">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-[60px]">
        <div className="lg:w-1/2 text-white lg:pl-[100px] p-4 lg:py-0 lg:pr-0">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.3] mb-5">
            Culinary Delights for Every Plate
          </h3>
          <p>
            The food at KRMU hostels is just as amazing! Bringing an essence of
            your home, the mess here won’t make you crave your home’s food. The
            food prepared and served at the mess is nourishing, balanced,
            delicious, and caters to the dietary needs of our students.
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/campus-life/culinary.png"
            width={860}
            height={308}
            alt=""
            className="h-[308px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CulinaryDelight;
