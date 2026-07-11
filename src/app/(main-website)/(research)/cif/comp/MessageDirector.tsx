import Image from "next/image";

const MessageDirector = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full lg:flex items-center gap-10">
      <div className="lg:w-1/2 text-white">
        <h2 className="text-2xl md:text-5xl font-bold mb-5 md:mb-10">Message of Director</h2>
        <p className="text-justify">
          Central Instrumentation Facility (CIF), a hub of cutting-edge
          instrumentation and technical expertise aimed at advancing your
          research endeavors. At CIF, our mission is to provide access to
          state-of-the-art instruments and facilities, empowering researchers to
          conduct high-quality research across various disciplines. Whether
          you’re delving into materials science, biological research, or
          engineering innovations, CIF is here to support Researchers at every
          step of the way. As researchers, we understand the importance of
          reliable and precise instrumentation in driving scientific discovery.
          Therefore, CIF is equipped with the latest tools and technologies,
          carefully maintained to ensure optimal performance and accuracy.
          Moreover, CIF fosters a collaborative environment where
          interdisciplinary interactions flourish. We encourage researchers to
          leverage the expertise of your peers and explore new possibilities
          through interdisciplinary collaborations facilitated by our facility.
          Innovation thrives when researchers have access to the right tools and
          support systems, and CIF is dedicated to being your partner in
          scientific advancement. Together, let’s push the boundaries of
          knowledge and make impactful contributions to our respective fields.
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
