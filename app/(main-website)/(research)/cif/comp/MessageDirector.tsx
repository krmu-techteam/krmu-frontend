import Image from "next/image";

const MessageDirector = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full lg:flex items-center gap-10">
      <div className="lg:w-1/2 text-white">
        <h2 className="text-2xl md:text-5xl font-bold mb-5 md:mb-10">
          Message of Director
        </h2>
        <p className="text-justify">
          The Central Instrumentation Facility (CIF) is a hub of cutting-edge
          instrumentation and technical expertise aimed at advancing research.
          At CIF, our mission is to provide access to state-of-the-art
          instruments and facilities, empowering researchers to conduct
          high-quality research across various disciplines. Whether exploring
          materials science, biological research, or engineering innovations,
          CIF supports researchers at every step of their research journey. We
          understand the importance of reliable and precise instrumentation in
          driving scientific discovery. Therefore, CIF is equipped with the
          latest tools and technologies, which are carefully maintained to
          ensure optimal performance and accuracy. Moreover, CIF fosters a
          collaborative environment where interdisciplinary interactions can
          flourish. Researchers are encouraged to leverage the expertise of
          their peers and explore new possibilities through interdisciplinary
          collaborations facilitated by the facility. Innovation thrives when
          researchers have access to the right tools and support systems, and
          CIF is dedicated to being a partner in scientific advancement.
          Together, we can push the boundaries of knowledge and make meaningful
          contributions to various fields.
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center mt-5 sm:mt-0">
        <div>
          <Image
            src="/research/diwakar.png"
            width={431}
            height={537}
            alt="Diwakar"
          />
          <div className="text-center text-white">
            {" "}
            <strong>Dr. Diwakar Padalia</strong> | Director of CIF
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageDirector;
