import CDCCard from "../global-comp/CDCCard";

const CDCTrainingPlacement = () => {
  return (
    <>
      <section className="px-4">
        <div className="max-w-[1664px] mx-auto w-full">
          <p className="text-xl my-10 text-center md:text-left z-10 relative">
            <strong>
              The Career Development Center at KRMU offers training and
              placement assistance to students through various initiatives
              including:
            </strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <CDCCard
              heading="Training"
              content={`<ul> <li>Career Counselling</li> <li>Career Skills</li> <li>Tech Skills</li> <li>Industry Engagement</li> </ul>`}
            />
            <CDCCard
              heading="Placement"
              content={`<ul> <li>Campus Placement Drives</li> <li>Mega Job Fairs / Pool Drives</li> <li>Internships + Pre-Placements</li> </ul>`}
            />
            {/* <CDCCard /> */}
          </div>

          <div className="my-5 cdccard-ul z-10 relative">
            <h3 className="text-3xl sm:text-4xl font-semibold text-center md:text-left">
              Career Training Modules & Methodology
            </h3>
            <br />
            <ul>
              <li>Quantitative Aptitude and Logical Reasoning</li>
              <li>
                Soft Skills (Body Language, Professional Grooming & Etiquette)
              </li>
              <li>VARC (Verbal Ability and Reading Comprehension)</li>
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-10">
              <CDCCard
                heading="Training Modules"
                content={`<ul> <li>Personality Development</li> <li>Group Discussions</li> <li>Presentation Skills</li> <li>Personal Interviews</li> </ul>`}
              />
              <CDCCard
                heading="Training Overview"
                content={`<ul> <li>Courses Embedded in Curriculum</li> <li>Boot Camps</li> <li>Profile-Based Training</li> <li>Company-Specific Training</li> </ul>`}
              />
              <CDCCard
                heading="Training Support"
                content={`<ul> <li>Company-Specific Curriculum</li> <li>Standardised curriculum training is provided to students to cover all aspects of placement</li> <li>Students engage in GD & Mock Interviews as part of their preparation for placement</li> <li>Boot Camps</li> <li>CCDC conducts intensive training before the placement starts</li> </ul>`}
              />
              {/* 
              <CDCCard /> */}
            </div>
          </div>
          <div className="my-10 cdccard-ul z-10 relative">
            <h3 className="text-3xl sm:text-4xl font-semibold text-center md:text-left">
              Skill-Building Opportunities at a Glance
            </h3>
            <br />
            <ul>
              <li>Quantitative Aptitude and Logical Reasoning</li>
              <li>
                Soft Skills (Body Language, Professional Grooming & Etiquettes)
              </li>
              <li>VARC (Verbal Ability and Reading Comprehension)</li>
            </ul>
            <div className="grid grid-cols-1  md:grid=cols-2 lg:grid-cols-4 my-5 gap-10">
              <CDCCard
                heading="Credit Based Courses"
                content={`<p>The curriculum includes audit-based courses covering various subjects.</p>`}
              />
              <CDCCard
                heading="Value Added Skills"
                content={`<p>Students develop valuable skills through workshops and boot camps, including Full Stack Development workshops, AIML training, and IoT skills.</p>`}
              />
              <CDCCard
                heading="Placement Supports"
                content={`<p>The university provides comprehensive placement support to students.</p>`}
              />

              <CDCCard
                heading="Skilling Partners"
                content={`<p>Collaborations with top industry partners like AD Consultants Pvt Ltd., Mang ERP Ltd., JK Cements, ICT (Ultratech group) enhance students skill.</p>`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CDCTrainingPlacement;
