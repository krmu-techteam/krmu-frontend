import { ParagraphBlock } from "@/lib/types/about";
import { ListItem, SchoolList } from "@/lib/types/schools";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { CircleCheckBig, ThumbsDown } from "lucide-react";

type Props = {
  content: ParagraphBlock[];
  list1: ListItem[];
  list2: SchoolList;
  list3: SchoolList;
};

const SchoolLetsExplore = ({ content, list1, list2, list3 }: Props) => {
  return (
    <section
      className="bg-[#051630] pt-10 pb-20"
      // style={{
      //   backgroundImage: "linear-gradient(180deg,#051630 0%,#004e8a 100%)",
      // }}
    >
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-2/6 text-white px-4">
          {/* <h4 className="mb-5 md:mb-0 text-2xl md:text-3xl lg:text-5xl font-semibold leading-[1.3] lg:mx-8 xl:mx-12">
            Let’s explore what makes KRMU’s SOET better than that of other
            universities
          </h4> */}
          <div className="mb-5 md:mb-0 text-2xl md:text-3xl lg:text-5xl font-semibold leading-[1.3] lg:mx-8 xl:mx-12 exploreLetsMob">
            {content && <BlocksRenderer content={content} />}
          </div>
        </div>
        <div className="w-full lg:w-4/6 flex overflow-x-auto">
          <div className="w-[2000px] sm:w-full flex">
            <div className="w-fit sm:w-[23%] text-white py-[30px]">
              <div className="max-h-[60px] min-h-[60px] py-[30px]"></div>
              <ul>
                {list1 &&
                  list1.map((list) => {
                    return (
                      <li
                        key={list?.id}
                        className="min-h-[135px] h-full flex items-center  pl-5 py-[5.6px] border-b border-[#d9d9d957] last:border-none"
                      >
                        <span className="text-base font-normal italic">
                          {list?.listtext}
                        </span>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div
              className="w-fit sm:w-[37%] py-[30px] rounded-[25px]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,rgba(255,255,255,.09) 0%,rgba(255,255,255,.0549) 100%)",
              }}
            >
              <div className="max-h-[60px] min-h-[60px] text-center text-white text-2xl font-semibold">
                {list2?.listheading}
              </div>
              <ul className="text-white">
                {list2?.listsitems &&
                  list2?.listsitems.map((list2) => {
                    return (
                      <li
                        key={list2?.id}
                        className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#d9d9d957] last:border-none"
                      >
                        <ThumbsDown className="text-[#e31e24]" />
                        <span className="text-base font-medium">
                          {list2?.listtext}
                        </span>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="w-[550px] sm:w-[37%] py-[30px] rounded-[25px] bg-white">
              <div className="max-h-[60px] min-h-[60px] text-center text-black text-2xl font-semibold">
                {list3?.listheading}
              </div>
              <ul className="text-black px-1">
                {list3?.listsitems &&
                  list3?.listsitems.map((list) => {
                    return (
                      <li
                        key={list?.id}
                        className="min-h-[135px] h-full flex items-center gap-5 pl-5 py-[5.6px] border-b border-[#051630] last:border-none"
                      >
                        <div>
                          {" "}
                          <CircleCheckBig className="text-[#2ea975] w-10 h-6" />
                        </div>
                        <span className="text-base font-medium">
                          {list?.listtext}
                        </span>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolLetsExplore;
