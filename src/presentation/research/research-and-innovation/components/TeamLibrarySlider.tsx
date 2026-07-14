import Image from "next/image";
import { TeamLibrarySliders } from "@/features/research/research-and-innovation/types";

const TeamLibrarySlider = ({ imageUrl, content }: TeamLibrarySliders) => {
  return (
    <div className="card teamlibcard">
      {imageUrl && <Image src={`${imageUrl}`} width={150} height={360} alt="" />}
      <div
        className="profile-card-content font-poppins teamlibcontent"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </div>
  );
};

export default TeamLibrarySlider;
