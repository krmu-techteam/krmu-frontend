import Link from "next/link";
import HomeYourJourneyForm from "../../components/Forms/HomeYourJourneyForm";
import Image from "next/image";

const YourJourney2 = () => {
  return (
    <section className="pb-10 xl:pb-20 sm:px-5 xl:px-0">
      <div className="xl:max-w-7xl 2xl:max-w-[1664px] mx-auto w-full bg-gray-50 px-5 xl:px-0 py-10">
        <div className="max-w-7xl mx-auto w-full text-center">
          <p className="font-semibold">Elevate Your Campus Life</p>
          <h4 className="text-2xl md:text-4xl lg:text-5xl font-semibold my-5">Your Journey to Excellence Begins Here</h4>
          <p className="mb-5 max-w-5xl mx-auto text-lg">
            Our multidisciplinary approach to education ensures students receive
            a well-rounded experience, blending theoretical knowledge with
            real-world applications. As the leading university in Gurugram, we
            commit to providing students with the necessary skills and knowledge
            to thrive in the ever-changing world.
          </p>
           <HomeYourJourneyForm />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 py-5 xl:p-10 test">
          <div className="w-full h-full bg-gray-500 min-h-[300px] relative overflow-hidden rounded-xl">
            <Image src="/wp-content/home2/journey/1.jpg" fill alt="Journey 1" className="z-10 object-cover" />
          </div>
          <div className="w-full h-full bg-gray-500 min-h-[300px] relative overflow-hidden rounded-xl">
             <Image src="/wp-content/home2/journey/2.jpg" fill alt="Journey 2" className="z-10 object-cover" />
          </div>
          <div className="w-full h-full bg-gray-500 min-h-[300px] relative overflow-hidden rounded-xl hidden xl:block">
             <Image src="/wp-content/home2/journey/3.jpg" fill alt="Journey 3" className="z-10 object-cover" />
          </div>
        </div>
        <div className="flex justify-center gap-5 flex-wrap">
          <Link href="#" className="bg-white text-black border font-semibold border-[#d8d8d8] px-6 py-2 rounded-sm hover:bg-[#0c59a0] hover:text-white">Admission</Link>
          <Link href="#" className="bg-white text-black border font-semibold border-[#d8d8d8] px-6 py-2 rounded-sm hover:bg-[#0c59a0] hover:text-white">Fee Structure</Link>
          <Link href="#" className="bg-white text-black border font-semibold border-[#d8d8d8] px-6 py-2 rounded-sm hover:bg-[#0c59a0] hover:text-white">Scholarships</Link>
          <Link href="#" className="bg-white text-black border font-semibold border-[#d8d8d8] px-6 py-2 rounded-sm hover:bg-[#0c59a0] hover:text-white">Download Prospectus</Link>
          <Link href="#" className="bg-[#e31e24] text-white border border-[#d8d8d8] px-6 py-2 rounded-sm font-semibold">Apply Now</Link>
        </div>
      </div>
    </section>
  );
};

export default YourJourney2;
