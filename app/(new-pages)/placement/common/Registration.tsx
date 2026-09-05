import { Minus } from "lucide-react";
import { Newsreader } from "next/font/google";
import { DiVim } from "react-icons/di";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Registration = () => {
  return (
    <section>
      <div className="container mx-auto max-w-[1287px] border-b border-[#ccc] py-10  md:py-14 lg:py-16 xl:py-20">
        <h2
          className={`${newsreader.className} mb-5 text-4xl font-medium leading-[1.15] sm:text-5xl md:text-[48px] lg:text-6xl lg:leading-[70px]`}
        >
          Registration details
        </h2>
        <div className="flex flex-col gap-10 md:flex-row md:gap-8 lg:gap-12">
          <div className="w-1/3">
            <h4 className="text-base text-[#7A1F2B] font-medium tracking-widest leading-snug">
              Eligibility
            </h4>
            <ul className="[&>*]:border-t [&>*]:border-[#ccc] [&>*]:py-5 mt-5 font-medium">
              <li className="flex items-start gap-2">
                <Minus />
                <span>Final year students with zero active backlogs.</span>
              </li>
              <li className="flex items-start gap-2">
                <Minus />
                <span>Minimum CGPA of 6.5 across all semesters.</span>
              </li>
              <li className="flex items-start gap-2">
                <Minus />
                <span>Completed mandatory pre-placement training.</span>
              </li>
            </ul>

            <h4 className="text-base text-[#7A1F2B] font-medium tracking-widest leading-snug">
              Eligibility
            </h4>
            <div>
              <label>
                Updated resume (PDF), semester marksheets, ID proof.
              </label>
              <input type="file" />
            </div>
          </div>
          <div className="w-2/3 flex justify-end items-center">
            <div className="bg-[#fefcfa] max-w-[720px] w-full p-10">
              <h4 className="text-base text-[#7A1F2B] font-medium tracking-widest leading-snug mb-10 uppercase">
                Timeline & requirements
              </h4>
              <div className="[&>*]:border-b [&>*]:border-[#ccc] [&>*]:pb-10">
                <div>
                  <h3 className="text-[40px] mt-4 mb-2">May 1st</h3>
                  <p>Portal opens</p>
                </div>
                <div>
                  <h3 className="text-[40px] mt-4 mb-2">April 30th</h3>
                  <p>Portal Closes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
