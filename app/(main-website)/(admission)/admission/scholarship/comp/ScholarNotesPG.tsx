import Link from "next/link";

const ScholarNotesPG = () => {
  return (
    <section className="bg-[url(/scholarship/notes-bg.webp)] bg-cover bg-no-repeat py-[30px] px-4 mt-10">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-5xl text-white font-semibold mb-10">Notes:</h3>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:w-1/2 flex flex-col gap-5">
              <div className="flex gap-5">
                <span className="rounded-full py-[3px] px-2 border border-white text-white w-[25px] h-[28px] flex items-center justify-center">
                  1
                </span>
                <span className="text-white font-semibold text-base">
                  Applicable only on the Programme Fee for Semester 1
                </span>
              </div>
              <div className="flex gap-5">
                <span className="rounded-full py-[3px] px-2 border border-white text-white w-[25px] h-[28px] flex items-center justify-center">
                  2
                </span>
                <span className="text-white font-semibold text-base notesul">
                  2nd Instalment and 3rd instalment (where applicable) of
                  scholarship amount will be paid by cheque if the student
                  fulfils ALL the criteria listed under:-
                  <ul className="font-normal">
                    {" "}
                    <li>
                      Attendance in immediately preceding semester is 75% or
                      above.
                    </li>{" "}
                    <li>
                      The student has cleared examination of ALL the subjects
                      which were on offer in the immediately preceding semester.
                    </li>{" "}
                    <li>
                      There is no case of indiscipline, unfair means or
                      misconduct.   
                    </li>{" "}
                  </ul>
                </span>
              </div>
           
          </div>
          <div className="lg:w-1/2 flex flex-col gap-5">
            <div className="flex gap-5">
              <span className="rounded-full py-[3px] px-2 border border-white text-white w-[25px] h-[28px] flex items-center justify-center">
                3
              </span>
              <span className="text-white font-semibold text-base">
                No two scholarships can be combined or offered to students.
              </span>
            </div>
            <div className="flex gap-5">
              <span className="rounded-full py-[3px] px-2 border border-white text-white w-[25px] h-[28px] flex items-center justify-center">
                4
              </span>
              <span className="text-white font-semibold text-base">
                This policy is applicable for B.Ed ., LL.B and not applicable
                for M. Pharma.
              </span>
            </div>
            <div className="flex gap-5 mb-8">
              <span className="rounded-full py-[3px] px-2 border border-white text-white w-[25px] h-[28px] flex items-center justify-center">
                5
              </span>
              <span className="text-white font-semibold text-base">
                This policy is not applicable for Lateral Entry and Migration.
              </span>
            </div>

            {/* <div className="lg:flex gap-5 mb-8">
            <span className="rounded-full py-[3px] px-2 border border-white text-white w-[25px] h-[28px] flex items-center justify-center">
              7
            </span>
            <span className="text-white font-semibold text-base notesul">
              2nd Instalment and 3rd instalment (where applicable) of
              scholarship amount will be paid by cheque if the student fulfils
              ALL the criteria a, b, c as listed under:-
              <ul>
                <li>
                  Attendance in immediately preceding semester is 75% or above
                </li>
                <li>
                  The student has cleared examination of ALL the subjects which
                  were on offer in the immediately preceding semester
                </li>
                <li>
                  There is no case of indiscipline, unfair means or misconduct
                </li>
              </ul>
            </span>
          </div>
          <div className="flex gap-5 mb-8">
            <span className="rounded-full py-[3px] px-2 border border-white text-white w-[25px] h-[28px] flex items-center justify-center">
              8
            </span>
            <span className="text-white font-semibold text-base">
              For the CUET Scholarship, anyone who has attempted at least 3
              papers and has an aggregate percentage of 40 or above will receive
              a 10% scholarship on their Programme Fee for Semester 1. If a
              student has attempted 4 or more papers, the scholarship criteria
              outlined in the above table for CUET-1 & CUET 2 will be
              applicable. In such cases, the 3 paper criteria mentioned here
              will not be considered.
            </span>
          </div>
          <div className="flex gap-5 mb-8">
            <span className="rounded-full py-[3px] px-2 border border-white text-white w-[25px] h-[28px] flex items-center justify-center">
              9
            </span>
            <span className="text-white font-semibold text-base">
              This policy is not applicable for Lateral Entry and Migration
              <p>
                <strong>Important :</strong> For detailed sports scholarship{" "}
                <Link
                  href="https://www.krmangalam.edu.in/wp-content/uploads/2025/03/sports-club-sports-scholarship-policy-2025-26.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here
                </Link>
              </p>
            </span>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarNotesPG;
