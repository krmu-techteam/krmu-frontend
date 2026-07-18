import { STRAPI_URL } from "@/app/constant";
import { Breadcrumb } from "@/features/about/coc";

type Props = Breadcrumb;

const HeroSection: React.FC<Props> = ({ breadcrumbtext, backgroundimage }) => {
  return (
    <section
      className="relative pt-[160px] pb-16 bg-slate-950 overflow-hidden"
      style={{
        backgroundImage: backgroundimage
          ? `url(${STRAPI_URL}${backgroundimage?.url})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-8 text-center text-white z-10">
        <h1 className="text-3xl md:text-5xl lg:text-[64px] font-bold font-serif leading-tight">
          {breadcrumbtext}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
