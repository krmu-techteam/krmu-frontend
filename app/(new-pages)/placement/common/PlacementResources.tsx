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
    title: "Placement records",
    description: "Year-by-year statistics and company-wise breakdown.",
    link: "#",
  },
  {
    id: 2,
    number: "02",
    title: "Training programs",
    description: "Pre-placement modules, mock interviews and skill labs.",
    link: "#",
  },
  {
    id: 3,
    number: "03",
    title: "Student resources",
    description: "Resume builders, alumni network access and career guides.",
    link: "#",
  },
  {
    id: 4,
    number: "04",
    title: "Partner with us",
    description: "Hire top talent. Schedule campus drives and internships.",
    link: "#",
  },
];

const PlacementResources = () => {
  return (
    <section className="pb-10 md:pb-20">
      <div className="max-w-6xl mx-auto w-full font-poppins">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t bordert-t-[#777] border-b border-b-[#ddd]">
          {placementResources.map((resource) => (
            <article
              key={resource.id}
              className="
                min-h-[250px]
                md:min-h-[300px]
                p-6
                flex flex-col
                border-b sm:border-b-0
                border-[#ddd]
                lg:border-r
                lg:last:border-r-0
              "
            >
              {/* Number */}
              <span className="text-[#7A1F2B] text-base mb-5">
                {resource.number}
              </span>

              {/* Title */}
              <h3 className="text-[#001836] text-2xl font-semibold leading-tight font-newsreader">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="text-[#333] text-sm leading-relaxed mt-4 max-w-[260px]">
                {resource.description}
              </p>

              {/* Link */}
              <div className="mt-5 md:mt-auto md:pt-8">
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
