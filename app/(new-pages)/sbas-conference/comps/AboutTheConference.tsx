import Image from "next/image";

const AboutTheConference = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto pt-24 pb-20 flex items-center gap-16 text-[#44504A]">
        <div className="w-[58%] space-y-4">
          <p className="text-[#A9812F] text-xs font-bold tracking-[1.5px]">
            ABOUT THE CONFERENCE
          </p>
          <h2 className="text-3xl font-lora font-bold text-[#1C2822]">
            A gathering for green materials science
          </h2>
          <p className="text-justify text-sm">
            The AMGSE 2027 conference committee welcomes you to the 3rd
            International Conference on “Advanced Materials for Green and
            Sustainable Environment.”
          </p>
          <p className="text-justify text-sm">
            Advanced Materials for Green and Sustainable Environment refers to
            advancement and application of novel, innovative and eco-friendly
            nanomaterials that contribute toward sustainability by supporting
            twelve principles of green chemistry. These advanced materials are
            synthesized in such a way so that their impact on the environment
            should be minimized through reduction of emission of hazardous
            substances and their emission in the environment. The creation of
            advanced materials, distinguished by their unique physical and
            chemical characteristics and structures, has captured the attention
            of active researchers worldwide and used for various applications
            such as energy storage, water purification, sustainable packaging
            and many more. The integration of advanced materials into different
            industries contributes for sustainable development through reduction
            of ecological footprints and promotion of resource efficiencies.
          </p>
        </div>
        <div className="w-[42%]">
          <div className="p-7 bg-[#19241F] rounded-2xl">
            <div className="mb-5">
              <Image
                src="https://krmangalam.edu.in/images/sbas-conference/gathering.webp"
                width={370}
                height={214}
                alt=""
                className="w-full rounded-xl"
              />
            </div>
            <div>
              <p className="text-[#C3A342] text-xs tracking-[1px] font-bold">
                3RD EDITION
              </p>
              <h4 className="text-white text-[26px] font-bold font-lora mb-5">
                AMGSE 2027
              </h4>
              <div className="flex gap-6">
                <div className="flex flex-col">
                  <span className="text-[22px] text-white leading-tight font-lora font-bold">
                    10
                  </span>
                  <span className="text-[11px] text-[#BFC7BF]">
                    Conference tracks
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[22px] text-white leading-tight font-lora font-bold">
                    21–23 Jan
                  </span>
                  <span className="text-[11px] text-[#BFC7BF]">
                    2027, Gurugram
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[22px] text-white leading-tight font-lora font-bold">
                    2
                  </span>
                  <span className="text-[11px] text-[#BFC7BF]">
                    Partner institutions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTheConference;
