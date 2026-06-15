import Image from "next/image";
import Button from "@/components/common/Button";
import SectionDivider from "@/components/common/SectionDivider";

type Props = {
  appl_btn: {
    id: number;
    btn_text: string;
    btn_class?: string | null;
    btn_link: string;
  };
};

const ApplyOnlineSection = ({ appl_btn }: Props) => {
  return (
    <section className="bg-[#132737] pt-16 lg:pt-20 px-6 md:px-12 lg:px-16 pb-0 relative overflow-hidden kree-grid-bg">
      {/* Background Overlay (Left side only, fading from black) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061623]/75 via-[#061623]/30 to-transparent pointer-events-none z-0" />

      <div className="max-w-[1530px] mx-auto w-full flex flex-col items-center lg:flex-row z-10 relative">
        {/* Left Side: Premium Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-16 pb-16 lg:pb-24 relative">
          {/* Accent border strip for desktop */}
          <div className="absolute left-6 lg:left-8 top-1.5 w-1 h-12 bg-gradient-to-b from-[#cb000d] to-transparent hidden lg:block" />
          
          <h3 className="font-bold text-4xl md:text-5xl leading-tight text-white mb-3 tracking-wide">
            APPLY ONLINE
          </h3>
          <p className="text-white/80 font-poppins text-base md:text-lg mb-6 leading-relaxed">
            Apply Online through our website
          </p>
          
          {appl_btn && appl_btn?.btn_link ? (
            <Button
              href={appl_btn.btn_link}
              variant="primary"
              className="rounded-[3px] font-poppins"
            >
              {appl_btn.btn_text}
            </Button>
          ) : (
            ""
          )}
        </div>

        {/* Right Side: Collage Image (Aligned to bottom and right edge inside container) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end self-end mt-10 lg:mt-0">
          <Image
            src="/admission/KREE.webp"
            width={916}
            height={440}
            alt="Apply Online"
            className="w-full h-auto object-contain block align-bottom fade-edges"
            priority
          />
        </div>
      </div>

      <style>{`
        .kree-grid-bg {
          background-size: 32px 32px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
        }
        .fade-edges {
          mask-image: linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%);
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      <SectionDivider />
    </section>
  );
};

export default ApplyOnlineSection;
