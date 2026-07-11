import Image from "next/image";

const CommunityConnectBenefitNss = () => {
  return (
    <section className="bg-[url(/bg-gradient-2.webp)] py-[50px]">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 mb-5">
          <div className="py-[30px] px-4 md:pl-[40px] md:pr-[30px] text-white border border-[#0060aa5e] bg-[#0060aa5e] mx-4 md:mx-8  rounded-b-[20px]">
            <p className="text-2xl mt-2.5 mb-[15px]">Benefits of NSS:</p>
            <ul className="mt-2.5">
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>Preference in Admission / Employment.</span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>
                  Helps in acquiring leadership qualities and democratic
                  attitude.
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
                  Provides diversified opportunities to students in colleges and
                  universities to develop their personality through community
                  service.
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
                  Helps in developing positive attitude, self-confidence,
                  courage & patience.
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
                  Gets opportunities to see the community closely and thus gets
                  an experience of human nature in relation to his / her
                  environment
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
                  Gets the opportunity to participate in various National /
                  State level programme such as National Integration,
                  Motivational Lamps, value-oriented self-development camps,
                  Adventure camps, workshops. Youth exhibition, cultural
                  programmes etc.
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
                  Honoured at University level for their excellent and
                  outstanding work in NSS.
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
                  May be nominated for Indira Gandhi Awards at National Level.
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
                  Practical training in first aid and disaster management.
                </span>
              </li>
              <li className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>Promotion of universal humanitarian values.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2 text-white">
          <div className="text-center flex justify-center flex-col items-center">
            <Image
              src="/community-connect/benefit-nss.webp"
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

export default CommunityConnectBenefitNss;
