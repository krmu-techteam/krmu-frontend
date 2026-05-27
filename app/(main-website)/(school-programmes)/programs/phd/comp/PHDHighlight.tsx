import { STRAPI_URL } from "@/app/constant";
import { common_btn } from "@/lib/types/common";
import Image from "next/image";
import Link from "next/link";

type Props = {
  heading: string;
  highlightheading: string;
  btn: common_btn;
  imgUrl: string;
};

const PHDHighlight = ({ heading, highlightheading, btn, imgUrl }: Props) => {
  return (
    <>
      <div
        className="py-16"
        style={{
          background:
            "linear-gradient(95deg,#051630 2.68%,#015497 39.92%,#0060aa 77.91%,#e31e24 100%)",
        }}
      >
        <div className="max-w-[1664px] mx-auto w-full px-4 mb-8 sm:mb-0">
          <h4 className="text-[#0078bf] text-2xl md:text-4xl lg:text-[64px] leading-[1.2] font-medium">
            {heading}
          </h4>
          <h4 className="text-2xl md:text-4xl lg:text-[64px] leading-[1.2] font-medium text-white">
            {highlightheading}
          </h4>
        </div>
        <div className="lg:hidden px-4 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-3">
            <div className="w-full mb-8  p-2.5 md:p-5 bg-[url(/schools/1.png)] bg-no-repeat bg-[length:15%] bg-[left_top]">
              <span
                className=" ml-12 p-4 flex items-center justify-center w-[60px] h-[60px] bg-[#051630] rounded-full mb-5"
                style={{
                  boxShadow: "0px 5px 20px rgb(29 66 197 / 58%)",
                }}
              >
                <Image
                  src="/schools/start01.svg"
                  width={30}
                  height={30}
                  alt="Start your application"
                />
              </span>
              <p className="text-lg text-white font-semibold">
                Start your Application
              </p>
              <p className="text-white">
                At{" "}
                <Link
                  href="https://admissions.krmangalam.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  admissions.krmangalam.edu.in
                </Link>{" "}
              </p>
            </div>
            <div className="w-full mb-8 p-2.5 md:p-5 bg-[url(/schools/2.png)] bg-no-repeat bg-[length:15%] bg-[left_top]">
              <span
                className="ml-12 p-4 flex items-center justify-center w-[60px] h-[60px] bg-[#051630] rounded-full mb-5"
                style={{
                  boxShadow: "0px 5px 20px rgb(29 66 197 / 58%)",
                }}
              >
                <Image
                  src="/schools/card.svg"
                  width={30}
                  height={30}
                  alt="Complete payment"
                />
              </span>
              <p className="text-lg text-white font-semibold">
                Complete payment and submit
              </p>
              <p className="text-white">Pay the required Application Fee</p>
            </div>
            <div className="w-full mb-8 p-2.5 md:p-5 bg-[url(/schools/3.png)] bg-no-repeat bg-[length:15%] bg-[left_top]">
              <span
                className="ml-12 p-4 flex items-center justify-center w-[60px] h-[60px] bg-[#051630] rounded-full mb-5"
                style={{
                  boxShadow: "0px 5px 20px rgb(29 66 197 / 58%)",
                }}
              >
                <Image
                  src="/schools/doc.svg"
                  width={30}
                  height={30}
                  alt="Entrance test"
                />
              </span>
              <p className="text-lg text-white font-semibold">
                Take an entrance test
              </p>
              <p className="text-white">
                K.R. Mangalam University Entrance Examination (KREE)
              </p>
            </div>
            <div className="w-full mb-8 p-2.5 md:p-5 bg-[url(/schools/4.png)] bg-no-repeat bg-[length:15%] bg-[left_top]">
              <span
                className="ml-12 p-4 flex items-center justify-center w-[60px] h-[60px] bg-[#051630] rounded-full mb-5"
                style={{
                  boxShadow: "0px 5px 20px rgb(29 66 197 / 58%)",
                }}
              >
                <Image
                  src="/schools/communications.svg"
                  width={30}
                  height={30}
                  alt="Interaction"
                />
              </span>
              <p className="text-lg text-white font-semibold">
                Appear for interaction
              </p>
              <p className="text-white">Attend our Faculty-Led Interview.</p>
            </div>
            <div className="w-full mb-8 p-2.5 md:p-5 bg-[url(/schools/5.png)] bg-no-repeat bg-[length:15%] bg-[left_top]">
              <span
                className="ml-12 p-4 flex items-center justify-center w-[60px] h-[60px] bg-[#051630] rounded-full mb-5"
                style={{
                  boxShadow: "0px 5px 20px rgb(29 66 197 / 58%)",
                }}
              >
                <Image
                  src="/schools/business-people.svg"
                  width={30}
                  height={30}
                  alt="Admission offer"
                />
              </span>
              <p className="text-lg text-white font-semibold">
                Get the admission offer
              </p>
              <p className="text-white">
                You will receive the offer letter after the successful
                interaction
              </p>
            </div>
            <div className="w-full mb-8 p-2.5 md:p-5 bg-[url(/schools/6.png)] bg-no-repeat bg-[length:15%] bg-[left_top]">
              <span
                className="ml-12 p-4 flex items-center justify-center w-[60px] h-[60px] bg-[#051630] rounded-full mb-5"
                style={{
                  boxShadow: "0px 5px 20px rgb(29 66 197 / 58%)",
                }}
              >
                <Image
                  src="/schools/like.svg"
                  width={30}
                  height={30}
                  alt="Get enrolled"
                />
              </span>
              <p className="text-lg text-white font-semibold">Get Enrolled</p>
              <p className="text-white">
                Be prepared to embark on your journey
              </p>
            </div>
          </div>
        </div>
        {imgUrl && (
          <Image
            src={
              imgUrl ? `${STRAPI_URL}${imgUrl}` : "/Commence-Your-Journey.webp"
            }
            width={1921}
            height={689}
            alt="Your journey"
            className="w-full mb-8 h-full hidden lg:block"
          />
        )}
        <div className="flex justify-center mt-5 lg:mt-0">
          {btn?.btn_link && (
            <Link
              href={btn?.btn_link}
              className={`py-3.5 px-8 bg-[#051630] font-bold rounded-sm inline-block text-white ${
                btn?.btn_class || ""
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {btn?.btn_text}
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default PHDHighlight;
