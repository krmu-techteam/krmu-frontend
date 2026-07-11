import Image from "next/image";

const HubActivity = () => {
  return (
    <section className="bg-[#d4221e]">
      <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-[60px]">
        <div className="lg:w-1/2">
          <Image
            src="/campus-life/hubactivity.png"
            width={860}
            height={308}
            alt=""
            className="h-full sm:h-[308px] w-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 text-white  p-4 lg:py-0 lg:pr-[100px]">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.3] mb-5">
            A Hub of Activity and Interaction
          </h3>
          <p>
            The hostels are full of life and lively comrades who keep the space
            buzzing with energy through jam sessions, games, and everything else
            that can help you unwind after a long day. The spaces across the
            hostel have been designed to promote bonds of friendship, community,
            and open interactions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HubActivity;
