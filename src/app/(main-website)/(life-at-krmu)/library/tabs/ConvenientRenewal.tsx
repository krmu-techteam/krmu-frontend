import Image from "next/image";

const ConvenientRenewal = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full libtabcontent ">
      <p>Stay Updated</p>
      <h2>Convenient Renewal Status Checks</h2>
      <p>
        Users can easily check their renewal status online, including due dates
        and membership status. This feature adds transparency and convenience,
        allowing users to manage their borrowing efficiently.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 gap-10">
        <div className="w-full relative libcountcard">
          <p>
            You may check Renewal Status Online (next Due Date, Membership
            Status, and Fine if any etc) yourself.
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
          <p>Login the Renewal Status strictly be made through Gmail only.</p>
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
            If there is any fine & Membership is Closed, then you have to
            deposit fine in Account section.
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
            Ask Account Section official for two copies of the receipt of the
            fine you have paid.
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
            To get Status through SMS your mobile number should be correct, in
            working and registered in the library.
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
            Students shall be barred this book renewal facility if any due
            remains pending.
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
            Your feedback will be useful for enhancements of Library services.
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

export default ConvenientRenewal;
