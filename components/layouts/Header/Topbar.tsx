import React from "react";
import TopbarMenu from "../Navbar/TopbarMenu";
import SocialIcons from "./SocialIcons";
import { TOPBARITEMS, TOPBARSOCIALLInks } from "@/lib/types/HeaderType";

type TopbarProps = {
  topbarmenu: TOPBARITEMS[];
  sociallinks: TOPBARSOCIALLInks[];
};

const Topbar = ({ topbarmenu, sociallinks }: TopbarProps) => {
  return (
    <div className="flex bg-[#0b1626] text-white/80 py-2 px-4 md:px-16 text-xs justify-center xl:justify-between items-center border-b border-white/10 w-full relative z-60 transition-colors">
      <SocialIcons sociallinks={sociallinks} />
      <div className="hidden xl:block">
        <TopbarMenu topbarmenu={topbarmenu} />
      </div>
    </div>
  );
};

export default Topbar;
