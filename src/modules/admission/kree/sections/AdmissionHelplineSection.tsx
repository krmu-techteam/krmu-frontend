import Image from "next/image";
import SectionDivider from "@/components/common/SectionDivider";

const AdmissionHelplineSection = () => {
  return (
    <section className="relative z-4 bg-[url(/admission/kree-helplingbg.webp)] bg-no-repeat bg-cover pt-10 lg:pt-14 px-6 md:px-12 lg:px-16 pb-0 overflow-hidden">
      {/* Background Overlay (Left side only, fading from theme dark blue #061623) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061623]/80 via-[#061623]/35 to-transparent pointer-events-none z-0" />

      <div className="max-w-[1530px] mx-auto w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-end z-10 relative">
        {/* Left Column: Title and Glassmorphic Cards */}
        <div className="lg:w-3/5 w-full flex flex-col justify-center lg:pl-16 pb-10 lg:pb-14 self-center">
          <h2 className="heading-primary text-center lg:text-center mb-6 lg:mb-8">
            Admission Helpline
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 w-full">
            {/* Phone Card */}
            <div className="w-full sm:w-1/2 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] backdrop-blur-md rounded-sm p-6 lg:p-7 flex flex-col items-center text-center hover:border-[#005FA9]/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/admission/callic.webp"
                  width={32}
                  height={32}
                  alt="Phone Icon"
                  className="object-contain"
                />
              </div>
              <h4 className="text-xl font-bold text-white mb-2 font-poppins">
                Phone
              </h4>
              <div className="text-white/70 font-poppins text-sm md:text-base mb-1">
                <a href="tel:01148884888" className="hover:text-[#005FA9] transition-colors">01148884888</a>
                <span className="mx-2 text-white/30">/</span>
                <a href="tel:8800697010" className="hover:text-[#005FA9] transition-colors">8800697010</a>
                <span className="mx-1 text-white/50">–</span>
                <a href="tel:8800697015" className="hover:text-[#005FA9] transition-colors">15</a>
              </div>
            </div>

            {/* Email Card */}
            <div className="w-full sm:w-1/2 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] backdrop-blur-md rounded-sm p-6 lg:p-7 flex flex-col items-center text-center hover:border-[#005FA9]/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/admission/emailic.png"
                  width={32}
                  height={32}
                  alt="Email Icon"
                  className="object-contain"
                />
              </div>
              <h4 className="text-xl font-bold text-white mb-2 font-poppins">
                Email
              </h4>
              <div className="text-white/70 font-poppins text-sm md:text-base mb-1">
                <a href="mailto:welcome@krmangalam.edu.in" className="hover:text-[#005FA9] transition-colors break-all">
                  welcome@krmangalam.edu.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Image of the girl (Desktop only) */}
        <div className="lg:w-2/5 justify-end hidden lg:flex self-end items-end h-[460px] lg:h-[580px]">
          <Image
            src="/admission/admission.webp"
            width={510}
            height={784}
            alt="Admission Helpline Counselor"
            className="w-auto h-full object-contain block align-bottom fade-right"
            priority
          />
        </div>
      </div>

      <SectionDivider />

      <style>{`
        .fade-right {
          mask-image: linear-gradient(to right, black 88%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, black 88%, transparent 100%);
        }
      `}</style>
    </section>
  );
};

export default AdmissionHelplineSection;
