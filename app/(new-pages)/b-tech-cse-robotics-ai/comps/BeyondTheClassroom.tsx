import BeyondSlider from "./BeyondSlider";

const BeyondTheClassroom = () => {
  return (
    <section className="py-10 px-5">
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="text-5xl font-bold text-center mb-5">
          Beyond the Classroom
        </h4>
        <p>
          Our experiential learning programmes bridge the gap between academics
          and industry by providing hands-on exposure through hackathons, live
          projects, research initiatives, and corporate internships. Students
          engage in real-world problem-solving, collaborate with industry
          leaders, participate in technical bootcamps, and gain entrepreneurial
          insights through startup incubation programs. With opportunities for
          international competitions and industry training, the curriculum
          ensures graduates are well-equipped to thrive in the evolving tech
          landscape.
        </p>
      </div>
      <div className="mt-10 h-fit">
        <BeyondSlider />
      </div>
    </section>
  );
};

export default BeyondTheClassroom;
