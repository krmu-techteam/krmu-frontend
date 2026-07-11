import LearnByCreatingCard from "./LearnByCreatingCard";

const LearnCreatingData = [
  {
    heading: "Build your own channel",
    content:
      "No need to wait years to become a news anchor or storyteller start publishing from day one.",
    url: "/wp-content/semce/semce-main/build-channel.jpg",
  },
  {
    heading: "Work with real brands",
    content:
      "Learn how media agencies and creators build campaigns that drive attention and revenue.",
    url: "/wp-content/semce/semce-main/real-brand.jpg",
  },
  {
    heading: "Launch your venture",
    content:
      "Whether it’s an agency, media startup, or your personal brand, learn how to build from scratch.",
    url: "/wp-content/semce/semce-main/venture.png",
  },
];

const LearnByCreating = () => {
  return (
    <section className="py-10 px-5">
      <div className="max-w-[900px] mx-auto w-full text-center">
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-5 md:mb-10">
          Learn by Creating
        </h3>
        <p>
          The media industry values skills, proof, and real-world experience.
          Every year, millions of videos, campaigns, and stories are produced in
          India, and the creators behind them shape culture, businesses, and
          conversations.
        </p>
      </div>
      <div className="max-w-[1280px] mx-auto w-full grid md:grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
        {LearnCreatingData &&
          LearnCreatingData?.map((item, i) => {
            return (
              <LearnByCreatingCard
                key={i}
                heading={item?.heading}
                content={item?.content}
                url={item?.url}
              />
            );
          })}
      </div>
    </section>
  );
};

export default LearnByCreating;
