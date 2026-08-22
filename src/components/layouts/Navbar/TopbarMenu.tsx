import { TOPBARITEMS } from "@/lib/types/HeaderType";
import { formatInternalLink, isExternalUrl } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type TopbarProps = {
  topbarmenu: TOPBARITEMS[];
};

const TopbarMenu = ({ topbarmenu }: TopbarProps) => {
  return (
    <ul className="flex flex-wrap gap-4 items-center justify-center font-poppins text-[14px]">
      {topbarmenu?.map((item) => {
        const rawUrl = item.url;
        const formattedUrl = formatInternalLink(rawUrl);
        const external = isExternalUrl(rawUrl);

        if (item.__component === "menu.menu-button") {
          return (
            <li key={item.id}>
              {rawUrl ? (
                <Link
                  href={formattedUrl}
                  className={`font-medium text-white/80 hover:text-white transition ${item.class}`}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
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
              {rawUrl ? (
                <Link
                  href={formattedUrl}
                  className={`font-medium text-white/80 hover:text-white transition ${item.menuclass}`}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
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

