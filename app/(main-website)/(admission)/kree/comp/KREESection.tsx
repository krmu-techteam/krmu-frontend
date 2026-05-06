import Image from "next/image";

const KREESection = () => {
  return (
    <section className="py-[6%] px-4 bg-[url('/kree-bg.webp')] bg-cover bg-center bg-no-repeat">
      <div className="flex items-center max-w-[1664px] mx-auto w-full">
        <div className="lg:w-1/2">
          <h3 className="leading-[1.5] text-2xl md:text-5xl text-white font-semibold">
            KREE Sections
          </h3>
          <p className="text-white mb-5">
            Below-mentioned are the two sections candidates <br />
            are required to attempt.
          </p>
          <div
            className="p-5 lg:min-h-[170px] lg:max-h-[170px] rounded-[22px] flex flex-col lg:flex-row items-center gap-5 mb-5"
            style={{
              background: `linear-gradient(180deg,rgba(255,255,255,.2) 0%,rgba(255,255,255,.12) 100%)`,
              backdropFilter: `blur(13.410955429077px)`,
            }}
          >
            <div className="lg:w-1/4 flex items-center justify-center">
              <Image src="/kree/kree-ic1.webp" width={53} height={53} alt="" />
            </div>
            <div className="lg:w-3/4 text-white text-base">
              <p>
                <strong>Online Exam:</strong>
              </p>
              <p>Exam Duration 1 Hour</p>
            </div>
          </div>
          <div
            className="p-5 lg:min-h-[170px] lg:max-h-[170px] rounded-[22px] flex flex-col lg:flex-row items-center gap-5 mb-5"
            style={{
              background: `linear-gradient(180deg,rgba(255,255,255,.2) 0%,rgba(255,255,255,.12) 100%)`,
              backdropFilter: `blur(13.410955429077px)`,
            }}
          >
            <div className="lg:w-1/4 flex items-center justify-center">
              <Image src="/kree/kree-ic2.webp" width={53} height={53} alt="" />
            </div>
            <div className="lg:w-3/4 text-white text-base">
              <p>
                <strong>Faculty Interaction:</strong>
              </p>
              <p className="leading-[2]">
                Assessment & evaluation of communication skills, problem–solving
                aptitude, collaborative strength, technical & course specific
                knowledge.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 hidden lg:block">
          <Image src="/Girl.webp" width={768} height={771} alt="Girl" />
        </div>
      </div>
    </section>
  );
};

export default KREESection;
