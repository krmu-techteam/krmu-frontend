const contactPeople = [
  {
    name: "Dr. Tanaya Verma",
    role: "Dean and Convenor",
  },
  {
    name: "Ar. Pankaj Dhayal",
    role: "Associate Professor and Conference Co-Convenor",
  },
  {
    name: "Ar. Sukriti Setia",
    role: "Assistant Professor and Conference Co-Convenor",
  },
];

const ContactUs = () => {
  return (
    <section className="w-full border-b-[5px] border-[#111d33] bg-white py-10 sm:py-12 md:border-b-[7px] md:py-16 lg:py-[68px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[101px]">
        {/* Header */}
        <div className="mb-7 sm:mb-8">
          <span className="mb-2 block font-serif text-[10px] font-bold uppercase tracking-[0.16em] text-[#b08233] sm:mb-3 sm:text-[11px]">
            Get in Touch
          </span>

          <h2 className="text-2xl font-bold leading-[1.15] tracking-[-0.02em] text-[#1d1d1d] sm:text-3xl md:text-[26px]">
            Contact Us
          </h2>
        </div>

        {/* Contact People */}
        <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-3 md:gap-8 lg:gap-10">
          {contactPeople.map((person) => (
            <div key={person.name}>
              <h3 className="text-[13px] font-bold leading-[1.3] text-[#1d1d1d] sm:text-[14px]">
                {person.name}
              </h3>

              <p className="mt-1 max-w-[300px] font-serif text-[12px] leading-[1.45] text-[#5f5a53] sm:text-[13px]">
                {person.role}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-7 h-px w-full bg-[#d0c8b9] sm:my-8 md:my-9" />

        {/* Contact Information */}
        <div className="grid grid-cols-1 items-start gap-5 sm:gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
          {/* Address */}
          <div>
            <p className="font-serif text-[12px] leading-[1.5] text-[#5f5a53] sm:text-[13px]">
              School of Architecture and Design,
              <br />
              K.R. Mangalam University, Gurugram, Haryana, India
            </p>
          </div>

          {/* School */}
          <div className="md:text-center">
            <a
              href="#"
              className="font-serif text-[12px] text-[#38342f] underline underline-offset-2 transition-colors hover:text-[#b08233] sm:text-[13px]"
            >
              School of Architecture and Design
            </a>
          </div>

          {/* Email */}
          <div className="md:text-right">
            <a
              href="mailto:design2030@krmangalam.edu.in"
              className="break-all font-serif text-[12px] text-[#b08233] transition-colors hover:text-[#8d6926] sm:text-[13px] md:break-normal"
            >
              design2030@krmangalam.edu.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;