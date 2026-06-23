"use client";

import { useState } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

type StudentCouncilMember = {
  id: number;
  name: string;
  role: string;
  image: string;
};

const StudentCouncil = () => {
  const data: StudentCouncilMember[] = [
    {
      id: 1,
      name: "Ishan Verma",
      role: "Event Coordinator",
      image: "/wp-content/coordinator/ishan.png",
    },

    {
      id: 2,
      name: "Somya Sharma",
      role: "Event Sub Coordinator",
      image: "/wp-content/coordinator/somya-sharma.png",
    },
    {
      id: 3,
      name: "Krish Agarwal",
      role: "Logistics & Operation Coordinator",
      image: "/wp-content/coordinator/krish.png",
    },
    {
      id: 4,
      name: "Anuj",
      role: "Logistics & Operation Coordinator",
      image: "/wp-content/coordinator/anuj.png",
    },
    {
      id: 5,
      name: "Raghav Sharma",
      role: "Club Coordinator",
      image: "/wp-content/coordinator/raghav-s.png",
    },
    {
      id: 6,
      name: "Yash Raj Jha",
      role: "Club Sub Coordinator",
      image: "/wp-content/coordinator/yashraj.png",
    },
    {
      id: 7,
      name: "Ayush Tyagi",
      role: "Club Sub Coordinator",
      image: "/wp-content/coordinator/ayush.png",
    },
    {
      id: 8,
      name: "Nirdesh Jain",
      role: "Cultural Coordinator",
      image: "/wp-content/coordinator/nirdesh.png",
    },
    {
      id: 9,
      name: "Naomi Yadav",
      role: "Cultural Sub Coordinator",
      image: "/wp-content/coordinator/naomi.png",
    },
    {
      id: 10,
      name: "Sahil Chauhan",
      role: "Sports Fitness Coordinator",
      image: "/wp-content/coordinator/sahil-chauhan.png",
    },
    {
      id: 11,
      name: "Aditya Ranjan Tiwari",
      role: "Sports fitness Sub Coordinator",
      image: "/wp-content/coordinator/Adityaranjan.png",
    },
    {
      id: 12,
      name: "Devraj Singh",
      role: "Social media Content Coordinator",
      image: "/wp-content/coordinator/devraj.png",
    },
    {
      id: 13,
      name: "Kanishk Gulati",
      role: "Social media Posting Coordinator",
      image: "/wp-content/coordinator/kanishk.png",
    },
    {
      id: 14,
      name: "Vedant srivastav",
      role: "Social media Design & Promotions Coordinator",
      image: "/wp-content/coordinator/vedant.png",
    },
    {
      id: 15,
      name: "Harshit Malik",
      role: "Social Media ORM & Promotions Coordinator",
      image: "/wp-content/coordinator/harshit.png",
    },
    {
      id: 16,
      name: "Srishti Sehgal",
      role: "Club event Content writer & Sponsorship coordinator",
      image: "/wp-content/coordinator/srishti.png",
    },
    {
      id: 17,
      name: "Ajith Reddy",
      role: "Public relations and outreach coordinator",
      image: "/wp-content/coordinator/ajith.png",
    },
    {
      id: 18,
      name: "Tanvee Vashisht",
      role: "Student Welfare Sub Coordinator",
      image: "/wp-content/coordinator/tanvee.png",
    },
    {
      id: 19,
      name: "Sakshi Dubey",
      role: "Social Outread & Extension activities (NSS Head)",
      image: "/wp-content/coordinator/sakshi.png",
    },
    {
      id: 20,
      name: "Amandeep Pradhan",
      role: "Social Media Video Editing Coordinator",
      image: "/wp-content/coordinator/amandeep.png",
    },
    // {
    //   id: 20,
    //   name: "Vidhi Kumari",
    //   role: "Support Team",
    //   image: "/wp-content/coordinator/vidhi.png",
    // },
  ];

  const INITIAL_COUNT = 5;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  return (
    <>
      <section className={` bg-[#F0F3F9] px-8 sm:px-8 md:px-12 py-12 md:py-12`}>
        <div className="mx-auto w-full max-w-[1500px]">
          <h2
            className={`${playfair.className} mb-8 text-center text-3xl font-bold text-[#0a1d3a] md:mb-10 md:text-4xl lg:text-[42px]`}
          >
            Student Council
          </h2>

          <div className="flex flex-col items-center gap-10 rounded-2xl border-4 border-white bg-[#EDF5FF] p-4 md:flex-row md:items-stretch md:gap-8 md:p-6 min-h-[350px]">
            <div className="w-full flex-shrink-0 overflow-hidden rounded-2xl md:w-[440px] lg:w-[650px]">
              <Image
                src="/student-welfare/council.jpeg"
                width={1000}
                height={1000}
                alt="K.R. Mangalam University Student Council"
                className=" h-full w-full object-fit"
              />
            </div>

            <p className="self-center text-justify text-sm leading-[1.85] font-medium text-[#0a1d3a]  md:text-[16px]">
              The K.R. Mangalam University Student Council serves as the
              representative body of the student community, acting as a vital
              link between students and the university administration. Working
              under the Department of Student Welfare (DSW) the Council
              advocates for student interests, addresses student concerns, and
              contributes to the development of a vibrant and inclusive campus
              environment. Through student engagement activities, the Council
              encourages active participation, leadership, teamwork, creativity,
              and democratic values. The Student Council strives to create a
              supportive, dynamic, and memorable university journey for all
              students.
            </p>
          </div>
        </div>
      </section>

      <section className={` bg-[#F0F3F9] px-8 pb-10  md:px-12`}>
        <div className="mx-auto w-full max-w-[1500px]">
          <h3
            className={`${playfair.className} mb-6 text-center text-[30px] font-bold leading-tight text-black md:text-[34px]`}
          >
            Student Council Members
          </h3>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {data.slice(0, visibleCount).map((member, index) => (
              <article
                key={`${member.name}-${member.role}`}
                className="flex min-h-[375px] flex-col items-center   rounded-xl bg-[#EDE3C7] px-5 pb-5 pt-4 text-center"
              >
                <div
                  className={`relative mb-4 h-[235px] w-full overflow-hidden rounded-lg   bg-white  shadow-[0_16px_35px_rgba(15,23,42,0.08)]`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover  "
                    priority={index < 5}
                  />
                </div>
                <h4
                  className={`${playfair.className} text-[18px] font-bold leading-tight text-black`}
                >
                  {member.name}
                </h4>
                <p className="mt-1 text-[18px] leading-tight text-black">
                  {member.role}
                </p>
              </article>
            ))}
          </div>

          {visibleCount < data.length && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setVisibleCount(data.length)}
                className="px-6 py-2 rounded-md bg-[#051730] text-white hover:bg-gray-800 transition cursor-pointer"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      <section className={` bg-[#F0F3F9] px-8 sm:px-8 md:px-12 pb-12`}>
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="flex flex-col items-center gap-10 rounded-2xl border-4 border-white bg-[#DAE9FF] p-4 md:flex-row md:items-stretch md:gap-8 md:p-8 min-h-[350px]">
            <div className="w-full flex-shrink-0 overflow-hidden rounded-4xl md:w-[440px]  lg:w-[460px]">
              <Image
                src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/image_608_0f98d1ae42.jpg"
                width={1000}
                height={1000}
                alt="K.R. Mangalam University Student Council"
                className=" h-full w-full object-fit"
              />
            </div>
            <div>
              <h2
                className={`${playfair.className}  text-3xl font-bold text-[#004865] mb-4 md:text-4xl lg:text-[42px]`}
              >
                Best Student Council Member
              </h2>

              <p className=" text-justify text-sm leading-[1.85] font-medium text-[#000000]  md:text-[16px]">
                Being recognized as the Best Student Council Member is truly an
                honor and a moment of immense gratitude. This achievement is not
                just mine, but a reflection of the constant support, guidance,
                and teamwork shared by my fellow council members and the
                Department of Student Welfare. <br className="mb-4" />
                My journey in the Student Council has been a learning experience
                filled with opportunities to lead, collaborate, and contribute
                meaningfully to the student community. It has helped me grow
                both personally and professionally, shaping my perspective and
                strengthening my sense of responsibility.{" "}
                <br className="mb-4" /> I am sincerely thankful for the trust
                placed in me, and I remain committed to continuing my efforts
                towards creating a more engaging, inclusive, and vibrant campus
                environment.
              </p>
              <p className=" text-justify text-sm leading-[1.85] font-bold mt-4 text-[#000000]  md:text-[16px]">
                Nirdesh Jain,
              </p>
              <span className=" text-justify text-sm leading-[1.85]  text-[#000000]  md:text-[16px]">
                Cultural Coordinator
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentCouncil;
