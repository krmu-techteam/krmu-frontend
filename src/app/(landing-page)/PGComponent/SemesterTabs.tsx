import { ProgramCardType, Semester } from "../admission/PGType";
import ProgramCard from "./ProgramCard";
import ProgramCardSlide from "./ProgramCardSlide";

type Props = {
  semesters?: Semester[];
  progData: ProgramCardType;
};

const SemesterTabs = ({ progData }: Props) => {
  // const [active, setActive] = useState(semesters[0].id);
  // const current = semesters.find((s) => s.id === active)!;

  return (
    <section className="py-10">
      <div className="w-full">
        {/* Left Tabs */}
        {/* <div className="space-y-4 ">
          {semesters.map((sem) => (
            <button
              key={sem.id}
              // onClick={() => setActive(sem.id)}
              className="bg-white text-black hover:bg-[#0A1B3D] hover:text-white w-full text-left rounded-xl p-5 transition border"
              // className={`w-full text-left rounded-xl p-5 transition border
              //   ${
              //     active === sem.id
              //       ? "bg-[#0A1B3D] text-white"
              //       : "bg-white hover:bg-gray-50"
              //   }`}
            >
              <p className="text-sm opacity-80">
                {sem.title}
                <span className="block">{sem.duration}</span>
              </p>
              <h4 className="mt-2 font-semibold">{sem.subtitle}</h4>
            </button>
          ))}
        </div> */}

        {/* Right Content */}

        {progData?.length > 3 ? (
          <ProgramCardSlide data={progData} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-5">
            {progData &&
              progData.map((program, index) => (
                <ProgramCard
                  key={index}
                  image={program.image}
                  title={program.title}
                  description={program.description}
                  format={program.format}
                  duration={program.duration}
                  eligibility={program.eligibility}
                  focus={program.focus}
                  annualFee={program.annualFee}
                />
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SemesterTabs;
