import Image from "next/image";
import Link from "next/link";

const AdmissionSection = () => {
  return (
    <section className="relative pt-24 pb-8 lg:pt-24 xl:pb-16">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-16">
        <div className="w-full flex flex-col lg:flex-row items-end lg:h-[360px] bg-[#092032] rounded-[4px]">
          {/* Left Side: Image Overflowing */}
          <div className="w-full lg:w-[40%] flex justify-center lg:static">
            <Image
              src="/images/international-relations/admission-girl.png"
              width={534}
              height={534}
              className="w-full max-w-[400px] lg:max-w-[450px] lg:w-[534px] lg:h-[534px] object-contain -mt-24 lg:-mt-0 lg:absolute lg:top-[230px] lg:-translate-y-1/2 lg:left-0 xl:left-24 2xl:left-72 z-10"
              alt="International Admissions"
            />
          </div>

          {/* Right Side: Text & Contact */}
          <div className="w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left p-6 lg:p-10 lg:pl-0 xl:pl-4 lg:self-center">
            <h2 className="text-3xl md:text-3xl xl:text-[44px] text-white font-serif font-bold mb-4 leading-tight uppercase">
              FOR ADMISSIONS –<br />
              INTERNATIONAL STUDENTS
            </h2>

            <p className="text-gray-200 font-poppins text-[13px] xl:text-[16px] mb-4 whitespace-normal md:whitespace-nowrap">
              For further details, please contact us at{" "}
              <a
                href="mailto:internationalrelations@krmangalam.edu.in"
                className="text-white hover:text-blue-400 transition-colors"
              >
                internationalrelations@krmangalam.edu.in
              </a>
            </p>

            <Link
              href="tel:+919311227480"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#0066CC] hover:bg-[#0055aa] text-white font-poppins text-sm md:text-base font-medium rounded-[4px] transition-colors"
            >
              +91-9311227480
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
