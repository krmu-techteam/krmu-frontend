"use client";

import { useState } from "react";
import Image from "next/image";

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

  const INITIAL_COUNT = 4;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="mb-10 text-4xl font-semibold text-center">
          Student Council
        </h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {data.slice(0, visibleCount).map((member) => (
            <div
              key={member.id}
              className="w-full flex flex-col justify-center items-center stu_coun text-center"
            >
              <Image
                src={member.image}
                width={150}
                height={150}
                className="mb-2.5 object-cover"
                alt={member.name}
              />
              <span className="font-semibold text-sm sm:text-xl">{member.name}</span>
              <span className="text-xs sm:text-sm">{member.role}</span>
            </div>
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
  );
};

export default StudentCouncil;
