import Image from "next/image";
import Link from "next/link";

const CommunityConnectMagazine = () => {
  return (
    <section className="bg-[url(/bg-gradient-2.webp)]  px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 mb-5">
          <div className="py-[30px] px-4 md:pl-[40px] md:pr-[30px] text-white border border-[#0060aa5e] bg-[#0060aa5e] mx-4 md:mx-8 min-h-[1px] h-full rounded-b-[20px]">
            <p className="text-2xl mt-2.5 mb-[15px]">
              The broad objectives of NSS are to:
            </p>
            <ul className="mt-2.5">
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>Understand the community in which they work.</span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>
                  Understand themselves in relation to their community.
                </span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>
                  Identify the needs and problems of the community and involve
                  them in problem Solving process.
                </span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>
                  Develop among them a sense of social and civic responsibility.
                </span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>
                  Utilize their knowledge in finding practical solution to
                  individual and community Problems.
                </span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>
                  Develop competence required for group living and sharing of
                  responsibilities.
                </span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>Gain skills in mobilizing community participation.</span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>
                  Acquire leadership qualities and democratic attitude.
                </span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>
                  Develop capacity to meet emergencies and natural disasters.
                </span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>Practice national integration and social harmony.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2 text-white">
          <div className="text-center flex justify-center flex-col items-center">
            <h3 className="text-4xl font-semibold mt-2.5 mb-3.5">
              NSS Magazine
            </h3>
            <div className="flex flex-col sm:flex-row gap-5  mb-[30px]">
              <Link
                href="https://krmangalam.edu.in/pdfs/legancy-of-service-final.pdf"
                target="_blank" rel="noopener noreferrer"
                className="common-btn-4"
              >
                2023-2024
              </Link>
              <Link
                href="https://krmangalam.edu.in/pdfs/nss_2024oct-dec-000.pdf"
                target="_blank" rel="noopener noreferrer"
                className="common-btn-4"
              >
                2024-2025
              </Link>
            </div>
            <Image
              src="/community-connect/nss-magazine.webp"
              width={851}
              height={567}
              alt=""
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityConnectMagazine;
