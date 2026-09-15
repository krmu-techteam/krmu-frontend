"use client";

import Divider from "../../common/Divider";

interface TalentItem {
  domain: string;
  students: number;
  skills: string;
}

const talentData: TalentItem[] = [
  {
    domain: "Technology",
    students: 1214,
    skills:
      "Python, Java, Cloud (AWS/Azure), Data Science, DSA — live projects & hackathons",
  },
  {
    domain: "Management",
    students: 640,
    skills:
      "Financial Modelling, Analytics, Digital Marketing — SAP/Tally certified",
  },
  {
    domain: "Law",
    students: 129,
    skills:
      "Contract Drafting, Litigation, Corporate Law — moot court & internship exposure",
  },
  {
    domain: "Design",
    students: 48,
    skills:
      "UI/UX, Figma, Adobe Suite, Product Design — live client studios",
  },
  {
    domain: "Journalism & Media",
    students: 35,
    skills:
      "Digital Storytelling, Video Editing, Social Media — newsroom simulation",
  },
  {
    domain: "Agriculture",
    students: 21,
    skills:
      "Precision Farming, Agri-Tech, Soil Science — field & lab training",
  },
  {
    domain: "Allied Health Sciences",
    students: 135,
    skills:
      "Clinical Diagnostics, Patient Care — hospital-affiliated training and GMP Practices",
  },
  {
    domain: "Education",
    students: 34,
    skills:
      "GMP Practices, Drug Formulation, Regulatory Affairs — lab-certified",
  },
  {
    domain: "Architecture",
    students: 17,
    skills:
      "AutoCAD, Revit, Sustainable Design — live studio projects",
  },
  {
    domain: "Liberal Arts",
    students: 142,
    skills: "Research Methods, Communication, Behavioural Analysis",
  },
  {
    domain: "Pharmacy and Physiotherapy",
    students: 191,
    skills: "Drug Formulation, Regulatory Affairs — lab-certified",
  },
  {
    domain: "Hotel Management",
    students: 12,
    skills: "Communication, leadership, and customer service.",
  },
];

const TalentByDomain = () => {
  return (
    <section className="bg-[#faf8f4] px-5 pt-10 sm:px-8 md:pt-14 lg:px-10 xl:px-0">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex items-start justify-between gap-6 md:mb-12">
          <h2
            className="
              font-serif
              text-[34px]
              leading-[1.1]
              tracking-[-0.02em]
              text-[#052451]
              sm:text-[42px]
              md:text-[55px]
            "
          >
            Talent by Domain/School
          </h2>

          <p
            className="
              mt-3
              shrink-0
              text-[9px]
              font-medium
              uppercase
              tracking-[2px]
              text-[#536070]
              sm:text-xs
            "
          >
            BASIS ON 2025–26 RECORDS
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-3">
          {talentData.map((item) => (
            <div
              key={item.domain}
              className="
                min-h-[125px]
                border
                border-[#d9d7d3]
                bg-[#fdfcfb]
                
                p-5
                sm:min-h-[126px]
              "
            >
              {/* Card Header */}
              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-4
                  border-b
                  border-[#dedbd7]
                  pb-[10px]
                "
              >
                <h3
                  className="
                    pt-[1px]
                    font-serif
                    text-[17px]
                    leading-[1.2]
                    text-[#00225C]
                    sm:text-2xl
                  "
                >
                  {item.domain}
                </h3>

                <div className="shrink-0">
                  <div
                    className="
                      font-serif
                      text-[21px]
                      leading-none
                      text-[#12233F]
                      sm:text-[28px]
                    "
                  >
                    {item.students}
                  </div>

                  <div
                    className="
                      mt-[5px]
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-[#9ba0a8]
                    "
                  >
                    STUDENTS
                  </div>
                </div>
              </div>

              {/* Skills */}
              <p
                className="
                  mt-[10px]
                  text-[9px]
                  leading-[1.8]
                  text-black
                  sm:text-sm
                "
              >
                <span className="font-semibold">Core skills:</span>{" "}
                {item.skills}
              </p>
            </div>
          ))}
        </div>
        <Divider />
      </div>
    </section>
  );
};

export default TalentByDomain;