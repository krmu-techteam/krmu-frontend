import { STRAPI_URL } from "@/app/constant";
import Image from "next/image";
import Link from "next/link";

type Props = {
  heading: string;
  content: string;
  info_heading: string;
  interview_img_url: string;
};

const PersonalInterview = ({
  heading,
  content,
  info_heading,
  interview_img_url,
}: Props) => {
  return (
    <>
      <section className="pt-[48px] bg-[#051630] mt-24 px-4">
        <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-start">
          <div className="lg:w-1/2 text-white">
            <h4 className="text-3xl md:text-[64px] font-semibold mb-2.5">
              {heading}
            </h4>
            <p>{content}</p>
            <h6 className="font-semibold mt-5 mb-2.5">{info_heading}</h6>
            <div className="flex flex-col md:flex-row gap-5 md:gap-0">
              <div className="flex  gap-2.5 md:w-1/2">
                <div>
                  <Image
                    src="/admission/blue-loc-pin.svg"
                    width={28}
                    height={28}
                    alt=""
                  />
                </div>
                <div>
                  <p>
                    <strong>Ph.D. Coordinators</strong>
                  </p>
                  <p>K.R. Mangalam University Sohna Road, Gurugram – 122 103</p>
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col">
                <div className="flex items-center gap-2.5">
                  <div>
                    <Image
                      src="/admission/blue-call.svg"
                      width={28}
                      height={28}
                      alt=""
                    />
                  </div>
                  <div>
                    <Link href="tel:918800697009">91 880-069-7009</Link>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 mt-2.5 break-all">
                  <div>
                    <Image
                      src="/admission/blue-envelope.svg"
                      width={28}
                      height={28}
                      alt=""
                    />
                  </div>
                  <div>
                    <Link href="mailto:phdadmissions@krmangalam.edu.in">
                      phdadmissions@krmangalam.edu.in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 hidden lg:block">
            {interview_img_url && (
              <Image
                src={`${STRAPI_URL}${interview_img_url}`}
                width={800}
                height={606}
                alt={heading || ""}
                className="-mt-52"
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalInterview;
