import SectionDivider from "@/components/common/SectionDivider";
import Image from "next/image";

const YourPathsuccessSection = () => {
  return (
    <section className="relative z-5 py-10 lg:py-[20%] lg:bg-[url(/placements/Your-Path-to-Success-1.webp)] bg-cover bg-center px-6 md:px-7 xl:px-16">
      <div className="max-w-[1530px] mx-auto w-full lg:flex lg:text-white">
        <div className="lg:w-1/2">
          <h2 className="heading-primary mb-3 lg:mb-5">
            Your Path to Success
          </h2>
          <p className="font-poppins">
            Students, who once register for a particular company, must present
            themselves on the day of the visit, failing to which they may get
            blacklisted for the next two recruitments
          </p>
        </div>
        <div className="lg:w-3/4">
          <div className="lg:hidden">
            <ul className="mt-5 flex flex-col gap-1.5">
              <li className="flex items-center gap-5">
                <Image
                  src="/placements/circle-check-solid-full.svg"
                  width={30}
                  height={30}
                  alt="black tick"
                />
                <strong>Pre-Placement Talk</strong>
              </li>
              <li className="flex items-center gap-5">
                <Image
                  src="/placements/circle-check-solid-full.svg"
                  width={30}
                  height={30}
                  alt="black tick"
                />
                <strong>Written Test</strong>
              </li>
              <li className="flex items-center gap-5">
                <Image
                  src="/placements/circle-check-solid-full.svg"
                  width={30}
                  height={30}
                  alt="black tick"
                />
                <strong>Interview</strong>
              </li>
              <li className="flex items-center gap-5">
                <Image
                  src="/placements/circle-check-solid-full.svg"
                  width={30}
                  height={30}
                  alt="black tick"
                />
                <strong>Group Discussion</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default YourPathsuccessSection;
