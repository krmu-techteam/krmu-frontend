"use client";

import { CircleArrowRight } from "lucide-react";

const missionPoints = [
  "Foster employability and entrepreneurship through futuristic curriculum and progressive pedagogy with cutting-edge technology",

  "Integrate global needs and expectations through collaborative programmes with premier universities, research centres, industries, and professional bodies",

  "Instil notion of lifelong learning through stimulating research, Outcomes-based education, and innovative thinking",

  "Enhance leadership qualities among the youth having understanding of ethical values and environmental realities",
];

const MissionGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-14 gap-y-5">
      {missionPoints.map((item, index) => (
        <div key={index} className="group flex items-start gap-4">
          <div className="flex text-[#007DE3] items-center justify-center mt-1">
            <CircleArrowRight size={24} />
          </div>
          <p className="text-white/90 text-[16px] text-left font-poppins leading-[1.6]">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MissionGrid;
