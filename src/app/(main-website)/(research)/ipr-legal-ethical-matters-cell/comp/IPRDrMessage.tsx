import Image from "next/image";
import Link from "next/link";

const IPRDrMessage = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 text-white">
        <h2 className="text-3xl md:text-5xl font-semibold mb-14">
          Message of Director
        </h2>
        <p>
          As the Chairperson of the Intellectual Property Rights (IPR) Cell, it
          is my privilege to lead an initiative that is vital in safeguarding
          and nurturing creativity and innovation within our institution. The
          IPR Cell is dedicated to promoting awareness about the importance of
          intellectual property and guiding faculty, researchers, and students
          in protecting their inventions, research outcomes, and creative works.
          We are committed to fostering an environment that encourages
          innovation, supports patenting, and ensures that our community fully
          understands their rights and responsibilities in protecting their
          intellectual creations. Together, we aim to create a culture where
          ideas are valued, protected, and translated into impactful
          contributions to society. I encourage everyone to actively engage with
          the IPR Cell and utilize its resources to strengthen their work
          through proper intellectual property protection and management.
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <Link
          href="/faculty/dr-inderpreet-kaur-saggu/"
          target="_blank" rel="noopener noreferrer"
          className="text-center flex flex-col justify-center items-center"
        >
          <Image
            src="/ipr/inderpreet.png"
            width={431}
            height={537}
            alt="Seema"
          />
          <h4 className="text-white mt-1.5">
            <strong>Dr. Inderpreet Kaur Saggu</strong> | Associate Professor &
            Dean – Legal Studies
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default IPRDrMessage;
