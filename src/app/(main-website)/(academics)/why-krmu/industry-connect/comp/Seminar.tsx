// import { STRAPI_URL } from "@/app/constant";
// import { SEMINAR } from "@/lib/types/industry-connect";
// import Image from "next/image";

import Image from "next/image";

// type Props = {
//   seminar: SEMINAR;
// };

const Seminar = () => {
  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">
            Seminar on AI and Cloud Computing
          </h3>
          <p className="mb-5 text-lg">
            The School of Engineering & Technology (SOET) organised an Expert
            Talk on “Microservices Architecture”, delivered by Mr. Nikhil Arora,
            Software Architect & Technical Consultant at EIS Ltd. The session
            highlighted the evolution, importance, and real-world applications
            of microservices in modern software development.
          </p>
          <p className="text-lg">
            Mr. Arora shared industry insights, tools, and career-oriented
            skills, making the session highly interactive and informative. Over
            70 students from BTech CSE and BTech CSE (AIML) actively
            participated in the session and Q&A. The event was smoothly
            coordinated by SOET faculty members and proved to be a valuable
            learning experience, enhancing students’ industry readiness and
            understanding of emerging technologies.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.krmangalam.edu.in/wp-content/uploads/2026/01/microservice-800x600.jpg"
            width={600}
            height={300}
            alt=""
            className="border w-full h-[400px] object-cover"
          />
        </div>
      </div>
      {/* <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10 my-10">
        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.krmangalam.edu.in/wp-content/uploads/2026/01/network.jpg"
            width={600}
            height={300}
            alt=""
            className="border w-full h-[400px] object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">
            Expert Talk on Network Security Assurance
          </h3>
          <p className="mb-5 text-lg">
            An Expert Talk on Network Security Assurance was conducted with Ms.
            Kamini Malhotra, Head of Network Security Assurance at DRDO, as the
            speaker. She shared valuable insights on IoT security,
            blockchain-based secure transactions, network security protocols,
            and strategies to prevent major cybersecurity threats.
          </p>
          <p className="text-lg">
            Mr. Arora shared industry insights, tools, and career-oriented The
            session highlighted the importance of robust network security in the
            digital age and proved to be informative and engaging. Students
            appreciated the expert insights and recommended more such sessions
            in the future.
          </p>
        </div>
      </div> */}
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10 mt-10">
             <div className="w-full lg:w-1/2">
          <Image
            src="https://www.krmangalam.edu.in/wp-content/uploads/2026/01/engineering-youth-800x600.jpg"
            width={600}
            height={300}
            alt=""
            className="border w-full h-[400px] object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">
            Expert Talk on Engineering Your Path
          </h3>
          <p className="mb-5 text-lg">
            K.R. Mangalam University organised an insightful Expert Talk titled
            “Engineering Your Path: The Entrepreneurial Mindset.” The session
            was delivered by Mr. Sanjay Kumar Malik, Director at Lepton Projects
            Private Limited, who shared valuable insights on innovation,
            self-driven success, and entrepreneurial thinking.
          </p>
          <p className="text-lg">
            Mr. Malik emphasised the importance of creativity, resilience, and
            vision, while guiding students on identifying real-world problems
            and developing scalable solutions. The interactive session
            encouraged students to think like founders and explore their
            potential, motivating them to adopt an entrepreneurial approach in
            their academic and professional journeys.
          </p>
        </div>
   
      </div>
      {/* <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-2xl md:text-[38px] text-center font-bold mb-5">
          {seminar?.heading}
        </h3>
        <p>{seminar?.desc}</p>
      </div>
      <div className="max-w-[1664px] mx-auto w-full lg:flex items-center gap-[3.84%] mt-10">
        <div className="lg:w-1/2">
          <Image
            src={`${STRAPI_URL}${seminar?.seminar_img_1?.url}`}
            width={766}
            height={430}
            alt={
              seminar?.heading || seminar?.seminar_img_1?.alternativeText || ""
            }
            className="md:h-[430px] w-full object-cover rounded-sm border border-black"
          />
        </div>
        <div className="lg:w-1/2 mt-5 lg:mt-0">
          <Image
            src={`${STRAPI_URL}${seminar?.seminar_img_2?.url}`}
            width={766}
            height={430}
            alt={
              seminar?.heading || seminar?.seminar_img_2?.alternativeText || ""
            }
            className="md:h-[430px] w-full object-cover rounded-sm border border-black"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Seminar;
