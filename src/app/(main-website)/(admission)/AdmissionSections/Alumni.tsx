import AlumniCard from "@/app/(main-website)/components/Cards/AlumniCard";
import { getAlumniData } from "@/lib/api/common";
// import { alumniData } from "@/lib/constants/alumni";
import { CardWithoutImage } from "@/lib/types/common";

interface AlumniProp {
  highlightext: string;
  beforehighlighttext: string;
  desc: string;
  alumnis: CardWithoutImage[];
}

const Alumni = async ({
  highlightext,
  beforehighlighttext,
  desc,
  alumnis,
}: AlumniProp) => {
  const alumniData = await getAlumniData();


  return (
    <>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-800 font-bold">
              {beforehighlighttext}
              <span className="text-university-blue font-bold">
                {highlightext}
              </span>
            </h2>
            <p className="text-lg text-gray-600">{desc}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {alumniData &&
              alumniData.map((alumni) => {
                return (
                  <AlumniCard
                    key={alumni?.id}
                    alumniName={alumni?.name}
                    alumniDesg={alumni?.designation}
                    alumniInfo={alumni?.alumnicontent}
                    alumniImg={alumni?.alumnimedia}
                  />
                );
              })}
          </div>
          <div className="mt-16 bg-gradient-to-r from-university-blue to-university-red rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {alumnis &&
                alumnis.map((alumni) => {
                  return (
                    <div key={alumni.id}>
                      <div className="text-3xl mb-2">{alumni?.title}</div>
                      <p className="text-blue-100">{alumni?.description}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Alumni;
