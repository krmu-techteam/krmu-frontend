"use client";

import { AwardCard } from "@/presentation/static-pages/awards-and-achievements";
import { AWARDS_DATA } from "@/presentation/static-pages/awards-and-achievements/constants";

export default function AwardsAndAchievementsPage() {
  return (
    <div className="w-full pb-[100px] min-h-screen relative overflow-hidden">
      {/* Top Ambient Glow Effect */}
      <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[90%] h-[500px] bg-gradient-to-b from-[#0060aa]/20 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Header Section */}
      <section className="text-center pt-[170px] pb-10 px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight font-poppins drop-shadow-md">
          Awards & Achievements
        </h1>
        <div className="w-[80px] h-[4px] bg-[#0060aa] mx-auto mt-6 rounded-full" />
      </section>

      {/* Awards Grid Section - 4 Columns */}
      <section className="max-w-[1500px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[30px] gap-y-[45px] relative z-10">
        {AWARDS_DATA.map((card) => (
          <AwardCard key={card.id} card={card} />
        ))}
      </section>
    </div>
  );
}
