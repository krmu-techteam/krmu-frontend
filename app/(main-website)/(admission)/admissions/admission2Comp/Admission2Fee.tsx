import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Wallet, Home, Truck, ShieldCheck } from "lucide-react";

const Admission2Fee = () => {
  return (
    <section className="py-10 md:py-16 px-4 md:px-0 bg-[#fcfdfe]">
      <div className="max-w-[1200px] mx-auto w-full">
        <h4 className="text-2xl md:text-3xl mb-8 text-black font-bold border-l-4 border-black pl-5 leading-none">
          Fee Details
        </h4>

        <Tabs
          defaultValue="item-1"
          orientation="vertical"
          className="flex flex-col lg:flex-row gap-6 lg:gap-10"
        >
          {/* NAVIGATION */}
          <div className="w-full lg:w-[380px] shrink-0">
            <TabsList className="flex flex-col w-full h-auto bg-white border border-gray-100 p-1.5 rounded-md shadow-sm">
              <TabsTrigger
                value="item-1"
                className="w-full text-left justify-start py-3.5 px-4 rounded-md transition-all duration-300 whitespace-nowrap leading-tight flex items-center gap-3
                data-[state=active]:bg-[#0a41a1] data-[state=active]:text-white data-[state=active]:font-semibold
                data-[state=inactive]:text-gray-500 hover:bg-gray-50 text-[13px] md:text-sm"
              >
                <Wallet size={16} className="shrink-0" />
                <span>Application Fee and Registration Fee</span>
              </TabsTrigger>
              <TabsTrigger
                value="item-2"
                className="w-full text-left justify-start py-3.5 px-4 rounded-md transition-all duration-300 whitespace-nowrap leading-tight flex items-center gap-3
                data-[state=active]:bg-[#0a41a1] data-[state=active]:text-white data-[state=active]:font-bold
                data-[state=inactive]:text-gray-500 hover:bg-gray-50 text-[13px] md:text-sm"
              >
                <Home size={16} className="shrink-0" />
                <span>Hostel Fee</span>
              </TabsTrigger>
              <TabsTrigger
                value="item-3"
                className="w-full text-left justify-start py-3.5 px-4 rounded-md transition-all duration-300 whitespace-nowrap leading-tight flex items-center gap-3
                data-[state=active]:bg-[#0a41a1] data-[state=active]:text-white data-[state=active]:font-semibold
                data-[state=inactive]:text-gray-500 hover:bg-gray-50 text-[13px] md:text-sm"
              >
                <Truck size={16} className="shrink-0" />
                <span>Transport Fee</span>
              </TabsTrigger>
              <TabsTrigger
                value="item-4"
                className="w-full text-left justify-start py-3.5 px-4 rounded-md transition-all duration-300 whitespace-nowrap leading-tight flex items-center gap-3
                data-[state=active]:bg-[#0a41a1] data-[state=active]:text-white data-[state=active]:font-semibold
                data-[state=inactive]:text-gray-500 hover:bg-gray-50 text-[13px] md:text-sm"
              >
                <ShieldCheck size={16} className="shrink-0" />
                <span>Security Deposit</span>
              </TabsTrigger>
            </TabsList>
            
            <div className="hidden lg:block mt-6">
              <Link
                href="/fee-structure"
                className="inline-flex items-center justify-center py-3 px-8 bg-[#0a41a1] hover:bg-[#051730] text-white text-sm font-bold rounded-md transition-all duration-500 shadow-md"
              >
                View Fees Structure
              </Link>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex-1 w-full overflow-hidden">
            <TabsContent value="item-1" className="mt-0 outline-none">
              <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between bg-gray-50/50 px-6 py-4 border-b border-gray-100">
                  <span className="text-md font-semibold text-gray-400 tracking-wide">Fee Type</span>
                  <span className="text-md font-semibold text-gray-400 tracking-wide text-right">Amount</span>
                </div>
                <div className="divide-y divide-gray-50">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-3 hover:bg-gray-50/30 transition-colors gap-4">
                    <span className="text-[#051630] font-medium text-sm md:text-[15px] sm:w-3/4 leading-relaxed">
                      Application Fee (one time) (Non refundable)
                    </span>
                    <span className="text-xl font-semibold text-[#0a41a1] sm:text-right">
                      ₹ 1000/-
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-3 hover:bg-gray-50/30 transition-colors gap-4">
                    <span className="text-[#051630] font-medium text-sm md:text-[15px] sm:w-3/4 leading-relaxed">
                      Registration Fee (To be paid on offer of Admission, adjusted in Semester Fee)
                    </span>
                    <span className="text-xl font-semibold text-[#0a41a1] sm:text-right">
                      ₹ 25000/-
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="item-2" className="mt-0 outline-none">
              <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between bg-gray-50/50 px-6 py-3 border-b border-gray-100">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Fee Type</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Amount</span>
                </div>
                <div className="divide-y divide-gray-50">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-gray-50/30 transition-colors gap-4">
                    <span className="text-[#051630] font-medium text-sm md:text-[15px] sm:w-3/4 leading-relaxed">
                      Hostel Security Deposit (Refundable)
                    </span>
                    <span className="text-xl font-bold text-[#0a41a1] sm:text-right">
                      ₹ 20000/-
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-gray-50/30 transition-colors gap-4">
                    <span className="text-[#051630] font-medium text-sm md:text-[15px] sm:w-3/4 leading-relaxed">
                      Hostel Fee (per annum)
                    </span>
                    <span className="text-xl font-bold text-[#0a41a1] sm:text-right">
                      ₹ 1,72,000/-
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="item-3" className="mt-0 outline-none">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between bg-gray-50/50 px-6 py-3 border-b border-gray-100">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Fee Type</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Amount</span>
                </div>
                <div className="divide-y divide-gray-50">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-gray-50/30 transition-colors gap-4">
                    <span className="text-[#051630] font-medium text-sm md:text-[15px] sm:w-3/4 leading-relaxed">
                      Transport Fee (per annum)
                    </span>
                    <span className="text-xl font-bold text-[#0a41a1] sm:text-right">
                      ₹ 50000/-
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-gray-50/30 transition-colors gap-4">
                    <span className="text-[#051630] font-medium text-sm md:text-[15px] sm:w-3/4 leading-relaxed">
                      Shuttle Transport (per annum) (From Rajiv Chowk and Huda City Centre to the University)
                    </span>
                    <span className="text-xl font-bold text-[#0a41a1] sm:text-right">
                      ₹ 25000/
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="item-4" className="mt-0 outline-none">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between bg-gray-50/50 px-6 py-3 border-b border-gray-100">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Fee Type</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Amount</span>
                </div>
                <div className="divide-y divide-gray-50">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-gray-50/30 transition-colors gap-4">
                    <span className="text-[#051630] font-medium text-sm md:text-[15px] sm:w-3/4 leading-relaxed">
                      Security Deposit (Refundable)
                    </span>
                    <span className="text-xl font-bold text-[#0a41a1] sm:text-right">
                      ₹ 10000/-
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>

        <div className="flex lg:hidden items-center justify-center mt-10">
          <Link
            href="/fee-structure"
            className="text-center py-3 px-10 bg-[#0a41a1] text-white font-semibold rounded-sm md:rounded-xl shadow-md"
            target="_blank" rel="noopener noreferrer"
          >
            View Fees Structure
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Admission2Fee;
