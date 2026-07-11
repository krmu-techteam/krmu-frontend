import Image from "next/image";

type Props = {
  imgUrl: string;
  content: string;
};

const TeamLibraryCard = ({ imgUrl, content }: Props) => {
  return (
    <div className="card teamlibcard">
      {imgUrl && <Image src={imgUrl} width={150} height={360} alt="" />}
      <div
        className="profile-card-content teamlibcontent"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />

      {/* <h1>Dr. Helaluddin (Ph.D.)</h1>
        <ul>
          <li>University Librarian</li>
          <li>University Nodal Officer to IRINS/UGC</li>
          <li>University Coordinator for Ph.D. Thesis to INFLIBNET/UGC</li>
          <li>University Coordinator for Anti-Plagiarism Checking</li>
        </ul> */}
    </div>
  );
};

export default TeamLibraryCard;
