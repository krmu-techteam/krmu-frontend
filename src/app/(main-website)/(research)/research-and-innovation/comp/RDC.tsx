import Image from "next/image";
import Link from "next/link";

const RDC = () => {
  return (
    <>
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-white">
          <h2 className="text-3xl md:text-5xl font-semibold mb-5">
            Research <br /> and Development Cell (RDC)
          </h2>
          <p>
            The Research and Development Cell, led by the esteemed Dean of
            Research, is the fulcrum of our research activities. With dedicated
            Associate and Assistant Deans, the RDC oversees diverse research
            initiatives, promoting interdisciplinary studies and innovative
            research methodologies. The cell plays a pivotal role in advancing
            our research agenda, fostering academic partnerships, and enhancing
            the university’s research profile on the global stage.
          </p>
          <br />
          <p>
            K R Mangalam University maintains its own comprehensive data
            repository encompassing all its publications, spanning journal
            articles, patents, books, and book chapters. Faculty members
            responsible for these publications personally upload their details
            onto our research application. Moreover, the application also
            facilitates the submission of reimbursement requests for conference
            registrations, fees for workshops, seminars, and memberships.
            Additionally, it serves as a platform for managing in-house
            conferences and both applied and granted projects.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
            <div className="text-center">

            <Image src="/research/seema.webp" width={431} height={537} alt="Seema" />
            <Link href="/dr-seema-raj" target="_blank" rel="noopener noreferrer" className="text-white mt-1.5"><strong>Dr. Seema Raj</strong> | Dean Research</Link>
            </div>
            
        </div>
      </div>
    </>
  );
};

export default RDC;
