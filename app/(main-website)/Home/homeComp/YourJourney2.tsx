import Link from "next/link";
import HomeYourJourneyForm from "../../components/Forms/HomeYourJourneyForm";
import Image from "next/image";
import CommonLeadPopup from "../../components/CommonLeadPopup";

const YourJourney2 = () => {
  return (
    <section className="pb-10 xl:pb-20 sm:px-5 xl:px-0">
      <div className="xl:max-w-7xl 2xl:max-w-[1664px] mx-auto w-full px-5 xl:px-0 ">
        <div className="max-w-7xl mx-auto w-full text-center">
          <p className="font-weight-500 text-xs sm:text-sm uppercase tracking-wide sm:tracking-[1px] mb-3">
            Elevate Your Campus Life
          </p>
          <h4 className="text-2xl sm:text-4xl lg:text-5xl font-semibold m-2 md:mb-5 text-black ">
            Your Journey to Excellence Begins Here
          </h4>
          <p className="mb-5 max-w-5xl mx-auto text-lg text-justify sm:text-center">
            Our multidisciplinary approach to education ensures students receive
            a well-rounded experience, blending theoretical knowledge with
            real-world applications. As the leading university in Gurugram, we
            commit to providing students with the necessary skills and knowledge
            to thrive in the ever-changing world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center max-w-2xl mx-auto w-full sm:gap-5 lg:gap-5 ">
            <HomeYourJourneyForm />
            <Link
              href="/programmes"
              target="_blank"
              className="w-full flex items-center justify-center gap-2 h-14 rounded-md font-medium transition-all  text-[14px] md:text-base leading-none tracking-wide relative overflow-hidden group px-6 bg-[#001732] text-white border-1 border-transparent hover:bg-[#001732] shadow-lg px-6 hover:bg-[#001732] mb-2.5"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
              Explore Our Programmes
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 py-5 xl:p-10 test">
          <div className="w-full h-full bg-gray-500 min-h-[300px] relative overflow-hidden rounded-xl">
            <Image
              src="/wp-content/home2/journey/1.jpg"
              fill
              alt="Journey 1"
              className="z-10 object-cover"
            />
          </div>
          <div className="w-full h-full bg-gray-500 min-h-[300px] relative overflow-hidden hidden sm:block rounded-xl">
            <Image
              src="/wp-content/home2/journey/2.jpg"
              fill
              alt="Journey 2"
              className="z-10 object-cover"
            />
          </div>
          <div className="w-full h-full bg-gray-500 min-h-[300px] relative overflow-hidden rounded-xl hidden xl:block">
            <Image
              src="/wp-content/home2/journey/3.jpg"
              fill
              alt="Journey 3"
              className="z-10 object-cover"
            />
          </div>
        </div>
        {/* Desktop View - Original Flex (Untouched) */}
        <div className="hidden sm:flex justify-center gap-5 flex-wrap">
          <Link
            href="/admissions"
            target="_blank"
            className=" flex items-center justify-center gap-2 h-14 rounded-md font-medium transition-all  text-[14px] md:text-base leading-none tracking-wide relative overflow-hidden group px-6 bg-[#001732] text-white border-1 border-transparent hover:bg-[#001732] shadow-lg px-6 hover:bg-[#001732] mb-2.5"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
            Admission
          </Link>
          <Link
            href="/fee-structure"
            target="_blank"
            className=" flex items-center justify-center gap-2 h-14 rounded-md font-medium transition-all  text-[14px] md:text-base leading-none tracking-wide relative overflow-hidden group px-6 bg-[#001732] text-white border-1 border-transparent hover:bg-[#001732] shadow-lg px-6 hover:bg-[#001732] mb-2.5"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
            Fee Structure
          </Link>
          <Link
            href="/admission/scholarship"
            target="_blank"
            className=" flex items-center justify-center gap-2 h-14 rounded-md font-medium transition-all  text-[14px] md:text-base leading-none tracking-wide relative overflow-hidden group px-6 bg-[#001732] text-white border-1 border-transparent hover:bg-[#001732] shadow-lg px-6 hover:bg-[#001732] mb-2.5"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
            Scholarships
          </Link>
          <CommonLeadPopup
            buttonClassName="flex items-center justify-center gap-2 h-14 rounded-md font-medium transition-all  text-[14px] md:text-base leading-none tracking-wide relative overflow-hidden group px-6 bg-[#001732] text-white border-1 border-transparent hover:bg-[#001732] shadow-lg px-6 hover:bg-[#001732] mb-2.5"
            buttonText="Download Prospectus"
            redirectUrl={`https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/University_Prospectus_2025_26_05_Updated_4_1_4f9d19673e.pdf`}
            form_name="Download Prospectus"
          />
          <Link
            href="https://admissions.krmangalam.edu.in/?utm_source=website&utm_medium=Homepage&utm_campaign=journey-section&_gl=1*rfukfk*_ga*MTk4NDQwNDY4LjE3Nzc4NzU5MzU.*_ga_VJJK572TGN*czE3Nzc4NzU5MzUkbzEkZzEkdDE3Nzc4NzYwNDEkajYwJGwwJGgw"
            className="flex items-center justify-center gap-2 h-14 rounded-md font-medium transition-all  text-[14px] md:text-base leading-none tracking-wide relative overflow-hidden group px-6 bg-[#d03f46] text-white border-1 border-transparent hover:bg-[#d03f46] shadow-lg px-6 hover:bg-[#d03f30] mb-2.5"
            target="_blank"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
            Apply Now
          </Link>
        </div>

        {/* Mobile View - 2 Column Grid */}
        <div className="grid sm:hidden grid-cols-2 gap-3 px-2">
          <Link
            href="/admissions"
            className="bg-[#001732] text-white  font-semibold  px-4 py-2 rounded-sm text-center flex items-center justify-center text-sm h-14"
            target="_blank"
          >
            Admission
          </Link>
          <Link
            href="/fee-structure"
            className="bg-[#001732] text-white  font-semibold  px-4 py-2 rounded-sm text-center flex items-center justify-center text-sm h-14"
            target="_blank"
          >
            Fee Structure
          </Link>
          <Link
            href="/admission/scholarship"
            className="bg-[#001732] text-white  font-semibold  px-4 py-2 rounded-sm text-center flex items-center justify-center text-sm h-14"
            target="_blank"
          >
            Scholarships
          </Link>
          <CommonLeadPopup
            buttonClassName="bg-[#001732] text-white border font-semibold border-[#d8d8d8] px-4 py-2 rounded-sm w-full text-center flex items-center justify-center text-sm h-14"
            buttonText="Download Prospectus"
            redirectUrl={`https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/University_Prospectus_2025_26_05_Updated_4_1_4f9d19673e.pdf`}
            form_name="Download Prospectus"
          />
          <Link
            href="https://admissions.krmangalam.edu.in/?utm_source=website&utm_medium=Homepage&utm_campaign=journey-section"
            className="bg-[#e31e24] text-white border border-[#d8d8d8] px-6 py-2.5 rounded-sm font-semibold col-span-2 text-center flex items-center justify-center text-sm h-14"
            target="_blank"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default YourJourney2;
