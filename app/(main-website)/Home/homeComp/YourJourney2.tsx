import Link from "next/link";
import HomeYourJourneyForm from "../../components/Forms/HomeYourJourneyForm";

const YourJourney2 = () => {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="max-w-[1664px] mx-auto w-full bg-[#f8f8f8] py-5">
        <div className="max-w-7xl mx-auto w-full text-center">
          <p className="font-semibold">Elevate Your Campus Life</p>
          <h4 className="text-2xl md:text-4xl lg:text-6xl font-semibold my-5">Your Journey to Excellence Begins Here</h4>
          <p className="mb-5">
            Our multidisciplinary approach to education ensures students receive
            a well-rounded experience, blending theoretical knowledge with
            real-world applications. As the leading university in Gurugram, we
            commit to providing students with the necessary skills and knowledge
            to thrive in the ever-changing world.
          </p>
           <HomeYourJourneyForm />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-5">
          <div className="w-full h-full bg-gray-500 min-h-[400px]"></div>
          <div className="w-full h-full bg-gray-500 min-h-[400px]"></div>
          <div className="w-full h-full bg-gray-500 min-h-[400px]"></div>
        </div>
        <div className="flex justify-center gap-5 flex-wrap mt-10">
          <Link href="#" className="bg-white text-black border border-[#d8d8d8] px-6 py-3 rounded-sm hover:bg-[#e31e24] hover:text-white">Admission</Link>
          <Link href="#" className="bg-white text-black border border-[#d8d8d8] px-6 py-3 rounded-sm hover:bg-[#e31e24] hover:text-white">Fee Structure</Link>
          <Link href="#" className="bg-white text-black border border-[#d8d8d8] px-6 py-3 rounded-sm hover:bg-[#e31e24] hover:text-white">Scholarships</Link>
          <Link href="#" className="bg-white text-black border border-[#d8d8d8] px-6 py-3 rounded-sm hover:bg-[#e31e24] hover:text-white">Download Prospectus</Link>
          <Link href="#" className="bg-white text-black border border-[#d8d8d8] px-6 py-3 rounded-sm hover:bg-[#e31e24] hover:text-white">Apply Now</Link>
        </div>
      </div>
    </section>
  );
};

export default YourJourney2;
