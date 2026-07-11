import Image from "next/image";
import Link from "next/link";

const ContactVisitOurLocation = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row bg-[url(/contact-us/campus-bg.webp)] bg-cover bg-no-repeat bg-center   lg:h-80 items-end rounded-[16px]">
        <div className="lg:w-1/2 text-white h-full p-10">
          <h3 className="text-3xl md:text-5xl font-semibold leading-[1.5]">
            Visit Our Campus
          </h3>
          <p>
            Experience the vibrant campus life at K.R. Mangalam University.
            Schedule a visit to explore <br /> our facilities and meet our
            faculty.
          </p>
          <Link
            href="/campus-tour"
            className="campus-tour-btn bg-white p-5 mt-5"
          >
            {" "}
            <div className="campus-text text-black font-semibold text-[22px]">
              {" "}
              Schedule Your Exclusive{" "}
              <span className="text-[#0060aa]">Campus Tour Today! </span>{" "}
            </div>{" "}
            <Image
              src="/contact-us/arrow-1.png"
              width={86}
              height={16}
              alt="Arrow"
            />
          </Link>
        </div>
        <div className="lg:w-1/2 hidden lg:block">
          <Image
            src="/contact-us/contact-campus.webp"
            alt=""
            width={746}
            height={492}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactVisitOurLocation;
