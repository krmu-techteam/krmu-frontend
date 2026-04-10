import { CourseComeToLifeSection } from "../contentType";
import FaciltiesSlide from "./FaciltiesSlide";

type Props = {
  data: CourseComeToLifeSection;
};

export default function FacilitiesSection({ data }: Props) {
  return (
    <section
      id="facilities"
      className="bg-white py-12 overflow-hidden scroll-mt-24"
    >
      <div className="w-full mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="compare-badge">Our Campus</span>

          <h2 className="compare-heading leading-snug mt-4 mb-2">
            World-Class Facilities & Infrastructure
          </h2>

          <p className="text-gray-600 max-w-4xl mx-auto mt-4">
            Strengthening its position as one of the best private colleges in
            Delhi NCR for B.Tech​., K.R. Mangalam University offers a modern and
            student-centric campus designed to support effective learning and
            holistic development for its students. The university provides smart
            classrooms, a well-equipped central library with digital resources,
            computer and analytics labs, and seminar halls to enhance academic
            engagement. Additionally, the availability of dedicated spaces for
            innovation, entrepreneurship, and skill development creates an
            environment that encourages practical learning, collaboration, and
            professional growth.
          </p>
        </div>

        {/* Slider Wrapper */}
        <div className="pb-[10px] ">
          <FaciltiesSlide data={data} />
        </div>
      </div>
    </section>
  );
}
