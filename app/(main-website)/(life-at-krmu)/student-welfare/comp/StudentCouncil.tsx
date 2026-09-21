"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Playfair_Display, Poppins } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

type StudentCouncilMember = {
  id: number;
  alt: string;
  name: string;
  role: string;
  image: string;
};

const StudentCouncil = () => {
  const data: StudentCouncilMember[] = [
    {
      id: 1,
      name: "Yash Raj Jha",
      alt: "Yash Raj Jha, Club Sub Coordinator, KRMU Student Council",
      role: "Club Sub Coordinator",
      image: "/wp-content/coordinator/yashraj.png",
    },
    {
      id: 2,
      name: "Srishti Sehgal",
      alt: "Srishti Sehgal, Club Event Content Writer & Sponsorship Coordinator, KRMU Student Council",
      role: "Club Event Content Writer & Sponsorship coordinator",
      image: "/wp-content/coordinator/srishti.png",
    },
    {
      id: 3,
      name: "Krish Agarwal",
      alt: "Krish Agarwal, Logistics & Operations Coordinator, KRMU Student Council",
      role: "Logistics & Operation Coordinator",
      image: "/wp-content/coordinator/krish.png",
    },
    {
      id: 4,
      name: "Tanvee Vashisht",
      alt: "Tanvee Vashisht, Student Welfare Sub Coordinator, KRMU Student Council",
      role: "Student Welfare Sub Coordinator",
      image: "/wp-content/coordinator/tanvee.png",
    },
    {
      id: 5,
      name: "Harshit Malik",
      alt: "Harshit Malik, Social Media ORM & Promotions Coordinator, KRMU Student Council",
      role: "Social Media ORM & Promotions Coordinator",
      image: "/wp-content/coordinator/harshit.png",
    },

    {
      id: 6,
      name: "Ishan Verma",
      alt: "Ishan Verma, Event Coordinator, KRMU Student Council",
      role: "Event Coordinator",
      image: "/wp-content/coordinator/ishan.png",
    },
    {
      id: 7,
      name: "Ayush Tyagi",
      alt: "Ayush Tyagi, Club Sub Coordinator, KRMU Student Council",
      role: "Club Sub Coordinator",
      image: "/wp-content/coordinator/ayush.png",
    },
    {
      id: 8,
      name: "Nirdesh Jain",
      alt: "Nirdesh Jain, Cultural Coordinator, KRMU Student Council",
      role: "Cultural Coordinator",
      image: "/wp-content/coordinator/nirdesh.png",
    },
    {
      id: 9,
      name: "Naomi Yadav",
      alt: "Naomi Yadav, Cultural Sub Coordinator, KRMU Student Council",
      role: "Cultural Sub Coordinator",
      image: "/wp-content/coordinator/naomi.png",
    },
    {
      id: 10,
      name: "Sahil Chauhan",
      alt: "Sahil Chauhan, Sports Fitness Coordinator, KRMU Student Council",
      role: "Sports Fitness Coordinator",
      image: "/wp-content/coordinator/sahil-chauhan.png",
    },
    {
      id: 11,
      name: "Aditya Ranjan Tiwari",
      alt: "Aditya Ranjan Tiwari, Sports Fitness Sub Coordinator, KRMU Student Council",
      role: "Sports Fitness Sub Coordinator",
      image: "/wp-content/coordinator/Adityaranjan.png",
    },
    {
      id: 12,
      name: "Devraj Singh",
      alt: "Devraj Singh, Social Media Content Coordinator, KRMU Student Council",
      role: "Social Media Content Coordinator",
      image: "/wp-content/coordinator/devraj.png",
    },
    {
      id: 13,
      name: "Kanishk Gulati",
      role: "Social Media Posting Coordinator",
      alt: "Kanishk Gulati, Social Media Posting Coordinator, KRMU Student Council",
      image: "/wp-content/coordinator/kanishk.png",
    },
    {
      id: 14,
      name: "Vedant srivastav",
      role: "Social Media Design & Promotions Coordinator",
      alt: "Vedant Srivastav, Social Media Design & Promotions Coordinator, KRMU Student Council",
      image: "/wp-content/coordinator/vedant.png",
    },
    {
      id: 15,
      name: "Raghav Sharma",
      alt: "Raghav Sharma, Club Coordinator, KRMU Student Council",
      role: "Club Coordinator",
      image: "/wp-content/coordinator/raghav-s.png",
    },
    {
      id: 16,
      name: "Somya Sharma",
      role: "Event Sub Coordinator",
      alt: "Somya Sharma, Event Sub Coordinator, KRMU Student Council",
      image: "/wp-content/coordinator/somya-sharma.png",
    },
    {
      id: 17,
      name: "Ajith Reddy",
      role: "Public Relations and Outreach Coordinator",
      alt: "Ajith Reddy, Public Relations and Outreach Coordinator, KRMU Student Council",
      image: "/wp-content/coordinator/ajith.png",
    },
    {
      id: 18,
      name: "Anuj",
      alt: "Anuj, Logistics & Operation Coordinator, KRMU Student Council",
      role: "Logistics & Operation Coordinator",
      image: "/wp-content/coordinator/anuj.png",
    },
    {
      id: 19,
      name: "Sakshi Dubey",
      alt: "Sakshi Dubey, Social Outreach & Extension Activities Coordinator (NSS Head), KRMU Student Council",
      role: "Social Outread & Extension Activities (NSS Head)",
      image: "/wp-content/coordinator/sakshi.png",
    },
    {
      id: 20,
      name: "Amandeep Pradhan",
      alt: "Amandeep Pradhan, Social Media Video Editing Coordinator, KRMU Student Council",
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

  const getCount = () => {
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth === 1024) return 3;
    if (window.innerWidth <= 1600) return 4;

    return 5;
  };

  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getCount());
    };

    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="bg-[#F0F3F9] px-4 sm:px-6 md:px-12 py-12">
        <div className="mx-auto w-full max-w-[1550px]">
          <h2
            className={`${playfair.className} mb-8 text-center text-3xl font-bold  md:mb-10 md:text-4xl lg:text-[49px]`}
          >
            Student Council
          </h2>

          <div className="flex flex-col xl:flex-row items-center gap-6 rounded-2xl border-4 border-white bg-[#EDF5FF] px-4 md:gap-10 md:px-8 py-4 sm:py-12  shadow-sm">
            <div className="w-full flex-shrink-0 overflow-hidden rounded-3xl h-[150px] sm:h-[300px] md:h-auto md:w-full lg:w-full xl:w-[48%]">
              <Image
                src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/image_613_b9d03772ce.jpg"
                width={1440}
                height={1440}
                alt="K.R. Mangalam University Student Council members at a campus event"
                className="h-full w-full object-cover"
              />
            </div>

            <p
              className={`${poppins.className} self-center text-justify text-sm leading-[160%]   font-normal text-[#0a1d3a] md:text-[21px]`}
            >
              The K.R. Mangalam University Student Council serves as the
              representative body of the student community, acting as a vital
              link between students and the university administration. Working
              under the Department of Student Welfare, the Council advocates for
              student interests, addresses student concerns, and contributes to
              the development of a vibrant and inclusive campus environment.
              Through student engagement activities, the Council encourages
              active participation, leadership, teamwork, creativity, and
              democratic values. The Student Council strives to create a
              supportive, dynamic, and memorable university journey for all
              students.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F0F3F9] px-4 sm:px-6 md:px-12 pb-12">
        <div className="mx-auto w-full max-w-[1550px]">
          <h3
            className={`${playfair.className} mb-6 text-center text-[30px] font-bold leading-tight text-black md:text-[49px]`}
          >
            Student Council Members
          </h3>

          <div className="flex flex-wrap gap-6 justify-center">
            {data.slice(0, visibleCount).map((member, index) => (
              <article
                key={`${member.name}-${member.role}`}
                className="flex h-[390px] w-[300px] sm:w-[280px] lg:w-[280px] flex-col items-center   rounded-xl bg-[#EDE3C7] px-5 pb-5 pt-4 text-center mx-auto sm:mx-0"
              >
                <div
                  className={`relative mb-4 h-[270px] md:min-h-[270px] lg:max-h-[246px] w-[270px] sm:w-[240px] lg:w-[240px] overflow-hidden rounded-lg   bg-white  shadow-[0_16px_35px_rgba(15,23,42,0.08)]`}
                >
                  <Image
                    src={member.image}
                    alt={member.alt}
                    width={1024}
                    height={1024}
                    className="object-cover w-full h-full  "
                    priority={index < 5}
                  />
                </div>
                <h4
                  className={`${playfair.className} text-[20px] font-bold leading-tight text-black`}
                >
                  {member.name}
                </h4>
                <p
                  className={`${poppins.className} mt-1 text-sm sm:text-[15px]  text-black`}
                >
                  {member.role}
                </p>
              </article>
            ))}
          </div>

          {visibleCount < data.length && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setVisibleCount(data.length)}
                className={`${poppins.className} px-6 py-2.5 rounded-[10px] bg-white border-2 border-[#727272] text-black hover:bg-gray-100 active:scale-95 transition cursor-pointer font-normal text-[16px]`}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#F0F3F9] px-4 sm:px-6 md:px-12 pb-12">
        <div className="mx-auto w-full max-w-[1550px]">
          <div className="flex flex-col xl:flex-row items-center gap-8 rounded-2xl border-4 border-white bg-[#DAE9FF] p-4  xl:gap-12 xl:p-12 shadow-sm">
            <div className=" flex-shrink-0 overflow-hidden rounded-3xl h-fit md:h-auto w-full sm:w-[440px]">
              <Image
                src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Nirdesh_babea75dd1.png"
                width={1024}
                height={1024}
                alt="Nirdesh Jain, Cultural Coordinator, Best Student Council Member, KRMU"
                className="h-full w-full object-contain sm:object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2
                className={`${playfair.className} text-3xl font-bold text-[#004865] mb-4 md:text-4xl lg:text-[49px]`}
              >
                Best Student Council Member
              </h2>
              <div className={`${poppins.className}`}>
                <p className="text-justify text-sm leading-[1.85] font-normal text-[#000000] md:text-[18px]">
                  Being recognised as the Best Student Council Member is truly
                  an honour and a moment of immense gratitude. This achievement
                  is not just mine but a reflection of the constant support,
                  guidance, and teamwork shared by my fellow council members and
                  the Department of Student Welfare.
                </p>
                <br />
                <p className="text-justify text-sm leading-[1.85] font-normal text-[#000000] md:text-[18px]">
                  My journey in the Student Council has been a learning
                  experience filled with opportunities to lead, collaborate, and
                  contribute meaningfully to the student community. It has
                  helped me grow both personally and professionally, shaping my
                  perspective and strengthening my sense of responsibility.
                </p>
                <br />
                <p className="text-justify text-sm leading-[1.85] font-normal text-[#000000] md:text-[18px]">
                  I am sincerely thankful for the trust placed in me, and I
                  remain committed to continuing my efforts towards creating a
                  more engaging, inclusive, and vibrant campus environment.
                </p>
                <p className="text-justify text-sm leading-[1.85] font-bold mt-4 text-[#000000] md:text-[18px]">
                  Nirdesh Jain
                </p>
                <span className="text-justify text-sm leading-[1.85] text-[#000000] md:text-[18px]">
                  Cultural Coordinator
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentCouncil;
