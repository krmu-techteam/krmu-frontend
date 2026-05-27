type Props = {
  heading: string;
  desc: string;
};

const PedaClassroom = ({ heading, desc }: Props) => {
  return (
    <section className="py-[30px] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h2 className="mt-2.5 mb-[15px] text-2xl md:text-4xl text-center sm:text-left font-semibold">
          {heading}
        </h2>
        <p className="text-[#051630] leading-[1] font-semibold text-lg">
          {desc}
        </p>
      </div>
    </section>
  );
};

export default PedaClassroom;
