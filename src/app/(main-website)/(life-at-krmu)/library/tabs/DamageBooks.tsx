import Image from "next/image";

const DamageBooks = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full libtabcontent ">
      <p>Preserving Resources</p>
      <h2>Addressing Book Damages</h2>
      <p>
        The library has set procedures for handling damaged books, where
        borrowers may be asked to replace the book or pay a binding charge. This
        policy underscores the importance of maintaining the integrity of
        library resources.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 gap-10">
        <div className="w-full relative libcountcard">
          <p>
            Any book found damaged at the time of returning, the borrower may be
            asked to replace the book with a new one or pay binding charge Rs.
            100/- in account section, and deposit one copy of the receipt in
            Library.
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
            If the damage is minor, then they may be asked to pay a penalty of
            mishandling Rs. 50/- in account section, and deposit one copy of the
            receipt in Library.
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
            His/ her library membership will remain closed till the penalty
            remains unpaid, and they cannot borrow any book. 6BOOK RENEWAL?
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
  );
};

export default DamageBooks;
