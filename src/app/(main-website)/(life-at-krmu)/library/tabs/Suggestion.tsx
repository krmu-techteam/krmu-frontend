import Image from "next/image";

const Suggestion = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full libtabcontent flex flex-col lg:flex-row items-center gap-10">
      <div className="w-full lg:w-1/2">
        <p>Valuing Feedback</p>
        <h2>Library Complaint and Suggestion System</h2>
        <p>
          The library encourages users to submit complaints and suggestions
          online, demonstrating its commitment to continuous improvement and
          user satisfaction.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
          <div className="relative libcountcard w-full">
            <p>
              Any complaint regarding Library may be brought to the notice of
              the Librarian or submitted through Online.
            </p>
            <Image
              src="/library/lp01.svg"
              width={100}
              height={100}
              alt=""
              className="libcount"
            />
          </div>
          <div className="relative libcountcard w-full">
            <p>
              Any suggestion regarding Library may be submitted through Online.
            </p>
            <Image
              src="/library/lp02.svg"
              width={100}
              height={100}
              alt=""
              className="libcount"
            />
          </div>
          <div className="relative libcountcard w-full">
            <p>
              To get SMS alert about your complaint/ suggestion, your mobile
              number should be correct & in working.
            </p>
            <Image
              src="/library/lp03.svg"
              width={100}
              height={100}
              alt=""
              className="libcount"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Image
          src="/library/liabrary.webp"
          width={540}
          height={768}
          alt="Overview"
        />
      </div>
    </div>
  );
};

export default Suggestion;
