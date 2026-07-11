import Link from "next/link";

const CIFFacilities = () => {
  return (
    <section className="py-[50px] bg-[url(/research/facbg.webp)] bg-cover bg-center px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h4 className="text-3xl md:text-5xl text-white font-semibold mb-5">
          Facilities
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="bg-[url(/research/cardbg-1.webp)] bg-no-repeat bg-cover rounded-[40px] flex items-center justify-center text-center p-5 min-h-[121px]">
            <Link
              href="/tga-dsc"
              className="text-white text-base font-semibold"
              target="_blank" rel="noopener noreferrer"
            >
              TGA/DSC
            </Link>
          </div>
          <div className="bg-[url(/research/cardbg-1.webp)] bg-no-repeat bg-cover rounded-[40px] flex items-center justify-center text-center p-5 min-h-[121px]">
            <Link
              href="/fourier-transform-infrared-spectrometer-ftir"
              className="text-white text-base font-semibold"
              target="_blank" rel="noopener noreferrer"
            >
              Fourier Transform Infrared Spectrometer (FTIR)
            </Link>
          </div>
          <div className="bg-[url(/research/cardbg-1.webp)] bg-no-repeat bg-cover rounded-[40px] flex items-center justify-center text-center p-5 min-h-[121px]">
            <Link
              href="/double-beam-uv-visible-spectrometer"
              className="text-white text-base font-semibold"
              target="_blank" rel="noopener noreferrer"
            >
              Double beam UV-Visible Spectrometer
            </Link>
          </div>
          <div className="bg-[url(/research/cardbg-1.webp)] bg-no-repeat bg-cover rounded-[40px] flex items-center justify-center text-center p-5 min-h-[121px]">
            <Link
              href="/refrigerated-centrifuges"
              className="text-white text-base font-semibold"
              target="_blank" rel="noopener noreferrer"
            >
              Refrigerated Centrifuge
            </Link>
          </div>
          <div className="bg-[url(/research/cardbg-1.webp)] bg-no-repeat bg-cover rounded-[40px] flex items-center justify-center text-center p-5 min-h-[121px]">
            <Link
              href="/lcr-meter-instrument"
              className="text-white text-base font-semibold"
              target="_blank" rel="noopener noreferrer"
            >
              LCR Meter
            </Link>
          </div>
          <div className="bg-[url(/research/cardbg-1.webp)] bg-no-repeat bg-cover rounded-[40px] flex items-center justify-center text-center p-5 min-h-[121px]">
            <Link
              href="/muffle-furnance"
              className="text-white text-base font-semibold"
              target="_blank" rel="noopener noreferrer"
            >
              Muffle Furnance
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CIFFacilities;
