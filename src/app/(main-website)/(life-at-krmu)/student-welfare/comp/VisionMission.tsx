const VisionMission = () => {
  return (
    <section className="py-[50px] bg-[#051630]">
      <div className="max-w-[1600px] mx-auto w-full flex flex-col lg:flex-row">
        <div className="lg:w-2/5">
          <div className="bg-white p-[30px] mx-4 lg:mx-8 rounded-[30px]">
            <h4 className="text-2xl font-semibold mb-5">
              Shaping Global Leaders and Well-Rounded Individuals
            </h4>
            <p>
              At K.R. Mangalam University, we are guided by a compelling vision
              and mission that form the cornerstone of our educational ethos.
              Our approach is not just about imparting knowledge; it’s about
              shaping the future leaders of the world. With a vision deeply
              rooted in the comprehensive development of each individual, we
              strive to create a nurturing environment that fosters academic
              excellence, personal growth, and global competencies.
            </p>
          </div>
        </div>
        <div className="lg:w-3/5 flex flex-col lg:flex-row">
          <div className="lg:w-2/5 mx-[18px] text-white">
            <h4 className="text-4xl leading-[1.3] mt-2.5 mb-[15px]">Vision</h4>
            <p className="mb-[30px]">
              Student Welfare envisions comprehensive individual, academic, and
              integrated development by providing life skills and counseling
              services and thus preparing them for a diverse, enterprising, and
              global society.
            </p>
            <h4 className="text-4xl leading-[1.3] mt-2.5 mb-[15px]">Mission</h4>
            <p className="mb-[30px]">
              The Student Welfare Department aims to facilitate global
              leadership and personal well-being through high moral values and
              sound life skills among students.
            </p>
          </div>
          <div className="lg:w-3/5 mx-[18px] border-l border-[#716d6c] pl-[30px] ">
            <div
              className="p-[30px] text-white rounded-[22px] mb-5"
              style={{
                background: "rgba(255,255,255,.2)",
              }}
            >
              <p className="mb-5">
                <strong>Student Council and Extracurricular Oversight </strong>
              </p>
              <p>
                Supervise the student council’s activities, promote and advise
                on extracurricular activities, including sports and cultural
                events, ensuring active student engagement.
              </p>
            </div>
            <div
              className="p-[30px] text-white rounded-[22px] mb-5"
              style={{
                background: "rgba(255,255,255,.2)",
              }}
            >
              <p className="mb-5">
                <strong>Student Welfare and Facilities Management</strong>
              </p>
              <p>
                Collaborate with university staff on student welfare, manage
                hostel amenities and canteen operations, and address student
                grievances to ensure a supportive campus environment.
              </p>
            </div>
            <div
              className="p-[30px] text-white rounded-[22px]"
              style={{
                background: "rgba(255,255,255,.2)",
              }}
            >
              <p className="mb-5">
                <strong>Scholarship Programmes and Supervisory Duties</strong>
              </p>
              <p>
                Initiate scholarship awards for deserving students and undertake
                various responsibilities as directed by the Vice-Chancellor,
                focusing on enhancing the student experience and maintaining
                university standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
