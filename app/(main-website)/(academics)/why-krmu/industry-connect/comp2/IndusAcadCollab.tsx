import IndusAcadCollabCard from "./IndusAcadCollabCard";
const indusData = [
  {
    imgUrl:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/ey_kp_scaled_e223e383eb.png",
    heading: "Ernst & Young Associates LLP",
    pointer: [
      "The courses are delivered in partnership with Ernst & Young Associates LLP.",
      "K. R. Mangalam University would be a Centre of Excellence for quality-education in analytics.",
      "The Students would be awarded certification from Ernst & Young Associates LLP.",
    ],
  },
  {
    imgUrl:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/grantthornton_dfa163d9fe.webp",
    heading: "Grant Thornton",
    pointer: [
      `This collaboration between Grant Thornton India LLP and K.R. Mangalam University aims to foster industry-academia engagement, enhance employability, and jointly develop capability-building initiatives for students and faculty.`,
      `Co-create learning interventions, 9 certification programs, and skill-development initiatives aligned with industry needs.`,
      `Facilitate opportunities for internships, live projects, and placements subject to organizational requirements.`,
      `Encourage joint research, knowledge sharing, and faculty development to strengthen academic excellence.`,
    ],
  },
  {
    imgUrl:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/ibm_1c8f2c40a2.jpg",
    heading: "IBM",
    pointer: [
      `Integrate IBM-aligned curriculum, tools, and industry practices into the B.Tech programs
in Data Science and Cyber Security:`,
      `Provide students with hands-on exposure to real-world technologies, platforms, labs, and
case studies:`,
      `Enhance competency development through certifications, workshops, masterclasses,
and project-based learning:`,
      `Foster research, innovation, and co-creation of solutions in emerging technology
domains.`,
    ],
  },

  {
    imgUrl:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Whats_App_Image_2026_01_05_at_11_27_36_AM_81b54c957e.jpeg",
    heading: "Faridabad Management Association",
    pointer: [
      `To establish a collborative relationship for enhancinf leadership capacities of students
nd faculty`,
      `To jointly organize high impact events like leasership talks, workshops, HR meets, FDP's.`,
      `To activate students chapters through membership of the students to nuture students.`,
    ],
  },
  {
    imgUrl:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Whats_App_Image_2026_01_05_at_11_28_51_AM_b53e788493.jpeg",
    heading: "Onevarsity",
    pointer: [
      `Effective collaboration with Onevarsity is a interv alia engagement in providing Unified
Academic solutions, Placement & Guest faculty ,other services to university`,
      `Integrate industry-aligned courses, certifications, and experiential learning modules
delivered through Onevarsity.`,
      `Enable data-driven tracking of student progress, competencies, and career pathways.`,
      `Strengthen faculty capability, curriculum relevance, and academic excellence through
technology-enabled engagement`,
    ],
  },
  {
    imgUrl:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/xebia_1_scaled_a3d0cd5d05.webp",
    heading: "Xebia",
    pointer: [
      `Xebia and KR Managalam University collaborates to design and develop industry-
pecific course content and modules in high-demand areas.`,
      `Launching B.Tech or certification programs with specializations in fields like Data Science
& Machine Learning, Al, DevOps, Cloud Engineering, Full Stack Development, and
Cybersecurity.`,
      `Offering students opportunities for remote/onsite internships and hands-on, real-world
industry projects.`,
    ],
  },
  {
    imgUrl:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/imagin_xp_2_24fb26164b.webp",
    heading: "ImaginXP",
    pointer: [
      `To engage with KR Managalam University to bridge the industry-academia gap.`,
      `To make students are exposed to the latest software and products, will invite top
faculties/industry experts for guest leactures.`,
    ],
  },
  {
    imgUrl:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/fair_law_1_b3eb09d16e.png",
    heading: "Fair Law Practitioner",
    pointer: [
      `The MoU establishes collaboration between K.R. Mangalam University and Fair Law
Practitioners to provide internships and hands-on exposure for law students, particularly
in procedural and substantive legal practice,`,
      `Provide students with hands-on exposure to real-world technologies, platforms, labs, and
case studies:`,
      `Internships include training on court procedures, drafting and pleadings, hierarchy of
courts, civil and criminal law fundamentals, case handling, and interaction with legal
experts via tutorials, Google Meet sessions, and shared learning materials.`,
    ],
  },
];

const IndusAcadCollab = () => {
  return (
    <section className="px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-4xl font-semibold text-center">
          Industry–Academia Collaborations
        </h3>
        <div>
          <IndusAcadCollabCard data={indusData} />
        </div>
      </div>
    </section>
  );
};

export default IndusAcadCollab;
