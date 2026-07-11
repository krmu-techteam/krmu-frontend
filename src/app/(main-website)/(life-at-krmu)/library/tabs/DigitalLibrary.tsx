import Image from "next/image";

const DigitalLibrary = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full libtabcontent ">
      <p>Digital Age Learning</p>
      <h2>Advanced Digital Library Services</h2>
      <p>
        The digital library section, equipped with the latest computer terminals
        and online journals, reflects the university’s commitment to providing
        advanced study and research tools in the digital era.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 gap-10">
        <div className="w-full relative libcountcard">
          <p>Digital Library facility is an additional service the Library.</p>
          <Image
            src="/library/lp01.svg"
            width={100}
            height={100}
            alt=""
            className="libcount"
          />
        </div>
        <div className="w-full relative libcountcard">
          <p>
            Latest & new computer terminals are installed to access the
            information and browse the net for on-line resources.
          </p>
          <Image
            src="/library/lp02.svg"
            width={100}
            height={100}
            alt=""
            className="libcount"
          />
        </div>
        <div className="w-full relative libcountcard">
          <p>
            Online journals are subscribed to support the subject area of users
            for advance study/ research.
          </p>
          <Image
            src="/library/lp03.svg"
            width={100}
            height={100}
            alt=""
            className="libcount"
          />
        </div>
        <div className="w-full relative libcountcard">
          <p>
            Library is a member of DELNET database. Every members may utilize/
            explore it.
          </p>
          <Image
            src="/library/lp04.svg"
            width={100}
            height={100}
            alt=""
            className="libcount"
          />
        </div>
        <div className="w-full relative libcountcard">
          <p>
            Using or accessing of any objectionable website is not allowed in
            the Digital Library section.
          </p>
          <Image
            src="/library/lp05.svg"
            width={100}
            height={100}
            alt=""
            className="libcount"
          />
        </div>
        <div className="w-full relative libcountcard">
          <p>
            There are a lot of course materials uploaded/ linked for users’
            access for their academic development.
          </p>
          <Image
            src="/library/lp06.svg"
            width={100}
            height={100}
            alt=""
            className="libcount"
          />
        </div>
        <div className="w-full relative libcountcard">
          <p>
            Students may be barred digital library facility if any due remains
            pending.
          </p>
          <Image
            src="/library/lp07.svg"
            width={100}
            height={100}
            alt=""
            className="libcount"
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalLibrary;
