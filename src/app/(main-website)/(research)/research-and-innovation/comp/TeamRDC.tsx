import RDCCard from "../../research-overview/RDCCard";

const rdcTeamData = [
  {
    name: "Prof. (Dr.) Pawan Kumar (PhD)",
    desg: "Associate Dean Research",
    facultyUrl: "/faculty/dr-pawan-kumar",
    facImgUrl: "/teamrdc/pawan.webp",
  },
  {
    name: "Dr. Seema Raj (M.Phil, PhD)",
    desg: "Dean Research",
    facultyUrl: "/faculty/dr-seema-raj",
    facImgUrl: "/teamrdc/seema.png",
  },
  {
    name: "Dr. Surendra Kumar Yadav (PhD)",
    desg: "Associate Dean PhD Programme",
    facultyUrl: "/faculty/dr-surendra",
    facImgUrl: "/teamrdc/surendra.webp",
  },
  {
    name: "Dr. Prabhakar Bhandari (PhD)",
    desg: "Research Finance Officer",
    facultyUrl: "/faculty/dr-prabhakar",
    facImgUrl: "/teamrdc/prabhakar.webp",
  },
  {
    name: "Dr. Shivani Wadhwa (PhD)",
    desg: "Research Communication Officer",
    facultyUrl: "/faculty/dr-shivani-wadhwa",
    facImgUrl: "/teamrdc/wadhwa.png",
  },
  {
    name: "Aman Vishwakarma",
    desg: "MIS Executive",
    facultyUrl: "",
    facImgUrl: "/teamrdc/aman.png",
  },
];

const TeamRDC = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full mt-10">
      <h3 className="text-3xl md:text-5xl text-white font-bold">Team RDC</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {rdcTeamData &&
          rdcTeamData?.map((item, i) => {
            return (
              <RDCCard
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

export default TeamRDC;
