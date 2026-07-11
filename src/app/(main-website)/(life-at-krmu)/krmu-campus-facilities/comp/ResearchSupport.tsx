import { ResearchSupportSection } from "@/lib/api/krmu-campus-facility"
import ResearchSupportSlide from "./ResearchSupportSlide"

type Props = {
    researchSupport: ResearchSupportSection
}

const ResearchSupport = ({researchSupport}: Props) => {
  return (
       <section className="py-10">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-3xl md:text-5xl font-semibold text-center mb-5">
          {researchSupport?.heading}
        </h3>
        <p className="mb-10 text-center">{researchSupport?.content}</p>
        <div>
          <ResearchSupportSlide data={researchSupport?.research_support_imgs} />
        </div>
      </div>
    </section>
  )
}

export default ResearchSupport