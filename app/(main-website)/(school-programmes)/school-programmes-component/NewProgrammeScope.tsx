import { getDownloadProspectusSetting } from "@/lib/api/global-setting";
import { HeroSection, ProgrammeScopeType } from "@/lib/types/school-programme";

import Link from "next/link";
import CommonLeadPopup from "../../components/CommonLeadPopup";
import Image from "next/image";
import { Download, Check } from "lucide-react";
import { STRAPI_URL } from "@/app/constant";
import { Inter } from "next/font/google";

type Props = {
  scopeData: ProgrammeScopeType;
  heroSection?: HeroSection;
  allowedFormSlugs: string[];
  slug: string;
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const NewProgrammeScope = async ({
  scopeData,
  heroSection,
  allowedFormSlugs,
  slug,
}: Props) => {
  const getDownProsSettings = await getDownloadProspectusSetting();

  // const isFormAvailable = allowedFormSlugs.includes(slug);
  const isFormAvailable = false;

  const enable_disable_download_pros =
    getDownProsSettings?.download_prospectus_enable_disable;

  // Format the heading to match the image: "B.Tech. CSE" and "Programme Scope" on two lines
  const formatHeading = (heading: string) => {
    if (!heading) return null;
    const index = heading.toLowerCase().indexOf("programme scope");
    if (index !== -1) {
      const mainPart = heading.slice(0, index).trim();
      const scopePart = heading.slice(index).trim();
      return (
        <>
          <span className="block font-bold">{mainPart}</span>
          <span className="block font-bold mt-1 text-white">{scopePart}</span>
        </>
      );
    }
    return <span className="block font-bold">{heading}</span>;
  };

  // Split description content into paragraphs if it has line breaks
  const paragraphs = scopeData?.scopecontent
    ? scopeData.scopecontent.split("\n").filter((p) => p.trim() !== "")
    : [];

  // 5 items as shown in the image
  const skillsList = [
    {
      id: 1,
      content: (
        <span>
          <strong className="text-white font-semibold">
            Artificial Intelligence
          </strong>{" "}
          and{" "}
          <strong className="text-white font-semibold">Machine Learning</strong>{" "}
          engineering for modern-day applications and system development.
        </span>
      ),
    },
    {
      id: 2,
      content: (
        <span>
          Cloud computing, DevOps workflows, cybersecurity awareness and{" "}
          <strong className="text-white font-semibold">
            secure coding practices
          </strong>{" "}
          are embedded into the curriculum.
        </span>
      ),
    },
    {
      id: 3,
      content: (
        <span>
          Students also engage in lab work and project deliverables, which
          formulate team-based development skills with{" "}
          <strong className="text-white font-semibold">
            agile methodologies
          </strong>{" "}
          to stay competitive in the career.
        </span>
      ),
    },
    {
      id: 4,
      content: (
        <span>
          Analytical and problem-solving skills are{" "}
          <strong className="text-white font-semibold">sharpened</strong>{" "}
          through{" "}
          <strong className="text-white font-semibold">
            competitive programming
          </strong>{" "}
          exposure and project-based learning, which accounts for 15% of total
          programme credits at KRMU.
        </span>
      ),
    },
    {
      id: 5,
      content: (
        <span>
          Proficiency in multiple programming languages like C++, Java, and
          Python with an emphasis on writing{" "}
          <strong className="text-white font-semibold">production-grade</strong>{" "}
          code using modern development frameworks.
        </span>
      ),
    },
  ];

  return (
    <section
      className={`${inter.className} bg-[linear-gradient(180deg,#002958_0%,#001732_100%)] text-white py-10 `}
    >
      <div className="max-w-[1500px] mx-auto px-6 ">
        {/* Top Section: Image (Left) & Heading/Content (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-14 gap-8 lg:gap-14 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-7 w-full">
            {heroSection?.imgvideo === "Video" && isFormAvailable ? (
              <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/3] xl:aspect-[5/3] w-full rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="w-full h-full"
                  dangerouslySetInnerHTML={{
                    __html: heroSection?.videofield || "",
                  }}
                />
              </div>
            ) : (
              scopeData?.scopeimg?.url && (
                <div className="w-full relative aspect-[16/11] sm:aspect-[1.5] lg:aspect-[1.4] xl:aspect-[1.5] rounded-[24px] overflow-hidden shadow-2xl border border-blue-900/30">
                  <Image
                    src={`${STRAPI_URL}${scopeData?.scopeimg?.url}`}
                    fill
                    className="object-cover"
                    alt="B.Tech. CSE Programme Scope"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
                    priority
                  />
                </div>
              )
            )}
          </div>

          {/* Right Column: Heading & Content */}
          <div className="lg:col-span-7 max-w-[680px] flex flex-col justify-center">
            <h3 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[35px] font-bold  mb-6 tracking-tight text-white text-left">
              B.Tech. CSE <br /> Programme Scope
            </h3>

            <div className="space-y-4 text-[15px] sm:text-[16px] lg:text-[18px] font-light  text-white text-justify">
              {/* {paragraphs.length > 0 ? (
                paragraphs.map((para, i) => <p key={i}>{para}</p>)
              ) : (
                <>
                  <p>
                    The B.Tech. CSE programme prepares students to pursue
                    careers that require innovative problem-solving through
                    computational techniques. Students can build their future in
                    some of the fastest-growing careers in technology, such as
                    software engineering, artificial intelligence, cloud
                    computing, data science, cybersecurity, robotics and more.
                  </p>
                  <p>
                    In addition, students can opt for advanced or specialised
                    studies at the postgraduate and doctoral levels for teaching
                    and research-based careers in India and abroad, and even
                    start their own ventures.
                  </p>
                </>
              )} */}
              <p>
                The B.Tech. CSE programme prepares students to pursue careers
                that require innovative problem-solving through computational
                techniques. Students can build their future in some of the
                fastest-growing careers in technology, such as software
                engineering, artificial intelligence, cloud computing, data
                science, cybersecurity, robotics and more.
              </p>
              <p>
                In addition, students can opt for advanced or specialised
                studies at the postgraduate and doctoral levels for teaching and
                research-based careers in India and abroad, and even start their
                own ventures.
              </p>
            </div>

            {/* Optional Download Prospectus Button */}
            {/* {scopeData?.scopebtn?.buttontext && (
              <div className="mt-8 flex justify-start">
                {enable_disable_download_pros ? (
                  <CommonLeadPopup
                    buttonText={
                      <span className="flex items-center gap-2">
                        <Download className="w-5 h-5" />
                        {scopeData.scopebtn.buttontext || "Download Prospectus"}
                      </span>
                    }
                    buttonClassName="inline-flex items-center gap-2 px-6 py-3 text-[16px] font-medium border border-blue-500/30 rounded-lg bg-[#081e3d]/80 text-white hover:bg-white hover:text-[#020b18] hover:border-white transition-all duration-300 shadow-lg shadow-blue-500/5"
                    redirectUrl={scopeData?.scopebtn?.buttonlink || "#"}
                    form_name="Download Prospectus"
                  />
                ) : (
                  <Link
                    href={scopeData?.scopebtn?.buttonlink || "#"}
                    className="inline-flex items-center gap-2 px-6 py-3 text-[16px] font-medium border border-blue-500/30 rounded-lg bg-[#081e3d]/80 text-white hover:bg-white hover:text-[#020b18] hover:border-white transition-all duration-300 shadow-lg shadow-blue-500/5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-5 h-5" />
                    {scopeData?.scopebtn?.buttontext || "Download Prospectus"}
                  </Link>
                )}
              </div>
            )} */}
          </div>
        </div>

        {/* Bottom Section: Skills Circle (Left) & Skills Checklist (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center pl-12 mt-20 md:mt-24">
          {/* Left Column: Skills Circle Badge */}
          <div className="lg:col-span-4 min-w-[455px] flex justify-center items-center">
            <div className="relative rounded-full w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:min-w-[455px] md:h-[455px] flex items-center justify-center ">
              {/* Outer Dashed Ring with slow rotating animation */}
              <svg
                className="absolute inset-0 w-full h-full z-9999"
                viewBox="0 0 100 100"
                fill="none"
              >
                <defs>
                  <linearGradient
                    id="dashGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="50%"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#0073FF" stopOpacity="1" />
                    <stop offset="20%" stopColor="#0073FF" stopOpacity="1" />
                    <stop offset="50%" stopColor="#29A8FF" stopOpacity="1" />
                    <stop offset="80%" stopColor="#001732" stopOpacity="0" />
                    <stop offset="100%" stopColor="#001732" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <circle
                  cx="50"
                  cy="49"
                  r="48"
                  fill="none"
                  stroke="url(#dashGradient)"
                  strokeWidth="0.2"
                  strokeDasharray="1.8 2.5"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-[5px] shadow-[inset_0_0_1px_rgba(59,130,246,0.15)] bg-[#031a35]  rounded-full" />
              {/* Inner Solid Blue Ring */}
              <div className="absolute inset-[18px] bg-[linear-gradient(180deg,#002550_0%,#000D1D_100%)] rounded-full" />

              {/* Gold Compass Marker Pointing NE */}
              <div className="absolute w-[25px] h-[25px] z-999 top-12 right-[16%]">
                <Image
                  src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Polygon_2_829da6039f.png"
                  alt=""
                  width={1024}
                  height={1024}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Center Content Circle */}
              <div className="absolute inset-[24px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,#004698_10.58%,#001732_100%)]  flex flex-col justify-center items-center p-6 sm:p-8 text-center  z-0">
                <span className="text-[#e5c158] font-bold text-xs sm:text-sm tracking-wider uppercase mb-1">
                  Skills Developed
                </span>
                <h4 className="text-white font-extrabold text-lg sm:text-xl md:text-2xl leading-tight mb-4">
                  During the B.Tech
                  <br />
                  CSE Programme
                </h4>
                <div className="w-10 h-[1.5px] bg-blue-500/40 mb-4" />
                <p className="text-xs sm:text-[13px] text-blue-100/70 leading-relaxed max-w-[250px]">
                  Within the span of 4 years, students{" "}
                  <strong className="text-white font-semibold">
                    develop technical and professional skills
                  </strong>{" "}
                  required by employers in the tech and engineering sectors,
                  such as:
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Skills Checklist */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="divide-y divide-blue-900/35 border-t border-b border-blue-900/35">
              {skillsList.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-4 py-5 md:py-6 text-left"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded bg-[#081e3d] border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-md">
                    <Check className="w-5 h-5 text-blue-400 stroke-[3]" />
                  </div>
                  <div className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed text-[#94a3b8]">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProgrammeScope;
