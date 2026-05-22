import { FileText } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="break-all lg:break-normal">
      <section className="pt-[140px] md:pt-[10%] pb-[60px] bg-[url(/krmu-committee/bg-banner.webp)] px-4">
        <div className="max-w-[1270px] mx-auto w-full text-white text-center">
          <h1 className="mb-5 text-3xl sm:text-4xl md:text-[64px] font-semibold">
            KRMU Committee
          </h1>
          <p>
            KRMU is a safe and comfortable place away from home where students
            and staff experience a happy and friendly atmosphere. The University
            strictly adheres to the rules and regulations of the UGC and the
            AICTE for the safe campus.
          </p>
        </div>
        <div className="max-w-[1664px] mx-auto w-full flex gap-5 flex-col lg:flex-row mt-10">
          <div className="w-full lg:w-1/2 p-5 bg-[#343537] text-white rounded-[20px] background-transparent">
            <h3 className="mb-5 text-2xl">Anti-Discrimination Cell</h3>
            <p>
              The UGC Regulation on “Promotion of Equity in Higher Educational
              Institutions Regulations 2012” states that “no higher educational
              institution shall discriminate a student belonging to the
              Scheduled Castes and Scheduled Tribes categories, or allow or
              condone any constituent of the higher educational institutions to
              discriminate such a student or group of such students”.
            </p>
            <br />
            <p>
              The Officials/faculty members should desist from any act of
              discrimination against SC/ST students on grounds of their social
              origin. The University should also ensure that no official/faculty
              members indulge in any kind of discrimination against any
              community or category of students.
            </p>
          </div>
          <div className="w-full lg:w-1/2 bg-[#343537] text-white rounded-[20px] p-5 background-transparent">
            <h3 className="mb-5 text-2xl">KRMU Anti-Discrimination and Minority Committee shall consist of the following members:</h3>
            <div className="table-1 transparent-table committee-table ">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Prof. (Dr.) J.S Yadav (Professor and Dean-SOAS)</td>
                    <td>Chairperson</td>
                  </tr>
                  <tr>
                    <td>Dr. P.C Jena (Professor-SOED)</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>Dr. Helaluddin (Librarian)</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>Dr. Dilraj Preet Kaur (Associate Professor-SBAS)</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>Dr. Chander Mohan (Associate Professor-SBAS)</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>Dr. Padmini Kaul (Assistant Professor-SOHS)</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>Mr. Thomas Monteiro (Assistant Professor-SOLS)</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>Dr. Sarina (Assistant Professor-SJMC)</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>Dr. Deepak Kumar (Assistant Professor-SOAS)</td>
                    <td>Member Secretary</td>
                  </tr>
                  {/* <tr>
                    <td>Ms. Megha Jain</td>
                    <td>Special Invitee Student Member</td>
                  </tr>
                  <tr>
                    <td>Mr. Farhan Khan</td>
                    <td>Special Invitee Student Member</td>
                  </tr>
                  <tr>
                    <td>Dr. Deepak Kumar</td>
                    <td>Member Secretary</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="max-w-[1664px] mx-auto w-full p-5 rounded-[20px] background-transparent mt-10 flex flex-col lg:flex-row ">
          <div className="lg:w-1/2 text-white">
            <h4 className="text-xl font-semibold mb-5">
              Anti-Discrimination Cell Helpline
            </h4>
            <p>
              <strong>Email</strong>:{" "}
              <Link href="mailto:joginder.singhyadav@krmangalam.edu.in">
                joginder.singhyadav@krmangalam.edu.in
              </Link>
            </p>
            <p className="mt-2.5">
              <strong>Contact No</strong>:{" "}
              <a href="phn:+919416386060">+919416386060</a>
            </p>
          </div>
          <div className="lg:w-1/2 text-white">
            <h4 className="text-xl font-semibold mb-5">
              Dr. Deepak Kumar (Member Secretary, Anti Discrimination Cell)
            </h4>
            <p>
              <strong>Email</strong>:{" "}
              <Link href="mailto:deepak@krmangalam.edu.in">
                deepak@krmangalam.edu.in
              </Link>
            </p>
            <p className="mt-2.5">
              <strong>Contact No</strong>:{" "}
              <a href="tel:+919568056654">+919568056654</a>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1664px] mx-auto w-full p-5 rounded-[20px] mt-10 flex gap-5 flex-col lg:flex-row">
          <div className="w-full lg:w-[38%]">
            <div className="committeebox p-5 mb-5">
              <h5 className="text-2xl font-semibold leading-[1.3] mb-5">
                Gender Sensitisation & Safety Committee
              </h5>
              <p>
                A Committee on Gender Sensitisation at KR Mangalam university is
                a crucial committee which aims to bring extremely gender
                equitable and gender sensitive academic space and follows zero
                tolerance to sexual harassment towards women. The committee is
                responsible for developing and implementing policies and
                training programs aimed at raising awareness and promoting
                respectful behavior among students, faculty, and staff. By
                organizing workshops, seminars, and support services, the
                committee helps to create a safer and more supportive space for
                all members of the university community. Its work not only
                enhances the overall educational experience but also contributes
                to the broader goal of gender equality and social justice.
              </p>
            </div>
            <div className="committeebox p-5">
              <h5 className="text-2xl font-semibold leading-[1.3] mb-5">
                KRMU Gender Sensitisation & Safety Committee Helpline:
              </h5>
              <p>
                <strong>Email</strong>:<br />{" "}
                <Link href="mailto:gssc@krmangalam.edu.in " target="_blank" rel="noopener noreferrer">
                  gssc@krmangalam.edu.in{" "}
                </Link>
              </p>
              <br />
              <p>
                <strong>Contact No</strong>:{" "}
                <a href="tel:9289114766">9289114766</a>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[58%] committeebox p-5">
            <h3 className="mb-5 text-2xl">
              The Gender Sensitisation & Safety Committee consists of the
              following members:
            </h3>
            <div className="table-1 white-table committee-table">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                  </tr>
                  <tr>
                    <td>Dr. Shobhna Jeet, Associate Professor, SOLS</td>
                    <td>Chairperson</td>
                  </tr>
                  <tr>
                    <td>Mr. Harshvardhan, Associate Professor, SOET</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>Dr. Komal Yadav, Associate Professor, SBAS</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>Dr. Kanchan Khatreja, Assistant Professor, SOED</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>Ms. Mamta Shankar, Associate Professor, SPRS</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>Dr. Padmani Koul, Assistant Professor, SOLA</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>Dr. Ritwik Ghosh, Assistant Professor, SEMCE</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>Ar. Mansha Samreen, Associate Professor, SOAD</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>Dr. Anumeha Mathur, Assistant Professor, SOMC</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>Dr. Sunil Chahar, Assistant Professor, SMAS</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>Mr. Sanjay Pandey, Assistant Professor, SOHMCT</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>Dr. Ambika Bhandari, Assistant Professor, SOAS</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>Ms. Prerna (2305170030) B.A. LL.B. (Hons.)</td>
                    <td>Student Member</td>
                  </tr>
                  <tr>
                    <td>Krishna Sindhwani (2305140045) BBA LL.B. (Hons.)</td>
                    <td>Student Member</td>
                  </tr>
                  <tr>
                    <td>Dr. Megha, Assistant Professor, SOLS</td>
                    <td>Member Secretary</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#051630]">
        <div className="max-w-[1664px] mx-auto w-full flex gap-5 flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-5 bg-[#343537] text-white rounded-[20px] background-transparent">
            <h3 className="mb-5 text-2xl font-semibold">
              KRMU Internal Complaints Committee (ICC)
            </h3>
            <p>
              The Sexual Harassment of Women at Workplace (Prevention,
              Prohibition and Redressal) Act, 2013 (“POSH Act”) was enacted as
              comprehensive legislation to provide a safe, secure and enabling
              environment, free from sexual harassment to every woman. This
              statute was enacted to fill the legislative void which had been
              partially addressed by the judiciary in Vishaka and Others v.
              State of Rajasthan and Others (1997 (7) SCC 323). In this seminal
              public interest litigation verdict, the Supreme Court of India had
              framed a set of guidelines (“Vishaka Guidelines”) for dealing with
              instances of sexual harassment at the workplace, which has now
              been codified in the POSH Act.
            </p>
            <br />
            <p>
              Under the POSH Act, an employer is legally required to comply with
              certain statutory requirements. One of these is the constitution
              of an Internal Complaints Committee (“ICC”), a body envisaged to
              receive complaints on sexual harassment at the workplace from an
              aggrieved woman, as well as to inquire into and make
              recommendations to the employer on the action required under its
              inquiry of such complaint made.
            </p>
          </div>
          <div className="w-full lg:w-1/2 bg-[#343537] text-white rounded-[20px] p-5 background-transparent">
            <h3 className="mb-5 text-2xl">KRMU Internal Complaints Committee (ICC) Committee shall consist of the following members:</h3>
            <div className="table-1 transparent-table committee-table">
              {" "}
              <table width="100%">
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
                    <td>Dr. Varuna Tyagi, Professor SOMC</td>{" "}
                    <td>Chairperson</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Shobhna Jeet Associate Professor, SOLS</td>{" "}
                    <td>Vice Chairperson</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Prof. Prakash Chandra Jena, Professor, SOED</td>{" "}
                    <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Kaushal, Associate, Professor, SOET</td>{" "}
                    <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Inderpreet Kaur, Associate Professor, SOLS</td>{" "}
                    <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Shivani Wadhwa, Assistant Professor, SOHS</td>{" "}
                    <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>
                      Prof. Vageshwari Deswal, Professor (Delhi University)
                    </td>{" "}
                    <td>External Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Ad. Pooja Tiwari, NGO Member</td>{" "}
                    <td>External Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>
                      Mr. Deepak Mishra, Representative of Non- Teaching Staff
                    </td>{" "}
                    <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Archisha Asthana, LLB (Hons.) 2205230024</td>{" "}
                    <td>Student Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Mihir Shrivastava, B.Arch 2205170052</td>{" "}
                    <td>Student Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Ms. Pooja Kaushal, LLB (Hons) 2305230010</td>{" "}
                    <td>Student Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>HR Manager, HR</td> <td>Member Secretary</td>{" "}
                  </tr>{" "}
                </tbody>{" "}
              </table>{" "}
            </div>
          </div>
        </div>
        <div className="max-w-[1664px] mx-auto w-full p-5 rounded-[20px] background-transparent mt-10 flex flex-col lg:flex-row ">
          <div className="lg:w-1/2 text-white">
            <h4 className="text-xl font-semibold mb-5">KRMU ICC Helpline:</h4>
            <p>
              <strong>Email</strong>:{" "}
              <Link href="mailto:icc@krmangalam.edu.in">
                icc@krmangalam.edu.in
              </Link>
            </p>
            <p className="mt-2.5">
              <strong>Contact No</strong>:{" "}
              <a href="phn:+9289114766">+9289114766</a>
            </p>

            <div className="my-5 flex flex-col items-start gap-5">
              <Link
                href="https://www.krmangalam.edu.in/pdfs/Committee-ICC-2023.pdf"
                target="_blank" rel="noopener noreferrer"
                className="py-[13px] px-[29px] text-base text-white bg-[#0060aa] rounded-[4px] w-fit leading-[1] font-medium flex gap-2.5 items-center"
              >
                <FileText color="#fff" />
                Committee ICC 2023
              </Link>
              <Link
                href="#"
                className="py-[13px] px-[29px] text-base text-white bg-[#0060aa] rounded-[4px] block w-fit leading-[1] font-medium"
              >
                Submit Complaint
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 text-white">
            <h4 className="text-xl font-semibold mb-5">Important Links:</h4>
            <div className="my-5 flex flex-col items-start gap-5">
              <Link
                href="https://www.krmangalam.edu.in/pdfs/ugc-regulation-2015.pdf"
                target="_blank" rel="noopener noreferrer"
                className="py-[13px] px-[29px] text-base text-white bg-[#0060aa] rounded-[4px] w-fit leading-[1] font-medium flex gap-2.5 items-center"
              >
                <FileText color="#fff" />
                UGC Regulation 2015
              </Link>
              <Link
                href="http://ncw.nic.in/sites/default/files/SexualHarassmentofWomenatWorkPlaceAct2013_0.pdf"
                target="_blank" rel="noopener noreferrer"
                className="py-[13px] px-[29px] text-base text-white bg-[#0060aa] rounded-[4px] w-fit leading-[1] font-medium flex gap-2.5 items-center"
              >
                <FileText color="#fff" />
                Sexual Harrasment of Women at Work Place 2013
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1664px] mx-auto w-full p-5 rounded-[20px] mt-10 flex gap-5 flex-col lg:flex-row">
          <div className="w-full lg:w-[38%]">
            <div className="committeebox p-5 mb-5">
              <h5 className="text-2xl font-semibold leading-[1.3] mb-5">
                Anti-Ragging Committee
              </h5>
              <p>
                RAGGING IS AN OFFENCE PUNISHABLE AS PER LAW- RESULTING IN
                IMPRISONMENT AND / OR HEAVY PENALTY dated September 2009 as per
                the order of the Hon. Supreme Court of a India vide ref. no.: In
                SLP No. 24295 of 2006.
              </p>
              <br />
              <p>
                Ragging means causing physical and / or mental trauma to a
                person as a result of physical abuse, manhandling , using
                abusive language or gestures or forcing to perform acts that may
                cause physical/mental damage. Ragging is a social, cultural and
                psychological menace.
              </p>
              <br />
              <p>
                Students are urged to keep-up the glorious tradition of AET
                Group of Institutions and not to indulge in any activity within
                or outside the campus that may be construed as or amounts to
                ragging. Any student, if found involved in any such activity
                directly or indirectly shall not only be expelled from the
                Institution, but the matter will be reported to Police / Legal
                authorities, for further necessary action.
              </p>
              <div className="flex flex-col gap-5 my-5">
                <Link
                  href="https://www.krmangalam.edu.in/pdfs/anti-ragging-committee-of-krmu-2024.pdf"
                  target="_blank" rel="noopener noreferrer"
                  className="py-[13px] px-[29px] text-base text-white bg-[#0060aa] rounded-[4px] w-fit leading-[1] font-medium flex gap-2.5 items-center justify-center"
                >
                  <FileText color="#fff" />
                  Anti Ragging Committee AY 2024-25
                </Link>
                <Link
                  href="https://www.krmangalam.edu.in/pdfs/NATIONAL-RAGGING-PREVENTION-PROGRAMME-1.pdf"
                  target="_blank" rel="noopener noreferrer"
                  className="py-[13px] px-[29px] text-base text-white bg-[#0060aa] rounded-[4px] w-fit leading-[1] font-medium flex gap-2.5 items-center justify-center"
                >
                  <FileText color="#fff" />
                  Ragging Prevention Programme-1
                </Link>
                <Link
                  href="https://www.krmangalam.edu.in/krmu-committee/#"
                  target="_blank" rel="noopener noreferrer"
                  className="py-[13px] px-[29px] text-base text-white bg-[#0060aa] rounded-[4px] w-fit leading-[1] font-medium flex gap-2.5 items-center justify-center"
                >
                  Register Complaint
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[58%] committeebox p-5">
            <h3 className="mb-5 text-2xl">
              Anti-Ragging Committee against consist of the following members:
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
                    <td>Vice Chancellor (Ex-officio)</td> <td>Chairperson</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Tehsildar, Sohna</td>{" "}
                    <td>Representative of Civil Administration</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>SHO, Sohna</td>{" "}
                    <td>Representative of Police Administration</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Registrar (Ex-officio)</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Chief Warden (Ex-officio)</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dean Student Welfare</td> <td>Member</td>{" "}
                  </tr>{" "}
                   
                  <tr>
                    {" "}
                    <td>Dr. Shweta Bansal (Deputy Proctor)</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Imran Siraj (Deputy Proctor)</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Warden-Boy’s Hostel</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Warden-Girl’s Hostel</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Mr. Karan Singh, SJMC</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Inderpreet Kaur, SOLS</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Ar. Akansha Singh, SOAD</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Manmohan Singh, SOMC</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>
                      Aryan Chaudhary, Bachelor of Design, 2406224013
                    </td>{" "}
                    <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Anushka Singh (BBA) 2402203047</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Proctor (Ex-officio)</td> <td>Member Secretary</td>{" "}
                  </tr>{" "}
                </tbody>{" "}
              </table>{" "}
            </div>
          </div>
        </div>
        <div className="max-w-[1664px] mx-auto w-full committeebox p-5 my-5 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 p-5 lgp-[30px]">
            <h4 className="text-lg">
              <strong>
                Registrar, Member Secretary (Anti-Ragging Committee Cell)
              </strong>
            </h4>
            <br />
            <p>
              KRMU Anti Ragging Helpline: 0124-2867800, Extn. 1017, 8800697002
            </p>
          </div>
          <div className="w-full lg:w-1/3 p-5 lgp-[30px]">
            <p>
              <strong>Email</strong>:{" "}
              <Link href="mailto:antiragginghelpline@krmangalam.edu.in">
                antiragginghelpline@krmangalam.edu.in
              </Link>
            </p>

            <p>UGC Anti-Ragging helpline: 1800-180-5522 (24×7 Toll Free)</p>
          </div>
          <div className="w-full lg:w-1/3 p-5 lgp-[30px]">
            <p>
              <strong>Email</strong>:{" "}
              <Link href="mailto:Email:helpline@antiragging.in">
                helpline@antiragging.in
              </Link>
            </p>
          </div>
        </div>
      </section>
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
                target="_blank" rel="noopener noreferrer"
                className="py-[13px] px-[29px] text-base text-white bg-[#0060aa] rounded-[4px] w-fit leading-[1] font-medium flex gap-2.5 items-center mb-5"
              >
                <FileText color="#fff" />
                Committee Grievance Redressal
              </Link>
              <Link
                href="https://www.krmangalam.edu.in/krmu-committee/#"
                target="_blank" rel="noopener noreferrer"
                className="py-[13px] px-[29px] text-base text-white bg-[#0060aa] rounded-[4px] w-fit leading-[1] font-medium flex gap-2.5 items-center"
              >
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
                    <td>Mr. Mohit Kumar (2005150006-BBALLB)</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>MS. Khushi Jain (2302570033-MBA)</td> <td>Member</td>{" "}
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
            <p>
              <strong>Contact No</strong>:{" "}
              <Link href="tel:01242867800">0124-2867800</Link>, Extn. 1017,{" "}
              <Link href="tel:9289114765">9289114765</Link>
            </p>
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
                  target="_blank" rel="noopener noreferrer"
                  className="py-[13px] px-[29px] text-base text-white bg-[#0060aa] rounded-[4px] w-fit leading-[1] font-medium flex gap-2.5 items-center justify-center"
                >
                  <FileText color="#fff" />
                  STUDENT DISCIPLINE COMMITTEE
                </Link>
                <Link
                  href="https://www.krmangalam.edu.in/pdfs/COC-Revised-Handbook-of-COC-Professional-Ethics-and-Human-Values.pdf"
                  target="_blank" rel="noopener noreferrer"
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
                    <td>Dr. Diwakar Padalia (Proctor)</td> <td>Chairperson</td>{" "}
                  </tr>{" "}
                   
                  <tr>
                    {" "}
                    <td>Dean Student Welfare</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Shweta Bansal (Deputy Proctor)</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Kaushal Kumar</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Shobna Jeet (SOLS)</td> <td>Member</td>{" "}
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
                    <td>Mr. Rahul Singh (SOET)</td> <td>Member</td>{" "}
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>Dr. Imran Siraj (Deputy Proctor)</td>{" "}
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

            <p>
              <strong>Contact No</strong>:{" "}
              <Link href="tel:01242867800">0124-2867800</Link>, Extn. 1017,{" "}
              <Link href="tel:8800697002">8800697002</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
