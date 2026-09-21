import { Check } from "lucide-react";

const InnovativeTeaching = () => {
  return (
    <section className="py-10 bg-[url(/academics/bg-gradient-1.webp)] bg-cover bg-no-repeat bg-center px-4">
      <div className="max-w-[1664px] mx-auto w-full text-white">
        <h3 className="text-2xl md:text-[35px] font-semibold mb-5">
          Innovative Teaching and Curriculum Design
        </h3>
        <p className="mb-5">
          At KRMU, we continually innovate our teaching and curriculum to
          deliver an education that goes beyond informing to inspire, empower,
          and transform.
        </p>
        <div>
          <ul className="lg:grid grid-cols-2 grid-rows-3 gap-x-10">
            <li className="flex gap-3  py-1.5">
              <div>
                <Check size={22} strokeWidth={3} />{" "}
              </div>
              <span>
                <strong>Embracing Innovation:</strong> Our academic approach is
                centred on innovative teaching methods and a dynamic curriculum,
                regularly updated with the latest academic research, emerging
                trends, and industry insights.
              </span>
            </li>
            <li className="flex gap-3  py-1.5">
              <div>
                <Check size={22} strokeWidth={3} />{" "}
              </div>
              <span>
                <strong>Interdisciplinary Learning:</strong> We foster
                interdisciplinary learning by integrating knowledge across
                disciplines, equipping students to navigate the complexities of
                a rapidly evolving world.
              </span>
            </li>
            <li className="flex gap-3  py-1.5">
              <div>
                <Check size={22} strokeWidth={3} />{" "}
              </div>
              <span>
                <strong>Technology Integration: </strong> Advanced technology is
                integral to our teaching approach, enriching the learning
                experience through digital tools, virtual labs, and innovative
                learning platforms.
              </span>
            </li>
            <li className="flex gap-3  py-1.5">
              <div>
                <Check size={22} strokeWidth={3} />{" "}
              </div>
              <span>
                <strong>Experiential Learning: </strong> Hands-on experience is
                integral to our programmes, with practical projects,
                internships, and fieldwork connecting academic theory with
                real-world applications.
              </span>
            </li>
            <li className="flex gap-3  py-1.5">
              <div>
                <Check size={22} strokeWidth={3} />{" "}
              </div>
              <span>
                <strong>Relevant Curriculum: </strong> We keep our curriculum
                relevant by regularly incorporating feedback from students and
                stakeholders while adapting to emerging industry trends.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InnovativeTeaching;
