"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Home, Wrench } from "lucide-react";

export default function UnderConstruction() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden font-poppins px-4 py-12 select-none">
      {/* Background Noise Layer */}
      <div className="absolute inset-0 bg-[url('/bg-noise.png')] opacity-10 bg-repeat pointer-events-none" />

      {/* Decorative Left Blue Glow */}
      <div className="absolute top-0 left-[-50px] w-[500px] h-full bg-[url('/blue-bg.png')] bg-cover opacity-30 pointer-events-none" />

      {/* Decorative Right Yellow Glow */}
      <div className="absolute top-0 right-0 w-[300px] h-full bg-[url('/yellow-bg.png')] bg-no-repeat bg-contain opacity-25 pointer-events-none" />

      {/* Content Centered Directly on Page */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl">
        {/* Brand Logo */}
        <div className="mb-10 transform hover:scale-[1.02] transition-transform duration-300">
          <Image
            src="/krmu.png"
            width={256}
            height={64}
            alt="K.R. Mangalam University Logo"
            className="object-contain"
            priority
            unoptimized
          />
        </div>

        {/* Animated Wrench Container */}
        <div className="relative flex items-center justify-center mb-8 w-32 h-32 rounded-full border border-white/10">
          <Wrench className="w-16 h-16 text-[#0060AA] animate-[spin_8s_linear_infinite]" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-tight leading-tight">
          Under Construction
        </h2>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full px-6 sm:px-0">
          <button
            onClick={() => router.push("/")}
            className="w-full sm:w-auto px-8 py-3.5 text-white font-semibold rounded-[4px] bg-gradient-to-r from-[#E41F23] to-[#cb000d] hover:from-[#cb000d] hover:to-[#a8000a] shadow-[0_4px_15px_rgba(228,31,35,0.3)] hover:shadow-[0_6px_20px_rgba(228,31,35,0.45)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-5 h-5" strokeWidth={2.5} />
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
}
