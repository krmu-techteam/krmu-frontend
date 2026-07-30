"use client";

import React, { useState } from "react";
import Image from "next/image";

const SdgCertificateOverview: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 w-full">
      {/* Left Column: Certificate Image */}
      <div className="relative w-[283px] h-[403px] shrink-0 mx-auto lg:mx-0">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/images/sustainability/certificate.jpg"
            alt="Overall Sustainability Impact Rating Certificate"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Right Column: Paragraph Text */}
      <div className="flex-1 space-y-3 text-white text-sm sm:text-[16px] leading-relaxed text-justify font-light">
        <p>
          The United Nations’ Sustainable Development Goals (SDGs) are a
          framework for ensuring a sustainable future. The 17 Goals provide a
          blueprint for addressing diverse global challenges such as poverty,
          gender discrimination, quality education, lack of infrastructure,
          climate change, access to justice, and partnerships goals, among
          others. The aim of the SDGs is to collaborate and mobilise efforts
          towards these challenges, and, as an establishment of higher education
          institution, K.R. Mangalam University is committed to the
          accomplishment of the target through effective teaching and
          collaborative learning. Cultivating the principle of ‘Lets Rise
          Together, the initiatives of this establishment is important to
          achieve the Sustainable Development Goals as they function as
          incubators of recent concepts and solutions to problems, we have a
          tendency to face together. As an institution we are committed to the
          promotion of knowledge society, we have engaged with all the “17
          Goals” in varied capacities of understanding and knowledge
          translation.
        </p>

        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isExpanded
              ? "grid-rows-[1fr] opacity-100 mt-5"
              : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <p>
              K.R. Mangalam University proactively encourages scientific
              attitude, curiosity and entrepreneurial zeal in its students, so
              that they become capable of coming up with creative ideas on how
              to solve the problem of sustainable development. Interdisciplinary
              learning and problem-solving inspire students to respond to both
              global and local issues in a creative and responsible manner. This
              will not only help in building strong academic backgrounds, but it
              will also help in building future ready leaders who can transform
              the society. The university fosters teamwork, in which
              researchers, educators and students collaborate closely with
              citizens, partners in industry and government. Through such
              associations, knowledge can be co-created and effective solutions
              can be developed to solve acute problems. This concerted effort
              elevates the university to become a force behind the Sustainable
              Development Goals (SDGs) because education, research, and
              innovation remain connected to the needs of the world. In order to
              reinforce this, K.R. Mangalam University has integrated the SDGs
              on the governance, pedagogical and research approaches of the
              University. The management of sustainability on campus is
              considered as one of the priorities, and the university is
              considered as a socially responsible institution. By using
              sustainability as a framework to its activities and academic
              vision, the university can reduce its ecological footprint and
              promote the principles of environmental stewardship,
              inclusiveness, and moral growth in students.
            </p>
          </div>
        </div>

        <div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 text-[#E7C268] hover:text-[#E7C268]/80 font-medium underline underline-offset-4 transition-colors cursor-pointer text-sm sm:text-base group"
          >
            <span>{isExpanded ? "View Less" : "View More"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SdgCertificateOverview;
