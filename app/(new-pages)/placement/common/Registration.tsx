import { Minus } from "lucide-react";
import { Newsreader } from "next/font/google";

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
        <div>
          <h4 className="text-base text-[#7A1F2B] font-medium tracking-widest leading-snug">
            Eligibility
          </h4>
          <ul className="[&>*]:border-t [&>*]:border-[]">
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
        </div>
      </div>
    </section>
  );
};

export default Registration;
