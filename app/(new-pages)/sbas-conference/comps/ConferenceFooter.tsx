const ConferenceFooter = () => {
  return (
    <section className="px-5 sm:px-6 md:px-10 xl:px-0 py-8 sm:py-9 md:py-10 bg-[#19241F]">
      <div className="max-w-[670px] mx-auto text-center space-y-2">
        <h5 className="text-sm font-bold font-lora text-white">
          AMGSE 2027
        </h5>

        <p className="text-[11px] sm:text-xs leading-5 text-[#99A199]">
          SBAS, K. R. Mangalam University, Gurugram · In collaboration with
          CSIR–CSIO, Chandigarh College, University of Delhi
        </p>

        <p className="text-[11px] sm:text-xs text-[#99A199]">
          21–23 January 2027
        </p>
      </div>
    </section>
  );
};

export default ConferenceFooter;