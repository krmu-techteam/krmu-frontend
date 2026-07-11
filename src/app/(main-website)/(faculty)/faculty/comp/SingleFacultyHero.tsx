import { STRAPI_URL } from "@/app/constant";
import { FacultyInterestArea, FacultySocialLinks } from "@/lib/api/common";
import Image from "next/image";
import Link from "next/link";

type Props = {
  facultyImgURL: string;
  facName: string;
  desg: string;
  intarea: FacultyInterestArea[];
  socialLinks: FacultySocialLinks[];
};
const SingleFacultyHero = ({ 
  facultyImgURL,
  facName,
  desg,
  intarea,
  socialLinks,
}: Props) => {
  return (
    <section>
      <div
        className="max-w-[1600px] mx-auto w-full p-5 flex flex-col-reverse md:flex-row rounded-[30px]"
        style={{
          background: `linear-gradient(180deg,rgba(255,255,255,.2) 0%,rgba(255,255,255,.12) 100%)`,
        }}
      >
        <div className="md:w-1/3 flex justify-center items-center">
          <div className="mt-10 sm:mt-0">
            <Image
              src={`${STRAPI_URL}${facultyImgURL}`}
              width={272}
              height={292}
              className="h-[292px] rounded-[20px] inline-block"
              alt={facName || ""}
            />
          </div>
        </div>
        <div className="md:w-2/3 text-white flex flex-col sm:flex-row">
          <div className="sm:w-1/2">
            <div className="mx:mx-8 py-[15px] border-b border-white">
              <h1 className="text-2xl lg:text-[35px] font-semibold">
                {facName}
              </h1>
              <p className="text-[18px]">{desg}</p>
            </div>
            <div className="mx:mx-8 py-[15px]">
              {intarea && (
                <>
                  <h3 className="leading-[3] text-2xl font-semibold">
                    Interest Area(s)
                  </h3>
                  {intarea.map((int) => (
                    <div
                      key={int?.id}
                      dangerouslySetInnerHTML={{ __html: int?.fac_int_content }}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
          <div className="sm:w-1/2">
            <div className="sm:mx-8 py-[15px] border-b border-white">
              <ul className="break-all">
                {socialLinks &&
                  socialLinks?.map((link) => {
                    return (
                      <li key={link?.id} className="flex items-center gap-1">
                        <div className="p-1 bg-[#cb000d] flex items-center justify-center w-fit rounded-full">
                          <Image
                            src={`${STRAPI_URL}${link?.listicon?.url}`}
                            width={14}
                            height={14}
                            className="w-[14px] h-[14px] object-contain"
                            alt=""
                          />
                        </div>
                        <Link href={link?.listlink || "#"}>
                          {link?.listtext}
                        </Link>
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
export default SingleFacultyHero;
