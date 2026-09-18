import { PhDProgramme } from "@/lib/types/phd-programmes";
import PresentationPHDProgrammes from "@/presentation/programs/phd/PHDProgramme";

type Props = {
    phdData: PhDProgramme;
    slug?: string;
};

const PHDProgrammes = ({ phdData, slug }: Props) => {
    return <PresentationPHDProgrammes phdData={phdData} slug={slug} />;
};

export default PHDProgrammes;
