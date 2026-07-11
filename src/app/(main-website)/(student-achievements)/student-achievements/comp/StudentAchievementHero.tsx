type Props = {
  heading: string;
};
const StudentAchievementHero = ({ heading }: Props) => {
  return (
    <section className="pt-[15%] pb-[10%] bg-[#051630]">
      <div className="max-w-[1664px] mx-auto w-full">
        <h1 className="text-[64px] font-semibold text-white text-center">
          <span className="uppercase">{heading}</span> Achievements
        </h1>
      </div>
    </section>
  );
};

export default StudentAchievementHero;
