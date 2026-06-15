import { TOPBARITEMS } from "@/lib/types/HeaderType";
import Link from "next/link";
import React from "react";

type TopbarProps = {
  topbarmenu: TOPBARITEMS[];
};

const TopbarMenu = ({ topbarmenu }: TopbarProps) => {
  return (
    <ul className="flex gap-2.5">
      {topbarmenu?.map((item) => {
        if (item.__component === "menu.menu-button") {
          return (
            <li key={item.id}>
              {item.url ? (
                <Link
                  href={item.url}
                  className={`font-semibold text-white text-xs primary ${item.class}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </Link>
              ) : (
                <span
                  className={`font-semibold text-white text-xs primary ${item.class}`}
                >
                  {item.title}
                </span>
              )}
            </li>
          );
        }

        if (item.__component === "menu.menu-links") {
          return (
            <li
              key={item.id}
              className="first:bg-[#001732] first:transition-all  first:relative first:overflow-hidden group  first:rounded-[5px] first:px-2 first:py-[2px]"
            >
              {topbarmenu.indexOf(item) === 0 && (
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
              )}
              {item.url ? (
                <Link
                  href={item.url}
                  className={`font-semibold text-white text-xs ${item.menuclass}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </Link>
              ) : (
                <span
                  className={`font-semibold text-white text-xs ${item.menuclass}`}
                >
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
