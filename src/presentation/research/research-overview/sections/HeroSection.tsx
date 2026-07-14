import {
  ResearchContent,
  ResearchHero,
  ResearchQuickLinks,
  ResearchStats,
} from "../components";

interface Props {
  heroTitle: string;
  stats: { value: string; title: string }[];
  content: { id: number; content: string }[];
  links: { id: number; title: string; url: string }[];
}

const HeroSection = ({ heroTitle, stats, content, links }: Props) => {
  return (
    <section className="bg-[url(/placements/researchoverviewbg.webp)] font-poppins bg-center bg-no-repeat bg-cover pt-[32%] md:pt-[10%] pb-[60px] px-4">
      <div className="max-w-[1530px] mx-auto w-full text-white">
        <ResearchHero title={heroTitle} />
        <ResearchStats stats={stats} />
        <ResearchContent paragraphs={content} />
        <ResearchQuickLinks links={links} />
      </div>
    </section>
  );
};

export default HeroSection;
