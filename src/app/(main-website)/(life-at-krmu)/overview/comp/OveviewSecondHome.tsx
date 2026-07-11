import Image from "next/image";
import Link from "next/link";

const OveviewSecondHome = () => {
  return (
    <section className="py-8 md:py-16 bg-[#f0f0f0] w-full">
      <div className="max-w-[1440px] mx-auto px-4 md:px-0">
        <div className="text-center max-w-[1000px] mx-auto mb-10">
          <h4 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#051630] mb-4">
            Find Your Second Home
          </h4>
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-700">
            The KRMU hostels have well-ventilated rooms to provide the students
            with a rejuvenating atmosphere to relax and study. Our hostel rooms
            are furnished with comfortable beds, study tables, chairs, built-in
            cupboards, ceiling fans, lights, and central air conditioners to
            offer the most comfortable stay.
          </p>
          <Link
            href="/hostel"
            className="py-4 px-12 text-white bg-[#0060aa] font-bold text-base rounded-[4px] inline-block transition-all duration-300 hover:bg-[#004a85] shadow-xl hover:-translate-y-1"
            target="_blank" rel="noopener noreferrer"
          >
            Know More
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="overflow-hidden shadow-md rounded-xs transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <Image
                src={`/life-at-krmu/secondhome/item${item}.webp`}
                width={400}
                height={265}
                alt={`Hostel ${item}`}
                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default OveviewSecondHome;
