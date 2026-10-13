import IPRCard from "./IPRCard";

const rdcTeamData = [
    {
        name: "Dr. Inderpreet Kaur, Professor (SOLS)",
        desg: "Chairperson",
        facultyUrl: "/faculty/dr-inderpreet-kaur-saggu",
        facImgUrl:
            "/images/ipr-legal-ethical-matters-cell/inderpreet-kaur-saggu-sols.webp",
    },
    {
        name: "Dr. Shweta Bansal, Professor (SOET)",
        desg: "Technical Expert",
        facultyUrl: "/faculty/prof-dr-shweta-a-bansal",
        facImgUrl:
            "/images/ipr-legal-ethical-matters-cell/dr-shweta-bansal-soet.webp",
    },
    {
        name: "Ms. Versha Verma, Assistant Professor (SOAD)",
        desg: "Patent Illustrator",
        facultyUrl: "/faculty/ms-versha-verma",
        facImgUrl:
            "/images/ipr-legal-ethical-matters-cell/ms-versha-verma-soad.webp",
    },
    {
        name: "Mr. Indrajeet Kumar, Assistant Professor (SOAD)",
        desg: "Technical Expert",
        facultyUrl: "/faculty/mr-indrajeet-kumar",
        facImgUrl:
            "/images/ipr-legal-ethical-matters-cell/mr-indrajeet-kumar-soad.webp",
    },
    {
        name: "Dr. Rishi Ranjan, Assistant Professor (SBAS)",
        desg: "Technical Expert",
        facultyUrl: "/faculty/dr-rishi-kumar",
        facImgUrl:
            "/images/ipr-legal-ethical-matters-cell/dr-rishi-ranjan-kumar-sbas.webp",
    },
    {
        name: "Dr. Baljeet Yadav, Assistant Professor (SBAS)",
        desg: "Member",
        facultyUrl: "/faculty/dr-baljeet-yadav",
        facImgUrl:
            "/images/ipr-legal-ethical-matters-cell/dr-baljeet-yadav-sbas.webp",
    },
    {
        name: "Dr. Narender Yadav, Assistant Professor (SMAS)",
        desg: "IP & Technology Transfer Expert/Patent Agent",
        facultyUrl: "/faculty/dr-narender-yadav",
        facImgUrl:
            "/images/ipr-legal-ethical-matters-cell/dr-narender-yadav-smas.webp",
    },
    {
        name: "Dr. Anumeha Mathur, Assistant Professor (SOMC)",
        desg: "Member",
        facultyUrl: "/faculty/dr-anumeha-mathur",
        facImgUrl:
            "/images/ipr-legal-ethical-matters-cell/anumeha-mathur-somc.webp",
    },
    {
        name: "Dr. Pawan Kumar, Professor (SBAS)",
        desg: "Member",
        facultyUrl: "/faculty/dr-pawan-kumar",
        facImgUrl:
            "/images/ipr-legal-ethical-matters-cell/dr-pawan-kumar-sbas.webp",
    },
    {
        name: "Ms. Kritika Kakkar, Assistant Professor (SOLS)",
        desg: "Member Secretary",
        facultyUrl: "/faculty/ms-kritika-kakkar",
        facImgUrl:
            "/images/ipr-legal-ethical-matters-cell/ms-kritika-kakkar-sols.webp",
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
