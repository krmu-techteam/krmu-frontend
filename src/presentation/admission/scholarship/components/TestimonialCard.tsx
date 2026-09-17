"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
    image: string;
    name: string;
    course: string;
    content: string;
};

const TestimonialCard = ({ image, name, course, content }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-[323px] min-w-[323px] max-w-[323px] h-[505px] bg-white rounded-[10px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100/90 hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-shadow flex flex-col overflow-hidden relative font-poppins text-left select-none">
            {/* Dark navy header block */}
            <div className="h-[120px] w-full bg-[#061623] shrink-0" />

            {/* Student avatar overlapping the banner */}
            <div className="relative -mt-[50px] mx-auto z-10">
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden bg-white">
                    <Image
                        src={image}
                        alt={name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover object-center"
                        unoptimized
                    />
                </div>
            </div>

            {/* Student Name and Course */}
            <div className="text-center px-4 mt-3">
                <h4 className="text-lg font-bold text-black tracking-tight leading-snug">
                    {name}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5 font-normal">
                    {course}
                </p>
            </div>

            {/* Testimonial Quote */}
            <div className="px-6 mt-3 flex-1 overflow-hidden">
                <p className="text-xs sm:text-[13px] leading-relaxed text-gray-800 line-clamp-6">
                    {content}
                </p>
            </div>

            {/* Read More Modal */}
            <div className="px-6 pb-6 pt-2 text-left mt-auto">
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <button className="text-sm font-semibold text-[#0161b0] hover:text-blue-800 underline cursor-pointer">
                            Read More
                        </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-xl bg-white text-black p-6 sm:p-8 rounded-2xl">
                        <DialogHeader className="flex flex-col items-center text-center pb-4 border-b border-gray-100">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 mb-3 shadow-sm">
                                <Image
                                    src={image}
                                    alt={name}
                                    width={80}
                                    height={80}
                                    className="w-full h-full object-cover"
                                    unoptimized
                                />
                            </div>
                            <DialogTitle className="text-xl font-bold text-black">
                                {name}
                            </DialogTitle>
                            <DialogDescription className="text-sm text-gray-600 mt-1 font-medium">
                                {course}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="py-4 max-h-[50vh] overflow-y-auto pr-2">
                            <p className="text-sm sm:text-base leading-relaxed text-gray-800 whitespace-pre-line font-poppins">
                                {content}
                            </p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export default TestimonialCard;
