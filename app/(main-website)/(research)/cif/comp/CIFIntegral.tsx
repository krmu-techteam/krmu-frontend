import CifSlides from "./CifSlides";

export const CIFIntegral = () => {
  return (
    <section className="py-[50px] bg-[url(/research/ciintegralbg.webp)] bg-cover bg-no-repeat bg-center px-4">
      <div className="max-w-[1664px] mx-auto w-full text-white ciful md:flex gap-10">
        <div className="md:w-3/5">
          <p>
            The Central Instrumentation Facility (CIF) is an integral part of
            K.R. Mangalam University. CIF is a modern laboratory equipped with
            advanced analytical instruments, such as FTIR (Fourier-transform
            infrared spectrometer), UV-VIS (double-beam UV-visible
            spectrometer), LCR meter, DSC, TGA, and DTA, among others. It
            provides vital support for research and educational activities,
            allowing users from different institutes and industries to access
            these sophisticated instruments. The facility ensures that its
            resources are available to a broad range of researchers and
            students. CIF endeavours to foster scientific innovation and enhance
            the quality of research.
          </p>
          <br />
          <p>Objectives</p>
          <br />
          <ul className="">
            <li>
              Provide access to advanced scientific instruments and equipment
              for researchers and students in basic sciences, medical & allied
              sciences, and multidisciplinary sciences.
            </li>
            <li>
              Facilitate high-quality research by offering technical assistance
              and training in the use of instruments.
            </li>
            <li>
              Promote interdisciplinary collaboration and innovation by bringing
              together researchers from different fields.
            </li>
          </ul>
        </div>
        <div className="md:w-2/5">
          <CifSlides />
        </div>
      </div>
    </section>
  );
};
