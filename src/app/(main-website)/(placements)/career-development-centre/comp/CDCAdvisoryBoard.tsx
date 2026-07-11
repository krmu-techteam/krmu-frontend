import { STRAPI_URL } from "@/app/constant";
import { getCorpAdvisoryTeamData } from "@/lib/api/corpadvteam";
import Image from "next/image";

const CDCAdvisoryBoard = async () => {
  const corpData = await getCorpAdvisoryTeamData();

  return (
    <section className="py-10 px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-4xl text-center font-semibold">
          Corporate Advisory Board
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-10 gap-10">
          {corpData &&
            corpData?.map((item, i) => {
              return (
                <div key={i} className="text-center">
                  <div className="flex items-center justify-center">
                    <Image
                      src={`${STRAPI_URL}${item?.corp_adv_img?.url}`}
                      width={268}
                      height={268}
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{item?.name}</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item?.corp_adv_info,
                      }}
                    />

                    {/* <p>Designation- Manager</p>
                    <p>Company- Tata Consultancy</p>
                    <p>Services</p> */}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default CDCAdvisoryBoard;
