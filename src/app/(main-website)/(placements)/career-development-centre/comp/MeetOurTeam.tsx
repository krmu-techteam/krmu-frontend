import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const MeetOurTeam = () => {
  return (
    <section className="py-10 md:py-[90px] bg-[#051630] px-4">
      <div className="max-w-[1664px] mx-auto w-full text-white">
        <h3 className="text-3xl md:text-4xl font-semibold mb-5 text-center">
          Meet Our Career Development Center Team
        </h3>
        <div className="lg:flex items-center">
          <div className="lg:w-1/3 mb-5 lg:mb-0">
            <Card className="py-0 border-none lg:mx-[7.68%] gap-0 shadow-none bg-transparent">
              <div className="border-none flex justify-center p-0 gap-0 advisory-zoom-img overflow-hidden">
                <Image
                  src="/placements/dr_vibha-removebg-preview-modified.webp"
                  alt=""
                  width={373}
                  height={377}
                  className="z-10000 relative object-cover"
                />
              </div>
              <CardContent className="bg-[#cb000d] px-2.5 pt-2.5 pb-4 text-white flex items-center justify-center flex-col min-h-[202px] f-full">
                <CardTitle className="text-xl leading-[1.6] font-semibold mb-5">
                  Dr. Vibha Thakur
                </CardTitle>
                <CardDescription className="min-h-24 text-center text-white text-base">
                  <span>
                    <strong>Director (Career Development Center)</strong>
                  </span>
                  
                  <p className="my-5">
                    <strong>Email- </strong>{" "}
                    <Link href="mailto:director.cdc@krmangalam.edu.in">
                      director.cdc@krmangalam.edu.in.
                    </Link>
                  </p>
                  <p className="my-5">
                    <strong>Contact Details- </strong>{" "}
                    <Link href="tel:+91-9827085056">
                      +91-9827085056
                    </Link>
                  </p>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="lg:w-2/3 text-white">
            <p>
              As the Director of the Career Development Center at K.R. Mangalam
              University, Gurugram, Delhi NCR, it is my privilege to extend a
              warm welcome. At K.R. Mangalam University, we are deeply committed
              to providing quality education and preparing industry-ready
              graduates equipped with the skills needed to thrive in an
              ever-evolving corporate landscape. Our focus is on fostering the
              holistic growth and comprehensive development of our students.
            </p>
            <br />
            <p>
              The Career Skills and Tech Skills departments regularly conduct
              sessions on emerging topics in soft skills and technical
              expertise. Initiatives such as bootcamps, summer and winter
              schools, profile-based training, and company-specific training
              programs form the core of our upskilling efforts. The CDC places a
              strong emphasis on building a solid foundation for students by
              offering advanced courses that enhance analytical and
              computational abilities.
            </p>
            <br />
            <p>
              We prioritise industry exposure through projects, excursions,
              internships, hands-on workshops, on-the-job training, and
              educational tours. These experiences ensure that our students are
              well-prepared to navigate real-world challenges and make
              meaningful contributions to their chosen fields.
            </p>
            <br />
            <p>
              On behalf of K.R. Mangalam University, it gives me great pleasure
              to invite companies to our campus for recruitment. We are
              confident that you will discover a talented, ambitious, and
              dynamic pool of young professionals ready to make a difference in
              your organisation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
