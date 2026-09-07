"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import {
    Play,
    Pause,
    Volume2,
    VolumeX,
    Settings,
    Maximize,
    Minimize,
    X,
} from "lucide-react";
import { swayamMentorsList } from "../data/mentorsData";
import FaqAccordion from "../components/FaqAccordion";

interface NavTab {
    label: string;
    href?: string;
    external?: boolean;
    modalType?: "tutorial" | "mentors" | "faq";
}

const navTabs: NavTab[] = [
    { label: "About Swayam Courses", href: "#about" },
    { label: "Video Tutorials", modalType: "tutorial" },
    { label: "Swayam Mentors", modalType: "mentors" },
    {
        label: "SWAYAM Login",
        href: "https://swayam-sso.swayam2.ac.in/signin?response_type=code&client_id=swayam-central-production&redirect_uri=%2F&state=RPJDPtGNYWzoq3zAvpknahIS3Gs2lU",
        external: true,
    },
    { label: "FAQ", modalType: "faq" },
    { label: "Contact us", href: "#contact" },
];

const HeroSection: React.FC = () => {
    const [isTutorialModalOpen, setIsTutorialModalOpen] = useState(false);
    const [isMentorsModalOpen, setIsMentorsModalOpen] = useState(false);
    const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
    const [activeTutorialId, setActiveTutorialId] = useState<
        "enroll" | "profile" | "abc-id"
    >("abc-id");
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);

    const videoContainerRef = useRef<HTMLDivElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const handleHash = () => {
            if (window.location.hash === "#mentors") {
                setIsMentorsModalOpen(true);
            }
            if (window.location.hash === "#faq") {
                setIsFaqModalOpen(true);
            }
        };
        handleHash();
        window.addEventListener("hashchange", handleHash);
        return () => window.removeEventListener("hashchange", handleHash);
    }, []);

    const sendYoutubeCommand = (func: string, args: any = "") => {
        if (iframeRef.current && iframeRef.current.contentWindow) {
            iframeRef.current.contentWindow.postMessage(
                JSON.stringify({
                    event: "command",
                    func,
                    args: Array.isArray(args)
                        ? args
                        : args !== ""
                          ? [args]
                          : [],
                }),
                "*"
            );
        }
    };

    const handleTutorialSelect = (id: "enroll" | "profile" | "abc-id") => {
        setActiveTutorialId(id);
        setIsSettingsOpen(false);
        if (id !== "abc-id") {
            sendYoutubeCommand("pauseVideo");
            setIsPlaying(false);
        } else {
            sendYoutubeCommand("playVideo");
            setIsPlaying(true);
        }
    };

    const togglePlay = () => {
        if (isPlaying) {
            sendYoutubeCommand("pauseVideo");
            setIsPlaying(false);
        } else {
            sendYoutubeCommand("playVideo");
            setIsPlaying(true);
        }
    };

    const toggleMute = () => {
        if (isMuted) {
            sendYoutubeCommand("unMute");
            setIsMuted(false);
        } else {
            sendYoutubeCommand("mute");
            setIsMuted(true);
        }
    };

    const changePlaybackRate = (rate: number) => {
        setPlaybackRate(rate);
        sendYoutubeCommand("setPlaybackRate", [rate]);
        setIsSettingsOpen(false);
    };

    const toggleFullscreen = () => {
        if (!videoContainerRef.current) return;
        if (!document.fullscreenElement) {
            videoContainerRef.current.requestFullscreen?.().catch(() => {});
        } else {
            document.exitFullscreen?.().catch(() => {});
        }
    };

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () => {
            document.removeEventListener(
                "fullscreenchange",
                handleFullscreenChange
            );
        };
    }, []);

    return (
        <section className="relative w-full overflow-hidden pt-20 sm:pt-24 md:pt-17">
            {/* Hero Main Background Banner */}
            <div
                className="relative w-full bg-cover bg-no-repeat bg-[center_right] lg:bg-center min-h-[580px] sm:min-h-[640px] lg:min-h-[767px] flex items-end"
                style={{
                    backgroundImage: "url('/swayam/university-bg.jpg')",
                }}
            >
                {/* Content Container: full width with 0 padding on mobile/tablet, 65px padding on desktop */}
                <div className="relative z-10 w-full max-w-[1600px] mx-auto px-0 lg:px-[65px] flex items-end">
                    {/* Glassmorphic Gradient Card: Full width & flush to bottom on mobile/tablet; 561x712 on lg */}
                    <div
                        className="w-full max-w-none lg:max-w-[561px] lg:w-[561px] h-auto min-h-[480px] sm:min-h-[520px] lg:h-[712px] p-6 sm:p-8 lg:p-11 flex flex-col justify-between shadow-2xl backdrop-blur-[1px]"
                        style={{
                            background:
                                "linear-gradient(180deg, #FFFFFF 75.48%, #001732 100%)",
                            opacity: 0.9,
                        }}
                    >
                        {/* Top: Dual Logo (SWAYAM + Ministry of Education) */}
                        <div className="w-[300px] sm:w-[360px] lg:w-[383px] max-w-full h-auto pt-2">
                            <Image
                                src="/swayam/swayamor-ministry.png"
                                alt="SWAYAM - Free Online Education | Ministry of Education"
                                width={383}
                                height={80}
                                unoptimized
                                className="w-full h-auto object-contain object-left"
                                priority
                            />
                        </div>

                        {/* Middle: Description Text */}
                        <div className="my-auto py-6">
                            <p className="text-[#000000] text-[15px] sm:text-[17px] lg:text-[18px] font-semibold leading-[1.65] lg:leading-[1.7] tracking-normal">
                                SWAYAM (Study Webs of Active Learning for Young
                                Aspiring Minds) is the Government of
                                India&apos;s national online learning platform
                                developed by the Ministry of Education. It
                                provides high-quality online courses offered by
                                IITs, IIMs, Central Universities, NPTEL, CEC,
                                AICTE, IGNOU and other National Coordinators,
                                enabling learners to access quality education
                                anytime and anywhere.
                            </p>
                        </div>

                        {/* Bottom: Visit SWAYAM Button */}
                        <div className="pb-4">
                            <a
                                href="https://swayam.gov.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-[170px] sm:w-[190px] h-[48px] sm:h-[52px] bg-[#CB000D] hover:bg-[#b0000b] text-white text-[16px] sm:text-[17px] font-bold rounded-[8px] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                            >
                                Visit SWAYAM
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Announcement Banner (Gold / Mustard Yellow) - Continuous Infinite Marquee Loop */}
            <div className="w-full bg-[#DFB15B] py-2.5 sm:py-3 px-4 sm:px-8 border-t border-b border-[#cca049] overflow-hidden">
                <div className="max-w-[1520px] mx-auto flex items-center gap-3 sm:gap-6">
                    {/* Announcement Label Badge */}
                    <div className="shrink-0 flex items-center z-10">
                        <span className="text-[#000000] font-bold text-sm sm:text-base md:text-[17px] tracking-tight whitespace-nowrap">
                            Announcement:
                        </span>
                    </div>

                    {/* Marquee Loop Track */}
                    <div className="relative w-full overflow-hidden flex-1">
                        <div
                            className="flex items-center w-max gap-8 sm:gap-12 animate-swayam-marquee hover:[animation-play-state:paused] cursor-pointer select-none"
                            style={{
                                animationDuration: "28s",
                            }}
                        >
                            {[...Array(4)].map((_, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-8 sm:gap-12 shrink-0 text-[#000000] font-medium text-sm md:text-base whitespace-nowrap"
                                >
                                    <span>
                                        Registration Open for July 2026 Session,
                                        Late date to enrol, Exam Registration ,
                                        Result
                                    </span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-black/40 inline-block" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .animate-swayam-marquee {
                        animation: swayamLoop linear infinite;
                    }
                    @keyframes swayamLoop {
                        from {
                            transform: translateX(0);
                        }
                        to {
                            transform: translateX(-50%);
                        }
                    }
                `}</style>
            </div>

            {/* Navigation Tabs Bar */}
            <div className="w-full bg-[#FFFDF9] py-4 sm:py-5 px-4 sm:px-8">
                <div className="max-w-[1520px] mx-auto flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
                    {navTabs.map((tab, idx) =>
                        tab.modalType ? (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => {
                                    if (tab.modalType === "tutorial")
                                        setIsTutorialModalOpen(true);
                                    if (tab.modalType === "mentors")
                                        setIsMentorsModalOpen(true);
                                    if (tab.modalType === "faq")
                                        setIsFaqModalOpen(true);
                                }}
                                className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white border border-[#D1D5DB] rounded-[2px] text-[#1F2937] hover:text-[#CB000D] hover:border-[#CB000D] font-medium text-sm sm:text-[15px] shadow-xs transition-all duration-200 whitespace-nowrap cursor-pointer"
                            >
                                {tab.label}
                            </button>
                        ) : (
                            <a
                                key={idx}
                                href={tab.href}
                                target={tab.external ? "_blank" : undefined}
                                rel={
                                    tab.external
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white border border-[#D1D5DB] rounded-[2px] text-[#1F2937] hover:text-[#CB000D] hover:border-[#CB000D] font-medium text-sm sm:text-[15px] shadow-xs transition-all duration-200 whitespace-nowrap"
                            >
                                {tab.label}
                            </a>
                        )
                    )}
                </div>
            </div>

            {/* Video Tutorials Modal - Simple Clean White (Left Video, Right List) */}
            {isTutorialModalOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
                    onClick={() => setIsTutorialModalOpen(false)}
                >
                    <div
                        className="bg-white border border-gray-200 rounded-[8px] max-w-[960px] w-full p-4 sm:p-6 relative my-auto text-[#1F2937] flex flex-col shadow-none"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-200">
                            <h3 className="text-lg sm:text-xl font-bold font-poppins text-[#111827]">
                                Video Tutorials
                            </h3>
                            <button
                                type="button"
                                onClick={() => setIsTutorialModalOpen(false)}
                                className="w-8 h-8 rounded border border-gray-200 hover:border-gray-300 hover:bg-gray-100 text-gray-500 hover:text-gray-900 flex items-center justify-center transition-colors cursor-pointer"
                                aria-label="Close"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Modal Body: Left Video, Right Video List */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                            {/* Left: Video Display */}
                            <div className="md:col-span-7 lg:col-span-8">
                                {/* Video Frame Container (Fullscreen-capable) */}
                                <div
                                    ref={videoContainerRef}
                                    className={`relative w-full aspect-video rounded-t-[6px] overflow-hidden border border-gray-200 bg-black ${
                                        isFullscreen
                                            ? "!fixed !inset-0 !z-[100] !w-screen !h-screen !aspect-auto !rounded-none !border-0 flex items-center justify-center bg-black"
                                            : ""
                                    }`}
                                >
                                    {/* YouTube Video (kept mounted to prevent focus & scroll jump) */}
                                    <div
                                        className={`w-full h-full relative ${
                                            activeTutorialId === "abc-id"
                                                ? "block"
                                                : "hidden"
                                        }`}
                                    >
                                        <iframe
                                            ref={iframeRef}
                                            src="https://www.youtube-nocookie.com/embed/VRIZJXb6ow8?enablejsapi=1&autoplay=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=0&playsinline=1"
                                            title="How to create your ABC ID"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                                            allowFullScreen
                                            tabIndex={-1}
                                            className="absolute -top-[46px] sm:-top-[54px] left-0 w-full h-[calc(100%+92px)] sm:h-[calc(100%+108px)] border-0"
                                        />
                                    </div>

                                    {/* Enroll Placeholder */}
                                    {activeTutorialId === "enroll" && (
                                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#F9FAFB]">
                                            <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center mb-2">
                                                <Play className="w-5 h-5 fill-white translate-x-0.5" />
                                            </div>
                                            <span className="inline-block px-2.5 py-0.5 bg-gray-100 text-gray-700 border border-gray-200 text-xs font-semibold rounded">
                                                Attached in Mail
                                            </span>
                                        </div>
                                    )}

                                    {/* Profile Placeholder */}
                                    {activeTutorialId === "profile" && (
                                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#F9FAFB]">
                                            <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center mb-2">
                                                <Play className="w-5 h-5 fill-white translate-x-0.5" />
                                            </div>
                                            <span className="inline-block px-2.5 py-0.5 bg-gray-100 text-gray-700 border border-gray-200 text-xs font-semibold rounded">
                                                Attached in Mail
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Video Custom Controls Bar - Clean, White, No Shadows */}
                                {activeTutorialId === "abc-id" && (
                                    <div className="flex items-center justify-between px-3 py-2 bg-gray-50 border-x border-b border-gray-200 rounded-b-[6px] text-gray-700 relative select-none">
                                        {/* Left: Play/Pause & Mute/Unmute */}
                                        <div className="flex items-center gap-2">
                                            <button
                                                type="button"
                                                onClick={togglePlay}
                                                className="px-2.5 py-1 rounded border border-gray-200 bg-white hover:bg-gray-100 text-gray-700 transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
                                                title={
                                                    isPlaying ? "Pause" : "Play"
                                                }
                                            >
                                                {isPlaying ? (
                                                    <Pause className="w-3.5 h-3.5 fill-current" />
                                                ) : (
                                                    <Play className="w-3.5 h-3.5 fill-current" />
                                                )}
                                                <span>
                                                    {isPlaying
                                                        ? "Pause"
                                                        : "Play"}
                                                </span>
                                            </button>

                                            <button
                                                type="button"
                                                onClick={toggleMute}
                                                className="px-2.5 py-1 rounded border border-gray-200 bg-white hover:bg-gray-100 text-gray-700 transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
                                                title={
                                                    isMuted ? "Unmute" : "Mute"
                                                }
                                            >
                                                {isMuted ? (
                                                    <VolumeX className="w-3.5 h-3.5 text-gray-700" />
                                                ) : (
                                                    <Volume2 className="w-3.5 h-3.5 text-gray-700" />
                                                )}
                                                <span>
                                                    {isMuted
                                                        ? "Unmute"
                                                        : "Mute"}
                                                </span>
                                            </button>
                                        </div>

                                        {/* Right: Settings & Fullscreen */}
                                        <div className="flex items-center gap-2 relative">
                                            {/* Settings Button & Dropdown */}
                                            <div className="relative">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setIsSettingsOpen(
                                                            !isSettingsOpen
                                                        )
                                                    }
                                                    className={`px-2.5 py-1 rounded border transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer ${
                                                        isSettingsOpen
                                                            ? "bg-gray-200 border-gray-300 text-gray-900"
                                                            : "bg-white border-gray-200 hover:bg-gray-100 text-gray-700"
                                                    }`}
                                                    title="Playback Settings"
                                                >
                                                    <Settings className="w-3.5 h-3.5" />
                                                    <span>
                                                        {playbackRate === 1
                                                            ? "Setting"
                                                            : `${playbackRate}x`}
                                                    </span>
                                                </button>

                                                {/* Settings Dropdown Menu */}
                                                {isSettingsOpen && (
                                                    <div className="absolute right-0 bottom-full mb-1.5 w-36 bg-white border border-gray-200 rounded-[6px] py-1 shadow-none z-30">
                                                        <div className="px-2.5 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                                                            Playback Speed
                                                        </div>
                                                        {[
                                                            0.75, 1, 1.25, 1.5,
                                                            2,
                                                        ].map((rate) => (
                                                            <button
                                                                key={rate}
                                                                type="button"
                                                                onClick={() =>
                                                                    changePlaybackRate(
                                                                        rate
                                                                    )
                                                                }
                                                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-colors flex items-center justify-between cursor-pointer ${
                                                                    playbackRate ===
                                                                    rate
                                                                        ? "bg-gray-100 text-gray-900 font-bold"
                                                                        : "text-gray-700 hover:bg-gray-100"
                                                                }`}
                                                            >
                                                                <span>
                                                                    {rate === 1
                                                                        ? "Normal (1x)"
                                                                        : `${rate}x`}
                                                                </span>
                                                                {playbackRate ===
                                                                    rate && (
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                                                                )}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Fullscreen Button */}
                                            <button
                                                type="button"
                                                onClick={toggleFullscreen}
                                                className="px-2.5 py-1 rounded border border-gray-200 bg-white hover:bg-gray-100 text-gray-700 transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
                                                title={
                                                    isFullscreen
                                                        ? "Exit Fullscreen"
                                                        : "Fullscreen"
                                                }
                                            >
                                                {isFullscreen ? (
                                                    <Minimize className="w-3.5 h-3.5" />
                                                ) : (
                                                    <Maximize className="w-3.5 h-3.5" />
                                                )}
                                                <span>
                                                    {isFullscreen
                                                        ? "Exit"
                                                        : "Full Screen"}
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Right: Video List (Consistent border-2 on all states to prevent jump) */}
                            <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-2.5">
                                {/* Video 1 */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleTutorialSelect("enroll")
                                    }
                                    className={`text-left p-3 rounded-[6px] border-2 transition-colors cursor-pointer ${
                                        activeTutorialId === "enroll"
                                            ? "border-gray-900 bg-gray-50"
                                            : "border-gray-200 bg-white hover:border-gray-300"
                                    }`}
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-[11px] font-semibold text-gray-500">
                                            Video 1
                                        </span>
                                        <span className="text-[10px] text-gray-600 font-medium">
                                            Attached in Mail
                                        </span>
                                    </div>
                                    <p className="text-xs sm:text-sm font-semibold text-[#111827] line-clamp-2">
                                        How to Enroll in your Swayam Course
                                    </p>
                                </button>

                                {/* Video 2 */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleTutorialSelect("profile")
                                    }
                                    className={`text-left p-3 rounded-[6px] border-2 transition-colors cursor-pointer ${
                                        activeTutorialId === "profile"
                                            ? "border-gray-900 bg-gray-50"
                                            : "border-gray-200 bg-white hover:border-gray-300"
                                    }`}
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-[11px] font-semibold text-gray-500">
                                            Video 2
                                        </span>
                                        <span className="text-[10px] text-gray-600 font-medium">
                                            Attached in Mail
                                        </span>
                                    </div>
                                    <p className="text-xs sm:text-sm font-semibold text-[#111827] line-clamp-2">
                                        How to Update your Profile
                                    </p>
                                </button>

                                {/* Video 3 */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleTutorialSelect("abc-id")
                                    }
                                    className={`text-left p-3 rounded-[6px] border-2 transition-colors cursor-pointer ${
                                        activeTutorialId === "abc-id"
                                            ? "border-gray-900 bg-gray-50"
                                            : "border-gray-200 bg-white hover:border-gray-300"
                                    }`}
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-[11px] font-semibold text-gray-500">
                                            Video 3
                                        </span>
                                        <span className="text-[10px] text-gray-600 font-medium">
                                            YouTube Video
                                        </span>
                                    </div>
                                    <p className="text-xs sm:text-sm font-semibold text-[#111827] line-clamp-2">
                                        How to create your ABC ID
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* SWAYAM Mentor List Modal - Simple Clean White (No Shadows) */}
            {isMentorsModalOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
                    onClick={() => setIsMentorsModalOpen(false)}
                >
                    <div
                        className="bg-white border border-gray-200 rounded-[8px] max-w-[960px] w-full p-4 sm:p-6 relative my-auto text-[#1F2937] flex flex-col shadow-none"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-200">
                            <h3 className="text-lg sm:text-xl font-bold font-poppins text-[#111827]">
                                SWAYAM Mentor List
                            </h3>
                            <button
                                type="button"
                                onClick={() => setIsMentorsModalOpen(false)}
                                className="w-8 h-8 rounded border border-gray-200 hover:border-gray-300 hover:bg-gray-100 text-gray-500 hover:text-gray-900 flex items-center justify-center transition-colors cursor-pointer"
                                aria-label="Close"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Responsive Table Container */}
                        <div className="w-full overflow-x-auto max-h-[70vh] overflow-y-auto border border-gray-200 rounded-[6px]">
                            <table className="w-full text-left border-collapse">
                                <thead className="sticky top-0 bg-gray-50 z-10">
                                    <tr className="text-gray-700 text-xs sm:text-sm font-semibold border-b border-gray-200">
                                        <th className="py-3 px-4 min-w-[70px] text-center whitespace-nowrap">
                                            S. No.
                                        </th>
                                        <th className="py-3 px-4 min-w-[280px] whitespace-nowrap">
                                            Name
                                        </th>
                                        <th className="py-3 px-4 min-w-[200px] whitespace-nowrap">
                                            Designation
                                        </th>
                                        <th className="py-3 px-4 min-w-[170px] whitespace-nowrap">
                                            Phone No.
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-gray-800">
                                    {swayamMentorsList.map((mentor) => (
                                        <tr
                                            key={mentor.sNo}
                                            className="hover:bg-gray-50/70 transition-colors"
                                        >
                                            <td className="py-3 px-4 text-center text-gray-600 whitespace-nowrap">
                                                {mentor.sNo}
                                            </td>
                                            <td className="py-3 px-4 font-medium text-[#111827] whitespace-nowrap">
                                                {mentor.name}
                                            </td>
                                            <td className="py-3 px-4 text-gray-700 whitespace-nowrap">
                                                {mentor.designation}
                                            </td>
                                            <td className="py-3 px-4 text-gray-700 whitespace-nowrap">
                                                {mentor.phoneNo}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* SWAYAM FAQ Modal - Simple Clean White Accordion */}
            {isFaqModalOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
                    onClick={() => setIsFaqModalOpen(false)}
                >
                    <div
                        className="bg-white border border-gray-200 rounded-[8px] max-w-[960px] w-full p-4 sm:p-6 relative my-auto text-[#1F2937] flex flex-col shadow-none"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-200">
                            <h3 className="text-lg sm:text-xl font-bold font-poppins text-[#111827]">
                                SWAYAM FAQ
                            </h3>
                            <button
                                type="button"
                                onClick={() => setIsFaqModalOpen(false)}
                                className="w-8 h-8 rounded border border-gray-200 hover:border-gray-300 hover:bg-gray-100 text-gray-500 hover:text-gray-900 flex items-center justify-center transition-colors cursor-pointer"
                                aria-label="Close"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Modal Body: FAQ Accordion */}
                        <FaqAccordion maxHeight="max-h-[65vh]" />
                    </div>
                </div>
            )}
        </section>
    );
};

export default HeroSection;
