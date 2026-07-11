import React from 'react';

const FeeTable = ({ items }: { items: { title: string; amount: string }[] }) => {
  return (
    <div className="bg-[#061623] border border-[#061623] rounded-md overflow-hidden">
      <div className="flex items-center justify-between bg-[#061623]/50 px-6 py-4 border-b border-[#061623]">
        <span className="text-md font-semibold text-white font-poppins tracking-wide">
          Fee Type
        </span>
        <span className="text-md font-semibold text-white font-poppins tracking-wide text-right">
          Amount
        </span>
      </div>
      <div className="divide-y divide-[#061623]">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-3 hover:bg-white/5 transition-colors gap-4">
            <span className="text-[#ffffff] font-medium font-poppins text-sm md:text-[15px] sm:w-3/4 leading-relaxed">
              {item.title}
            </span>
            <span className="text-xl font-semibold text-[#ffffff] font-poppins sm:text-right">
              {item.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeeTable;
