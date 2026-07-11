import Image from "next/image";

const SOLAPanel = () => {
  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">
            Expert Talk on Beat the Clock, Conquer Procrastination, Embrace
            Success
          </h3>
          <p className="mb-5 text-lg">
            Ms. Sonal Goel, a distinguished civil servant, delivered a
            thought-provoking talk on several crucial topics including
            Procrastination and Time Management Techniques, and elaborating on
            the detrimental effects of procrastination, emphasizing how it can
            hinder personal growth and success. She shared practical strategies
            and tools to combat procrastination, providing attendees with
            actionable steps to overcome this common challenge
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.krmangalam.edu.in/wp-content/uploads/2024/04/ind-conn-6-768x432.webp"
            width={600}
            height={300}
            alt=""
            className="border w-full h-[400px] object-cover"
          />
        </div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10 my-10 items-center">
        <div className="w-full lg:w-1/2">
          <Image
            src="/wp-content/uploads/2026/02/openhouse.jpg"
            width={1066}
            height={1599}
            alt=""
            className="border w-full  object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">
            Open House Discussion on UPSC and UPSC Aspirants
          </h3>
          <p className="mb-5 text-lg">
            Mr. Bhatia delivered an insightful presentation, offering a
            comprehensive overview of the UPSC journey, including its challenges
            and rewards. He shared his personal experiences, providing strategic
            advice on preparation, perseverance, and the realities of
            bureaucratic life. 
          </p>
          <p className="text-lg">
            A highly engaging Q&A session followed, allowing students to seek
            guidance on exam strategies, career prospects, and life in
            administration. The event was both motivational and informative,
            equipping aspirants with valuable insights for their UPSC
            preparation.
          </p>
        </div>
      </div>
      {/* <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-[38px] font-bold mb-5">
            Session on Mastering Emotions and Communication
          </h3>
          <p className="mb-5 text-lg">
            School of Liberal Arts organized a session on “Mastering Emotions
            and Communication: Unlocking the Life Skill for Success”. The
            session was conducted by Ms. Varsha KV and Ms. Aakansha Sharma,
            Co-founders of Beyond Words, an organisation dedicated to mental
            health awareness and emotional well-being. The workshop aimed to
            help students develop emotional intelligence, enhance communication
            skills, and build meaningful connections through self-awareness and
            empathy.
          </p>
          <p className="text-lg">
            The session began with a Chinese Whispers icebreaker, highlighting
            the role of active listening and communication. This was followed by
            a reflective exercise, emphasising empathetic connection and
            self-awareness in conversations. Students engaged in empathy
            mapping, analysing emotions, thoughts, and behaviours in various
            situations.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.krmangalam.edu.in/wp-content/uploads/2025/06/ggg-800x601.jpg"
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

export default SOLAPanel;
