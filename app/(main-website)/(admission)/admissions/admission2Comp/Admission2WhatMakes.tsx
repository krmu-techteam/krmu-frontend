import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Admission2WhatMakes = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-[600px] mx-auto w-full">
        <h3 className="mb-5 text-3xl md:text-[40px] font-semibold text-[#0a41a1] text-center leading-[1.2]">
          What Makes K.R. Mangalam <br />
          <span className="text-[#e61f21]">University The Best?</span>
        </h3>
        <p className="font-semibold text-center">
          K.R. Mangalam University has established itself as the pinnacle of
          excellence fostering innovation and personal growth in students. By
          offering a learning environment that nurtures creativity, leadership,
          critical thinking, and other valuable skills essential to excel in
          this ever-evolving world.
        </p>
      </div>

      <div className="max-w-[1320px] mx-auto w-full mt-5 hidden lg:flex  gap-6">
        <div className="lg:w-1/2">
          <div className="custom-card mb-3">
            <Image
              src="/admission2/sai.png"
              width={90}
              height={120}
              alt="Image"
            />
            <div className="card-text">
              <h5 className="card-title">State of the Art Infrastructure</h5>
              <p className="card-desc">
                Modern Labs ,Well-Equipped Library ,Smart Classrooms , 35+ Acres
                of Lush Green Campus ,Artistic &amp; Modern Infrastructure
              </p>
            </div>
          </div>
          <div className="custom-card mb-3">
            <Image
              src="/admission2/ma.png"
              width={90}
              height={120}
              alt="Image"
            />
            <div className="card-text">
              <h5 className="card-title">Multidisciplinary Approach </h5>
              <p className="card-desc">
                Specially Curated Programmes for Holistic Learning ,Theory
                Blended with Practical Learning ,Experienced Mentors ,Industry
                Relevant Curriculum
              </p>
            </div>
          </div>
          <div className="custom-card mb-3">
            <Image
              src="/wp-content/images/pc-support.png"
              width={90}
              height={120}
              alt="Image"
            />
            <div className="card-text">
              <h5 className="card-title">Placements and Career Support </h5>
              <p className="card-desc">
                Over 800 On-Campus Recruiters ,100% Placement Assistance
                ,Placement Interview Training ,Internship Opportunities
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="custom-card mb-3">
            <Image
              src="/admission2/gep.png"
              width={90}
              height={120}
              alt="Image"
            />
            <div className="card-text">
              <h5 className="card-title">Global Exposure and Partnerships </h5>
              <p className="card-desc">
                Collaboration with Esteemed Learning Partners ,Partnership with
                International Universities ,International Study Tours ,Seminars
                and Workshops with International Speakers
              </p>
            </div>
          </div>
          <div className="custom-card mb-3">
            <Image
              src="/admission2/cl.png"
              width={90}
              height={120}
              alt="Image"
            />
            <div className="card-text">
              <h5 className="card-title">Campus Life </h5>
              <p className="card-desc">
                A sprawling, eco-friendly campus inspiring creativity,
                State-of-the-art sports facilities, fitness centres, and
                recreational zones, On-campus dining options with a variety of
                cuisines to suit every taste
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center p-12">
            <Link
              href="/campus-life/virtual-tour"
              target="_blank" rel="noopener noreferrer"
              className="common-btn-1"
            >
              Explore our Campus <ArrowRight color="#fff" />
            </Link>
          </div>
        </div>
      </div>
      {/* <div>

      </div> */}
    </section>
  );
};

export default Admission2WhatMakes;
