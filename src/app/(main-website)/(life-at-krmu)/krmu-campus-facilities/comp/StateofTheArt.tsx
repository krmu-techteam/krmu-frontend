import { StateOfArtSection } from "@/lib/api/krmu-campus-facility";
import StateOftheArtSlide from "./StateOftheArtSlide";

type Props = {
  stateOfTheArt: StateOfArtSection;
};

const StateofTheArt = ({ stateOfTheArt }: Props) => {
  return (
    <section className="py-10">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-3xl md:text-5xl font-semibold text-center mb-5">
          {stateOfTheArt?.heading}
        </h3>
        <p className="mb-10 text-center">{stateOfTheArt?.content}</p>
        <div>
          <StateOftheArtSlide data={stateOfTheArt?.state_of_the_art_imgs} />
        </div>
      </div>
    </section>
  );
};

export default StateofTheArt;
