import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonType } from "@/lib/types/common";
import { getWordImageById } from "@/lib/api/common";
import { CenterNewsSlider } from "../components/news-and-event";
import {
    getHomeService,
    NewsEventDomain,
    NewsEventsResult,
} from "@/features/home";

const RIGHT_FEATURED_CARDS = [
    {
        id: 1,
        image: "https://wp.krmangalam.edu.in/wp-content/uploads/2026/08/aarambh-1.webp",
        tags: "#CampusLife #StudentLife",
        title: "Akasa Singh at AARAMBH 2026 | Her Experience & Advice for KRMU Students",
        link: "/events-and-news/aarambh-2026-krmu-orientation-programme",
    },
    {
        id: 2,
        image: "https://wp.krmangalam.edu.in/wp-content/uploads/2026/04/IMG_20260428_1348361.jpg",
        tags: "#SuccessMindset #Entrepreneurship",
        title: "This Advice Will Change Your Creator Journey | Manish Pandey",
        link: "/events-and-news/masterclass-with-the-mr-manish-pandey-ceo-beerbiceps",
    },
];

function formatDate(dateStr: string): string {
    if (!dateStr) return "";
    try {
        return new Date(dateStr).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        });
    } catch {
        return dateStr;
    }
}

export async function NewsEventsSection({
    title = "News and Events",
    newsandeventbtn = {
        buttonlink: "/happenings/news-and-events",
        buttontext: "Explore All News & Events",
    },
    eventsData,
}: {
    title?: string;
    newsandeventbtn?: Partial<ButtonType>;
    eventsData?: NewsEventsResult;
}) {
    const homeService = getHomeService();
    const newsandeventsdata =
        eventsData ?? (await homeService.getNewsEvents(1, 10));

    // Parallel fetch images for dynamic items from WordPress API
    const processedNews = await Promise.all(
        (newsandeventsdata?.data || []).map(async (event: NewsEventDomain) => {
            let imgUrl = "";
            if (event.featuredMediaId) {
                imgUrl = await getWordImageById(event.featuredMediaId);
            }

            return {
                id: event.id,
                title: event.title,
                date: formatDate(event.date),
                slug: event.slug,
                imageUrl: imgUrl || "/modules/home/events/event1.webp",
            };
        })
    );

    // Latest 5 news items for the Center Slider
    const centerSlides = processedNews.slice(0, 5).map((item) => ({
        id: item.id,
        image: item.imageUrl,
        date: item.date,
        title: item.title,
        link: `/events-and-news/${item.slug}`,
    }));

    // Next 3 latest news events for the Left Column
    const leftNewsItems =
        processedNews.length > 5
            ? processedNews.slice(5, 8)
            : processedNews.slice(1, 4);

    return (
        <section className="relative w-full overflow-hidden py-12 md:py-16 xl:py-20 font-poppins">
            <div className="w-full max-w-[1530px] mx-auto relative z-10">
                {/* Header: Centered Title with Top-Right "Find Out More" */}
                <div className="relative flex items-center justify-center mb-10 md:mb-14">
                    <h2 className="font-serif text-3xl md:text-4xl xl:text-[42px] font-bold text-white text-center tracking-tight">
                        {title}
                    </h2>

                    {(newsandeventbtn?.buttonlink ||
                        newsandeventbtn?.buttontext) && (
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden sm:block">
                            <Link
                                href={
                                    newsandeventbtn.buttonlink ||
                                    "/happenings/news-and-events"
                                }
                                className="flex cursor-pointer items-center gap-2.5 text-white/80 hover:text-white transition-colors text-sm md:text-[15px] font-normal group shrink-0"
                            >
                                <span className="font-normal tracking-wide">
                                    {newsandeventbtn.buttontext ||
                                        "Find Out More"}
                                </span>
                                <div className="w-6 h-6 rounded-full border border-white/60 group-hover:border-white flex items-center justify-center transition-all overflow-hidden relative">
                                    <ArrowRight className="w-3.5 h-3.5 text-white transition-all duration-500 ease-in-out transform group-hover:translate-x-5 group-hover:opacity-0" />
                                    <ArrowRight className="w-3.5 h-3.5 text-white transition-all duration-500 ease-in-out absolute -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                                </div>
                            </Link>
                        </div>
                    )}
                </div>

                {/* 3-Column Magazine Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 xl:gap-10 items-start">
                    {/* LEFT COLUMN: Latest News List (3 items) */}
                    <div className="md:col-span-1 lg:col-span-3 flex flex-col justify-between h-full order-2 lg:order-1">
                        {leftNewsItems.map((item, idx) => (
                            <div key={item.id} className="flex flex-col">
                                <Link
                                    href={`/events-and-news/${item.slug}`}
                                    className="flex items-center gap-3.5 sm:gap-4 group cursor-pointer"
                                >
                                    <div className="relative w-[92px] h-[105px] sm:w-[102px] sm:h-[114px] shrink-0 rounded-[4px] overflow-hidden bg-white/5 shadow-sm">
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.title}
                                            fill
                                            sizes="120px"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                                        <p className="text-white/60 text-[11px] sm:text-[12px] font-poppins mb-1">
                                            Published On:
                                            <br />
                                            <span className="text-white/70">
                                                {item.date}
                                            </span>
                                        </p>
                                        <h4
                                            className="text-white font-serif font-semibold text-[14px] sm:text-[15px] leading-[1.3] line-clamp-2 group-hover:text-brand-gold transition-colors mt-0.5"
                                            dangerouslySetInnerHTML={{
                                                __html: item.title,
                                            }}
                                        />
                                        <p className="text-[#E5A831] text-[10.5px] sm:text-[11px] font-poppins font-medium mt-2 tracking-wide">
                                            K. R. Mangalam University
                                        </p>
                                    </div>
                                </Link>

                                {idx < leftNewsItems.length - 1 && (
                                    <div className="w-full h-[1px] bg-white/10 my-4 sm:my-5" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CENTER COLUMN: Latest 5 News Slider */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-6 flex flex-col order-1 lg:order-2">
                        <CenterNewsSlider slides={centerSlides} />
                    </div>

                    {/* RIGHT COLUMN: 2 Stacked Featured Cards */}
                    <div className="md:col-span-1 lg:col-span-3 flex flex-col gap-5 sm:gap-6 justify-between h-full order-3">
                        {RIGHT_FEATURED_CARDS.map((card) => (
                            <Link
                                key={card.id}
                                href={card.link}
                                className="bg-white rounded-[8px] overflow-hidden flex flex-col group cursor-pointer shadow-lg transition-transform duration-300 hover:-translate-y-1 block"
                            >
                                <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-900">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4 sm:p-5 flex flex-col flex-1 bg-white">
                                    <p className="text-gray-500 text-[11px] sm:text-[12px] font-medium mb-1.5 font-poppins">
                                        {card.tags}
                                    </p>
                                    <h4 className="text-gray-900 font-poppins font-medium text-[13.5px] sm:text-[14.5px] leading-snug line-clamp-2 group-hover:text-gray-800 transition-colors">
                                        {card.title}
                                    </h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile View: Bottom Link */}
                {(newsandeventbtn?.buttonlink ||
                    newsandeventbtn?.buttontext) && (
                    <div className="sm:hidden text-center mt-8">
                        <Link
                            href={
                                newsandeventbtn.buttonlink ||
                                "/happenings/news-and-events"
                            }
                            className="inline-flex cursor-pointer items-center gap-2 text-white/80 hover:text-white text-sm font-normal tracking-wide transition-colors group"
                        >
                            <span>
                                {newsandeventbtn.buttontext || "Find Out More"}
                            </span>
                            <div className="w-5 h-5 rounded-full border border-white/60 group-hover:border-white flex items-center justify-center transition-all overflow-hidden relative">
                                <ArrowRight className="w-3 h-3 text-white transition-all duration-500 ease-in-out transform group-hover:translate-x-4 group-hover:opacity-0" />
                                <ArrowRight className="w-3 h-3 text-white transition-all duration-500 ease-in-out absolute -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
