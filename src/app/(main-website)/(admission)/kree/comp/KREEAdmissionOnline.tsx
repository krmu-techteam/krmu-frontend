import Image from "next/image";

const KREEAdmissionOnline = () => {
  return (
    <section className="bg-[url(/admission/kree-helplingbg.webp)] lg:pt-10 bg-no-repeat bg-cover lg:pb-0 py-10 px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-20">
        <div className="lg:w-2/5  justify-end hidden lg:flex">
          <Image
            src="/admission/admission.webp"
            width={510}
            height={784}
            alt=""
          />
        </div>
        <div className="lg:w-3/5">
          <h2 className="text-[25px] md:text-5xl leading-[1.5] font-semibold text-center md:mt-[7%]">
            Admission
          </h2>
          <h3 className="leading-[1.5] mb-[10%] text-2xl md:text-4xl font-semibold text-center">
            Helpline
          </h3>
          <div className="flex flex-col lg:flex-row gap-5">
            <div
              className="lg:w-1/2 flex flex-col justify-center items-center bg-[#fefefe] py-2.5 rounded-[41px]"
              style={{
                boxShadow:
                  "0px 2.76726px 2.21381px 0px rgba(0, 0, 0, 0.02), 0px 6.6501px 5.32008px 0px rgba(0, 0, 0, 0.03), 0px 12.52155px 10.01724px 0px rgba(0, 0, 0, 0.04), 0px 22.33631px 17.86905px 0px rgba(0, 0, 0, 0.04), 0px 41.77761px 33.42209px 0px rgba(0, 0, 0, 0.05), 0px 100px 80px 0px rgba(0, 0, 0, 0.07)",
              }}
            >
              <div>
                <Image
                  src="/admission/callic.webp"
                  width={83}
                  height={68}
                  alt=""
                />
              </div>
              <h4 className="leading-[3] text-2xl font-semibold my-2.5">
                Phone
              </h4>
              <div className="mb-5">
                <a href="tel:01148884888">01148884888</a> /{" "}
                <a href="tel: 8800697010">8800697010</a>–
                <a href="tel: 8800697015">15</a>
              </div>
            </div>
            <div
              className="lg:w-1/2 flex flex-col justify-center items-center bg-[#fefefe] py-2.5 rounded-[41px]"
              style={{
                boxShadow:
                  "0px 2.76726px 2.21381px 0px rgba(0, 0, 0, 0.02), 0px 6.6501px 5.32008px 0px rgba(0, 0, 0, 0.03), 0px 12.52155px 10.01724px 0px rgba(0, 0, 0, 0.04), 0px 22.33631px 17.86905px 0px rgba(0, 0, 0, 0.04), 0px 41.77761px 33.42209px 0px rgba(0, 0, 0, 0.05), 0px 100px 80px 0px rgba(0, 0, 0, 0.07)",
              }}
            >
              <div>
                <Image
                  src="/admission/emailic.png"
                  width={83}
                  height={68}
                  alt=""
                  className="h-[70px] w-[70px]"
                />
              </div>
              <h4 className="leading-[3] text-2xl font-semibold my-2.5">
                Email
              </h4>
              <div className="mb-5">
                <a href="mailto:welcome@krmangalam.edu.in">
                  welcome@krmangalam.edu.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KREEAdmissionOnline;
