import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactUsRegionalOffice = () => {
  return (
    <section className="py-[60px] px-4 bg-[url(/contact-us/contactus-gradient.webp)] bg-cover bg-no-repeat bg-center">
      <div className="max-w-[1664px] mx-auto w-full text-white">
        <h3 className="text-3xl md:text-5xl font-semibold mb-5">KRMU Regional Office</h3>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row mb-10">
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="text-white">
              <h6 className="leading-[4] text-lg font-semibold">
                <em>Bihar</em>
              </h6>
              <ul className="flex flex-col gap-1.5">
                <li className="flex items-center gap-1.5">
                  <FaPhoneAlt />{" "}
                  <span>
                    <Link href="tel:+91-8800697016">+91-8800697016</Link>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <MdEmail />{" "}
                  <span>
                    <Link href="mailto:bihar@krmangalam.edu.in">
                      bihar@krmangalam.edu.in
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-white">
              <h6 className="leading-[4] text-lg font-semibold">
                <em>Uttar Pradesh</em>
              </h6>
              <ul className="flex flex-col gap-1.5">
                <li className="flex items-center gap-1.5">
                  <FaPhoneAlt />{" "}
                  <span>
                    <Link href="tel:+91-9311256337">+91-9311256337</Link>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <MdEmail />{" "}
                  <span>
                    <Link href="mailto:uttarpradesh@krmangalam.edu.in">
                      uttarpradesh@krmangalam.edu.in
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-white">
              <h6 className="leading-[4] text-lg font-semibold">
                <em>Jharkhand</em>
              </h6>
              <ul className="flex flex-col gap-1.5">
                <li className="flex items-center gap-1.5">
                  <FaPhoneAlt />{" "}
                  <span>
                    <Link href="tel:+91-8800697019">+91-8800697019</Link>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <MdEmail />{" "}
                  <span>
                    <Link href="mailto:jharkhand@krmangalam.edu.in">
                      jharkhand@krmangalam.edu.in
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-white">
              <h6 className="leading-[4] text-lg font-semibold">
                <em>Uttarakhand</em>
              </h6>
              <ul className="flex flex-col gap-1.5">
                <li className="flex items-center gap-1.5">
                  <div>
                    <FaLocationDot className="w-4 h-4" />
                  </div>
                  <div>
                    7 B, Astley Hall , 1st Floor , Above Ahuja Pathology lab ,
                    Rajpur Road , near Clock Tower, Dehradun, Uttarakhand-248001
                  </div>
                </li>
                <li className="flex items-center gap-1.5">
                  <FaPhoneAlt />{" "}
                  <span>
                    <Link href="tel:+91-8800697019">+91-8800697019</Link>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <MdEmail />{" "}
                  <span>
                    <Link href="mailto:jharkhand@krmangalam.edu.in">
                      jharkhand@krmangalam.edu.in
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-white">
              <h6 className="leading-[4] text-lg font-semibold">
                <em>Punjab , Himachal , J & K</em>
              </h6>
              <ul className="flex flex-col gap-1.5">
                <li className="flex items-center gap-1.5">
                  <FaPhoneAlt />{" "}
                  <span>
                    <Link href="tel:+91-9311256334">+91-9311256334</Link>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <MdEmail />{" "}
                  <span>
                    <Link href="mailto:punjab@krmangalam.edu.in">
                      punjab@krmangalam.edu.in
                    </Link>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <MdEmail />{" "}
                  <span>
                    <Link href="mailto:himachal@krmangalam.edu.in">
                      himachal@krmangalam.edu.in
                    </Link>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <MdEmail />{" "}
                  <span>
                    <Link href="mailto:jk@krmangalam.edu.in">
                      jk@krmangalam.edu.in
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-white">
              <h6 className="leading-[4] text-lg font-semibold">
                <em>West Bengal & North- East</em>
              </h6>
              <ul className="flex flex-col gap-1.5">
                <li className="flex items-center gap-1.5">
                  <FaPhoneAlt />{" "}
                  <span>
                    <Link href="tel:+91-9311256335">+91-9311256335</Link>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <MdEmail />{" "}
                  <span>
                    <Link href="mailto:westbengal@krmangalam.edu.in">
                      westbengal@krmangalam.edu.in
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 mt-10 md:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.8824400955473!2d77.0672720760068!3d28.271581300379378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d25a4b2bc03f9%3A0x9f642d679654b239!2sK.R.%20Mangalam%20University!5e0!3m2!1sen!2sin!4v1765689227786!5m2!1sen!2sin"
            height="400"
            style={{ border: "0" }}
            loading="lazy"
            className="w-full md:w-[352px]"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUsRegionalOffice;
