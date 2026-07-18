import { FileText } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="break-all lg:break-normal">
      <section className="py-20 bg-[#051630]">
        <div className="max-w-[1664px] mx-auto w-full flex gap-5 flex-col lg:flex-row">
          <div className="w-full lg:w-[38%] p-5 bg-[#343537] text-white rounded-[20px] background-transparent">
            <h3 className="mb-5 text-2xl font-semibold">
              Grievance Redressal Committee
            </h3>
            <p>
              In compliance with under clause (g) of sub-section (1) of Section
              26 of the University Grants Commission Act, 1956 (3 of 1956), and
              in supersession of the University Grants Commission (Grievance
              Redressal) Regulations, 2012, the Grievance Redressal Committee
              shall consist of the following members:
            </p>
            <p>
              An aggrieved by said offence, may make a complaint in accordance
              with the regulations to the Grievance Redressal Committee either
              in person or through the mail or contact appended below.
            </p>
            <div className="my-5 flex flex-col pga-5">
              <Link
                href="https://www.krmangalam.edu.in/pdfs/Committee-Grievance-Redressal-2023.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="py-[13px] px-[29px] text-base text-white bg-[#0060aa] rounded-[4px] w-fit leading-[1] font-medium flex gap-2.5 items-center mb-5"
              >
                <FileText color="#fff" />
                Committee Grievance Redressal
              </Link>
              <Link
                href="https://www.krmangalam.edu.in/pdfs/Student-Grievance-Redressal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="py-[13px] px-[29px] text-base text-white bg-[#0060aa] rounded-[4px] w-fit leading-[1] font-medium flex gap-2.5 items-center"
              >
                <FileText color="#fff" />
                Student Grievance
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-[58%] bg-[#343537] text-white rounded-[20px] p-5 background-transparent">
            <h3 className="mb-5 text-2xl">
              <strong>
                KRMU Grievance Redressal Committee shall consist of the
                following members:
              </strong>
            </h3>
            <div className="table-1 transparent-table committee-table">
              {" "}
              <table>
                {" "}
                <thead>
                  {" "}
                  <tr>
                    {" "}
                    <th>Name</th> <th>Position</th>{" "}
                  </tr>{" "}
                </thead>{" "}
                <tbody>
                  {" "}
                  <tr>
                    {" "}
                    <td>Dr. Inderpreet Kaur</td> <td>Chairperson</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Prof. Anjana Singh (Dean Student Welfare)</td>{" "}
                    <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Diwakar Padalia (Proctor)</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Monika Khatkar, Assistant Professor, SOET</td>{" "}
                    <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Deepak Kumar, Assistant Professor, SOAS</td>{" "}
                    <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Ms. Amrita Singh, Assistant Professor, SOLS</td>{" "}
                    <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>HR Manager (Ex-officio)</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Manju Rani, Assistant Professor, SOHS</td>{" "}
                    <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Mr. Mohit Kumar (2005150006-BBALLB)</td>{" "}
                    <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>MS. Khushi Jain (2302570033-MBA)</td>{" "}
                    <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>
                      Dr. Anshul Saluja, Assistant Dean, Student Welfare
                    </td>{" "}
                    <td>Member Secretary</td>{" "}
                  </tr>{" "}
                </tbody>{" "}
              </table>{" "}
            </div>
          </div>
        </div>
        <div className="max-w-[1664px] mx-auto w-full p-5 rounded-[20px] background-transparent mt-10 flex flex-col lg:flex-row ">
          <div className="text-white">
            <h4 className="text-xl font-semibold mb-5">
              KRMU Grievance Redressal Helpline:
            </h4>
            <p>
              <strong>Email</strong>:{" "}
              <Link href="mailto:grievance.redressal@krmangalam.edu.in">
                grievance.redressal@krmangalam.edu.in
              </Link>
            </p>
            {/* <p>
              <strong>Contact No</strong>:{" "}
              <Link href="tel:01242867800">0124-2867800</Link>, Extn. 1017,{" "}
              <Link href="tel:9289114765">9289114765</Link>
            </p> */}
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1664px] mx-auto w-full p-5 rounded-[20px] mt-10 flex gap-5 flex-col lg:flex-row">
          <div className="w-full lg:w-[38%]">
            <div className="committeebox p-5 mb-5">
              <h5 className="text-2xl font-semibold leading-[1.3] mb-5">
                Student Discipline Committee
              </h5>
              <p>
                In exercise of powers conferred by University First Statute
                Student Discipline Committee maintains discipline, dignity,
                decorum and rapport of the University. Controlling the students
                through rules and regulations and channelization their youth
                energy into positive and creative direction and promotion of the
                manners, personality, character and civilization, the Student
                Discipline Committee shall consist of the following members:
              </p>
              <br />
              <p>
                An aggrieved by said offence, may make a complaint in accordance
                with the regulations to the Student Discipline Committee either
                in person or through the mail or contact appended below.
              </p>
              <br />
              <div className="flex flex-col gap-5 my-5">
                <Link
                  href="https://www.krmangalam.edu.in/pdfs/Constitution-of-Student-Discipline-Committee-of-KRMU-2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-[13px] px-[29px] text-base text-white bg-[#0060aa] rounded-[4px] w-fit leading-[1] font-medium flex gap-2.5 items-center justify-center"
                >
                  <FileText color="#fff" />
                  STUDENT DISCIPLINE COMMITTEE
                </Link>
                <Link
                  href="https://www.krmangalam.edu.in/pdfs/COC-Revised-Handbook-of-COC-Professional-Ethics-and-Human-Values.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-[13px] px-[29px] text-base text-white bg-[#0060aa] rounded-[4px] w-fit leading-[1] font-medium flex gap-2.5 items-center justify-center"
                >
                  <FileText color="#fff" />
                  Code of Conduct
                </Link>
              </div>
              <h5>
                <strong>Register Complaint</strong>
              </h5>
              <p>
                The complaint should sent to
                student.discipline@krmangalam.edu.in
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[58%] committeebox p-5">
            <h3 className="mb-5 text-2xl">
              The Student Discipline Committee against consist of the following
              members:
            </h3>
            <div className="table-1 white-table committee-table">
              {" "}
              <table width="100%">
                {" "}
                <tbody>
                  {" "}
                  <tr>
                    {" "}
                    <th>Name</th> <th>Position</th>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Diwakar Padalia (Proctor)</td>{" "}
                    <td>Chairperson</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Shweta Bansal (Deputy Proctor)</td>{" "}
                    <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Kaushal Kumar</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Shobhna Jeet (SOLS)</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Shivani Wadhwa (SOHS)</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Mazher (SMAS)</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Ar. Praveen Gupta (SOAD)</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Vijay Prakash Sharma (SOMC)</td>{" "}
                    <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Anshul Saluja (SOED)</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Mr. Karan Singh (SEMCE)</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>
                      Mr. Jagdish Chander, (Security & Discipline Officer)
                    </td>{" "}
                    <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Imran Siraj (SOET) (Deputy Proctor)</td>{" "}
                    <td>Member Secretary</td>{" "}
                  </tr>{" "}
                </tbody>{" "}
              </table>{" "}
            </div>
          </div>
        </div>
        <div className="max-w-[1664px] mx-auto w-full committeebox p-5 my-5 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-5 lgp-[30px]">
            <h4 className="text-lg">
              <strong>KRMU Student Discipline Committee Helpline:</strong>
            </h4>
          </div>
          <div className="w-full lg:w-1/2 p-5 lgp-[30px]">
            <p>
              <strong>Email</strong>:{" "}
              <Link href="mailto:student.discipline@krmangalam.edu.in">
                student.discipline@krmangalam.edu.in
              </Link>
            </p>

            {/* <p>
              <strong>Contact No</strong>:{" "}
              <Link href="tel:01242867800">0124-2867800</Link>, Extn. 1017,{" "}
              <Link href="tel:8800697002">8800697002</Link>
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
