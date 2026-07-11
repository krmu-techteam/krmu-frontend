import Image from "next/image";

const KEICFacilities = () => {
  return (
    <section className="py-[50px] px-4 bg-[url(/keic/keic-gradient-1.webp)] bg-cover bg-no bg-center">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="text-white">
          <h4 className="text-3xl md:text-5xl font-semibold leading-[1.5]">Facilities</h4>
          <p>
            KEIC provides a nurturing environment with state-of-the-art
            facilities to support the entrepreneurial journey, including:
          </p>
        </div>
        <div className="flex flex-col lg:flex-row mt-10">
          <div className="lg:w-1/2 text-white">
            <h4 className="font-semibold text-3xl md:text-5xl leading-[1.5] mb-5">
              Co-working Spaces
            </h4>
            <p>
              Coworking spaces offer startups a multitude of benefits essential
              for their growth and success. From providing flexible workspace
              solutions to fostering networking opportunities, scalability, and
              a professional image, coworking spaces serve as invaluable
              resources for startups.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/keic/keic-co-working.webp"
              width={768}
              height={409}
              alt="Co working space"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row mt-10 gap-10">
          <div className="lg:w-1/2">
            <Image
              src="/keic/keic-access.webp"
              width={768}
              height={409}
              alt="Co working space"
              className="w-full"
            />
          </div>
          <div className="lg:w-1/2 text-white">
            <h4 className="font-semibold text-3xl md:text-5xl leading-[1.5] mb-5">
              Access to Design Thinking Lab
            </h4>
            <p>
              The Design Thinking Lab at K.R. Mangalam University is a dedicated
              lab for research and innovation. We equip our design thinking lab
              with tools and materials to support creative processes, including
              whiteboards, prototyping kits, and collaborative workspaces.
            </p>
            <br />
            <h4 className="font-semibold text-3xl md:text-5xl leading-[1.5] mb-5">
              Legal and Accounting Support
            </h4>
            <p>
              KEIC Foundation supports startups by providing not only
              mentorships and resources for development but also special legal
              and accounting support. This support helps new ventures navigate
              the complexities of legal compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KEICFacilities;
