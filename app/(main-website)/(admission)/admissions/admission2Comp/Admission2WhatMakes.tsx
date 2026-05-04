import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Admission2WhatMakes = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-[1440px] mx-auto w-full px-48">
        <h3 className="mb-5 text-3xl md:text-[40px] font-bold text-black text-center leading-[1.2]">
          What Makes K.R. Mangalam <br /> University The Best?
          
        </h3>
        <p className="font-medium text-center text-gray-600">
          K.R. Mangalam University has established itself as the pinnacle of
          excellence fostering innovation and personal growth in students. By
          offering a learning environment that nurtures creativity, leadership,
          critical thinking, and other valuable skills essential to excel in
          this ever-evolving world.
        </p>
      </div>

      <div className="max-w-[1320px] mx-auto w-full mt-10 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 px-4">
        {/* Card 1 */}
        <div className="flex items-center gap-4 bg-white rounded-sm border border-gray-100 overflow-hidden shadow-none hover:shadow-lg hover:-translate-y-0.5 hover:border-[#0060aa]/20 transition-all duration-300">
          <div className="relative w-[110px] h-[140px] flex-shrink-0 overflow-hidden">
            <Image
              src="/admission2/sai.png"
              fill
              className="object-contain"
              alt="Infrastructure"
            />
          </div>
          <div className="flex-1 p-4">
            <h5 className="text-xl font-bold text-[#0060aa] mb-1">State of the Art Infrastructure</h5>
            <p className="text-sm text-gray-600 leading-snug">
              Modern Labs, Well-Equipped Library, Smart Classrooms, 35+ Acres
              of Lush Green Campus, Artistic & Modern Infrastructure
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center gap-4 bg-white rounded-sm border border-gray-100 overflow-hidden shadow-none hover:shadow-lg hover:-translate-y-0.5 hover:border-[#0060aa]/20 transition-all duration-300">
          <div className="relative w-[110px] h-[140px] flex-shrink-0 overflow-hidden">
            <Image
              src="/admission2/gep.png"
              fill
              className="object-contain"
              alt="Global Exposure"
            />
          </div>
          <div className="flex-1 p-4">
            <h5 className="text-xl font-bold text-[#0060aa] mb-1">Global Exposure and Partnerships</h5>
            <p className="text-sm text-gray-600 leading-snug">
              Collaboration with Esteemed Learning Partners, Partnership with
              International Universities, International Study Tours, Seminars
              and Workshops with International Speakers
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center gap-4 bg-white rounded-sm border border-gray-100 overflow-hidden shadow-none hover:shadow-lg hover:-translate-y-0.5 hover:border-[#0060aa]/20 transition-all duration-300">
          <div className="relative w-[110px] h-[140px] flex-shrink-0 overflow-hidden">
            <Image
              src="/admission2/ma.png"
              fill
              className="object-contain"
              alt="Approach"
            />
          </div>
          <div className="flex-1 p-4">
            <h5 className="text-xl font-bold text-[#0060aa] mb-1">Multidisciplinary Approach</h5>
            <p className="text-sm text-gray-600 leading-snug">
              Specially Curated Programmes for Holistic Learning, Theory
              Blended with Practical Learning, Experienced Mentors, Industry
              Relevant Curriculum
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-center gap-4 bg-white rounded-sm border border-gray-100 overflow-hidden shadow-none hover:shadow-lg hover:-translate-y-0.5 hover:border-[#0060aa]/20 transition-all duration-300">
          <div className="relative w-[110px] h-[140px] flex-shrink-0 overflow-hidden">
            <Image
              src="/admission2/cl.png"
              fill
              className="object-contain"
              alt="Campus Life"
            />
          </div>
          <div className="flex-1 p-4">
            <h5 className="text-xl font-bold text-[#0060aa] mb-1">Campus Life</h5>
            <p className="text-sm text-gray-600 leading-snug">
              A sprawling, eco-friendly campus inspiring creativity,
              State-of-the-art sports facilities, fitness centres, and
              recreational zones, On-campus dining options with a variety of
              cuisines to suit every taste
            </p>
          </div>
        </div>

        {/* Card 5 - Centered */}
        <div className="lg:col-span-2 flex justify-center mt-2">
          <div className="flex items-center gap-4 bg-white rounded-sm border border-gray-100 overflow-hidden max-w-2xl w-full shadow-none hover:shadow-lg hover:-translate-y-0.5 hover:border-[#0060aa]/20 transition-all duration-300">
            <div className="relative w-[110px] h-[140px] flex-shrink-0 overflow-hidden">
              <Image
                src="/wp-content/images/pc-support.png"
                fill
                className="object-contain"
                alt="Placements"
              />
            </div>
            <div className="flex-1 p-4">
              <h5 className="text-xl font-bold text-[#0060aa] mb-1">Placements and Career Support</h5>
              <p className="text-sm text-gray-600 leading-snug">
                Over 800 On-Campus Recruiters, 100% Placement Assistance,
                Placement Interview Training, Internship Opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Centered Button */}
        <div className="lg:col-span-2 flex items-center justify-center pt-8">
          <Link
            href="/campus-life/virtual-tour"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-[#0060aa] text-white px-8 py-3 rounded-full font-medium border border-transparent hover:bg-white hover:text-[#0060aa] hover:border-[#0060aa] transition-all duration-300 shadow-md hover:shadow-xl active:scale-95"
          >
            Explore our Campus <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      {/* <div>

      </div> */}
    </section>
  );
};

export default Admission2WhatMakes;
