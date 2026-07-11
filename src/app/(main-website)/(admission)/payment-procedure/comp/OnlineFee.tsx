import Image from "next/image";
import Link from "next/link";

const OnlineFee = () => {
  return (
    <>
      <section className="px-4">
        <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3 text-center">
            <h2
              className="font-bold text-2xl lg:text-[64px] text-[#0060aa] my-5 lg:my-0"
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
              <div className="md:w-1/2 z-10">
                <div
                  className="text-[18px] md:text-2xl  xl:text-[28px] flex items-center justify-center font-bold py-16 text-white rounded-t-[22px]"
                  style={{
                    background: "linear-gradient(45deg,#051630,#014d8b)",
                  }}
                >
                  <p>
                    For new students <br />
                    (Semester 1)
                  </p>
                </div>
                <div>
                  <Link
                    href="https://payment.collexo.com/user/login/?dest=/pay-fee/kr-mangalam-university-sohna-haryana-43490/"
                    className="bg-[#e31e24] py-3 text-white text-base md:px-[29px] inline-block w-full md:text-2xl font-semibold leading-[1] rounded-b-[22px] hover:bg-[#034272]"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <span>Pay Through Collexo</span>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 z-10">
                <div
                  className="text-[18px] md:text-2xl  xl:text-[28px] flex items-center justify-center font-bold py-16 text-white rounded-t-[22px]"
                  style={{
                    background: "linear-gradient(45deg,#051630,#014d8b)",
                  }}
                >
                  <p>
                    For existing students <br />
                    (Semester 2 onwards)
                  </p>
                </div>
                <div>
                  <Link
                    href="https://krmu.icloudems.com/"
                    className="bg-[#e31e24] py-3 text-white px-[29px] inline-block w-full text-base md:text-2xl font-semibold leading-[1] rounded-b-[22px] hover:bg-[#034272]"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <span>Pay Through iCloud</span>
                  </Link>
                </div>
              </div>
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
        <div className="max-w-[1664px] mx-auto w-full py-10">
          <h3 className="text-[26px] md:text-5xl font-semibold pt-10 pb-5">
            Offline Fee Payment Options
          </h3>
          <ul>
            <li className="flex items-center gap-5 text-xl py-[15px]">
              <div>
                <span className="w-11 h-11 bg-[#141617] flex items-center justify-center text-white text-lg rounded-full">
                  1
                </span>
              </div>
              Debit/Credit Card swipe at Cash counter, Cash at Cash counters
              located at University Campus reception area, Ground Floor, A
              Block.
            </li>
            <li className="flex items-center gap-5 text-xl py-[15px]">
              <div>
                <span className="w-11 h-11 bg-[#141617] flex items-center justify-center text-white text-lg rounded-full">
                  2
                </span>
              </div>
              Demand Draft/Cheque – Please draw the DD/Cheque in favour of “K R
              Mangalam University”. In case of DD, it should be payable at
              Gurugram. Please mention your name, application no, programme name
              and contact number on the backside.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default OnlineFee;
