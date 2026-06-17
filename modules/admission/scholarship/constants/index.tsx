import React from "react";

export interface NoteItem {
  id: number;
  text: string;
  listType?: "ul" | "div";
  list?: string[];
  extra?: React.ReactNode;
}

export interface CellConfig {
  content: React.ReactNode;
  rowSpan?: number;
  colSpan?: number;
  id?: string;
  isHeader?: boolean;
}

export type RowConfig = CellConfig[];

// ==========================================
// UG Notes Data
// ==========================================

export const ugColumn1Notes: NoteItem[] = [
  {
    id: 1,
    text: "Above scholarship is applicable only on the first year Programme fee",
  },
  {
    id: 2,
    text: "Shero Scholarship is (Applicable only on the Programme Fee for Semester 1 only",
  },
  {
    id: 3,
    text: "This scholarship policy (Part A, Part B and Part C) is not applicable for D.Pharm",
  },
  {
    id: 4,
    text: "Part A and Part C is not applicable for LLB (Hons.) and B.Ed program. (Only Part B is applicable)",
  },
];

export const ugColumn2Notes: NoteItem[] = [
  {
    id: 5,
    text: "No two scholarships will be combined.For CUET Scholarship either percentage (CUET-1) or percentile (CUET-2) will be considered.",
  },
  {
    id: 6,
    text: "Part A Scholarship will be awarded on the basis of an overall aggregate marks obtained in the last qualifying examination",
  },
  {
    id: 7,
    text: "For Sports scholarship below criteria will be applicable :-",
    listType: "div",
    list: [
      "a) Latest 3 years performance will be considered",
      "b) Scholarship will awarded upon certificate verification as well as Physical test",
      "c) University will only cover Traveling allowance, Registration and match fees",
    ],
  },
  {
    id: 8,
    text: "2nd Instalment and 3rd instalment (where applicable) of scholarship amount will be paid by cheque if the student fulfils ALL the criteria a, b, c as listed under:-",
    listType: "div",
    list: [
      "a) Attendance in immediately preceding semester is 75% or above",
      "b) The student has cleared examination of ALL the subjects which were on offer in the immediately preceding semester",
      "c) There is no case of indiscipline, unfair means or misconduct",
    ],
  },
];

export const ugColumn3Notes: NoteItem[] = [
  {
    id: 9,
    text: "For the CUET Scholarship, anyone who has attempted at least 3 papers and has an aggregate percentage of 40 or above will receive a 10% scholarship on their Programme Fee for Semester 1. If a student has attempted 4 or more papers, the scholarship criteria outlined in the above table for CUET-1 & CUET 2 will be applicable. In such cases, the 3 paper criteria mentioned here will not be considered.",
  },
  {
    id: 10,
    text: "This policy is not applicable for Lateral Entry and Migration",
    extra: (
      <p className="font-normal">
        <strong>Important :</strong> For detailed sports scholarship visit our website
        {/* <Link
          href="https://www.krmangalam.edu.in/wp-content/uploads/2025/03/sports-club-sports-scholarship-policy-2025-26.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here
        </Link> */}
      </p>
    ),
  },
];

// ==========================================
// PG Notes Data
// ==========================================

export const pgColumn1Notes: NoteItem[] = [
  {
    id: 1,
    text: "Applicable only on the Programme Fee for Semester 1",
  },
  {
    id: 2,
    text: "2nd Instalment and 3rd instalment (where applicable) of scholarship amount will be paid by cheque if the student fulfils ALL the criteria listed under:-",
    listType: "ul",
    list: [
      "Attendance in immediately preceding semester is 75% or above.",
      "The student has cleared examination of ALL the subjects which were on offer in the immediately preceding semester.",
      "There is no case of indiscipline, unfair means or misconduct. \u2002\u2002",
    ],
  },
];

export const pgColumn2Notes: NoteItem[] = [
  {
    id: 3,
    text: "No two scholarships can be combined or offered to students.",
  },
  {
    id: 4,
    text: "This policy is applicable for B.Ed ., LL.B and not applicable for M. Pharma.",
  },
  {
    id: 5,
    text: "This policy is not applicable for Lateral Entry and Migration.",
  },
];

// ==========================================
// UG Table Data Configurations
// ==========================================

export const ugPartAHeaders = ["Eligibility Criteria", "Scholarship", "Remarks"];
export const ugPartARows: RowConfig[] = [
  [
    { content: "90% and above" },
    { content: "100%" },
    {
      content:
        "To be paid in 3 instalment-1st instalment (25%) will be paid upfront post documents verification and the amount of scholarship will be deducted from the semester fee at the time of registration. 2nd instalment (50%) and 3rd instalment (25%) will be paid by cheque in 2nd Semester and 3rd Semester respectively, if the student fulfils all the criteria listed under Note : 7) given below the table.",
      rowSpan: 1,
    },
  ],
  [
    { content: "85% to less than 90%" },
    { content: "35%", id: "undergraduate" },
    {
      content:
        "To be paid in 2 equal instalments-1st instalment will be paid upfront post documents verification and the amount of scholarship will be deducted from the semester fee at the time of registration. 2nd instalment will be paid by cheque in 2nd Semester, if the student fulfils all the criteria listed under Note: 7) given below the table.",
      rowSpan: 3,
    },
  ],
  [
    { content: "80% to less than 85%" },
    { content: "25%" },
  ],
  [
    { content: "75% to less than 80%" },
    { content: "10%" },
  ],
];

export const ugPartBHeaders = ["Category", "Scholarship", "Remarks"];
export const ugPartBRows: RowConfig[] = [
  [
    {
      content: (
        <>
          Shero Scholarship (For Female Students) ) (Applicable only on the
          Programme Fee for Semester 1 only)
        </>
      ),
    },
    { content: "10%" },
    {
      content:
        "For Female students securing 70% and above in Class XII (To be paid in 2 equal instalments-1st instalment will be paid upfront post documents verification and the amount of scholarship will be deducted from the semester fee at the time of registration. 2nd instalment will be paid by cheque in 2nd Semester, if the student fulfils all the criteria listed under Note: 8) given below the table.)",
    },
  ],
  [
    { content: "Siblings" },
    { content: "15%" },
    { content: "Applicable to all siblings excluding the first child admitted at KRMU" },
  ],
  [
    { content: "K.R. Mangalam Group" },
    { content: "15%" },
    {
      content:
        "For students who have passed the 12th standard from K.R.Mangalam group of schools or KRMU Graduates opting to pursue another Undergraduate (UG) programme",
    },
  ],
  [
    { content: "Defense Scholarship" },
    { content: "15%" },
    { content: "For children of Defence Personnel" },
  ],
  [
    { content: "Staff Discount" },
    { content: "15%" },
    { content: "Children of KRMU staff seeking admission in all UG courses" },
  ],
  [
    {
      content: (
        <>
          <b>Sports Quota</b> - Represented India in Olympic Games, Asian Games,
          World University, World Games, World Championships, World Cups,
          Commonwealth Games, Asian Meets, Test Matches in Cricket. Commonwealth
          Championships, Asian Championship. Asia Cup, SAF Games, Davis Games,
          Wimbledon Championship, US French, Australian Open Tennis
          Championship, Thomas Cup, Uber Cup, ALL England Badminton Tournament
          and International Athletic Permit Meet and any other International
          Tournament/ Championship, Games and Sports approved by IOA (Indian
          Olympic Association) and Govt. of India recognized Sports Federations.
        </>
      ),
    },
    { content: "100%" },
    { content: "Position and Participation" },
  ],
  // Sports Quota - Senior National / National Games / Federation Cup / All India Inter University
  [
    {
      content: (
        <>
          <b>Sports Quota</b> – Senior National / National Games / Federation Cup
          <br />/ All India Inter University
        </>
      ),
      rowSpan: 4,
    },
    { content: "75%" },
    { content: "1st position" },
  ],
  [
    { content: "50%" },
    { content: "2nd position" },
  ],
  [
    { content: "25%" },
    { content: "3rd position" },
  ],
  [
    { content: "10%" },
    { content: "Participation" },
  ],
  // Sports Quota – Junior National / Zone wise university / Ranji Trophy
  [
    {
      content: (
        <>
          <b>Sports Quota</b> – Junior National / Zone wise university / Ranji
          <br />
          Trophy
        </>
      ),
      rowSpan: 4,
    },
    { content: "75%" },
    { content: "1st position" },
  ],
  [
    { content: "50%" },
    { content: "2nd position" },
  ],
  [
    { content: "25%" },
    { content: "3rd position" },
  ],
  [
    { content: "10%" },
    { content: "Participation" },
  ],
  // Sports Quota – National Women Championship / Rural Championship / School National (SGFI)/ level
  [
    {
      content: (
        <>
          <b>Sports Quota</b> – National Women Championship / Rural Championship /<br />
          School National (SGFI)/ level
        </>
      ),
      rowSpan: 4,
    },
    { content: "75%" },
    { content: "1st position" },
  ],
  [
    { content: "50%" },
    { content: "2nd position" },
  ],
  [
    { content: "25%" },
    { content: "3rd position" },
  ],
  [
    { content: "10%" },
    { content: "Participation" },
  ],
  // Sports Quota – K.V.S National / C.B.S.E National / Navodaya National / Sanik School National / All India Public School National
  [
    {
      content: (
        <>
          <b>Sports Quota</b> – K.V.S National / C.B.S.E National / Navodaya
          <br />
          National / Sanik School National / All India Public School National
        </>
      ),
      rowSpan: 4,
    },
    { content: "25%" },
    { content: "1st position" },
  ],
  [
    { content: "15%" },
    { content: "2nd position" },
  ],
  [
    { content: "15%" },
    { content: "3rd position" },
  ],
  [
    { content: "10%" },
    { content: "Participation" },
  ],
  // Sports Quota – State Championship
  [
    {
      content: (
        <>
          <b>Sports Quota</b> – State Championship
        </>
      ),
      rowSpan: 4,
    },
    { content: "25%" },
    { content: "1st position" },
  ],
  [
    { content: "15%" },
    { content: "2nd position" },
  ],
  [
    { content: "15%" },
    { content: "3rd position" },
  ],
  [
    { content: "10%" },
    { content: "Participation" },
  ],
  // Sports Quota – CBSE Cluster / KVS / Navodaya / Sanik / Zonal / District / State Women Festival
  [
    {
      content: (
        <>
          <b>Sports Quota</b> – C.B.S.E Cluster / K.V.S. / Navodaya / Sanik /<br />
          Zonal / District / State Women Festival
        </>
      ),
      rowSpan: 4,
    },
    { content: "25%" },
    { content: "1st position" },
  ],
  [
    { content: "15%" },
    { content: "2nd position" },
  ],
  [
    { content: "15%" },
    { content: "3rd position" },
  ],
  [
    { content: "10%" },
    { content: "Participation" },
  ],
  // Remark rows inside tbody
  [
    {
      content: "Remark",
      colSpan: 3,
      isHeader: true,
    },
  ],
  [
    {
      content: (
        <ol>
          <li>
            For 100% Scholarship -To be paid in 3 instalment-1st instalment (25%) will be paid upfront post documents verification and the amount of scholarship will be deducted from the semester fee at the time of registration. 2nd instalment (50%) and 3rd instalment (25%) will be paid by cheque in 2nd Semester and 3rd Semester respectively, if the student fulfills all the criteria listed under Note : 7) given below the table.
          </li>
          <li>
            For 75%/ 50%/ 25%/ 10% Scholarship - To be paid in 2 equal instalments-1st instalment will be paid upfront post documents verification and the amount of scholarship will be deducted from the semester fee at the time of registration. 2nd instalment will be paid by cheque in 2nd Semester, if the student fulfils all the criteria listed under Note: 7) given below the table.
          </li>
        </ol>
      ),
      colSpan: 3,
    },
  ],
];

export const eligibilityHeaders = ["Eligibility Criteria", "Scholarship"];

export const cuet1Rows: RowConfig[] = [
  [{ content: "90% & above" }, { content: "100%" }],
  [{ content: "75% to less than 90%" }, { content: "50%" }],
  [{ content: "60% to less than 75%" }, { content: "35%" }],
  [{ content: "50% to less than 60%" }, { content: "25%" }],
  [{ content: "45% to less than 50%" }, { content: "10%" }],
];

export const cuet2Rows: RowConfig[] = [
  [{ content: "95 percentile and above" }, { content: "100%" }],
  [{ content: "85 percentile to less than 95 percentile" }, { content: "35%" }],
  [{ content: "70 percentile to less than 85 percentile" }, { content: "25%" }],
  [{ content: "50 percentile to less than 70 percentile" }, { content: "10%" }],
];

export const jeeRows: RowConfig[] = [
  [{ content: "95.01 percentile and above" }, { content: "100%" }],
  [{ content: "90.01 percentile to 95th percentile" }, { content: "35%" }],
  [{ content: "80.01 percentile to 90th percentile" }, { content: "25%" }],
  [{ content: "70.01 percentile to 80th percentile" }, { content: "10%" }],
];

export const clatRows: RowConfig[] = [
  [{ content: "1-2500" }, { content: "100%" }],
  [{ content: "2501-5000" }, { content: "35%" }],
  [{ content: "5001-10000" }, { content: "25%" }],
];

export const nataRows: RowConfig[] = [
  [{ content: "130.01 & above" }, { content: "100%" }],
  [{ content: "110.01 to 130" }, { content: "35%" }],
  [{ content: "90 to 110" }, { content: "25%" }],
];

export const ugPartCRemarkRows: RowConfig[] = [
  [
    {
      content:
        "1. For 100% Scholarship -To be paid in 3 instalment-1st instalment (25%) will be paid upfront post documents verification and the amount of scholarship will be deducted from the semester fee at the time of registration. 2nd instalment (50%) and 3rd instalment (25%) will be paid by cheque in 2nd Semester and 3rd Semester respectively, if the student fulfills all the criteria listed under Note : 7) given below the table.",
      colSpan: 3,
    },
  ],
  [
    {
      content:
        "2. For 75%/ 50%/ 25%/ 10% Scholarship - To be paid in 2 equal instalments-1st instalment will be paid upfront post documents verification and the amount of scholarship will be deducted from the semester fee at the time of registration. 2nd instalment will be paid by cheque in 2nd Semester, if the student fulfils all the criteria listed under Note: 7) given below the table.",
    },
  ],
];

// ==========================================
// PG Table Data Configurations
// ==========================================

export const pgMbaHeaders = ["Eligibility Criteria", "Scholarship", "Remarks"];
export const pgMbaRows: RowConfig[] = [
  [
    { content: "95% and above" },
    { content: "100%" },
    {
      content: (
        <div>
          To be paid in 3 instalment-1st instalment (25%) will be paid upfront
          post documents verification and the amount of scholarship will be
          deducted from the semester fee at the time of registration. 2nd
          instalment (50%) and 3rd instalment (25%) will be paid by cheque in
          2nd Semester and 3rd Semester respectively, if the student fulfills
          all the criteria listed under Note : 2) given below the table.
        </div>
      ),
      rowSpan: 1,
    },
  ],
  [
    { content: "85% to less than 95%" },
    { content: "35%", id: "undergraduate" },
    {
      content: (
        <div>
          To be paid in 2 equal instalments-1st instalment will be paid upfront
          post documents verification and the amount of scholarship will be
          deducted from the semester fee at the time of registration. 2nd
          instalment will be paid by cheque in 2nd Semester, if the student
          fulfils all the criteria listed under Note: 2) given below the table.
        </div>
      ),
      rowSpan: 2,
    },
  ],
  [
    { content: "75% to less than 85%" },
    { content: "25%" },
  ],
];

export const pgNonMbaHeaders = ["Eligibility Criteria", "Scholarship", "Remarks"];
export const pgNonMbaRows: RowConfig[] = [
  [
    { content: "75% and above marks in Graduation" },
    { content: "25%", id: "undergraduate" },
    {
      content: (
        <div>
          To be paid in 2 equal instalments-1st instalment will be paid upfront
          post documents verification and the amount of scholarship will be
          deducted from the semester fee at the time of registration. 2nd
          instalment will be paid by cheque in 2nd Semester, if the student
          fulfils all the criteria listed under Note: 2) given below the table.
        </div>
      ),
      rowSpan: 2,
    },
  ],
  [
    {
      content: (
        <>
          65% to less than 75% marks in
          <br /> Graduation
        </>
      ),
    },
    { content: "10%" },
  ],
];

export const pgCatMatXatHeaders = ["Eligibility Criteria", "Scholarship", "Remarks"];
export const pgCatMatXatRows: RowConfig[] = [
  [
    { content: "95.01 percentile and above" },
    { content: "100%" },
    {
      content:
        "To be paid in 3 instalment-1st instalment (25%) will be paid upfront post documents verification and the amount of scholarship will be deducted from the semester fee at the time of registration. 2nd instalment (50%) and 3rd instalment (25%) will be paid by cheque in 2nd Semester and 3rd Semester respectively, if the student fulfills all the criteria listed under Note : 2) given below the table.",
      rowSpan: 1,
    },
  ],
  [
    { content: "85.01 percentile to 95 percentile" },
    { content: "35%" },
    {
      content:
        "To be paid in 2 equal instalments-1st instalment will be paid upfront post documents verification and the amount of scholarship will be deducted from the semester fee at the time of registration. 2nd instalment will be paid by cheque in 2nd Semester, if the student fulfils all the criteria listed under Note: 2) given below the table.",
      rowSpan: 2,
    },
  ],
  [
    { content: "75 percentile to 85 percentile" },
    { content: "25%" },
  ],
];

export const pgCuetHeaders = ["Eligibility Criteria", "Scholarship", "Remarks"];
export const pgCuetRows: RowConfig[] = [
  [
    { content: "75% and above marks in Graduation" },
    { content: "25%" },
    {
      content: (
        <>
          1. Applicable for students who attempted CUET
          <br />
          2. To be paid in 2 equal instalments-1st instalment will be paid
          upfront post documents verification and the amount of scholarship will
          be deducted from the semester fee at the time of registration. 2nd
          instalment will be paid by cheque in 2nd Semester, if the student
          fulfils all the criteria listed under Note: 2) given below the table.
        </>
      ),
      rowSpan: 2,
    },
  ],
  [
    { content: "50% to less than 75% marks in Graduation" },
    { content: "10%" },
  ],
];

export const pgAlumniHeaders = ["Eligibility Criteria", "Scholarship", "Remark"];
export const pgAlumniRows: RowConfig[] = [
  [
    {
      content:
        "KRMU Undergraduate Programme student seeking admission in Post Graduate Programme",
    },
    { content: "10%" },
    {
      content: (
        <>
          Alumni Scholarship to be paid in two equal instalments:
          <br />
          To be paid in 2 equal instalments-1st instalment will be paid upfront
          post documents verification and the amount of scholarship will be
          deducted from the semester fee at the time of registration. 2nd
          instalment will be paid by cheque in 2nd Semester, if the student
          fulfils all the criteria listed under Note: 2) given below the table.
        </>
      ),
    },
  ],
];
