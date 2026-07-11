import Image from "next/image";

const SolsPanel = () => {
  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">
            Panel Discussion on Bridging the Gap: Navigating Internship
            Opportunities
          </h3>
          <p className="mb-5 text-lg">
            A panel discussion titled “Bridging the Gap: Navigating Internship
            Opportunities for Law Students” was successfully organised,
            featuring eminent legal professionals from leading Tier-One law
            firms. The panel included Ms. Sayntani Chatterjee (Dua Associates),
            Mr. Nachiketa Goyal (Kochhar & Co.), Mr. Shubham Malhotra
            (Lawstrings Management Business Development), and Mr. Anil Tiwari
            (Hammurabi Solomon Partners).
          </p>
          <p className="mb-5 text-lg">
            The session focused on internship expectations of top law firms,
            essential skills sought in interns, and effective application
            strategies. Panelists also highlighted the importance of networking
            and industry readiness.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.krmangalam.edu.in/wp-content/uploads/2026/01/law-internship-800x450.jpg"
            width={600}
            height={300}
            alt=""
            className="border w-full h-[400px] object-cover"
          />
        </div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10 my-10">
        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.krmangalam.edu.in/wp-content/uploads/2025/06/dssfd.webp"
            width={600}
            height={300}
            alt=""
            className="border w-full h-[400px] object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">
            Expert Talk on Global Trends in Higher Education
          </h3>
          <p className="mb-5 text-lg">
            The Moti Lal Nehru Chair at the School of Legal Studies organised an
            expert lecture under the esteemed Motilal Nehru Lecture Series on
            the topic “Global Trends in Higher Education,” delivered by Prof.
            Ved Prakash, Former Chairman of the UGC and Former Chancellor of
            KIIT University. Prof. Ved Prakash delivered an insightful address,
            emphasizing evidence-based policymaking, structural reforms, and the
            need for self-assessment in the higher education sector. He
            advocated for gender equality, multidisciplinary learning, and
            dynamic curriculum updates to align with evolving societal and
            technological needs. Highlighting the pillars of Knowledge,
            Understanding, and Contemplation, he urged educators to adopt a
            transformative approach to teaching, aimed at nurturing innovation
            and meaningful academic growth. The lecture was coordinated by Dr.
            Shobhna Jeet, Mr. Prashant Panwar, and Dr. Megha Garg.
          </p>
        </div>
      </div>
      {/* <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10 my-10">
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">
            Expert Lecture on Right to Privacy and Data Protection Law
          </h3>
          <p className="mb-5 text-lg">
            An expert lecture on “Right to Privacy and Data Protection Law” was
            organised by the Motilal Nehru Chair in collaboration with the
            School of Legal Studies. Prof. M.K. Bhandari, Founder and Director
            of GALTER, delivered an insightful session on the constitutional
            evolution of the right to privacy in India, with special reference
            to the 2017 Puttaswamy Judgment.
          </p>
          <p className="mb-5 text-lg">
            The lecture addressed key challenges of data protection in the
            digital age, comparing India’s data protection framework with the
            EU’s GDPR, and discussed the impact of emerging technologies such as
            AI, Big Data, and IoT. An interactive Q&A session further enriched
            the discussion, providing students with valuable legal and practical
            insights into privacy and data protection.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.krmangalam.edu.in/wp-content/uploads/2026/01/MK-BHANDARI-800x600.jpg"
            width={600}
            height={300}
            alt=""
            className="border w-full h-[400px] object-cover"
          />
        </div>
      </div> */}
    </section>
  );
};

export default SolsPanel;
