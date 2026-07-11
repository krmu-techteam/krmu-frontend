import Image from "next/image";
import Link from "next/link";

const PhdImportantNotification = () => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-[1320px] mx-auto w-full">
        <div className="phdHeading">
          <h2 className="text-[32px] font-semibold mb-2.5">
            Ph.D. at KRMU
          </h2>
          <div className="custom-border"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-9 mt-10">
          <div className="w-full lg:w-1/2">
            {/* <h2 className="text-lg font-semibold border border-gray-200 rounded-t-md px-4 py-3 bg-white">
              Ph.D. Program and Details for Entrance Test (January 2026 Batch)
            </h2> */}

            <div className="overflow-x-auto rounded-b-md mb-5">
              {/* <table className="w-full border-collapse">
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="w-1/2 px-4 py-4 text-sm font-medium border border-gray-200">
                      Application Fee
                    </td>
                    <td className="w-1/2 px-4 py-4 text-sm border border-gray-200">
                      Rs. 2,000 (Rupees Two Thousand)
                    </td>
                  </tr>

                  <tr className="bg-white">
                    <td className="px-4 py-4 text-sm font-medium border border-gray-200">
                      Last Date of Submission of Application
                    </td>
                    <td className="px-4 py-4 text-sm border border-gray-200">
                      January 08, 2026 (Thursday)   (Even Semester)
                    </td>
                  </tr>

                  <tr className="bg-gray-100">
                    <td className="px-4 py-4 text-sm font-medium border border-gray-200">
                      Date of Entrance Test & Interview (Offline):
                    </td>
                    <td className="px-4 py-4 text-sm border border-gray-200">
                      January 10, 2026 (Saturday)
                    </td>
                  </tr>

                  <tr className="bg-white">
                    <td className="px-4 py-4 text-sm font-medium border border-gray-200">
                      Date of Final Result Declaration:
                    </td>
                    <td className="px-4 py-4 text-sm border border-gray-200">
                      January 14, 2026 (Wednesday)
                    </td>
                  </tr>

                  <tr className="bg-gray-100">
                    <td className="px-4 py-4 text-sm font-medium border border-gray-200">
                     Course Duration:
                    </td>
                    <td className="px-4 py-4 text-sm border border-gray-200">
                      3 Years (Minimum)
                    </td>
                  </tr>

                </tbody>
              </table> */}
            </div>
            <p className="leading-[1.5] mb-5">
              The Ph.D. programme offered by K. R. Mangalam University is framed according to standards set by University Grants Commission (UGC) under the able guidance of highly qualified and widely recognised faculty in their respective domains. We offer both full time and part time Ph.D. programmes in a wide range of domains. You will work closely with your supervisor on a research problem and push the frontiers of human knowledge and understanding. 
            </p>
            <p className="mb-5">
             K.R. Mangalam University has a well-established eco-system for impactful Research, Development and Innovation. We have a rich Central Instruments Facility (CIF) pertaining to Materials Science and Pharmacology related Research activities, in particular. You may get an opportunity to work in some of the Publicly Funded R&D Institutes/Laboratories and other Higher Education Institutes (HEIs). 
            </p>
            <p>
             Come and join us in the exciting and thrilling world of Research, Development and Innovation and become part of University’s endeavour in achieving the goal of Atma Nirbhar Bharat and contribute to solving Society’s problems. 
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div>
              <Image
                src="/landingpage/phd/univ.jpg"
                width={685}
                height={800}
                alt=""
                className="w-full object-cover"
              />
            </div>
            <div className="mt-2.5">
              <span>For Further Information, Please Contact Our Research Department:</span>
              <span className="flex break-all flex-wrap sm:flex-nowrap gap-5">
                <Link
                  href="mailto:welcome@krmangalam.edu.in"
                  className="flex items-center gap-2.5 font-semibold"
                >
                  <Image
                    src="/wp-content/landingpage/phd-2026/envelope.svg"
                    width={12}
                    height={12}
                    alt="Mail"
                  />{" "}
                  rdc@krmangalam.edu.in
                </Link>
                <Link
                  href="tel:8192888444"
                  className="flex items-center gap-2.5 font-semibold"
                >
                  <Image
                    src="/wp-content/landingpage/phd-2026/phone.svg"
                    width={12}
                    height={12}
                    alt="Mail"
                  />{" "}
                    +91-8800697009, +91-9289143055  
                </Link>
              </span>
              {/* <Link
                href=""
                className="inline-block mt-5 py-2.5 px-5 bg-[#005DA9] text-white text-center max-w-[354px] w-full text-xl font-semibold rounded-[10px]"
              >
                Important Instructions
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhdImportantNotification;
