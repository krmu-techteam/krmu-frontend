import Image from "next/image";

const BookRecall = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full libtabcontent ">
      <p>Dynamic Resource Management</p>
      <h2>Book Recall and Reservation</h2>
      <p>
        The library’s system for recalling issued books and reserving desired
        ones ensures optimal circulation and availability of resources. This
        dynamic approach caters to the evolving needs of the academic community.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 gap-10">
        <div className="w-full relative libcountcard">
          <p>
            Library may recall any issued book, any time without assigning any
            reason.
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
            Any book which is issued out may be reserved by staff & students.
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
            They will be informed about the arrival of books through SMS/
            e-mail.
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
            Three days waiting will be provided to borrow the reserved book.
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
            Deposit one copy of fine receipt in Library to update your Library
            account.
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
            After three days the reservation will be cancelled and reserved book
            may be issued to any other deserving member.
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
            Your mobile number and e-mail ID should be correct & in working to
            get SMS/ email alert.
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

export default BookRecall;
