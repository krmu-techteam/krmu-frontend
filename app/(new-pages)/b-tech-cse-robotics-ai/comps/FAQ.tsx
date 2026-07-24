import { ChevronDown } from "lucide-react";
import Link from "next/link";

const FAQ = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto w-full">
        <h4 className="text-5xl font-bold text-center">
          Any Question? We’re Here To Help!
        </h4>
        <p className="text-center my-2">
          Can’t find your query? Call us at <strong>8800697010</strong> or email
          us at 
          <strong>
            <Link href="mailto:welcome@krmangalam.edu.in.">
              welcome@krmangalam.edu.in.
            </Link>
          </strong>
        </p>
        <div className="flex my-20 max-w-5xl mx-auto gap-10">
          <div className="w-[20%]">
            <ul className="text-[#001732] space-y-3 font-semibold">
              <li className="py-2 px-4 bg-[linear-gradient(90deg,#D5F1F1_0%,#FBFBFB_100%)] cursor-pointer">
                General
              </li>
              <li className="py-2 px-4 bg-[linear-gradient(90deg,#EDEDED_0%,#FBFBFB_100%)] cursor-pointer">
                Programme
              </li>
              <li className="py-2 px-4 bg-[linear-gradient(90deg,#EDEDED_0%,#FBFBFB_100%)] cursor-pointer">
                Admissions
              </li>
              <li className="py-2 px-4 bg-[linear-gradient(90deg,#EDEDED_0%,#FBFBFB_100%)] cursor-pointer">
                Fees
              </li>
            </ul>
          </div>
          <div className="w-[80%] space-y-4 [&>*:not(:last-child)]:pb-4">
            <div className="border-b border-[#ccd1d6]">
              <div className="flex justify-between font-bold cursor-pointer">
                <h4>What are the admission office hours at KRMU?</h4>{" "}
                <ChevronDown className="rotate-180" />
              </div>
              <div>
                <div className="max-w-[600px]">
                  <p>
                    Yes, K.R. Mangalam University offers diploma courses to
                    cater to diverse interests and career aspirations. We
                    currently have a Diploma in Pharmacy programme structured to
                    provide practical and theoretical knowledge.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between font-bold cursor-pointer">
                <h4>What are the admission office hours at KRMU?</h4>{" "}
                <ChevronDown className="" />
              </div>
              <div className="hidden">
                <div className="max-w-[600px]">
                  <p>
                    Yes, K.R. Mangalam University offers diploma courses to
                    cater to diverse interests and career aspirations. We
                    currently have a Diploma in Pharmacy programme structured to
                    provide practical and theoretical knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
