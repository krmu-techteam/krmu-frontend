import Link from "next/link";
import React from "react";

const YRCContactUs = () => {
  return (
    <section className="pb-10 md:py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h4 className="text-4xl font-semibold mb-5">Contact Us</h4>
        <p>
          Want to make a difference, believe in contributing to society, learn
          something more than books – Youth Red Cross at K.R. Mangalam
          University awaits you.
        </p>
        <br />
        <p>Email: <Link href="mailto:yrc@krmangalam.edu.in" className="hover:text-blue-600">yrc@krmangalam.edu.in</Link></p>
        <br />
        <p><Link href="mailto:monika.yadav@krmangalam.edu.in" className="hover:text-blue-600">monika.yadav@krmangalam.edu.in</Link></p>
        <br />
        <p>
          <strong>
            Be the reason someone smiles today. Join Youth Red Cross.
          </strong>
        </p>
      </div>
    </section>
  );
};

export default YRCContactUs;
