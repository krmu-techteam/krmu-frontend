import Image from "next/image";

const teamMembers = [
  {
    id: "1",
    name: "Mr. Abhishek",
    role: "Event Manager",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Abhishek_1_5c3e032ed2.jpg",
    ringClass: "linear-gradient(180deg, #DFCC99 0%, #FFFFFF 100%)",
  },
  {
    id: "2",
    name: "Mr. Raj Jayswal",
    role: "Student Success Manager",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/image_599_a259dc4cf4.jpg",
    ringClass: "linear-gradient(180deg, #DFCC99 0%, #FFFFFF 100%)",
  },
  {
    id: "3",
    name: "Mr. Rahul Kumar Jha",
    role: "Music Teacher",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Ellipse_126_1_95cbc91157.jpg",
    ringClass: "linear-gradient(180deg, #DFCC99 0%, #FFFFFF 100%)",
  },
  {
    id: "4",
    name: "Mr. Raj Bahadur",
    role: "Theatre & Dance Teacher",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Raj_Bahadur_1_cb326d469a.jpg",
    ringClass: "linear-gradient(180deg, #DFCC99 0%, #FFFFFF 100%)",
  },
  {
    id: "5",
    name: "Mr. Jagjeet Singh",
    role: "Sports Incharge",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Jagjeet_Singh_2_84b724d811.jpg",
    ringClass: "linear-gradient(180deg, #DFCC99 0%, #FFFFFF 100%)",
  },
  {
    id: "6",
    name: "Mr. Sunil",
    role: "Sports Coach",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Sunil_1_d32fd2a10d.jpg",
    ringClass: "linear-gradient(180deg, #DFCC99 0%, #FFFFFF 100%)",
  },
  {
    id: "7",
    name: "Ms. Pravanya Batra",
    role: "DSW Coordinator",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Pravanya_Batra_1_9b805feb5c.jpg",
    ringClass: "linear-gradient(180deg, #D1AFBF 0%, #FFFFFF 100%)",
  },
  {
    id: "8",
    name: "Mr. Himanshu",
    role: "Office Assistant",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Himanshu_2_5a392b159c.jpg",
    ringClass: "linear-gradient(180deg, #DFCC99 0%, #FFFFFF 100%)",
  },
];

const TeamMember = () => {
  return (
    <section className="bg-white px-8 pb-10 pt-0 md:px-12">
      <div className="mx-auto w-full max-w-[1550px]">
        <h3 className="mb-6 text-center text-[30px] font-bold leading-tight text-black md:text-[34px]">
          Team Members
        </h3>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {teamMembers.map((member) => (
            <article
              key={`${member.id}`}
              className="flex min-h-[300px] flex-col items-center justify-center rounded-md bg-[#EDE3C7] px-5 pb-5 pt-4 text-center"
            >
              <div
                className="relative mb-4 h-[250px] w-[250px] overflow-hidden rounded-full shadow-[0_16px_35px_rgba(15,23,42,0.08)]"
                style={{ background: member.ringClass }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover p-2 rounded-full"
                />
              </div>

              <h4 className="text-[18px] font-bold leading-tight text-black">
                {member.name}
              </h4>
              <p className="mt-1 text-[18px] leading-tight text-black">
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
