import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const GrievenceAndCounseling = () => {
  return (
    <>
      <section
        className={` bg-[linear-gradient(179.96deg,#FFFFFF_0.04%,#C3CEDB_82.67%,#DFD1F2_99.96%)] px-4 sm:px-4 md:px-12 py-12 `}
      >
        <div className="mx-auto w-full max-w-[1550px] mb-10">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10 rounded-2xl  bg-[linear-gradient(104.12deg,#F3F4F6_22.1%,#CFDCFF_72.23%,#00ABCD_84.55%)] p-4  md:gap-12 md:p-8 min-h-[350px]">
            <div className="p-2">
              <h2
                className={`${playfair.className}  text-3xl font-bold text-black my-6 md:text-4xl lg:text-[35px]`}
              >
                Student Grievance Handling <br />
                and Anti Ragging 
              </h2>

              <p className=" text-left sm:text-justify text-sm leading-[1.85] font-normal text-[#000000]  md:text-[16px]">
                The Department of Student Welfare ensures a safe, respectful,
                and student-friendly campus through its Student Grievance
                Handling system. It provides students with a fair and
                confidential platform to raise academic, administrative,
                personal, or campus-related concerns and seek timely support.
                <br className="mb-4" />
                The department promotes open communication, transparency, and
                student well-being by addressing grievances with empathy and
                accountability. The system is primarily managed by the Student
                Success Manager of the University.
                <br className="mb-4" /> The university also follows a strict
                Anti-Ragging policy and is committed to maintaining a safe,
                inclusive, and harassment-free environment for every student.
              </p>
            </div>

            <div className="w-full flex-shrink-0 overflow-hidden rounded-2xl px-6 xl:px-10 py-6 bg-white  lg:w-[45%]">
              <div className="flex flex-col-reverse items-left  md:flex-row md:justify-between md:items-center">
                <h2
                  className={`${playfair.className} text-3xl leading-[1.3] text-black mb-4 md:text-4xl lg:text-[24px]`}
                >
                  Message from <br />{" "}
                  <span className="font-bold">
                    Student Success <br /> Manager
                  </span>
                </h2>
                <div
                  className={`relative mb-1 h-[130px] lg:h-[110px] w-[130px] lg:w-[110px]  overflow-hidden rounded-full  bg-[#F4F4F4] `}
                >
                  <Image
                    src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Raj_Jayswal_a127a8fd50.png"
                    alt="Team Member"
                    fill
                    sizes="150px"
                    className="object-cover p-2 rounded-full"
                  />
                </div>
              </div>
              <p className=" text-left sm:text-justify text-sm leading-[1.85] font-normal text-[#000000]  md:text-[14px]">
                As a Student Success Manager at K.R. Mangalam University, I
                serve as a dedicated bridge between students and the
                institution, ensuring that every academic and non-academic
                grievance is resolved with high satisfaction. My mission is to
                streamline the student journey, transforming challenges into
                opportunities for growth. Beyond problem-solving, I collaborate
                closely with the Dean of Student Welfare Council, empowering
                student leaders through expert-led workshops and high-impact
                resources. By fostering professional excellence and personal
                well-being, I am committed to making every student's university
                experience both seamless and successful. 
              </p>
              <p className=" text-justify text-sm leading-[1.85] font-bold mt-4 text-[#000000]  md:text-[14px]">
                Mr. Raj Jayswal, 
              </p>
              <span className=" text-justify text-sm leading-[1.85]  text-[#000000]  md:text-[14px]">
                Student Success Manager
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1550px]">
          <div className="flex flex-col lg:flex-row items-center gap-10 rounded-2xl  bg-[linear-gradient(95.12deg,#F3F4F6_0.63%,#FFE1B4_100%)] p-4  md:p-8 min-h-[350px]">
            <div className="p-2">
              <h2
                className={`${playfair.className}  text-3xl font-bold text-black my-6 md:text-4xl lg:text-[35px]`}
              >
                Student Wellness & Counselling <br />
                Centre
              </h2>

              <p className="text-left sm:text-justify text-sm leading-[1.85] font-normal text-[#000000]  md:text-[16px]">
                University life brings new opportunities, experiences, and
                challenges. The Counselling Services at KRMU are dedicated to
                supporting students emotional well-being, personal growth, and
                overall development. Our counsellors provide a safe,
                confidential, and non-judgmental environment where students can
                discuss academic stress, personal concerns, relationship issues,
                time management challenges, and other difficulties they may
                encounter during their university journey. Through professional
                guidance and support, we help students build resilience, enhance
                self-awareness, develop coping strategies, and achieve a healthy
                balance between their academic and personal lives.
                <br className="mb-4" />
                At KRMU, we believe that seeking support is a sign of strength
                and an important step toward personal growth. Our counselling
                services aim to empower students to make informed decisions,
                improve communication and interpersonal skills, strengthen
                emotional well-being, and develop confidence in overcoming
                challenges.
              </p>
            </div>

            <div className="w-full flex-shrink-0 overflow-hidden rounded-2xl px-6 xl:px-10 py-6  bg-white lg:w-[45%]">
              <div className="flex flex-col-reverse items-left  md:flex-row md:justify-between md:items-center">
                <h2
                  className={`${playfair.className} text-3xl leading-[1.3] text-black mb-4 md:text-4xl lg:text-[24px]`}
                >
                  Message from <br />{" "}
                  <span className="font-bold">the Counsellor</span>
                </h2>
                <div
                  className={`relative mb-1 h-[130px] lg:h-[110px] w-[130px] lg:w-[110px] overflow-hidden rounded-full  bg-[#F4F4F4] `}
                >
                  <Image
                    src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Amit_Yadav_10ac4bae2e.png"
                    alt="Team Member"
                    fill
                    sizes="150px"
                    className="object-cover p-2 rounded-full"
                  />
                </div>
              </div>
              <p className="text-left sm:text-justify text-sm leading-[1.85] font-normal text-[#000000]  md:text-[14px]">
                Hello Students, I have been working in the fields of counselling
                and education since 2014. I understand that university life
                comes with both exciting opportunities and unique challenges,
                including academic pressure, time management issues,
                relationship concerns, career uncertainties, and personal
                stress. My aim is to provide a safe, supportive, and
                non-judgmental space where you can openly discuss your concerns
                and find practical solutions. I specialize in helping students
                manage study pressure, improve time management skills, build
                healthy relationships, and enhance their overall well-being. I
                believe that every student has the potential to grow, succeed,
                and overcome challenges with the right guidance and support.
                Whether you are facing academic difficulties, personal concerns,
                or simply need someone to talk to, I am here to support you in
                navigating your university journey with confidence, balance, and
                a positive outlook.
              </p>
              <p className=" text-justify text-sm leading-[1.85] font-bold mt-4 text-[#000000]  md:text-[14px]">
                Mr. Amit Kumar Yadav,
              </p>
              <span className=" text-justify text-sm leading-[1.85]  text-[#000000]  md:text-[14px]">
                Senior Counsellor
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GrievenceAndCounseling;
