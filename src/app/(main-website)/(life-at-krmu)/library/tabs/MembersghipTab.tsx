import Image from "next/image";

const MembersghipTab = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full libtabcontent ">
      <p>Seamless Access to Knowledge:</p>
      <h2>Simplified Library Membership at KR Mangalam University</h2>
      <p>
        KR Mangalam University’s library membership process is streamlined for
        ease and efficiency. Students and staff are required to fill out an
        online form just once, after which a membership ID is sent via SMS. This
        digital approach ensures quick and hassle-free access to a wealth of
        academic resources.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 gap-10">
        <div className="w-full relative libcountcard">
          <p>
            Every student & staff members have to fill & submit library
            Membership form Online (once only).
          </p>
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
            Your Library Membership ID will be sent on to your Mobile Number as
            SMS.
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
            First time this SMS will be treated as ID proof. You have to show
            your SMS ID received from the Library while borrowing the books.
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
            Any mistake of your Mobile Number may trouble you the failure of
            SMS.
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
            If any delay in making ID card, you can show any Photo ID proof as
            an alternate.
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
            After the issue of Roll No from the concern office/ University, you
            will be asked to show your photo ID proof while borrowing the book.
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
            Borrowing books by authorizing any person will be sole
            responsibility of the user.
          </p>
          <Image
            src="/library/lp07.svg"
            width={100}
            height={100}
            alt=""
            className="libcount"
          />
        </div>
        <div className="w-full relative libcountcard">
          <p>
            Any changes in mobile number or e-mail Id should be inform the Head
            Librarian by filling up the CORRECTION form available at
            http://drhilaluddin.blogspot.in/ ISSUE OF BOOKS
          </p>
          <Image
            src="/library/lp08.svg"
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

export default MembersghipTab;
