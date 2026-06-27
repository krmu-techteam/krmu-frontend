import { Check } from "lucide-react";

const BenefitOfStudy = () => {
  return (
    <section className="bg-[url(/international-admission/benefit-bg.webp)] bg-no-repeat bg-cover bg-top">
      <div className="max-w-[1664px] mx-auto w-full flex">
        <div className="w-2/5 bg-[#001732]/80 px-10 pt-10 pb-32 font-poppins text-white h-[650px]">
          <h4 className="text-3xl font-extrabold mb-5">
            Benefits of studying in Gurugram
          </h4>
          <ul className="text-lg font-semibold leading-[50px]">
            <li className="flex items-center gap-2">
              <Check color="#fff" />
              Home to numerous Fortune 500 companies
            </li>
            <li className="flex items-center gap-2">
              <Check color="#fff" />
              Leading technology and startup ecosystem
            </li>
            <li className="flex items-center gap-2">
              <Check color="#fff" />
              Excellent connectivity through metro, road, and airport
            </li>
            <li className="flex items-center gap-2">
              <Check color="#fff" />
              Strong internship and placement opportunities
            </li>
            <li className="flex items-center gap-2">
              <Check color="#fff" />
              Safe and modern urban infrastructure
            </li>
            <li className="flex items-center gap-2">
              <Check color="#fff" />
              Close proximity to New Delhi and international airports
            </li>
          </ul>
        </div>
        <div className="w-3/5"></div>
      </div>
    </section>
  );
};

export default BenefitOfStudy;
