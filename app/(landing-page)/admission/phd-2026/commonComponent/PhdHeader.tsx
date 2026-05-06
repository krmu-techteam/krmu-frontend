import Image from "next/image";
import Link from "next/link";
import KRMUTimer from "../../CommonComponent2026/KRMUTimer";

const PhdHeader = () => {
  return (
    <header
      className="p-2 bg-white"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <div className="px-3 flex flex-col xl:flex-row justify-between items-center gap-3">
        <div className="w-full lg:w-1/2 flex justify-between sm:justify-start">
          <Image
            src="/landingpage/common/white-krm-logo.webp"
            width={350}
            height={65}
            alt="MBA Landing Page Logo"
          />
        </div>
        <div className="w-full xl:w-3/6 2xl:w-2/3  flex justify-center xl:justify-end gap-5">
          {/* <ul className="flex items-center justify-end lg:justify-center gap-10">
            <li className="hidden lg:block">
              <Link href="#">Home</Link>
            </li>
            <li className="hidden lg:block">
              <Link href="#">Important Date</Link>
            </li>
            <li className="hidden lg:block">
              <Link href="#">Ph.D Programme</Link>
            </li>
            <li className="hidden lg:block">
              <Link href="#">Globals Tie-UPs</Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-2.5">
                <Image
                  src="/landingpage/phd/phone-solid-black.svg"
                  width={14}
                  height={14}
                  alt=""
                />{" "}
                8192888444
              </Link>
            </li>
          </ul> */}
         <KRMUTimer targetDate="2026-04-30T00:00:00" />
        </div>
        <div className="lg:w-1/5"></div>
      </div>
    </header>
  );
};

export default PhdHeader;
