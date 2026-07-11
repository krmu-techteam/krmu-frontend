import Image from "next/image";

const InterRelationContent = () => {
  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <p>
            The International Relations (IR) at K.R. Mangalam University serves
            as the pivotal hub for fostering collaborative initiatives between
            K.R. Mangalam University and its counterparts worldwide. Our mandate
            encompasses the establishment of robust partnerships, facilitation
            of dynamic student and faculty exchanges, fostering global
            engagement, promoting cross-cultural initiatives, ultimately
            enriching the educational experience and enhancing the global
            reputation.
          </p>
          <p>
            With utmost dedication to ensuring a seamless transition for
            international students and visiting faculty members, the IR team
            extends comprehensive administrative support. Our commitment to
            excellence is reflected in our role as a one-stop service center,
            providing invaluable assistance in visa affairs, insurance, housing
            and academic matters.
          </p>
          <p>
            Our mission is the unwavering dedication of the IR team to deliver
            unparalleled services to support both educators and students. We
            strive to create an inclusive and supportive environment, promoting
            global collaboration and fostering a rich tapestry of academic and
            cultural exchanges.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <Image
            src="/inter-relation/circle.png"
            width={506}
            height={526}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default InterRelationContent;
