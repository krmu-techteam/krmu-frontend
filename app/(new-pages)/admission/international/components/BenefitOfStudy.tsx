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
              Home to numerous Fortune 500 companies
            </li>
            <li className="flex items-center gap-2 leading-[50px]">
              <div>
                <Check color="#fff" />
              </div>
              Leading technology and startup ecosystem
            </li>
            <li className="flex items-center gap-2 leading-[50px]">
              <div>
                <Check color="#fff" />
              </div>
              Excellent connectivity through metro, road, and airport
            </li>
            <li className="flex items-center gap-2 leading-[50px]">
              <div>
                <Check color="#fff" />
              </div>
              Strong internship and placement opportunities
            </li>
            <li className="flex items-center gap-2 leading-[50px]">
              <div>
                <Check color="#fff" />
              </div>
              Safe and modern urban infrastructure
            </li>
            <li className="flex items-center gap-2 leading-[50px]">
              <div>
                <Check color="#fff" />
              </div>
              Close proximity to New Delhi and international airports
            </li>
          </ul>
        </div>
        <div className="hidden lg:w-[60%]"></div>
      </div>
    </section>
  );
};

export default BenefitOfStudy;
