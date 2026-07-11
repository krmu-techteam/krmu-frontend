import Image from "next/image";

const AcademicPolicies = () => {
  return (
    <section className="py-10 bg-[#051630] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="text-white text-center">
          <h3 className="text-2xl md:text-[35px] font-semibold mb-5 leading-[1]">
            Academic Policies and Procedures
          </h3>
          <p className="text-xl mb-5">
            Our academic policies and procedures are crafted to uphold academic{" "}
            integrity and <br /> excellence, ensuring a fair and supportive
            environment.
          </p>
        </div>
        <div className="flex flex-col gap-5 lg:grid grid-cols-4 grid-rows-2 gap-x-16 gap-y-5">
          <div className="p-5 bg-[url(/academics/card-bg-1.webp)] bg-no-repeat bg-cover bg-center rounded-[20px]">
            <div className="flex items-center justify-center">
              <Image
                src="/academics/card-1.webp"
                width={197}
                height={135}
                alt=""
              />
            </div>
            <div className="text-white text-center">
              <p className="text-[13px] my-2.5">
                <strong>Code of Academic Integrity</strong>
              </p>
              <p>
                Our commitment to integrity is paramount. We have clear
                guidelines and consequences for academic misconduct.
              </p>
            </div>
          </div>
          <div className="p-5 bg-[url(/academics/card-bg-1.webp)] bg-no-repeat bg-cover bg-center rounded-[20px]">
            <div className="flex items-center justify-center">
              <Image
                src="/academics/card-2.webp"
                width={197}
                height={135}
                alt=""
              />
            </div>
            <div className="text-white text-center">
              <p className="text-[13px] my-2.5">
                <strong>Grading System</strong>
              </p>
              <p>
                Our transparent grading system is detailed in our grading
                policy, outlining the criteria for assessments and exams.
              </p>
            </div>
          </div>
          <div className="p-5 bg-[url(/academics/card-bg-1.webp)] bg-no-repeat bg-cover bg-center rounded-[20px]">
            <div className="flex items-center justify-center">
              <Image
                src="/academics/card-3.webp"
                width={197}
                height={135}
                alt=""
              />
            </div>
            <div className="text-white text-center">
              <p className="text-[13px] my-2.5">
                <strong>Attendance and Participation</strong>
              </p>
              <p>
                Attendance and active participation are key. Our policy outlines
                the requirements and their impact on grades.
              </p>
            </div>
          </div>
          <div className="p-5 bg-[url(/academics/card-bg-1.webp)] bg-no-repeat bg-cover bg-center rounded-[20px]">
            <div className="flex items-center justify-center">
              <Image
                src="/academics/card-4.webp"
                width={197}
                height={135}
                alt=""
              />
            </div>
            <div className="text-white text-center">
              <p className="text-[13px] my-2.5">
                <strong>Course Enrolment and Withdrawal</strong>
              </p>
              <p>
                For information on enrolling in or withdrawing from courses,
                including deadlines and procedures, refer to our enrolment
                policy.
              </p>
            </div>
          </div>
          <div></div>
          <div className="p-5 bg-[url(/academics/card-bg-1.webp)] bg-no-repeat bg-cover bg-center rounded-[20px]">
            <div className="flex items-center justify-center">
              <Image
                src="/academics/card-5.webp"
                width={197}
                height={135}
                alt=""
              />
            </div>
            <div className="text-white text-center">
              <p className="text-[13px] my-2.5">
                <strong>Grievance Redressal</strong>
              </p>
              <p>
                We offer a fair mechanism for academic grievances. Students can
                find the process and contact information here.
              </p>
            </div>
          </div>
          <div className="p-5 bg-[url(/academics/card-bg-1.webp)] bg-no-repeat bg-cover bg-center rounded-[20px]">
            <div className="flex items-center justify-center">
              <Image
                src="/academics/card-6.webp"
                width={197}
                height={135}
                alt=""
              />
            </div>
            <div className="text-white text-center">
              <p className="text-[13px] my-2.5">
                <strong>Academic Advising</strong>
              </p>
              <p>
                Advisors are available to guide students in academic and career
                planning.
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default AcademicPolicies;
