import TeamLibraryCard from "../global-comp/TeamLibraryCard";

const TeamLibrary = () => {
  const libSlide = [
    {
      imgUrl: "/library/Hela.jpg",
      content: ` <h5>Dr. Helaluddin (Ph.D.)</h5>
        <ul>
          <li>University Librarian</li>
          <li>University Nodal Officer to IRINS/UGC</li>
          <li>University Coordinator for Ph.D. Thesis to INFLIBNET/UGC</li>
          <li>University Coordinator for Anti-Plagiarism Checking</li>
        </ul>`,
    },
    {
      imgUrl: "/library/shaida.jpg",
      content: `<h5>Mr. Shaida Husain</h5>
      <ul>
              <li>Assistant Librarian</li>
            </ul>`,
    },
    {
      imgUrl: "/library/akhilesh.jpg",
      content: `<h5>Mr. Akhilesh Kumar Singh</h5>
      <ul>
              <li>Professional Assistant</li>
            </ul>`,
    },
    {
      imgUrl: "/library/manmohan.jpg",
      content: `<h5>Mr. Manmohan Das</h5>
      <ul>
              <li>Professional Assistant</li>
            </ul>`,
    },
    {
      imgUrl: "/library/kapil.jpg",
      content: `<h5>Mr. Kapil Dev</h5>
      <ul>
              <li>Library Assistant</li>
            </ul>`,
    },
  ];

  return (
    <div className="max-w-[1664px] mx-auto w-full">
      <h3 className="text-3xl mb-5 lg:mb-0 md:text-5xl font-semibold text-white">
        Team Library
      </h3>
      <div className="profile-card">
        {libSlide &&
          libSlide?.map((item, i) => {
            return (
              <TeamLibraryCard
                key={i}
                imgUrl={item?.imgUrl}
                content={item?.content}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TeamLibrary;
