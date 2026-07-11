import Image from "next/image";

const YourPathsuccess = () => {
  return (
    <section className="py-10 lg:py-[20%] lg:bg-[url(/placements/Your-Path-to-Success-1.webp)] bg-cover bg-center px-4">
      <div className="max-w-[1664px] mx-auto w-full lg:flex lg:text-white">
        <div className="lg:w-1/4">
          <h2 className="text-[26px] lg:text-5xl font-semibold mb-3 lg:mb-5">
            Your Path to Success
          </h2>
          <p>
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
    </section>
  );
};

export default YourPathsuccess;
