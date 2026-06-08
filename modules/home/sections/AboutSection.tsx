'use client';

import Link from 'next/link';
import SectionDivider from '@/components/common/SectionDivider';
import { ABOUT_STAT, ABOUT_STAT_BG_COLORS } from '../constants';


export default function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden px-6 md:px-11 xl:px-16 py-6 md:py-12 xl:py-20 font-poppins text-center transition-colors duration-500">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.08)_0%,transparent_70%)] rounded-full blur-[100px] z-0 pointer-events-none"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto relative mb-6 md:mb-8 xl:mb-12">
          <span className="inline-block bg-brand-navy-deep text-brand-gold px-3 py-1 text-md xl:text-[20px] font-medium capitalize tracking-normal mb-6 rounded-md border border-white/5 font-poppins">
            Best University in Gurugram
          </span>
 
          <h2 className="text-3xl md:text-4xl xl:text-[42px] font-serif font-bold text-white mb-6 leading-[1.2] tracking-tight">
            A Decade of Educational Excellence
          </h2>

          <p className="max-w-4xl mx-auto text-white/70 text-base md:text-[16px] leading-relaxed mb-6 font-light font-poppins">
            K.R. Mangalam University, a <strong className="text-white font-semibold text-lg md:text-xl">NAAC &apos;A&apos; accredited</strong> and top-ranked university in Gurugram, is dedicated to
            empowering ambitious learners and elevating their educational journey. With a strong culture of innovation,
            research, and intellectual curiosity, we inspire students to think boldly, create fearlessly, and explore deeply. At
            KRMU, every learner is encouraged to discover new ideas, embrace transformative learning experiences, and
            grow into confident, future-ready leaders.
          </p>

          <Link 
            href="#" 
            className="inline-flex items-center text-md font-normal tracking-wide text-white"
          >
            Know More
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-5">
          {ABOUT_STAT.map((stat, idx) => (
            <div 
              key={idx} 
              style={{ backgroundColor: ABOUT_STAT_BG_COLORS[idx % ABOUT_STAT_BG_COLORS.length] }}
              className="group relative overflow-hidden rounded-sm py-7 px-6 border border-white/5 shadow-xl hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/10 hover:-translate-y-1 transition-all duration-500 ease-out cursor-default text-start min-h-[100px] xl:min-h-[120px] flex flex-col justify-center"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
 
              <div className="text-3xl md:text-4xl font-light text-brand-gold mb-2 leading-none relative z-10 transition-colors duration-500 ease-out">
                {stat.number}
              </div>
              <div className="text-white/80 text-[14px] 2xl:text-[16px] capitalize tracking-wide font-light leading-tight relative z-10 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <SectionDivider />
    </section>
  );
}
