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
    <div className="bg-[#0b1626] text-white/80 py-2 px-4 md:px-8 text-xs flex flex-col md:flex-row justify-between items-center border-b border-white/10 w-full relative z-60 transition-colors">
      <SocialIcons sociallinks={sociallinks} />
      <TopbarMenu topbarmenu={topbarmenu} />
    </div>
  );
};

export default Topbar;
