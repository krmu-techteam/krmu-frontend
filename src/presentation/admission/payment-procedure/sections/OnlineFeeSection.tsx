import Image from "next/image";
import { FeePaymentCard, PaymentOptionItem } from "../components";
import { OFFLINE_PAYMENT_OPTIONS, ONLINE_PAYMENT_OPTIONS } from "@/features/admission/payment-procedure/constants";

const OnlineFeeSection = () => {
  return (
    <>
      <section>
        <div className="max-w-[1530px] mx-auto w-full flex flex-col lg:flex-row gap-10 px-6 lg:px-7 xl:px-16">
          <div className="lg:w-2/3 text-center">
            <h2
              className="font-bold text-6xl xl:text-[64px] text-[#0060aa] my-5 lg:my-0"
              style={{
                textShadow: "-8px 6px 0px #ffefb8",
              }}
            >
              <span>
                <span>Online Fee </span> <br className="lg:hidden" />
                <span className="relative animate-svg-1">
                  <span>Payment Options </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                  >
                    <path d="M344.6,40.1c0,0-293-3.4-330.7,40.3c-5.2,6-3.5,15.3,3.3,19.4c65.8,39,315.8,42.3,451.2-3 c6.3-2.1,12-6.1,16-11.4C527.9,27,242,16.1,242,16.1"></path>
                  </svg>
                </span>
              </span>
            </h2>
            <div className="flex flex-col md:flex-row gap-2.5 my-10">
              {ONLINE_PAYMENT_OPTIONS.map((item) => {
                return <FeePaymentCard key={item?.title} item={item} />;
              })}
            </div>
          </div>
          <div className="lg:w-1/3 flex items-center justify-center">
            <Image
              src="/admission/payment-procedure.webp"
              width={490}
              height={354}
              alt=""
            />
          </div>
        </div>
        <div className="max-w-[1530px] mx-auto w-full py-10 px-6 lg:px-7 xl:px-16">
          <h3 className="text-[26px] md:text-5xl font-semibold text-white pt-10 pb-5">
            Offline Fee Payment Options
          </h3>
          <ul>
            {OFFLINE_PAYMENT_OPTIONS.map((item, index) => (
              <PaymentOptionItem
                key={index}
                item={item}
                index={index}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default OnlineFeeSection;
