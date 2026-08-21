"use client";

import React from "react";
import Image from "next/image";
import { sdgCards } from "./data";

const SdgBadgeGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-2 mb-12 w-full">
            {sdgCards.map((card, idx) => (
                <div
                    key={idx}
                    className="relative w-full aspect-[220/480] overflow-hidden rounded-lg shadow-md"
                >
                    <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 16vw"
                        className="object-contain object-center"
                        priority
                        unoptimized
                    />
                </div>
            ))}
        </div>
    );
};

export default SdgBadgeGrid;
