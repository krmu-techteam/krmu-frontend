"use client";
import Image from "next/image";
import React, { useState } from "react";

const ReadMoreText = ({ text, limit = 150 }: { text: string; limit?: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= limit) return <p className="leading-relaxed text-gray-700 text-lg">{text}</p>;

  return (
    <div>
      <p className="leading-relaxed text-gray-700 text-lg">
        {isExpanded ? text : `${text.slice(0, limit)}...`}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-[#051630]/80 font-semibold mt-2 text-sm hover:text-[#051630] transition-colors cursor-pointer"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

const AchievementReadMore = ({ text, limit = 120 }: { text: string; limit?: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= limit) return <p className="text-gray-600 leading-relaxed text-[15px]">{text}</p>;

  return (
    <div>
      <p className="text-gray-600 leading-relaxed text-[15px]">
        {isExpanded ? text : `${text.slice(0, limit)}...`}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-[#051630]/80 font-semibold mt-2 text-sm hover:text-[#051630] transition-colors cursor-pointer"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

const SportEventsAndTournament = () => {
  return (
    <section className="py-8 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h4 className="text-3xl md:text-5xl font-bold text-[#051630] mb-6">
            Events and Tournaments
          </h4>
          <p className="text-lg text-gray-600 leading-relaxed max-w-5xl mx-auto">
            The success of KRMU students extends far beyond the confines of
            their own campus. They have made their mark in various National,
            State, and Inter-University sports events, consistently bringing
            home accolades and recognition. This speaks volumes about the
            dedication and skill of the university’s athletes, as well as the
            support and encouragement provided by the institution itself.
            Participation in sports offers numerous benefits beyond physical
            fitness. It instills values such as teamwork, discipline,
            resilience, and sportsmanship, all of which are integral to personal
            and professional success.
          </p>
        </div>

        {/* Major Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-16">
          <div className="group flex flex-col rounded-[2px] overflow-hidden border border-gray-100 bg-gradient-to-b from-gray-50 via-blue-50/20 to-gray-50 transition-all duration-500">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <Image
                src="/life-at-krmu/img-5.webp"
                fill
                alt=""
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <ReadMoreText 
                text="An annual highlight on the university is “ZEST” Inter-University sports event. This eagerly anticipated competition attracts more than 800 participants from 20 different universities and colleges. The diverse array of sports offered, including Football, Basketball, Table Tennis (Singles and Doubles), Badminton (Men and Women), and Chess, ensures there’s something for every sports enthusiast. ZEST serves not only as a platform for healthy competition but also as a celebration of camaraderie and skill development among students from various academic institutions."
                limit={220}
              />
            </div>
          </div>

          <div className="group flex flex-col rounded-[2px] overflow-hidden border border-gray-100 bg-gradient-to-b from-gray-50 via-blue-50/20 to-gray-50 transition-all duration-500">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <Image
                src="/life-at-krmu/img-6.webp"
                fill
                alt=""
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <ReadMoreText 
                text="K.R. Mangalam University goes beyond intercolljegiate sports events with its own internal competition, “SPORTURA.” Exclusive to KRMU students, SPORTURA is a vibrant Inter-School sports event that annually attracts over 1000 participants from a wide range of schools. Here, students have the opportunity to showcase their sporting prowess in Cricket, Football, Basketball, Volleyball, Tennis, Badminton, Chess etc. SPORTURA serves as a testament to the university’s commitment to providing avenues for students to excel not just academically but also athletically"
                limit={220}
              />
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="flex flex-col rounded-[2px] overflow-hidden border border-gray-100 bg-gradient-to-b from-gray-50 via-blue-50/20 to-gray-50 transition-all duration-500">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/life-at-krmu/img-7.webp"
                fill
                alt=""
                className="object-cover object-top"
              />
            </div>
            <div className="p-7 flex flex-col flex-grow">
              <AchievementReadMore 
                text="K.R. Mangalam University takes immense pride in celebrating the outstanding achievements of our students at the DPG Inter-University Sports Meet. Competing with exceptional skill and unwavering spirit, our teams showcased true determination and sportsmanship.Our Volleyball Team secured 1st Position, Football Team secured 1st Position and Cricket Team secured 2nd Position. These accolades are a testament to the hard work, discipline, and team spirit of our talented players who have once again proven their excellence on the field. We extend our heartfelt appreciation to all the players, coaches, and mentors whose continuous guidance and dedication made this success possible. Their collective efforts not only brought laurels to the university but also strengthened the spirit of teamwork and resilience."
                limit={180}
              />
            </div>
          </div>

          <div className="flex flex-col rounded-[2px] overflow-hidden border border-gray-100 bg-gradient-to-b from-gray-50 via-blue-50/20 to-gray-50 transition-all duration-500">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/life-at-krmu/img-8.webp"
                fill
                alt=""
                className="object-cover object-top"
              />
            </div>
            <div className="p-7 flex flex-col flex-grow">
              <AchievementReadMore 
                text="We are thrilled to share the outstanding performance of our students at the Inter-University Sports Meet hosted by Aravali College of Engineering and Management. With passion, grit, and determination, our players delivered remarkable results in Carrom by securing 2nd Position, Table Tennis – 2nd & 3rd Position, Football – 3rd Position, 400m Men’s Single – 3rd Position, 400m Men’s Relay – 3rd Position."
                limit={150}
              />
            </div>
          </div>

          <div className="flex flex-col rounded-[2px] overflow-hidden border border-gray-100 bg-gradient-to-b from-gray-50 via-blue-50/20 to-gray-50 transition-all duration-500">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/life-at-krmu/img-9.webp"
                fill
                alt=""
                className="object-cover object-top"
              />
            </div>
            <div className="p-7 flex flex-col flex-grow">
              <AchievementReadMore 
                text="We are proud to announce that Vaibhav Joshi, a student of K.R. Mangalam University, has secured the Gold Medal in the 62 kg Men’s Powerlifting category at the prestigious event held at NIIT College, Neemrana, Rajasthan."
                limit={150}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportEventsAndTournament;
