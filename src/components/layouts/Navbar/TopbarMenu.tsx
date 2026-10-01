import { TOPBARITEMS } from "@/lib/types/HeaderType";
import Link from "next/link";
import React from "react";

type TopbarProps = {
    topbarmenu: TOPBARITEMS[];
};

const TopbarMenu = ({ topbarmenu }: TopbarProps) => {
    const filteredMenu = topbarmenu?.filter((item) => {
        const title = item.title?.toLowerCase().trim() || "";
        const url = item.url?.toLowerCase() || "";
        return (
            !title.includes("cuet counselling") &&
            !url.includes("cuet-counselling")
        );
    });

    return (
        <ul className="flex flex-wrap gap-4 items-center justify-center font-poppins text-[14px]">
            {filteredMenu?.map((item) => {
                const url = item.url;
                const isExternal = Boolean(
                    url &&
                    (url.startsWith("http://") ||
                        url.startsWith("https://") ||
                        url.startsWith("//"))
                );
                const isIdeas =
                    item.title?.toLowerCase().includes("ideas") ||
                    item.url?.includes("ideas.");

                const className =
                    item.__component === "menu.menu-button"
                        ? item.class || ""
                        : item.menuclass || "";

                if (url) {
                    if (isIdeas) {
                        return (
                            <li key={item.id}>
                                <Link
                                    href={url}
                                    className="font-semibold text-[#ED1C24] hover:text-[#ED1C24]/80 transition"
                                    target={isExternal ? "_blank" : undefined}
                                    rel={
                                        isExternal
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                >
                                    {item.title}
                                </Link>
                            </li>
                        );
                    }

                    return (
                        <li key={item.id}>
                            <Link
                                href={url}
                                className={`font-medium text-white/80 hover:text-white transition ${className}`}
                                target={isExternal ? "_blank" : undefined}
                                rel={
                                    isExternal
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                }

                if (isIdeas) {
                    return (
                        <li key={item.id}>
                            <span className="font-semibold text-[#cb000d]">
                                {item.title}
                            </span>
                        </li>
                    );
                }

                return (
                    <li key={item.id}>
                        <span
                            className={`font-medium text-white/80 ${className}`}
                        >
                            {item.title}
                        </span>
                    </li>
                );
            })}
        </ul>
    );
};

export default TopbarMenu;
