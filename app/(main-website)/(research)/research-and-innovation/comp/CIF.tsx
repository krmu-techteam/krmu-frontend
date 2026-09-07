import Link from "next/link";
import CIFSlide from "./CIFSlide";

const CIF = () => {
  return (
    <section className="bg-[url(/research/facbg.webp)] bg-cover bg-center pt-[50px] pb-[30px] px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        <div className="text-white lg:w-3/5">
          <h2 className="text-3xl md:text-5xl font-semibold mb-5">
            Central Instrumentation Facility (CIF)
          </h2>
          <p>
            K.R. Mangalam University boasts several specialised research
            laboratories, each equipped with modern technology to support a wide
            range of academic and scientific research. Our laboratories cater to
            diverse disciplines, enabling groundbreaking research and
            innovation.
          </p>
          <br />
          <p>
            At the heart of our research infrastructure is the Central
            Instrumentation Facility (CIF). This premier facility serves as a
            resource hub for our researchers, providing access to high-end
            instruments for advanced experimental and analytical work. Key
            instruments available at the CIF include HPLC and UV-VIS
            spectrophotometers.
          </p>
        </div>
        <div className="lg:w-2/5">
          <CIFSlide />
        </div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex items-center justify-center mt-10">
        <Link
          href="/cif"
          className="blink-effect bg-[#cb000d] py-2.5 px-5 leading-[1] inline-block text-white rounded-[4px]"
        >
          Know More
        </Link>
      </div>
    </section>
  );
};

export default CIF;
