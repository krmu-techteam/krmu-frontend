import Image from "next/image";

const interRoles = [
  {
    imageUrl: "/inter-relation/roles/image-1.png",
    desc: `Facilitate short immersion programmes with international
              universities`,
  },
  {
    imageUrl: "/inter-relation/roles/image-2.png",
    desc: `Support for international activities enhancing intercultural relations`,
  },
  {
    imageUrl: "/inter-relation/roles/image-3.png",
    desc: `Support for hosting engaging seminars series featuring international experts and faculties`,
  },
  {
    imageUrl: "/inter-relation/roles/image-4.png",
    desc: `Establish progressive academic programmes`,
  },
  {
    imageUrl: "/inter-relation/roles/image-5.png",
    desc: `Facilitating Master class certification by Australian Universities`,
  },
  {
    imageUrl: "/inter-relation/roles/image-6.png",
    desc: `Support information for worldwide scholarships`,
  },
  {
    imageUrl: "/inter-relation/roles/image-7.png",
    desc: `Support for students aspiring study abroad by providing free IELTS/TOFEL preparation classes`,
  },
  {
    imageUrl: "/inter-relation/roles/image-8.png",
    desc: `Support for international students and foreign visiting faculty`,
  },
  {
    imageUrl: "/inter-relation/roles/image-9.png",
    desc: `Faculty development programmes with international support`,
  },
];

const InterRelationRoles = () => {
  return (
    <section className="py-10 bg-[#051630] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="w-full">
          <h3 className="text-3xl md:text-5xl text-center lg:text-left text-white font-semibold mb-5">
            Role of International Relations
          </h3>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {interRoles &&
            interRoles?.map((item, i) => {
              return (
                <div key={i} className="text-white w-full">
                  <Image src={item?.imageUrl} width={200} height={142} alt="" />
                  <p className="text-center my-5 text-sm">{item?.desc}</p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default InterRelationRoles;
