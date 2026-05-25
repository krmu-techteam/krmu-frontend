"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Hide all layout headers, footers, chatbots, popup forms, widgets and external scripts */
        header, 
        footer, 
        #main-header, 
        #main-footer, 
        .common-header, 
        .common-footer, 
        section.border-t, 
        section.py-14, 
        iframe, 
        [class*="npf"], 
        [id*="npf"], 
        [class*="chatbot"], 
        [class*="FloatingButtons"],
        div.fixed.bottom-0,
        div.fixed.bottom-10 {
          display: none !important;
        }
        
        /* Ensure normal overflow and set white base */
        body {
          overflow: auto !important;
          background: #ffffff !important;
        }

        /* Ambient background using #0360A8, #E41F23, and white */
        .gradient-bg {
          position: relative;
          background: linear-gradient(135deg, 
            rgba(3, 96, 168, 0.08) 0%, 
            rgba(255, 255, 255, 1) 50%, 
            rgba(228, 31, 35, 0.08) 100%
          );
        }

        /* Ambient floating glows */
        .ambient-glow-1 {
          position: absolute;
          width: 600px;
          height: 600px;
          top: -200px;
          left: -200px;
          background: radial-gradient(circle, rgba(3,96,168,0.2) 0%, rgba(255,255,255,0) 70%);
          filter: blur(50px);
          pointer-events: none;
          z-index: 0;
          animation: float-orb 14s ease-in-out infinite alternate;
        }

        .ambient-glow-2 {
          position: absolute;
          width: 700px;
          height: 700px;
          bottom: -250px;
          right: -250px;
          background: radial-gradient(circle, rgba(228,31,35,0.18) 0%, rgba(255,255,255,0) 70%);
          filter: blur(60px);
          pointer-events: none;
          z-index: 0;
          animation: float-orb 16s ease-in-out infinite alternate-reverse;
        }

        @keyframes float-orb {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(40px, -30px) scale(1.05); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        /* Animated 404 text floating directly on background */
        .animated-404 {
          font-size: 150px;
          line-height: 0.95;
          font-weight: 900;
          background: linear-gradient(135deg, #0360A8 0%, #E41F23 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0px 15px 30px rgba(3, 96, 168, 0.15));
          animation: text-pulse 4s ease-in-out infinite;
          letter-spacing: -0.05em;
        }

        @keyframes text-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        /* Brand primary and secondary buttons */
        .btn-brand-primary {
          background: linear-gradient(135deg, #E41F23 0%, #cb000d 100%);
          box-shadow: 0 4px 15px rgba(228, 31, 35, 0.3);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .btn-brand-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(228, 31, 35, 0.45);
        }

        .btn-brand-secondary {
          background: transparent;
          border: 1.5px solid #0360A8;
          color: #0360A8;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .btn-brand-secondary:hover {
          background: rgba(3, 96, 168, 0.06);
          transform: translateY(-2px);
        }
      `}} />
      <div className="relative flex flex-col items-center justify-center min-h-screen gradient-bg px-4 py-12 overflow-hidden select-none">
        {/* Glow Effects */}
        <div className="ambient-glow-1" />
        <div className="ambient-glow-2" />

        {/* Content Centered Directly on Page */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-xl">
          {/* Brand Logo */}
          <div className="mb-10 transform hover:scale-[1.02] transition-transform duration-300">
            <Image
              src="https://www.krmangalam.edu.in/_next/image?url=%2FKRMU-Logo-NAAC.webp&w=384&q=75"
              width={400}
              height={125}
              alt="K.R. Mangalam University Logo"
              className="object-contain"
              priority
            />
          </div>

          {/* Large Floating 404 Title */}
          <div className="animated-404 mb-6">404</div>

          {/* Messages */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 tracking-tight leading-tight">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 mb-10 text-lg md:text-xl max-w-md leading-relaxed">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full px-6 sm:px-0">
            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-3.5 text-white font-semibold rounded-full btn-brand-primary flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" strokeWidth={2.5} />
              Go Back Home
            </Link>
            <Link
              href="/programmes"
              className="w-full sm:w-auto px-8 py-3.5 font-semibold rounded-full btn-brand-secondary flex items-center justify-center gap-2"
            >
              Explore Programs
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
