import Image from "next/image";

const SBASPanel = () => {
  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">
            Workshop on Digital Forensics
          </h3>
          <p className="mb-5 text-lg">
            The School of Basic and Applied Sciences, K.R. Mangalam University
            organised a workshop on “Digital Forensics: Awareness on Trends and
            Technology” for Forensic Science students. The session was led by
            Air Commodore R.N. Gaekwad (Retd.), Managing Director of Idyllics
            Futuristic Technologies (IFT), who shared expert insights on drone
            forensics and its role in cybercrime investigations.
          </p>
          <p className="mb-5 text-lg">
            Students gained practical exposure to drone components, forensic
            tools, and real-world applications, including legal admissibility
            and cyber threat mitigation. A live demonstration by IFT’s drone
            instructor and an interactive Q&A session enriched the learning
            experience.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.krmangalam.edu.in/wp-content/uploads/2026/01/digital-forensic-800x450.jpg"
            width={600}
            height={300}
            alt=""
            className="border w-full h-[400px] object-cover"
          />
        </div>
      </div>
      {/* <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10 my-10">
        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.krmangalam.edu.in/wp-content/uploads/2026/01/cyber-800x615.jpg"
            width={600}
            height={300}
            alt=""
            className="border w-full h-[400px] object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">
            Workshop on Cybersecurity
          </h3>
          <p className="mb-5 text-lg">
            The Department of Forensic Science, School of Basic and Applied
            Sciences, K.R. Mangalam University, organised a hands-on workshop on
            Cybersecurity and Ethical Hacking for B.Sc. (H) Forensic Science
            students. The training featured expert sessions by professionals
            from the Cyberelite Task Force, covering data recovery, cybercrime
            case studies, and career opportunities in cybersecurity.
          </p>
          <p className="mb-5 text-lg">
            The interactive workshop provided practical exposure to cyber
            threats and digital forensics tools, enhancing students’ technical
            skills and industry readiness. The session effectively combined
            theory and practice, offering valuable insights for aspiring
            cybersecurity professionals.
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default SBASPanel;
