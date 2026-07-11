type Props = {
  title: string;
  content: string;
};

const PedaWorkshopSeminar = ({ title, content }: Props) => {
  return (
    <>
      <section className="my-5">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="bg-[#051630] p-[30px]">
            <h3 className="text-2xl text-center lg:text-left font-semibold text-white mt-2.5 mb-[15px]">
              {title}
            </h3>
            <p className="text-white mb-5">{content}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PedaWorkshopSeminar;
