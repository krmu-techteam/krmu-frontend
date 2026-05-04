import NpfPopup from "@/app/(main-website)/components/NpfPopup";
import { ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Admission2Hero = () => {
  // const btnRef = useRef<HTMLButtonElement>(null);

  const formId = "bc75880ade367265cef841c19ef47621";

  // useEffect(() => {
  //   if (!formId || !btnRef.current) return;

  //   loadNpfScript()
  //     .then(() => {
  //       // @ts-expect-error - test
  //       new NpfWidgetsInit({
  //         widgetId: formId,
  //         baseurl: "widgets.nopaperforms.com",
  //         formTitle: "Apply Now",
  //         titleColor: "#FF0033",
  //         backgroundColor: "#ddd",
  //         iframeHeight: "500px",
  //         buttonTextColor: "#FFF",
  //         target: btnRef.current,
  //       });
  //     })
  //     .catch((err) => {
  //       console.error("Failed to load NPF script:", err);
  //     });
  // }, [formId, "Apply NOw"]);

  return (
    <section
      className="pt-[140px] pb-[50px] px-4  bg-[url(/mobadm.png)] bg-cover bg-no-repeat bg-center sm:bg-none relative sm:before:hidden before:content-['']
    before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#00000080]"
    >
      <div className="max-w-[1320px] mx-auto w-full flex flex-col lg:flex-row items-center gap-6 ">
        <div className="sm:hidden w-full z-10">
          <h1 className="text-white leading-[1.2] font-semibold text-[26px] mb-2">
            Unlock Your <br />
            Future at
          </h1>
          <h2 className="text-white bg-[#0a41a1] py-5 pl-5 pr-10 rounded-r-[20px] w-fit text-2xl font-semibold mb-2">
            K.R.Mangalam <br />
            University
          </h2>
          <p className="text-white w-[80%] px-5 text-base mb-5">
            Dive into a world of diverse programmes curated to guide you on your
            successful journey
          </p>
          <Link
            href="https://admissions.krmangalam.edu.in/"
            target="_blank" rel="noopener noreferrer"
            className="bg-[#e61f21] mt-12 rounded-r-[10px] border border-[#0a41a1] py-[15px] px-[30px] flex items-center w-fit text-white leading-0 gap-5"
          >
            Apply Now <ArrowRight color="#ffffff" />
          </Link>
        </div>
        <div className="hidden sm:block lg:w-1/2">
          <h1 className="text-[#0060aa] text-3xl md:text-5xl lg:text-[60px] leading-[1.2] font-semibold">
            Step Into A Successful Future With K.R. Mangalam University
               
          </h1>

          <p className="font-semibold mt-6 mb-4">
            Dive into a world of diverse programmes curated to guide you on your
            successful journey
          </p>

          {formId && (
            <NpfPopup
              formId={formId}
              btnClass={`hero-common-btn-b mt-12 npfWidget-bc75880ade367265cef841c19ef47621`}
              btnText="Apply Now"
            />
          )}
          {/* {formId ? (
            <button
              ref={btnRef}
              className={`hero-common-btn-b mt-12 npfWidget-bc75880ade367265cef841c19ef47621`}
            >
              {"Apply Now"} <MoveRight />
            </button>
          ) : (
            ""
          )} */}
          {/* <Link href="#" className="common-btn-1 w-fit">
            Apply Now <ArrowRight color="#fff" />
          </Link> */}
        </div>
        <div className="hidden sm:block lg:w-1/2">
          <Image src="/admission2/hero.png" width={636} height={523} alt="" />
        </div>
      </div>
      {/* <div className="max-w-[1320px] mx-auto w-full">

      </div> */}
    </section>
  );
};

export default Admission2Hero;
