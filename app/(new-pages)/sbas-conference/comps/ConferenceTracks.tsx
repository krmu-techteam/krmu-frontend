import { researchAreas } from "../constant";

const ConferenceTracks = () => {
  return (
    <section className="bg-[#19241F] py-24 px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <p className="font-bold tracking-[1.5px] text-[#C3A342]">
            CONFERENCE TRACKS
          </p>
          <h3 className="text-white text-3xl font-bold font-lora">
            Ten tracks, one shared goal
          </h3>
        </div>

        <div className="space-y-2 pb-8">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="py-6 flex gap-6 not-last:border-b border-[#404c45]"
            >
              <div className="w-[4.86%]">
                <h5 className="text-[#c3a342] text-[32px] font-lora font-bold">
                  {index + 1}
                </h5>
              </div>

              <div className="w-[88.89%] space-y-2">
                <h4 className="text-white text-lg">{area.title}</h4>

                <p className="text-[#BFC7BF] text-sm leading-5">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-14 text-center">
          <p className="text-xs font-bold tracking-[1.5px] text-[#C3A342] mb-5">
            SPECIAL SESSIONS
          </p>
          <div>
            <div className="flex items-center justify-center gap-3">
              <p className="text-sm border border-[#404c45] py-2.5 px-4 rounded-full text-white">
                Young Scientist Forum
              </p>
              <p className="text-sm border border-[#404c45] py-2.5 px-4 rounded-full text-white">
                Women in Science and Engineering
              </p>
              <p className="text-sm border border-[#404c45] py-2.5 px-4 rounded-full text-white">
                Startup & Innovation Showcase
              </p>
              <p className="text-sm border border-[#404c45] py-2.5 px-4 rounded-full text-white">
                Research Scholars' Poster Competition
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <p className="text-sm border border-[#404c45] py-2.5 px-4 rounded-full text-white">
                Best Oral Presentation Awards
              </p>
              <p className="text-sm border border-[#404c45] py-2.5 px-4 rounded-full text-white">
                Best Poster Awards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceTracks;
