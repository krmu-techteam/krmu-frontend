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
  modalType?: "tutorial" | "mentors" | "faq" | "notices";
}

const navTabs: NavTab[] = [
  {
    label: "SWAYAM Courses Jul-Dec 2026",
    href: "https://swayam.gov.in/explorer",
    external: true,
  },
  { label: "Video Tutorials", modalType: "tutorial" },
  { label: "Swayam Mentors", modalType: "mentors" },
  {
    label: "SWAYAM Login",
    href: "https://swayam-sso.swayam2.ac.in/signin?response_type=code&client_id=swayam-central-production&redirect_uri=%2F&state=RPJDPtGNYWzoq3zAvpknahIS3Gs2lU",
    external: true,
  },
  { label: "FAQ", modalType: "faq" },
  { label: "Contact", href: "#contact" },
];

interface TutorialVideo {
  id: "abc-id" | "enroll" | "profile";
  title: string;
  youtubeId?: string;
}

const tutorialVideos: TutorialVideo[] = [
  {
    id: "abc-id",
    title: "How to create your ABC ID",
    youtubeId: "VRIZJXb6ow8",
  },
  {
    id: "enroll",
    title: "How to Enroll in your Swayam Course",
    youtubeId: "", // Pending YouTube upload from University
  },
  {
    id: "profile",
    title: "How to Update your Profile",
    youtubeId: "", // Pending YouTube upload from University
  },
];

const HeroSection: React.FC = () => {
  const [isTutorialModalOpen, setIsTutorialModalOpen] = useState(false);
  const [isMentorsModalOpen, setIsMentorsModalOpen] = useState(false);
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [isNoticesModalOpen, setIsNoticesModalOpen] = useState(false);
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

  const clearHash = () => {
    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
  };

  const closeTutorialModal = () => {
    setIsTutorialModalOpen(false);
    clearHash();
  };

  const closeMentorsModal = () => {
    setIsMentorsModalOpen(false);
    clearHash();
  };

  const closeFaqModal = () => {
    setIsFaqModalOpen(false);
    clearHash();
  };

  const closeNoticesModal = () => {
    setIsNoticesModalOpen(false);
    clearHash();
  };

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#mentors") {
        setIsMentorsModalOpen(true);
        clearHash();
      } else if (window.location.hash === "#faq") {
        setIsFaqModalOpen(true);
        clearHash();
      } else if (window.location.hash === "#notices") {
        setIsNoticesModalOpen(true);
        clearHash();
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);

    const handleCustomOpen = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail === "mentors") {
        setIsMentorsModalOpen(true);
      } else if (customEvent.detail === "faq") {
        setIsFaqModalOpen(true);
      } else if (customEvent.detail === "tutorial") {
        setIsTutorialModalOpen(true);
      } else if (customEvent.detail === "notices") {
        setIsNoticesModalOpen(true);
      }
    };
    window.addEventListener("open-swayam-modal", handleCustomOpen);

    return () => {
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("open-swayam-modal", handleCustomOpen);
    };
  }, []);

  const sendYoutubeCommand = (func: string, args: any = "") => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func,
          args: Array.isArray(args) ? args : args !== "" ? [args] : [],
        }),
        "*",
      );
    }
  };

  const handleTutorialSelect = (id: "enroll" | "profile" | "abc-id") => {
    setActiveTutorialId(id);
    setIsSettingsOpen(false);
    const selected = tutorialVideos.find((v) => v.id === id);
    if (!selected?.youtubeId) {
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
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden pt-20 sm:pt-24 md:pt-17 font-poppins">
      {/* Hero Main Background Banner */}
      <div
        className="relative w-full bg-cover bg-no-repeat bg-[center_right] lg:bg-center min-h-[580px] sm:min-h-[640px] lg:min-h-[767px] flex items-stretch"
        style={{
          backgroundImage: "url('/swayam/university-bg.jpg')",
        }}
      >
        {/* Content Container: previous left alignment with max-w-[1600px] and px-0 lg:px-[65px] */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-0 lg:px-[65px] flex items-stretch">
          {/* Glassmorphic Gradient Card: Flush to top edge (h-full) and flush to bottom */}
          <div
            className="w-full max-w-none lg:max-w-[561px] lg:w-[561px] h-full min-h-[580px] sm:min-h-[640px] lg:min-h-[767px] p-6 sm:p-8 lg:p-11 flex flex-col justify-center gap-6 sm:gap-7 lg:gap-8"
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 75.48%, #001732 100%)",
              opacity: 0.9,
            }}
          >
            {/* Top: Dual Logo (SWAYAM + Ministry of Education) */}
            <div className="w-[300px] sm:w-[360px] lg:w-[383px] max-w-full h-auto">
              <Image
                src="/swayam/swayamor-ministry.png"
                alt="SWAYAM - Free Online Education | Ministry of Education"
                width={383}
                height={80}
                className="w-full h-auto object-contain object-left"
                priority
              />
            </div>

            {/* Middle: Description Text */}
            <div>
              <p className="text-[#000000] text-[15px] font-poppins sm:text-[16px] lg:text-[17px] font-bold leading-[1.65] lg:leading-[1.7] tracking-normal">
                SWAYAM (Study Webs of Active Learning for Young Aspiring Minds)
                is the Government of India&apos;s national online learning
                platform developed by the Ministry of Education. It provides
                high-quality online courses offered by IITs, IIMs, Central
                Universities, NPTEL, CEC, AICTE, IGNOU and other National
                Coordinators, enabling learners to access quality education
                anytime and anywhere.
              </p>
            </div>

            {/* Bottom: Visit SWAYAM Button */}
            <div>
              <a
                href="https://swayam.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-[170px] sm:w-[190px] h-[48px] bg-[#CB000D] hover:bg-[#b0000b] text-white text-[16px] font-semibold rounded-[2px] transition-all duration-200 cursor-pointer"
              >
                Visit SWAYAM
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Announcement Banner (Gold / Mustard Yellow) - Continuous Infinite Marquee Loop */}
      <div className="w-full bg-[#DFB15B] py-2.5 sm:py-3 px-4 sm:px-8 overflow-hidden">
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
                    Registration Open for July 2026 Session • Late date to enrol • Exam Registration • Result
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
      <div className="w-full bg-transparent py-4 sm:py-5 px-4 sm:px-8">
        <div className="max-w-[1520px] mx-auto flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
          {navTabs.map((tab, idx) =>
            tab.modalType ? (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  if (tab.modalType === "tutorial")
                    setIsTutorialModalOpen(true);
                  if (tab.modalType === "mentors") setIsMentorsModalOpen(true);
                  if (tab.modalType === "faq") setIsFaqModalOpen(true);
                  if (tab.modalType === "notices") setIsNoticesModalOpen(true);
                }}
                className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white border border-[#D1D5DB] rounded-[2px] text-[#1F2937] hover:text-[#CB000D] hover:border-[#CB000D] font-bold text-sm sm:text-[15px]   transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                {tab.label}
              </button>
            ) : (
              <a
                key={idx}
                href={tab.href}
                target={tab.external ? "_blank" : undefined}
                rel={tab.external ? "noopener noreferrer" : undefined}
                className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white border border-[#D1D5DB] rounded-[2px] text-[#1F2937] hover:text-[#CB000D] hover:border-[#CB000D] font-bold text-sm sm:text-[15px]   transition-all duration-200 whitespace-nowrap"
              >
                {tab.label}
              </a>
            ),
          )}
        </div>
      </div>

      {/* Video Tutorials Modal - Simple Clean White (Left Video, Right List) */}
      {isTutorialModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto font-poppins"
          onClick={closeTutorialModal}
        >
          <div
            className="bg-white rounded-[2px] max-w-[960px] w-full p-4 sm:p-6 relative my-auto text-[#1F2937] flex flex-col "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 mb-4">
              <h3 className="text-lg sm:text-xl font-bold font-poppins text-[#111827]">
                Video Tutorials
              </h3>
              <button
                type="button"
                onClick={closeTutorialModal}
                className="w-8 h-8  hover:bg-gray-100 text-gray-500 hover:text-gray-900 flex items-center justify-center transition-colors cursor-pointer"
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
                  className={`relative w-full aspect-video overflow-hidden  bg-black ${
                    isFullscreen
                      ? "!fixed !inset-0 !z-[100] !w-screen !h-screen !aspect-auto !rounded-none !border-0 flex items-center justify-center bg-black"
                      : ""
                  }`}
                >
                  {/* YouTube Video if video has youtubeId */}
                  {tutorialVideos.map((video) =>
                    video.youtubeId ? (
                      <div
                        key={video.id}
                        className={`w-full h-full relative ${
                          activeTutorialId === video.id ? "block" : "hidden"
                        }`}
                      >
                        <iframe
                          ref={activeTutorialId === video.id ? iframeRef : undefined}
                          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?enablejsapi=1&autoplay=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=0&playsinline=1`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                          allowFullScreen
                          tabIndex={-1}
                          className="absolute -top-[46px] sm:-top-[54px] left-0 w-full h-[calc(100%+92px)] sm:h-[calc(100%+108px)] border-0"
                        />
                      </div>
                    ) : (
                      activeTutorialId === video.id && (
                        <div
                          key={video.id}
                          className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#F8FAFC]"
                        >
                          <div className="w-12 h-12 rounded-full bg-[#001732] text-white flex items-center justify-center mb-3 shadow-sm">
                            <Play className="w-5 h-5 fill-white translate-x-0.5" />
                          </div>
                          <p className="text-sm sm:text-base font-bold text-[#001732] max-w-md">
                            {video.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-2 max-w-sm">
                            Video will be available soon once uploaded to the official YouTube channel.
                          </p>
                        </div>
                      )
                    ),
                  )}
                </div>

                {/* Video Custom Controls Bar - Clean, White, No Shadows */}
                {tutorialVideos.find((v) => v.id === activeTutorialId)?.youtubeId && (
                  <div className="flex items-center justify-between px-3 py-2 bg-[#F8FAFC] border-t border-[#E2E8F0] text-[#0F172A] relative select-none rounded-b-[2px]">
                    {/* Left: Play/Pause & Mute/Unmute */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="px-2.5 py-1 rounded-[2px] border border-[#CBD5E1] bg-white hover:border-[#001732] hover:bg-gray-50 text-[#0F172A] transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
                        title={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? (
                          <Pause className="w-3.5 h-3.5 fill-current" />
                        ) : (
                          <Play className="w-3.5 h-3.5 fill-current" />
                        )}
                        <span>{isPlaying ? "Pause" : "Play"}</span>
                      </button>

                      <button
                        type="button"
                        onClick={toggleMute}
                        className="px-2.5 py-1 rounded-[2px] border border-[#CBD5E1] bg-white hover:border-[#001732] hover:bg-gray-50 text-[#0F172A] transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
                        title={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? (
                          <VolumeX className="w-3.5 h-3.5 text-[#0F172A]" />
                        ) : (
                          <Volume2 className="w-3.5 h-3.5 text-[#0F172A]" />
                        )}
                        <span>{isMuted ? "Unmute" : "Mute"}</span>
                      </button>
                    </div>

                    {/* Right: Settings & Fullscreen */}
                    <div className="flex items-center gap-2 relative">
                      {/* Settings Button & Dropdown */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                          className={`px-2.5 py-1 rounded-[2px] border transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer ${
                            isSettingsOpen
                              ? "bg-[#001732] border-[#001732] text-white"
                              : "bg-white border-[#CBD5E1] hover:border-[#001732] hover:bg-gray-50 text-[#0F172A]"
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
                          <div className="absolute right-0 bottom-full mb-1.5 w-36 bg-white border border-[#CBD5E1] rounded-[2px] py-1 shadow-md z-30">
                            <div className="px-2.5 py-1 text-[10px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                              Playback Speed
                            </div>
                            {[0.75, 1, 1.25, 1.5, 2].map((rate) => (
                              <button
                                key={rate}
                                type="button"
                                onClick={() => changePlaybackRate(rate)}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-colors flex items-center justify-between cursor-pointer ${
                                  playbackRate === rate
                                    ? "bg-[#001732] text-white font-bold"
                                    : "text-[#0F172A] hover:bg-gray-100 font-medium"
                                }`}
                              >
                                <span>
                                  {rate === 1 ? "Normal (1x)" : `${rate}x`}
                                </span>
                                {playbackRate === rate && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
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
                        className="px-2.5 py-1 rounded-[2px] border border-[#CBD5E1] bg-white hover:border-[#001732] hover:bg-gray-50 text-[#0F172A] transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
                        title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                      >
                        {isFullscreen ? (
                          <Minimize className="w-3.5 h-3.5" />
                        ) : (
                          <Maximize className="w-3.5 h-3.5" />
                        )}
                        <span>{isFullscreen ? "Exit" : "Full Screen"}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right: Video Playlist */}
              <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-2.5">
                {tutorialVideos.map((video) => (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => handleTutorialSelect(video.id)}
                    className={`w-full text-left p-3.5 rounded-[2px] border transition-colors cursor-pointer flex items-center gap-3 group ${
                      activeTutorialId === video.id
                        ? "border-[#001732] bg-[#001732] text-white shadow-sm"
                        : "border-[#E2E8F0] bg-[#F8FAFC] hover:bg-[#EEF2F6] text-[#1E293B]"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                        activeTutorialId === video.id
                          ? "border-white bg-white text-[#001732] shadow-sm"
                          : "border-[#CBD5E1] bg-white text-[#64748B] group-hover:bg-[#001732] group-hover:text-white group-hover:border-[#001732]"
                      }`}
                    >
                      <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-xs sm:text-[13px] leading-snug line-clamp-2 font-semibold transition-colors ${
                          activeTutorialId === video.id
                            ? "text-white"
                            : "text-[#1E293B] group-hover:text-[#001732]"
                        }`}
                      >
                        {video.title}
                      </p>
                      {!video.youtubeId && (
                        <span
                          className={`text-[10px] inline-block font-normal mt-0.5 ${
                            activeTutorialId === video.id
                              ? "text-white/70"
                              : "text-amber-600"
                          }`}
                        >
                          Upload pending
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SWAYAM Mentor List Modal - Simple Clean White (No Shadows) */}
      {isMentorsModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto font-poppins"
          onClick={closeMentorsModal}
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
                onClick={closeMentorsModal}
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
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="font-semibold text-[#111827]">
                          {mentor.name}
                        </div>
                        {mentor.title && (
                          <div className="text-xs text-gray-500 font-normal mt-0.5">
                            {mentor.title}
                          </div>
                        )}
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
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto font-poppins"
          onClick={closeFaqModal}
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
                onClick={closeFaqModal}
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

      {/* SWAYAM Notices & Circulars Modal */}
      {isNoticesModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto font-poppins"
          onClick={closeNoticesModal}
        >
          <div
            className="bg-white border border-gray-200 rounded-[8px] max-w-[850px] w-full p-4 sm:p-6 relative my-auto text-[#1F2937] flex flex-col shadow-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold font-poppins text-[#111827]">
                Notices and Circulars
              </h3>
              <button
                type="button"
                onClick={closeNoticesModal}
                className="w-8 h-8 rounded border border-gray-200 hover:border-gray-300 hover:bg-gray-100 text-gray-500 hover:text-gray-900 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content Table */}
            <div className="w-full overflow-x-auto max-h-[70vh] overflow-y-auto border border-gray-200 rounded-[6px]">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 bg-gray-50 z-10">
                  <tr className="text-gray-700 text-xs sm:text-sm font-semibold border-b border-gray-200">
                    <th className="py-3 px-4 min-w-[60px] text-center whitespace-nowrap">
                      S. No.
                    </th>
                    <th className="py-3 px-4 min-w-[340px]">
                      Subject / Title
                    </th>
                    <th className="py-3 px-4 min-w-[120px] text-center whitespace-nowrap">
                      Status
                    </th>
                    <th className="py-3 px-4 min-w-[140px] text-center whitespace-nowrap">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-gray-800">
                  <tr className="hover:bg-gray-50/70 transition-colors">
                    <td className="py-3.5 px-4 text-center text-gray-600 font-medium">
                      1
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-[#111827]">
                        Registration Open for July 2026 Session
                      </div>
                      <div className="text-xs text-gray-500 font-normal mt-0.5">
                        Late date to enrol • Exam Registration • Result
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <a
                        href="https://swayam.gov.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-semibold text-[#CB000D] hover:underline"
                      >
                        Visit Portal →
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
