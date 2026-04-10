const StillinDoubtCard = () => {
  return (
    <div className="w-full inline-block bg-white rounded-[20px] p-[30px_20px] min-h-[420px] m-[20px_15px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#f0f0f0] transition-all flex flex-col justify-between hover:-translate-y-[10px] hover:shadow-[0_15px_40px_rgba(227,30,36,0.1)] hover:border-[rgba(227,30,36,0.2)]">
      {/* Quote Icon */}
      <div className="text-[32px] mb-[25px] opacity-[0.2] text-red-600">
        <svg width="24" height="24" viewBox="0 0 448 512" fill="currentColor">
          <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V216z" />
        </svg>
      </div>

      {/* Text */}
      <p className="text-[16px] leading-[1.8] text-[#4a4a4a] italic mb-[30px] flex-grow">
        Choosing K.R. Mangalam University for my B.Tech in CSE was one of the
        best decisions I've ever made. The university's rigorous curriculum and
        industry-relevant training have equipped me with the tools necessary to
        excel in the tech world. I am proud to share that I am working with
        Debcor Engineering Pvt Ltd.
      </p>

      {/* Student Info */}
      <div className="flex items-center pt-[20px] border-t border-[#f5f5f5]">
        <div>
          <h4 className="text-[18px] font-bold m-0 text-[#222]">
            Darshit Raghav
          </h4>
          <p className="text-[14px] text-[#777] m-0">B.Tech. CSE</p>
        </div>
      </div>
    </div>
  );
};

export default StillinDoubtCard;
