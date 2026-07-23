import { TOPBARITEMS } from "@/lib/types/HeaderType";
import Link from "next/link";
import React from "react";

type TopbarProps = {
  topbarmenu: TOPBARITEMS[];
};

const TopbarMenu = ({ topbarmenu }: TopbarProps) => {
  return (
    <ul className="flex flex-wrap gap-4 items-center justify-center font-poppins text-[14px]">
      {topbarmenu?.map((item) => {
        if (item.__component === "menu.menu-button") {
          return (
            <li key={item.id}>
              {item.url ? (
                <Link
                  href={item.url}
                  className={`font-medium text-white/80 hover:text-white transition ${item.class}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </Link>
              ) : (
                <span className={`font-medium text-white/80 ${item.class}`}>
                  {item.title}
                </span>
              )}
            </li>
          );
        }

        if (item.__component === "menu.menu-links") {
          return (
            <li key={item.id}>
              {item.url ? (
                <Link
                  href={item.url}
                  className={`font-medium text-white/80 hover:text-white transition ${item.menuclass}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </Link>
              ) : (
                <span className={`font-medium text-white/80 ${item.menuclass}`}>
                  {item.title}
                </span>
              )}
            </li>
          );
        }

        return null;
      })}
    </ul>
  );
};

export default TopbarMenu;
