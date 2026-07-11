import { Check } from "lucide-react";

const InnovativeTeaching = () => {
  return (
    <section className="py-10 bg-[url(/academics/bg-gradient-1.webp)] bg-cover bg-no-repeat bg-center px-4">
      <div className="max-w-[1664px] mx-auto w-full text-white">
        <h3 className="text-2xl md:text-[35px] font-semibold mb-5">
          Innovative Teaching and Curriculum Design
        </h3>
        <p className="mb-5">
          At KRMU, we are dedicated to continuously innovating our teaching
          approaches and curriculum design to provide an education that not only
          informs but transforms.
        </p>
        <div>
          <ul className="lg:grid grid-cols-2 grid-rows-3 gap-x-10">
            <li className="flex gap-3  py-1.5">
              <div>
                <Check size={22} strokeWidth={3} />{" "}
              </div>
              <span>
                <strong>Embracing Innovation:</strong> Our academic approach is
                centred around pioneering teaching methods and a dynamic
                curriculum. We regularly update our programs to include the
                latest academic research and industry insights.
              </span>
            </li>
            <li className="flex gap-3  py-1.5">
              <div>
                <Check size={22} strokeWidth={3} />{" "}
              </div>
              <span>
                <strong>Interdisciplinary Learning:</strong> We encourage an
                interdisciplinary approach in our curriculum,preparing students
                for the complexities of the modern world by integrating
                knowledge across different disciplines.
              </span>
            </li>
            <li className="flex gap-3  py-1.5">
              <div>
                <Check size={22} strokeWidth={3} />{" "}
              </div>
              <span>
                <strong>Technology Integration: </strong> Advanced technology is
                a key component in our teaching,enhancing the learning
                experience with digital tools and virtual labs.
              </span>
            </li>
            <li className="flex gap-3  py-1.5">
              <div>
                <Check size={22} strokeWidth={3} />{" "}
              </div>
              <span>
                <strong>Experiential Learning: </strong> Hands-on experience is
                vital in our courses, with practical projects, internships, and
                fieldwork linking academic theories to real-world applications
              </span>
            </li>
            <li className="flex gap-3  py-1.5">
              <div>
                <Check size={22} strokeWidth={3} />{" "}
              </div>
              <span>
                <strong>Responsive Curriculum: </strong> We ensure that our
                curriculum remains relevant and by regularly incorporating
                feedback from students and stakeholders and adapting to emerging
                industry trends
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InnovativeTeaching;
