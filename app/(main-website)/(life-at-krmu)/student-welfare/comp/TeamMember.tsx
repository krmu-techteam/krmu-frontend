import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const teamMembers = [
  {
    id: "1",
    name: "Mr. Abhishek",
    alt: "Mr. Abhishek, Event Manager, Department of Student Welfare, KRMU",
    role: "Event Manager",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Abhishek_d1daf786ff.png",
    ringClass: "linear-gradient(180deg, #DFCC99 0%, #FFFFFF 100%)",
  },
  {
    id: "2",
    name: "Mr. Raj Jayswal",
    alt: "Mr. Raj Jayswal, Student Success Manager, KRMU",
    role: "Student Success Manager",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Raj_Jayswal_a127a8fd50.png",
    ringClass: "linear-gradient(180deg, #DFCC99 0%, #FFFFFF 100%)",
  },
  {
    id: "3",
    name: "Mr. Rahul Kumar Jha",
    alt: "Mr. Rahul Kumar Jha, Music Teacher, Department of Student Welfare, KRMU",
    role: "Music Teacher",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Mr_Rahul_Kumar_Jha_85c6969c7c.png",
    ringClass: "linear-gradient(180deg, #DFCC99 0%, #FFFFFF 100%)",
  },
  {
    id: "4",
    name: "Mr. Raj Bahadur",
    alt: "Mr. Raj Bahadur, Theatre & Dance Teacher, Department of Student Welfare, KRMU",
    role: "Theatre & Dance Teacher",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Raj_Bahadur_3fa5f45669.png",
    ringClass: "linear-gradient(180deg, #DFCC99 0%, #FFFFFF 100%)",
  },
  {
    id: "5",
    name: "Mr. Jagjeet Singh",
    alt: "Mr. Jagjeet Singh, Sports Incharge, Department of Student Welfare, KRMU",
    role: "Sports Incharge",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Jagjeet_Singh_af059c84a3.png",
    ringClass: "linear-gradient(180deg, #DFCC99 0%, #FFFFFF 100%)",
  },
  {
    id: "6",
    name: "Mr. Sunil",
    alt: "Mr. Sunil, Sports Coach, Department of Student Welfare, KRMU",
    role: "Sports Coach",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Sunil_387f833441.png",
    ringClass: "linear-gradient(180deg, #DFCC99 0%, #FFFFFF 100%)",
  },
  {
    id: "7",
    name: "Ms. Pravanya Batra",
    alt: "Ms. Pravanya Batra, DSW Coordinator, K.R. Mangalam University",
    role: "DSW Coordinator",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Pravanya_Batra_c676339dd4.png",
    ringClass: "linear-gradient(180deg, #D1AFBF 0%, #FFFFFF 100%)",
  },
  {
    id: "8",
    name: "Mr. Himanshu",
    alt: "Mr. Himanshu, Office Assistant, Department of Student Welfare, KRMU",
    role: "Office Assistant",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Himanshu_ea3ebd87ea.png",
    ringClass: "linear-gradient(180deg, #DFCC99 0%, #FFFFFF 100%)",
  },
];

const TeamMember = () => {
  return (
    <section
      className={`${poppins.className} bg-white px-4 pb-10 pt-0 md:px-10 lg:px-12`}
    >
      <div className="mx-auto w-full max-w-[1550px]">
        <h3 className="mb-6 text-center text-[30px] font-bold leading-tight text-black md:text-[45px]">
          Team Members
        </h3>

        <div className="flex flex-wrap gap-6 xl:gap-8 justify-center">
          {teamMembers.map((member) => (
            <article
              key={`${member.id}`}
              className="flex h-full sm:min-h-[387px] w-[310px] lg:w-[290px] xl:w-[359px]  flex-col items-center justify-center rounded-md bg-[#EDE3C7] px-5 pb-5 pt-4 text-center"
            >
              <div
                className="relative mb-6 h-[240px] xl:h-[262px] w-[240px] xl:w-[262px] overflow-hidden rounded-full shadow-[0_16px_35px_rgba(15,23,42,0.08)]"
                style={{ background: member.ringClass }}
              >
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  className="object-cover p-3 rounded-full"
                />
              </div>

              <h4 className="text-[20px] font-bold leading-tight text-black">
                {member.name}
              </h4>
              <p className="mt-1 text-[20px] font-normal leading-tight text-black">
                {member.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
