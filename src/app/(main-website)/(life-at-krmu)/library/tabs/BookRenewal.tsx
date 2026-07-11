import Image from "next/image";

const BookRenewal = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full libtabcontent ">
      <p>Flexible Learning Support</p>
      <h2>Easy Book Renewal Process</h2>
      <p>
        The library’s book renewal system is designed for flexibility, allowing
        users to extend their borrowing period through an online request. This
        system accommodates the varying pace and depth of study and research
        undertaken by users.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 gap-10">
        <div className="w-full relative libcountcard">
          <p>Books are issued for 21 days only.</p>
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
            If further you need for more than 21 days, then you have to submit a
            Renewal Request Online only.
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
            If further you need for more than 21 days, then you have to submit a
            Renewal Request Online only.
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
            Renewal Request may be submitted in advance before two days of the
            Due Date.
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
          <p>Remember, the Due Date is the date of starting of fine.</p>
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
            Requested books will be renewed before 11:30 A.M. every day and
            updated to view it Online before 04:00 P.M. every day.
          </p>
          <Image
            src="/library/lp06.svg"
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

export default BookRenewal;
