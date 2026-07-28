import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";

const ProgrammesConnectWithUs = () => {
  return (
    <section className="pb-8 md:pb-12 xl:pb-20">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-10">
        <h3 className="heading-primary mb-5">Connect With Us</h3>
        <div className="flex flex-wrap md:flex-nowrap items-center gap-5">
          <div className="w-full md:w-3/12">
            <Link
              href="tel:9311411717"
              className="bg-[#000000]/30 p-2.5 rounded-[4px] border border-[#000000]/30 flex items-center break-all"
            >
              <div>
                <div className="w-[50px] h-[50px] bg-[#cb000d] flex items-center justify-center rounded-full">
                  <PhoneCall className="text-xl text-white" />
                </div>
              </div>
              <span className=" p-2.5 flex font-poppins flex-wrap items-center lg:gap-2.5 text-sm font-medium text-white">
                <span className="">Call Us:</span>
                <span>9311411717</span>
              </span>
            </Link>
          </div>
          <div className="w-full md:w-4/12">
            <Link
              href="mailto:welcome@krmangalam.edu.in"
              className="bg-[#000000]/30 p-2.5 rounded-[4px] border border-[#000000]/30 flex items-center break-all"
            >
              <div>
                <div className="w-[50px] h-[50px] bg-[#cb000d] flex items-center justify-center rounded-full">
                  <Mail className="text-xl text-white" />
                </div>
              </div>
              <span className=" p-2.5 font-poppins flex flex-wrap items-center lg:gap-2.5 text-sm font-medium text-white break-all">
                <span className="">Email Us:</span>
                <span>welcome@krmangalam.edu.in</span>
              </span>
            </Link>
          </div>
          <div className="w-full md:w-5/12">
            <Link
              href="https://maps.app.goo.gl/UbKoco3Af9VZQvPv5"
              className="bg-[#000000]/30 p-2.5 rounded-[4px] border border-[#000000]/30 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <div className="w-[50px] h-[50px] bg-[#cb000d] flex items-center justify-center rounded-full">
                  <MapPin className="text-xl text-white" />
                </div>
              </div>
              <span className=" p-1.5 flex font-poppins items-center gap-2.5 text-sm font-medium text-white">
                <span className=""></span>
                <span>
                  Address: K.R. Mangalam University, Sohna - Gurgaon Road,
                  Sohna, Sohna Rural, Gurugram, Haryana 122103
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammesConnectWithUs;
