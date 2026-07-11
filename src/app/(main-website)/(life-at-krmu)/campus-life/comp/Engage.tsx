import Image from "next/image";

const Engage = () => {
  return (
    <section className="bg-[#0060aa]">
      <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-[60px]">
        <div className="lg:w-1/2">
          <Image
            src="/campus-life/engage.png"
            width={860}
            height={308}
            alt=""
            className="h-full sm:h-[308px] w-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 text-white  p-4 lg:py-0 lg:pr-[100px]">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.3] mb-5">
            Engage and Excel with Our Sports Complexes
          </h3>
          <p>
            We’ve ensured that our athletes get all the facilities they can ask
            for from our hostel. From the best sports complexes to the perfect
            gymnasium, our hostels have everything for our students to get
            stronger, better, and maintain a healthier mind and lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Engage;
