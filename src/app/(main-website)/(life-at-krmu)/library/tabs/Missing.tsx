import Image from "next/image";

const Missing = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full libtabcontent ">
      <p>Responsibility and Replacement</p>
      <h2>Handling Lost Books</h2>
      <p>
        The library has set procedures for handling damaged books, where
        borrowers may be asked to replace the book or pay a binding charge. This
        policy underscores the importance of maintaining the integrity of
        library resources.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 gap-10">
        <div className="w-full relative libcountcard">
          <p>
            Lost or missing of books may be replaced with a latest edition’s new
            copy of the same book. Indian edition book shall be replaced with
            Indian edition and foreign edition book with foreign edition.
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
            Cost of the missing or lost of books may be deposited in account
            section of the college.
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
            Printed cost of the lost book (document/ item) + Rs. 100/-
            (processing charge) & late fine if any may be deposited in account
            section. If lost/ missing book is important and out of print, then
            printing cost with 50% extra charge, with late fine if any, will be
            charged.
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
            One copy of Receipt of the paid amount should be deposited in the
            Library to clear the dues.
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
            His/ her library membership will remain closed till the due(s)
            remains unpaid, and they can not borrow any book.
          </p>
          <Image
            src="/library/lp05.svg"
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

export default Missing;
