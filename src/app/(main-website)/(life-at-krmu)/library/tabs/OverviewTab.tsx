import Image from "next/image";
import Link from "next/link";

const OverviewTab = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full libtabcontent flex flex-col lg:flex-row items-center gap-10">
      <div className="w-full lg:w-1/2">
        <p>Library is in your Pocket, Smartphone to Smart Library</p>
        <h2>
          Library is trying to reach nearest to you, on your fingertips, just a
          click away
        </h2>
        <p>
          K.R. Mangalam University has embraced the digital era with its
          innovative approach to library services, offering a blend of
          traditional and modern resources. This analysis delves into the
          various aspects of their library services as presented on their
          webpage.
        </p>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="p-5 bg-[#051630] text-white w-full lg:w-1/2 rounded-[10px]">
            <h4 className="my-2.5">Book Renewal 1:</h4>
            <p className="mb-5">Use your Roll No or Employee ID to Login</p>
            <Link
              href="https://bit.ly/3CEDfs8"
              target="_blank" rel="noopener noreferrer"
              className="py-[11px] px-[23px] text-sm rounded-[4px] text-white bg-[#cb000d] hover:text-[#051630] hover:cursor-pointer"
            >
              Click Here
            </Link>
          </div>
          <div className="p-5 bg-[#051630] text-white w-full lg:w-1/2 rounded-[10px]">
            <h4 className="my-2.5">Book Renewal 2:</h4>
            <p className="mb-5">Use your Roll No or Employee ID to Login</p>
            <Link
              href="http://172.16.16.25:4444/"
              target="_blank" rel="noopener noreferrer"
              className="py-[11px] px-[23px] text-sm rounded-[4px] text-white bg-[#cb000d] hover:text-[#051630] hover:cursor-pointer"
            >
              Click Here
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Image
          src="/library/liboverview.webp"
          width={540}
          height={768}
          alt="Overview"
        />
      </div>
    </div>
  );
};

export default OverviewTab;
