import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface PlacementResource {
  id: number;
  number: string;
  title: string;
  description: string;
  link: string;
}

const placementResources: PlacementResource[] = [
  {
    id: 1,
    number: "01",
    title: "Placement Records",
    description: "Year-by-year statistics and company-wise breakdown.",
    link: "/placement/records",
  },
  {
    id: 2,
    number: "02",
    title: "Training Programmes",
    description: "Pre-placement modules, mock interviews and skill labs.",
    link: "/placement/trainers",
  },
  {
    id: 3,
    number: "03",
    title: "Student Resources",
    description: "Resume builders, alumni network access and career guides.",
    link: "/placement/students",
  },
  {
    id: 4,
    number: "04",
    title: "Partner with Us",
    description: "Hire top talent. Schedule campus drives and internships.",
    link: "/placement/recruiters",
  },
];

const PlacementResources = () => {
  return (
    <section className="pb-10 md:pb-20">
      <div className="max-w-7xl mx-auto w-full font-poppins">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t bordert-t-[#545454] border-b border-b-[#ddd] ">
          {placementResources.map((resource) => (
            <article
              key={resource.id}
              className="
                min-h-[250px]
                md:min-h-[300px]
                py-11
                not-first:sm:px-6
                px-6
                flex flex-col
                border-b sm:border-b-0
                border-[#ccc]
                lg:border-r
                lg:last:border-r-0
              "
            >
              {/* Number */}
              <span className="text-[#7A1F2B] text-xl mb-5">
                {resource.number}
              </span>

              {/* Title */}
              <h3 className="text-[#001836] text-3xl font-semibold leading-tight font-newsreader">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="text-[#383838] text-sm leading-relaxed mt-4 max-w-[260px]">
                {resource.description}
              </p>

              {/* Link */}
              <div className="mt-5 md:mt-auto md:pt-10">
                <Link
                  href={resource.link}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    text-[#333]
                    transition-transform
                    duration-300
                    hover:translate-x-1
                  "
                >
                  Explore
                  <ArrowRight size={16} strokeWidth={1.5} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementResources;
