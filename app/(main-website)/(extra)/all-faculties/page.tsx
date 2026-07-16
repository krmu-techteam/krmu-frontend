import { soetFaculties } from "@/lib/api/school-faculties/soet";
import Image from "next/image";

const page = () => {
  return (
    <section>
      <div className="pt-36 pb-20 bg-[#001732] text-white text-center">
        <h1 className="text-5xl font-semibold">ALL Faculties</h1>
      </div>

      <div className="max-w-[1664px] mx-auto p-5">
        <h2 className="text-4xl mb-5 font-semibold">All Schools Faculties</h2>
        <h3 className="text-3xl font-semibold">
          School of Engineering & Technology
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-5 mt-10">
          {soetFaculties &&
            soetFaculties.map((item, i) => {
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
                    <h4 className="text-sm">{item.acf.staff_designation}</h4>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default page;
