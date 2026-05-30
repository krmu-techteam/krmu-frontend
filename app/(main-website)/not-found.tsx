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
        
        /* Ensure normal overflow and set dark base with noise */
        body {
          overflow: auto !important;
          background: #132737 url('/bg-noise.png') !important;
          background-repeat: repeat !important;
          background-size: 50px !important;
          position: relative !important;
          isolation: isolate !important;
        }
        
        body:after {
          content: "" !important;
          position: fixed !important;
          top: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          background: url('/yellow-bg.png') no-repeat !important;
          background-size: 100% !important;
          width: 300px !important;
          height: 100% !important;
          z-index: -1 !important;
        }
        body:before {
          content: "" !important;
          position: fixed !important;
          top: 0 !important;
          left: -50px !important;
          bottom: 0 !important;
          background: url('/blue-bg.png') repeat !important;
          background-size: 100% !important;
          width: 500px !important;
          height: 100% !important;
          z-index: -1 !important;
        }

        /* Ambient background */
        .gradient-bg {
          position: relative;
          background: transparent;
        }

        /* Animated 404 text floating directly on background */
        .animated-404 {
          font-size: 150px;
          line-height: 0.95;
          font-weight: 900;
          background: linear-gradient(135deg, #c41525 0%, #E7C268 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0px 15px 30px rgba(196, 21, 37, 0.3));
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
          border: 1.5px solid #0161B0;
          color: #ffffff;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .btn-brand-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }
      `}} />
      <div className="relative flex flex-col items-center justify-center min-h-screen gradient-bg px-4 py-12 overflow-hidden select-none">
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

          {/* Large Floating 404 Title */}
          <div className="animated-404 mb-6">404</div>

          {/* Messages */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-tight leading-tight">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-300 mb-10 text-lg md:text-xl max-w-md leading-relaxed">
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
