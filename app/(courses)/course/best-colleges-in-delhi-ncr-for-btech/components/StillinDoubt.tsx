import StillinDoubtSlider from "./StillinDoubtSlider";

const StillinDoubt = () => {
  return (
    <section className="bg-[#fdfdfd] py-[50px] px-4">
      <div className="max-w-[1296px] mx-auto w-full">
        <div className="text-center mb-12">
          <span className="bg-[#e2eefb] text-[#003666] px-[15px] py-[5px] rounded-[20px] text-[12px] font-bold uppercase tracking-[1px]">
            Still in Doubt?
          </span>
          <h3 className="text-2xl md:text-[42px] font-extrabold text-[#0d1216] mt-4 mb-2 googleSansFontFamily">
            See What Our Students Say About Us!
          </h3>
        </div>
        <StillinDoubtSlider />
      </div>
    </section>
  );
};

export default StillinDoubt;
