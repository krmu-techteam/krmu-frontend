import { InternationExposureLogoSlider } from "./InternationExposureLogoSlider";

const InternationalExposure = () => {
  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1296px] mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="compare-heading">
            International Exposure via KRMU's{" "}
            <span className="highlight-text">B.Tech. CSE</span>
          </h2>
          <p className="compare-subheading mt-3">
            Recognised as the best university for B.Tech. in India​ by many
            students and their respective parents, KRMU partners with leading
            global institutions to offer student exchanges, collaborative
            research, and intercultural learning for a truly international
            education experience.
          </p>
        </div>
        <InternationExposureLogoSlider />
      </div>
    </section>
  );
};

export default InternationalExposure;
