import Image from "next/image";

const teamMembers = [
  {
    name: "Mr. Abhishek",
    role: "Event Manager",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Abhishek_1_5c3e032ed2.jpg",
  },
  {
    name: "Mr. Raj Jayswal",
    role: "Student Success Manager",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/image_599_a259dc4cf4.jpg",
  },
  {
    name: "Mr. Rahul Kumar Jha",
    role: "Music Teacher",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Ellipse_126_1_95cbc91157.jpg",
  },
  {
    name: "Mr. Raj Bahadur",
    role: "Theatre & Dance Teacher",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Raj_Bahadur_1_cb326d469a.jpg",
  },
  {
    name: "Mr. Jagjeet Singh",
    role: "Sports Incharge",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Jagjeet_Singh_2_84b724d811.jpg",
  },
  {
    name: "Mr. Sunil",
    role: "Sports Coach",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Sunil_1_d32fd2a10d.jpg",
  },
  {
    name: "Ms. Pravanya Batra",
    role: "DSW Coordinator",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Pravanya_Batra_1_9b805feb5c.jpg",
    ringClass: "border-[#ddb1c7]",
  },
  {
    name: "Mr. Himanshu",
    role: "Office Assistant",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Himanshu_2_5a392b159c.jpg",
  },
];

const TeamMember = () => {
  return (
    <section className="bg-white px-8 pb-10 pt-0 md:px-12">
      <div className="mx-auto w-full max-w-[1500px]">
        <h3 className="mb-6 text-center text-[30px] font-bold leading-tight text-black md:text-[34px]">
          Team Members
        </h3>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <article
              key={`${member.name}-${member.role}`}
              className="flex min-h-[300px] flex-col items-center justify-center rounded-md bg-[#EDE3C7] px-5 pb-5 pt-4 text-center"
            >
              <div
                className={`relative mb-4 h-[200px] w-[200px] overflow-hidden rounded-full  bg-[linear-gradient(180deg,#DFCC99_0%,#FFFFFF_100%)] shadow-[0_16px_35px_rgba(15,23,42,0.08)]`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="150px"
                  className="object-cover p-2 rounded-full"
                  priority={index < 4}
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
