import Image from "next/image";
import Link from "next/link";

const ResearchHeroSection = () => {
  return (
    <section className="bg-[url(/placements/researchoverviewbg.webp)] bg-center bg-no-repeat bg-cover pt-[32%] md:pt-[10%] pb-[60px] px-4">
      <div className="max-w-[1664px] mx-auto w-full text-white">
        <div className="text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.2] md:leading-[1.5]">
            Exploring New Frontiers in Research <br />
            at K.R. Mangalam University
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-16 my-10">
          <div className="p-5 bg-[#051630] text-white font-semibold rounded-[14px] flex flex-col items-center justify-center text-center min-h-56">
            <span className="text-[44px] md:text-[65px] leading-[1.3]">
              250+
            </span>
            <span className="text-xl">Total number of Patents</span>
          </div>
          <div className="p-5 bg-[#051630] text-white font-semibold rounded-[14px] flex flex-col items-center justify-center text-center min-h-56">
            <span className="text-[44px] md:text-[65px] leading-[1.3]">
              156+
            </span>
            <span className="text-xl">Number of Ph.D. Awarded</span>
          </div>
          <div className="p-5 bg-[#051630] text-white font-semibold rounded-[14px] flex flex-col items-center justify-center text-center min-h-56">
            <span className="text-[44px] md:text-[65px] leading-[1.3]">
              2Cr+
            </span>
            <span className="text-xl">
              Total amount of consultancy <br /> grant awarded
            </span>
          </div>
          <div className="p-5 bg-[#051630] text-white font-semibold rounded-[14px] flex flex-col items-center justify-center text-center min-h-56">
            <span className="text-[44px] md:text-[65px] leading-[1.3]">
              4000+
            </span>
            <span className="text-xl">
              Total number of publications, <br /> chapters and books by
              university
            </span>
          </div>
        </div>
        <p>
          <strong>
            {` Innovation fuels discovery at the K.R. Mangalam University,
            contributed by dedicated faculties and over 5,000 undergraduates,
            postgraduates, and research scholars working in the
            multidisciplinary domains reflecting compliance with the United
            Nation’s Sustainable Development Goals (SDG) and uplifting Research
            Excellence Framework at the global level.`}
          </strong>
        </p>
        <br />
        <p>
          The Research and Development Cell is home to disparate schools under
          the umbrella of K.R. Mangalam University located in the heart of
          Gurugram, Haryana. Professors, Researchers, and students are actively
          participating in the interdisciplinary research and collaborate with
          experts from different disciplines and institutions, allowing access
          to pooling of resources imparting significantly enhancement in the
          research capabilities and enable the pursuit of more ambitious
          projects. The young scientific minds are encouraged to identify and
          understand the root cause of the core problem and find the best
          solution to culminate the issue at the ground level. Also, we have
          close links to the Centre of Excellence empowering research
          orientation among the professors and students. Moreover, the
          fundamental motive is to transform discoveries and novelties into
          remedies and other programmes promoting scientific upgradation and
          inculcating the findings for benefit of the society.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 gap-5 gap">
          <Link
            href="/research-and-innovation"
            className="min-h-24 py-[17px] px-10 bg-[#ffffff33] rounded-[30px] text-white text-lg flex items-center justify-center font-semibold w-fit my-8"
            target="_blank" rel="noopener noreferrer"
          >
            <span>Research and Development Cell (RDC)</span>{" "}
            <Image
              src="/placements/white-arrow.svg"
              width={30}
              height={30}
              alt=""
            />
          </Link>
          <Link
            href="/cif"
            className="min-h-24 py-[17px] px-10 bg-[#ffffff33] rounded-[30px] text-white text-lg flex items-center justify-center font-semibold w-fit sm:my-5 lg:my-8"
            target="_blank" rel="noopener noreferrer"
          >
            <span>Central Instrumentation Facility (CIF)</span>{" "}
            <Image
              src="/placements/white-arrow.svg"
              width={30}
              height={30}
              alt=""
            />
          </Link>
          <Link
            href="/keic"
            className="min-h-24 py-[17px] px-10 bg-[#ffffff33] rounded-[30px] text-white text-lg flex items-center justify-center font-semibold w-fit sm:my-5 lg:my-8"
            target="_blank" rel="noopener noreferrer"
          >
            <span>
              K.R. Mangalam Entrepreneurship and Innovation Center (KEIC)
            </span>{" "}
            <Image
              src="/placements/white-arrow.svg"
              width={30}
              height={30}
              alt=""
            />
          </Link>
          <Link
            href="/ipr-legal-ethical-matters-cell"
            className="min-h-24 py-[17px] px-10 bg-[#ffffff33] rounded-[30px] text-white text-lg flex items-center justify-center font-semibold w-fit sm:my-5 lg:my-8"
            target="_blank" rel="noopener noreferrer"
          >
            <span>IPR, Legal & Ethical Matters Cell</span>{" "}
            <Image
              src="/placements/white-arrow.svg"
              width={30}
              height={30}
              alt=""
            />
          </Link>
          <Link
            href="/research-and-innovation/#_ongoing-collab"
            className="min-h-24 py-[17px] px-10 bg-[#ffffff33] rounded-[30px] text-white text-lg flex items-center justify-center font-semibold w-fit sm:my-5 lg:my-8"
            target="_blank" rel="noopener noreferrer"
          >
            <span>Ongoing Projects and Collaborations</span>{" "}
            <Image
              src="/placements/white-arrow.svg"
              width={30}
              height={30}
              alt=""
            />
          </Link>
          <Link
            href="/research-and-innovation/#_res-highlights"
            className="min-h-24 py-[17px] px-10 bg-[#ffffff33] rounded-[30px] text-white text-lg flex items-center justify-center font-semibold w-fit sm:my-5 lg:my-8"
            target="_blank" rel="noopener noreferrer"
          >
            <span>Research Highlights</span>{" "}
            <Image
              src="/placements/white-arrow.svg"
              width={30}
              height={30}
              alt=""
            />
          </Link>
          <Link
            href="/research-and-innovation/#research-achievements"
            className="min-h-24 py-[17px] px-10 bg-[#ffffff33] rounded-[30px] text-white text-lg flex items-center justify-center font-semibold w-fit sm:my-5 lg:my-8"
            target="_blank" rel="noopener noreferrer"
          >
            <span>Research Achievements</span>{" "}
            <Image
              src="/placements/white-arrow.svg"
              width={30}
              height={30}
              alt=""
            />
          </Link>
          <Link
            href="/research-and-innovation/#_publications-achievements"
            className="min-h-24 py-[17px] px-10 bg-[#ffffff33] rounded-[30px] text-white text-lg flex items-center justify-center font-semibold w-fit sm:my-5 lg:my-8"
            target="_blank" rel="noopener noreferrer"
          >
            <span>Publications and Achievements</span>{" "}
            <Image
              src="/placements/white-arrow.svg"
              width={30}
              height={30}
              alt=""
            />
          </Link>
          <Link
            href="/research-and-innovation/#_academics-resources"
            className="min-h-24 py-[17px] px-10 bg-[#ffffff33] rounded-[30px] text-white text-lg flex items-center justify-center font-semibold w-fit sm:my-5 lg:my-8"
            target="_blank" rel="noopener noreferrer"
          >
            <span>Academic Research</span>{" "}
            <Image
              src="/placements/white-arrow.svg"
              width={30}
              height={30}
              alt=""
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResearchHeroSection;
