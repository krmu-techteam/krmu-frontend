import { Check } from "lucide-react";

const NurturingSuccess = () => {
  return (
    <section className="py-10 bg-[url(/academics/bg-gradient-7.webp)] bg-cover bg-center px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row">
        <div className="text-white lg:w-4/5">
          <h3 className="text-2xl md:text-[35px] font-semibold mb-5 leading-[1]">
            Nurturing Success Beyond the Classroom
          </h3>
          <p className="text-xl">
            We provide a plethora of resources and support systems to aid our
            students’ academic and personal growth, including:
          </p>
          <ul className="mt-5 md:flex items-center justify-between">
            <li className="flex items-center gap-3">
              <Check size={15} strokeWidth={5} />{" "}
              <span>Academic planning and career counselling services.</span>
            </li>
            <li className="flex items-center gap-3">
              <Check size={15} strokeWidth={5} />{" "}
              <span>
                Tutoring, mentoring, and psychological counselling services
              </span>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/5"></div>
      </div>
    </section>
  );
};

export default NurturingSuccess;
