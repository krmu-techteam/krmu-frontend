import IPRCard from "./IPRCard";

const rdcTeamData = [
  {
    name: "Dr. Inderpreet Kaur (Associate Dean-SOLS)",
    desg: "Chairperson Member",
    facultyUrl: "/faculty/dr-inderpreet-kaur-saggu",
    facImgUrl: "/ipr/teamipr/image-1.png",
  },
  {
    name: "Dr. Shweta Bansal (Associate Prof.-SOET)",
    desg: "Member",
    facultyUrl: "/faculty/prof-dr-shweta-a-bansal",
    facImgUrl: "/ipr/teamipr/image-2.png",
  },
  {
    name: "Dr. Anshika Prakash (Associate Prof.-SOMC)",
    desg: "Member",
    facultyUrl: "/faculty/dr-anshika-aggarwal",
    facImgUrl: "/ipr/teamipr/image-3.png",
  },
  {
    name: "Dr. Narender Yadav (Assistant Prof.-SMAS)",
    desg: "Member",
    facultyUrl: "/faculty/dr-narender-yadav",
    facImgUrl: "/ipr/teamipr/image-4.png",
  },
  {
    name: "Dr. Anumeha Mathur (Assistant Prof.-SOMC)",
    desg: "Member",
    facultyUrl: "/faculty/dr-anumeha-mathur",
    facImgUrl: "/ipr/teamipr/image-5.png",
  },
  {
    name: "Ms. Parul Sethi (Assistant Prof.-SOLS)",
    desg: "Member",
    facultyUrl: "/faculty/ms-parul",
    facImgUrl: "/ipr/teamipr/image-6.png",
  },
  {
    name: "Ms. Gargi Singh (Assistant Prof.-SOLS)",
    desg: "Member Secretary",
    facultyUrl: "/faculty/ms-gargi-singh",
    facImgUrl: "/ipr/teamipr/image-7.png",
  },
];
const IPRMember = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full mt-10">
      <h3 className="text-3xl md:text-5xl text-white font-bold">
        Member of IPR Cell
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {rdcTeamData &&
          rdcTeamData?.map((item, i) => {
            return (
              <IPRCard
                key={i}
                name={item?.name}
                desg={item?.desg}
                facUrl={item?.facultyUrl}
                facImgUrl={item?.facImgUrl}
              />
            );
          })}
      </div>
    </div>
  );
};

export default IPRMember;
