import Image from "next/image";
import Link from "next/link";
import { ResourcesSectionProps } from "@/features/life-at-krmu/youth-red-cross-committee/types";

const ResourcesSection = ({
  resourcesSection,
}: {
  resourcesSection: ResourcesSectionProps;
}) => {
  const { objectiveContent, magazineContent } = resourcesSection;
  return (
    <section className="bg-[url(/bg-gradient-2.webp)] py-8 md:py-12 xl:py-20">
      <div className="max-w-[1530px] mx-auto w-full flex font-poppins flex-col lg:flex-row gap-10 px-6 md:px-7 xl:px-16">
        <div className="lg:w-1/2">
          <div className="py-[20px] md:pl-[30px] md:pr-[30px] text-white border border-[#0060aa5e] bg-[#0060aa5e] min-h-[1px] h-full rounded-xs">
            <p className="text-2xl mt-2.5 mb-[15px]">
              {objectiveContent.heading}
            </p>
            <ul className="mt-2.5">
              {objectiveContent.items.map((item, idx) => {
                return (
                  <li key={idx} className="flex items-start gap-3 py-[4px]">
                    <Image
                      src="/white-location-arrow.svg"
                      width={22}
                      height={26}
                      alt=""
                    />{" "}
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2 text-white">
          <div className="text-center flex justify-center flex-col items-center">
            <h3 className="text-4xl font-semibold mb-3.5">
              {magazineContent.heading}
            </h3>
            <div className="flex flex-col sm:flex-row gap-5  mb-[30px]">
              {magazineContent?.links.map((link, idx) => {
                return (
                  <Link
                    key={idx}
                    href={link?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#CB000D] px-6 py-2 flex items-center rounded-xs hover:bg-[#a1050f] transition-all duration-200"
                  >
                    {link.year}
                  </Link>
                );
              })}
            </div>
            <Image
              src={magazineContent.imageUrl}
              width={851}
              height={567}
              alt=""
              className="h-full w-full rounded-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
