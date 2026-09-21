import Image from "next/image";

interface School {
  id: number;
  shortName: string;
  name: string;
  students: string;
  overallTrained: string;
  finalYearTrained: string;
  trainedPercentage: string;
  degree: string;
  skills: string;
  leadName: string;
  leadDesignation: string;
  leadImage?: string;
}

const schools: School[] = [
  {
    id: 1,
    shortName: "SOET",
    name: "School of Engineering & Technology",
    students: "4870",
    overallTrained: "3210",
    finalYearTrained: "1250",
    trainedPercentage: "20%",
    degree: "B.Tech CSE, B.Tech AI/ML, BCA, MCA",
    skills: "Python, Java, DSA, cloud, ML",
    leadName: "Mr. Dhaval Bhaskar",
    leadDesignation: "DOMAIN LEAD",
    leadImage: "/images/schools/dhaval-bhaskar.jpg",
  },
  {
    id: 2,
    shortName: "SOMC",
    name: "School of Management & Commerce",
    students: "4870",
    overallTrained: "3210",
    finalYearTrained: "1250",
    trainedPercentage: "20%",
    degree: "B.Tech CSE, B.Tech AI/ML, BCA, MCA",
    skills: "Python, Java, DSA, cloud, ML",
    leadName: "Ms. Sreejita Saha, Ms. Vanshita Jain",
    leadDesignation: "DOMAIN LEAD",
    leadImage: "/images/schools/sreejita-saha.jpg",
  },
  {
    id: 3,
    shortName: "SOLS",
    name: "School of Legal Studies",
    students: "4870",
    overallTrained: "3210",
    finalYearTrained: "1250",
    trainedPercentage: "20%",
    degree: "B.Tech CSE, B.Tech AI/ML, BCA, MCA",
    skills: "Python, Java, DSA, cloud, ML",
    leadName: "Ms. Jharna Vijay Jagtiani",
    leadDesignation: "DOMAIN LEAD",
    leadImage: "/images/schools/jharna-vijay.jpg",
  },
  {
    id: 4,
    shortName: "SOMAS",
    name: "School of Medical & Allied Sciences",
    students: "4870",
    overallTrained: "3210",
    finalYearTrained: "1250",
    trainedPercentage: "20%",
    degree: "B.Tech CSE, B.Tech AI/ML, BCA, MCA",
    skills: "Python, Java, DSA, cloud, ML",
    leadName: "Vibha Thakur",
    leadDesignation: "DOMAIN LEAD",
    leadImage: "/images/schools/vibha-thakur.jpg",
  },
  {
    id: 5,
    shortName: "SPRS",
    name: "School of Physiotherapy and Rehabilitation Sciences",
    students: "4870",
    overallTrained: "3210",
    finalYearTrained: "1250",
    trainedPercentage: "20%",
    degree: "B.Tech CSE, B.Tech AI/ML, BCA, MCA",
    skills: "Python, Java, DSA, cloud, ML",
    leadName: "Vibha Thakur",
    leadDesignation: "DOMAIN LEAD",
    leadImage: "/images/schools/vibha-thakur.jpg",
  },
  {
    id: 6,
    shortName: "SOLA",
    name: "School of Liberal Arts",
    students: "4870",
    overallTrained: "3210",
    finalYearTrained: "1250",
    trainedPercentage: "20%",
    degree: "B.Tech CSE, B.Tech AI/ML, BCA, MCA",
    skills: "Python, Java, DSA, cloud, ML",
    leadName: "Ms. Charu Gola",
    leadDesignation: "DOMAIN LEAD",
    leadImage: "/images/schools/charu-gola.jpg",
  },
];

const SchoolsAndGraduatingTalent = () => {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <h2 className="mb-8 font-serif text-[30px] leading-tight tracking-[-0.02em] text-[#062653] sm:mb-10 sm:text-[36px] lg:text-[40px]">
          Schools & graduating talent
        </h2>

        {/* Schools Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {schools.map((school) => (
            <SchoolCard key={school.id} school={school} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SchoolCardProps {
  school: School;
}

const SchoolCard = ({ school }: SchoolCardProps) => {
  return (
    <article className="border border-[#d9d9d6] bg-[#faf9f6] px-3.5 py-3.5 sm:px-3 flex flex-col justify-between">
      {/* School Name */}
      <div className="min-h-[66px]">
        <p className="mb-1.5 text-xs font-medium uppercase tracking-[0.08em] text-[#a02b35]">
          {school.shortName}
        </p>

        <h3 className="max-w-[310px] font-serif text-2xl leading-[1.15] text-[#00275c] mb-5">
          {school.name}
        </h3>
      </div>

      {/* Divider */}
      <div className="border-t border-[#deddd9]" />

      {/* Statistics */}
      <div className="grid grid-cols-4 py-2.5">
        <Stat value={school.students} label="STUDENTS" />

        <Stat value={school.overallTrained} label="OVERALL TRAINED" />

        <Stat value={school.finalYearTrained} label="FINAL YEAR TRAINED" />

        <Stat value={school.trainedPercentage} label="TRAINED %" highlight />
      </div>

      {/* Divider */}
      <div className="border-t border-[#deddd9]" />

      {/* Degree & Skills */}
      <div className="min-h-[47px] py-2.5 text-xs leading-[1.5] text-[#252525]">
        <p>
          <span className="font-semibold">Degree:</span> {school.degree}
        </p>

        <p>
          <span className="font-semibold">Core skills:</span> {school.skills}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-[#deddd9]" />

      {/* Domain Lead */}
      <div className="flex min-h-[41px] items-center gap-2 pt-2">
        <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-[#dedede]">
          {school.leadImage && (
            <Image
              src={school.leadImage}
              alt={school.leadName}
              fill
              className="object-cover"
            />
          )}
        </div>

        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-[#111]">
            {school.leadName}
          </p>

          <p className="text-[10px] uppercase tracking-[0.02em] text-[#333]">
            {school.leadDesignation}
          </p>
        </div>
      </div>
    </article>
  );
};

interface StatProps {
  value: string;
  label: string;
  highlight?: boolean;
}

const Stat = ({ value, label, highlight = false }: StatProps) => {
  return (
    <div className="min-w-0">
      <p
        className={`font-serif text-[17px] leading-none sm:text-[28px] ${
          highlight ? "text-[#a62c36]" : "text-[#092956]"
        }`}
      >
        {value}
      </p>

      <p className="mt-1 max-w-[55px] text-[5.5px] leading-[1.15] tracking-[0.08em] text-[#999]">
        {label}
      </p>
    </div>
  );
};

export default SchoolsAndGraduatingTalent;
