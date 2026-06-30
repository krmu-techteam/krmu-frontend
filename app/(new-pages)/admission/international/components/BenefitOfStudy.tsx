import { Check } from "lucide-react";

const BenefitOfStudy = () => {
  return (
    <section className="bg-[url(/international-admission/benefit-bg.webp)] bg-no-repeat bg-cover bg-top">
      <div className="max-w-[1664px] mx-auto w-full flex">
        <div className="w-full lg:w-2/5 bg-[#001732]/80 p-5 xl:px-10 xl:pt-10 xl:pb-32 font-poppins text-white xl:h-[650px]">
          <h4 className="text-3xl font-extrabold mb-5">
            Benefits of studying in Gurugram
          </h4>
          <ul className="xl:text-lg font-semibold leading-snug xl:leading-[50px] space-y-2">
            <li className="flex items-center gap-2">
              <div>
                <Check color="#fff" />
              </div>
              Home to numerous Fortune 500 companies
            </li>
            <li className="flex items-center gap-2">
              <div>
                <Check color="#fff" />
              </div>
              Leading technology and startup ecosystem
            </li>
            <li className="flex items-center gap-2">
              <div>
                <Check color="#fff" />
              </div>
              Excellent connectivity through metro, road, and airport
            </li>
            <li className="flex items-center gap-2">
              <div>
                <Check color="#fff" />
              </div>
              Strong internship and placement opportunities
            </li>
            <li className="flex items-center gap-2">
              <div>
                <Check color="#fff" />
              </div>
              Safe and modern urban infrastructure
            </li>
            <li className="flex items-center gap-2">
              <div>
                <Check color="#fff" />
              </div>
              Close proximity to New Delhi and international airports
            </li>
          </ul>
        </div>
        <div className="hidden lg:w-3/5"></div>
      </div>
    </section>
  );
};

export default BenefitOfStudy;
