import CourseFAQAccordion from "./CourseFAQAccordion";

const CourseFAQ = () => {
  return (
    <section className="py-[50px] px-4 scroll-mt-24" id="faqs">
      <div className="max-w-[1296px] mx-auto w-full">
        <div className="text-center mb-12">
          <span className="bg-white font-light text-black rounded-full px-[15px] py-[5px] border border-[#f1f1f1] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] inline-block mb-[20px] text-sm">
            FAQs
          </span>
          <h3 className="text-2xl md:text-4xl font-semibold">
            <span className="highlight-text">Got Questions?</span> We've Got
            Answers
          </h3>
        </div>
        <CourseFAQAccordion />
      </div>
    </section>
  );
};

export default CourseFAQ;
