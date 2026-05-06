import Image from "next/image";
import Link from "next/link";

const OveviewSecondHome = () => {
  return (
    <section className="py-12 px-4 md:px-12 lg:px-10">
      <div className="max-w-[1344px] mx-auto w-full bg-[#f0f0f0] flex flex-col lg:flex-row items-center overflow-hidden">
        <div className="w-full lg:w-2/5 px-4 pt-10 lg:pt-[60px] lg:pr-[30px] lg:pb-[50px] lg:pl-[60px]">
          <h4 className="text-3xl md:text-5xl font-semibold leading-tight">
            Find Your <br className="hidden lg:block" /> Second Home
          </h4>
        </div>
        <div className="w-full lg:w-3/5 px-4 py-5 lg:pt-[60px] lg:pr-[30px] lg:pb-[50px] lg:pl-[60px]">
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            The KRMU hostels have well-ventilated rooms to provide the students
            with a rejuvenating atmosphere to relax and study. Our hostel rooms
            are furnished with comfortable beds, study tables, chairs, built-in
            cupboards, ceiling fans, lights, and central air conditioners to
            offer the most comfortable stay.
          </p>
          <Link
            href="/hostel"
            className="py-[11px] px-[23px] text-white bg-[#0060aa] font-semibold text-base rounded-[4px] inline-block transition-colors hover:bg-[#004a85]"
            target="_blank" rel="noopener noreferrer"
          >
            Know More
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 gap-5">
        <Image
          src="/life-at-krmu/secondhome/item1.webp"
          width={400}
          height={265}
          alt="Hostel 1"
          className="w-full h-auto object-cover"
        />
        <Image
          src="/life-at-krmu/secondhome/item2.webp"
          width={400}
          height={265}
          alt="Hostel 2"
          className="w-full h-auto object-cover"
        />
        <Image
          src="/life-at-krmu/secondhome/item3.webp"
          width={400}
          height={265}
          alt="Hostel 3"
          className="w-full h-auto object-cover"
        />
        <Image
          src="/life-at-krmu/secondhome/item4.webp"
          width={400}
          height={265}
          alt="Hostel 4"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};


export default OveviewSecondHome;
