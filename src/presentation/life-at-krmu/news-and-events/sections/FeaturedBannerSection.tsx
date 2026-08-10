import Image from "next/image";
import Link from "next/link";

const FeaturedBannerSection = () => {
  return (
    <section className="relative py-8 md:py-12">
      <div className="max-w-[1530px] mx-auto px-4 md:px-10 w-full">
        {/* Card Content Container with direct border */}
        <div className="rounded-[10px] border-2 border-[#0D7377] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 xl:gap-12 min-h-[380px]">
          {/* Left Image Column */}
          <div className="w-full lg:w-[48%] xl:w-[681px] max-w-[681px] shrink-0 rounded-[10px] overflow-hidden flex items-center justify-center">
            <Image
              src="/images/news-and-events/global-sustainability.jpg"
              alt="K.R. Mangalam University Sustainability Impact Rating Certificate"
              width={681}
              height={413}
              className="w-full h-auto max-h-[413px] object-cover rounded-[10px]"
              priority
            />
          </div>

          {/* Right Text Content Column */}
          <div className="w-full lg:w-[50%] xl:flex-1 flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 text-white py-2 lg:py-4">
            <p className="text-[#E7C268] font-poppins text-sm sm:text-base lg:text-[18px] font-normal tracking-wide">
              Published On: June 24, 2026
            </p>

            <h2 className="font-serif font-normal text-xl sm:text-2xl lg:text-[28px] xl:text-[36px] leading-[1.3] text-white max-w-[780px]">
              K.R. Mangalam University Secures Global Sustainability Impact
              Rating Band 601–800 in THE Sustainability Impact Ratings 2026
            </h2>

            <Link
              href="#"
              className="inline-flex items-center text-[#00B7FF] hover:text-[#38BDF8] font-poppins text-base sm:text-[16px] font-medium transition-colors hover:underline pt-2"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBannerSection;
