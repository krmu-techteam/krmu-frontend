import { ChevronRight, CircleCheckBig } from "lucide-react";
import Link from "next/link";

const NEP = () => {
  return (
    <section className="py-10 bg-[#e6f2ff] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-2xl md:text-4xl font-semibold mb-5">
          Aligning with National Education Policy (NEP – 2020)
        </h3>
        <p>
          At KRMU, we recognize the importance of aligning our academic approach
          with the National Education Policy (NEP) to provide an education that
          is both contemporary <br /> and comprehensive.
        </p>
        <Link
          href="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Implementation_of_NEP_2020_91665fab31.pdf"
          className="flex py-[11px] px-[23px] text-[13px] my-5 items-center w-fit text-white bg-black rounded-sm"
          target="_blank" rel="noopener noreferrer"
        >
          <ChevronRight className="h-[13px]" strokeWidth={5} />
          <span>Implementation of NEP – 2020</span>
        </Link>
        <div>
          <ul className="lg:grid grid-cols-2 grid-rows-3">
            <li className="flex gap-3 leading-[2] py-1.5">
              <div>
                <CircleCheckBig size={28} strokeWidth={1.75} />{" "}
              </div>
              <span>
                <span className="text-[#0060aa] text-base md:text-xl">
                  Holistic and Multidisciplinary Education:{" "}
                </span>
                Following NEP’s guidelines, we have reshaped our curriculum to
                be more curriculum to be more holistic and multidisciplinary,
                encouraging a breadth of knowledge across varied subjects
              </span>
            </li>
            <li className="flex gap-3 leading-[2] py-1.5">
              <div>
                <CircleCheckBig size={28} strokeWidth={1.75} />{" "}
              </div>
              <span>
                <span className="text-[#0060aa] text-base md:text-xl">
                  Emphasis on Critical Thinking and Creativity:
                </span>{" "}
                We have adopted our teaching methods to foster critical thinking
                and creativity, moving away from traditional rote learning
                techniques in favour of more interactive and discussion-based
                learning.
              </span>
            </li>
            <li className="flex gap-3 leading-[2] py-1.5">
              <div>
                <CircleCheckBig size={28} strokeWidth={1.75} />{" "}
              </div>

              <span>
                <span className="text-[#0060aa] text-base md:text-xl">
                  Comprehensive Assessment Strategies:
                </span>{" "}
                Our assessment methods are being refined to align with NEP’s
                recommendations for continuous and holistic evaluation, focusing
                on the overall development of students.
              </span>
            </li>
            <li className="flex gap-3 leading-[2] py-1.5">
              <div>
                <CircleCheckBig size={28} strokeWidth={1.75} />{" "}
              </div>

              <span>
                <span className="text-[#0060aa] text-base md:text-xl">
                  Technology Integration:
                </span>{" "}
                In line with NEP’s focus on technology, we are expanding the use
                of digital tools in teaching and learning, including AI-based
                platforms and extensive digital libraries..
              </span>
            </li>
            <li className="flex gap-3 leading-[2] py-1.5">
              <div>
                <CircleCheckBig size={28} strokeWidth={1.75} />{" "}
              </div>

              <span>
                <span className="text-[#0060aa] text-base md:text-xl">
                  Promotion of Indian Languages and Culture:
                </span>{" "}
                Echoing NEP’s emphasis on cultural heritage, we are introducing
                new courses that highlight India’s linguistic diversity and
                cultural richness, enriching our students’ educational journey
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NEP;
