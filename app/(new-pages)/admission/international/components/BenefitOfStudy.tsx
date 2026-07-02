import { Check } from "lucide-react";

const BenefitOfStudy = () => {
  return (
    <section className="bg-[url(/international-admission/benefit-bg.webp)] bg-no-repeat bg-cover bg-top">
      <div className="max-w-[1427px] mx-auto w-full flex">
        <div className="w-full lg:w-[40%] bg-[#001732]/80 px-5 sm:px-10 xl:pt-10 font-poppins sm:h-[572px] text-white py-10 xl:py-0">
          <h4 className="text-2xl sm:text-[28px] font-extrabold mb-5">
            Benefits of Studying in Gurugram
          </h4>
          <ul className="xl:text-base font-poppins font-semibold">
            <li className="flex items-center gap-2 leading-[50px]">
              <div>
                <Check color="#fff" />
              </div>
              Home to Numerous Fortune 500 Companies
            </li>
            <li className="flex items-center gap-2 leading-[50px]">
              <div>
                <Check color="#fff" />
              </div>
              Leading Technology and Startup Ecosystem
            </li>
            <li className="flex items-center gap-2 leading-[50px]">
              <div>
                <Check color="#fff" />
              </div>
              Excellent Connectivity Through Metro, Road, and Airport
            </li>
            <li className="flex items-center gap-2 leading-[50px]">
              <div>
                <Check color="#fff" />
              </div>
              Strong Internship and Placement Opportunities
            </li>
            <li className="flex items-center gap-2 leading-[50px]">
              <div>
                <Check color="#fff" />
              </div>
              Safe and Modern Urban Infrastructure
            </li>
            <li className="flex items-center gap-2 leading-[50px]">
              <div>
                <Check color="#fff" />
              </div>
              Close Proximity to New Delhi and International Airports
            </li>
          </ul>
        </div>
        <div className="hidden lg:w-[60%]"></div>
      </div>
    </section>
  );
};

export default BenefitOfStudy;
