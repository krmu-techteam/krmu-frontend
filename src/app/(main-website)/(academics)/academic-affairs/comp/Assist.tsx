import Image from "next/image";
import Link from "next/link";
import React from "react";

const Assist = () => {
  return (
    <section className="pt-10 px-4">
      <div className="max-w-[1664px] mx-auto w-full lg:flex">
        <div className="lg:w-1/2">
          <h3 className="text-2xl md:text-5xl mb-5 font-semibold">We’re Here to Assist</h3>
          <h4 className="text-xl font-semibold mb-2.5">
            For more information or assistance, reach out to the Academic
            Affairs office <br /> via
          </h4>
          <ul className="text-[#3d5fa5] text-xl break-all">
            <li>
              <Link href="mailto:dean.acad@krmangalam.edu.in">
                dean.acad@krmangalam.edu.in
              </Link>
            </li>
            <li>
              <Link href="mailto:acad.affairs@krmangalam.edu.in">
                acad.affairs@krmangalam.edu.in
              </Link>
            </li>
            <li>
              <Link href="mailto:associatedean.acad@krmangalam.edu.in">
                associatedean.acad@krmangalam.edu.in
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2">
          <Image src="/wp-content/images/assist.png" width={768} height={513} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Assist;
