import Image from "next/image";

const StudentEncouraged = () => {
  return (
    <>
      <section className="py-[60px] pb-10 px-[30px]">
        <div className="max-w-[1664px] mx-auto w-full flex">
          <div className="lg:w-1/2">
            <p className="text-lg">
              Students are encouraged to research the company profile online
              before deciding to participate in any recruitment process. If
              interested, they must apply online through the Career Development
              Center for consideration.
            </p>
            <br />
            <p>
              Registered students will be notified of the recruiter’s visit once
              their schedule is confirmed, either through email or via the
              university’s website.
            </p>
            <br />
            <p>
              Students attending the recruitment process are required to
              participate fully in all stages of the selection process after
              attending the Pre-Placement Talk, unless they are eliminated at
              any point. Those who withdraw midway without valid reason will not
              be permitted to participate in future recruitment drives.
            </p>
          </div>
          <div className="lg:w-1/2"></div>
        </div>
        <div className="max-w-[1664px] mx-auto w-full -mt-[15%] hidden lg:block">
          <Image
            src="/programmes/placementprocessbannermidpic.webp"
            width={1554}
            height={724}
            alt="student encouraged"
          />
        </div>
      </section>
    </>
  );
};

export default StudentEncouraged;
