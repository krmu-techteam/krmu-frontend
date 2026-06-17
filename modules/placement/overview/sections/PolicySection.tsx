  const PolicySection = () => {
  return (
    <section className="py-10 md:py-[90px] bg-[url(/placements/Placement-Policy.webp)] bg-cover bg-no-repeat px-6 md:px-7 xl:px-16">
      <div className="max-w-[1530px] mx-auto w-full lg:flex gap-10">
        <div className="text-white lg:w-1/3 mb-5 lg:mb-0">
          <h3 className="heading-primary text-white mb-6">
            Placement Policy
          </h3>
          <p className="font-poppins text-white">
            Career Development Center at KRMU often executes essential placement
            activities to generate ample placement opportunities for the
            students. Apart from inviting corporate recruiters to the campus,
            the Center dedicatedly hosts several counselling and training
            programmes to embed academic excellence in the graduates. These
            programmes equip students with the essential skills required to land
            lucrative careers. Prominent companies and HR agencies visit the
            KRMU campus every year to offer jobs with attractive packages to
            young talents.
          </p>
        </div>
        <div className="lg:w-2/3">
          <div className="p-[30px] bg-[url(/placements/Placement-Policy-bg.webp)] bg-cover bg-no-repeat  rounded-[30px] text-white">
            <div className="md:flex gap-6">
              <div className="md:w-1/2 placementulli">
                <ul className="font-poppins text-white">
                  <li>
                    Recruitment through the Career Development Center will be
                    procured for students of KRMU only.
                  </li>
                  <li>
                    Students interested in campus placement should register with
                    the Center as soon as they reach the final year of their
                    programme.
                  </li>
                  <li>
                    The placement process would commence in September every
                    year.
                  </li>
                  <li>
                    Orientation and Policy talk for the registered students
                    would be organised at the beginning of every academic
                    session to provide an insight into the guidelines and
                    policies of the CDC and introduce the placement team.
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 placementulli">
                <ul className="font-poppins text-white">
                  <li>
                    <span>The placement process would involve</span>
                    <ul className="font-poppins text-white">
                      <li>Personal interaction with the placement team.</li>
                      <li>
                        Apprising students about the standard resume format.
                      </li>
                      <li>
                        Training students to face the recruitment process by
                        holding group discussions and conducting mock
                        interviews.
                      </li>
                      <li>Visit of employers for recruitment.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PolicySection;