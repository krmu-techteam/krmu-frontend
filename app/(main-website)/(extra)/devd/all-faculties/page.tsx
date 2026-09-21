import { sbasFaculties } from "@/lib/api/school-faculties/sbas";
import { sjmcFaculties } from "@/lib/api/school-faculties/sjmc";
import { smasFaculties } from "@/lib/api/school-faculties/smas";
import { soadFaculties } from "@/lib/api/school-faculties/soad";
import { soasFaculties } from "@/lib/api/school-faculties/soas";
import { soedFaculties } from "@/lib/api/school-faculties/soed";
import { soetFaculties } from "@/lib/api/school-faculties/soet";
import { sohmctFaculties } from "@/lib/api/school-faculties/sohmct";
import { solaFaculties } from "@/lib/api/school-faculties/sola";
import { solsFaculties } from "@/lib/api/school-faculties/sols";
import { somcFaculties } from "@/lib/api/school-faculties/somc";
import { sprsFaculties } from "@/lib/api/school-faculties/sprs";

export async function generateMetadata() {
  return {
    title: "All Faculties",
    // description: siteMetaDescription || siteTitle || "",
    // keywords: siteKeyword || "",
    // alternates: {
    //   canonical: siteCanonicalUrl || "",
    // },
    robots: {
      index: false,
      follow: false,
    },
  };
}
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const allSchoolFacultiesLoop = [
    {
      id: 1,
      schoolName: "School of Engineering & Technology",
      allFacultiesGroup: soetFaculties,
    },
    {
      id: 2,
      schoolName: "School of Management & Commerce",
      allFacultiesGroup: somcFaculties,
    },
    {
      id: 3,
      schoolName: "School of Legal Studies",
      allFacultiesGroup: solsFaculties,
    },
    {
      id: 4,
      schoolName: "School of Medical & Allied Sciences",
      allFacultiesGroup: smasFaculties,
    },
    {
      id: 5,
      schoolName: "School of Physiotherapy and Rehabilitation Sciences",
      allFacultiesGroup: sprsFaculties,
    },
    {
      id: 6,
      schoolName: "School of Liberal Arts",
      allFacultiesGroup: solaFaculties,
    },
    {
      id: 7,
      schoolName: "School of Architecture & Design",
      allFacultiesGroup: soadFaculties,
    },
    {
      id: 8,
      schoolName: "School of Basic & Applied Sciences",
      allFacultiesGroup: sbasFaculties,
    },
    {
      id: 9,
      schoolName: "School of Emerging Media & Creator Economy",
      allFacultiesGroup: sjmcFaculties,
    },
    {
      id: 10,
      schoolName: "School of Hotel Management & Catering Technology",
      allFacultiesGroup: sohmctFaculties,
    },
    {
      id: 11,
      schoolName: "School of Education",
      allFacultiesGroup: soedFaculties,
    },
    {
      id: 12,
      schoolName: "School of Agricultural Sciences",
      allFacultiesGroup: soasFaculties,
    },
  ];

  return (
    <section>
      <div className="pt-36 pb-20 bg-[#001732] text-white text-center">
        <h1 className="text-5xl font-semibold">ALL Faculties</h1>
      </div>

      <div className="max-w-[1664px] mx-auto p-5">
        <h2 className="text-4xl mb-5 font-semibold">All Schools Faculties</h2>
        {allSchoolFacultiesLoop &&
          allSchoolFacultiesLoop.map((school) => {
            return (
              <div className="py-5" key={school.id}>
                <h3 className="text-3xl font-semibold">
                  {school.id} : {school.schoolName}
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-5 mt-2">
                  {school &&
                    school.allFacultiesGroup.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className="overflow-hidden  border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
                        >
                          <Image
                            src={item.featured_media_url}
                            alt={item.title.rendered || "Faculty"}
                            width={300}
                            height={300}
                            className="w-full h-[306px] object-contain"
                          />

                          <div className="p-4">
                            <h3 className="text-sm font-bold text-gray-900">
                              {item.title.rendered}
                            </h3>
                            <h4 className="text-sm">
                              {item.acf.staff_designation}
                            </h4>
                            <Link
                              className="text-xs my-2 font-semibold underline hover:text-blue-500"
                              target="_blank"
                              href={`/faculty/${item.slug}`}
                            >
                              View More
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default page;
