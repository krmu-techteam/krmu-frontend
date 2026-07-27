import { CircleCheck } from "lucide-react";
import Button from "@/components/common/Button";
import SectionDivider from "@/components/common/SectionDivider";

const NEP_FEATURES = [
  {
    title: "Holistic and Multidisciplinary Education:",
    description:
      "Following NEP’s guidelines, we have reshaped our curriculum to be more curriculum to be more holistic and multidisciplinary, encouraging a breadth of knowledge across varied subjects",
  },
  {
    title: "Comprehensive Assessment Strategies:",
    description:
      "Our assessment methods are being refined to align with NEP’s recommendations for continuous and holistic evaluation, focusing on the overall development of students.",
  },
  {
    title: "Promotion of Indian Languages and Culture:",
    description:
      "Echoing NEP’s emphasis on cultural heritage, we are introducing new courses that highlight India’s linguistic diversity and cultural richness, enriching our students’ educational journey",
  },
  {
    title: "Emphasis on Critical Thinking and Creativity:",
    description:
      "We have adopted our teaching methods to foster critical thinking and creativity, moving away from traditional rote learning techniques in favour of more interactive and discussion-based learning.",
  },
  {
    title: "Technology Integration:",
    description:
      "In line with NEP’s focus on technology, we are expanding the use of digital tools in teaching and learning, including AI-based platforms and extensive digital libraries..",
    isFullWidth: true,
  },
];

const NEP2020Section = () => {
  return (
    <section className="relative py-8 md:py-12 xl:py-20 bg-transparent">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-16 flex flex-col items-center">
        <h3 className="heading-primary text-center mb-4">
          Aligning with National Education Policy (NEP – 2020)
        </h3>
        <p className="text-center text-[16px] text-gray-300 font-poppins max-w-4xl mb-8">
          At KRMU, we recognize the importance of aligning our academic approach
          with the National Education Policy (NEP) to provide an education that
          is both contemporary <br className="hidden" /> and comprehensive.
        </p>
        <Button
          href="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Implementation_of_NEP_2020_91665fab31.pdf"
          target="_blank"
          className="bg-[#0161B0] hover:!bg-[#0161B0]/80 border-none mb-16 font-poppins rounded-[4px]"
        >
          Implementation of NEP – 2020
        </Button>
        <div className="w-full">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full text-left font-poppins">
            {NEP_FEATURES.map((feature, index) => (
              <li
                key={index}
                className={`flex gap-4 p-6 md:p-7 rounded-[8px] border border-[#797979] ${
                  feature.isFullWidth ? "lg:col-span-2" : ""
                }`}
              >
                <div className="shrink-0 mt-0.5">
                  <CircleCheck
                    size={24}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-[17px]">
                    {feature.title}
                  </span>
                  <span className="text-gray-300 text-[14px] leading-[1.7]">
                    {feature.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default NEP2020Section;
