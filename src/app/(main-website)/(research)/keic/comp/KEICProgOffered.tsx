const KEICProgOffered = () => {
  return (
    <section className="py-10">
      <div className="max-w-[1664px] mx-auto w-full">
        <h4 className="text-3xl md:text-5xl text-center font-semibold mb-10">
          Programme Offered
        </h4>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20">
          <div className="lg:w-1/2 text-white bg-[url(/keic/keic-gradient-1.webp)] bg-cover bg-no-repeat bg-center p-5">
            <h3 className="text-4xl font-semibold mb-5">
              Pre-Incubation Program
            </h3>
            <div className="keicProgOffcontent">
              <p>
                Our Pre-Incubation Program is tailored to assist entrepreneurs
                in transforming their ideas into profitable businesses. Geared
                towards individuals or groups in the ideation stage of their
                product or service, this program provides comprehensive support.
              </p>{" "}
              <p>
                <strong>Duration</strong>– 1 year to 18 months
              </p>{" "}
              <p>
                <strong>Target Audience-</strong> Entrepreneurs in the ideation
                stage
              </p>{" "}
              <p>
                <strong>Support Offered</strong>
              </p>{" "}
              <ol>
                {" "}
                <li>
                  <strong>SEED Grant:</strong> Training Sessions for idea
                  refinement and business conceptualisation.
                </li>{" "}
                <li>
                  <strong>Business Plan Preparation: </strong>Guidance and
                  assistance in crafting a robust business plan.
                </li>{" "}
                <li>
                  <strong>Mentoring: </strong>Access to experienced mentors
                  offering valuable insights and advice.
                </li>{" "}
                <li>
                  Product Development Assistance: Support in bringing ideas to
                  fruition through product development guidance.
                </li>{" "}
                <li>
                  <strong>Technical Assistance: </strong>Assistance in
                  navigating technical challenges associated with idea
                  implementation.
                </li>{" "}
                <li>
                  <strong>Networking Events: </strong>Opportunities to connect
                  with like-minded individuals and industry professionals.
                </li>{" "}
              </ol>{" "}
            </div>
          </div>
          <div className="lg:w-1/2 text-white bg-[url(/keic/keic-gradient-2.webp)] bg-cover bg-no-repeat bg-center p-5">
            <h3 className="text-4xl font-semibold mb-5">
              Pre-Incubation Program
            </h3>
            <div className="keicProgOffcontent">
              <p>
                Our Incubation Program is designed to empower entrepreneurs in
                transforming their ideas into successful ventures. Tailored for
                individuals or groups in the prototype and scaling stage, this
                program offers a holistic support system.
              </p>{" "}
              <p>
                <strong>Duration-</strong> 24 months and expandable up to 36
                months subject to the recommendation of the KEIC Foundation
              </p>{" "}
              <p>
                <strong>Target Audience-</strong> Entrepreneurs in the prototype
                and scaling stage
              </p>{" "}
              <p>
                <strong>Support Offered </strong>
              </p>{" "}
              <ol>
                {" "}
                <li>
                  <strong>Training for Idea Execution: </strong>Skill
                  development for effective execution of ideas.
                </li>{" "}
                <li>
                  <strong>Business Plan Development: </strong>Assistance in
                  creating a comprehensive and strategic business plan.
                </li>{" "}
                <li>
                  <strong>Business Mentoring: </strong>Guidance from experienced
                  mentors throughout the incubation period.
                </li>{" "}
                <li>
                  <strong>Product Development Support: </strong>Support in
                  refining and developing prototypes for market readiness.
                </li>{" "}
                <li>
                  <strong>Technical Support:</strong> Assistance in overcoming
                  technical challenges during the development phase.
                </li>{" "}
                <li>
                  <strong>Access to Networking Events:</strong> Opportunities to
                  network with industry experts and potential collaborators.
                </li>{" "}
                <li>
                  <strong>Access to Funding Networks: </strong>Connection with
                  funding networks to facilitate financial support.
                </li>{" "}
              </ol>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KEICProgOffered;
