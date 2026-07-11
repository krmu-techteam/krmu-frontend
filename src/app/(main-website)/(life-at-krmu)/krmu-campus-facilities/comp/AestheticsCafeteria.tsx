import { AestheticsCafeteriaSection } from "@/lib/api/krmu-campus-facility"
import AestheticsCafeteriaSlide from "./AestheticsCafeteriaSlide"

type Props = {
    aestheticsCafeteria: AestheticsCafeteriaSection
}


const AestheticsCafeteria = ({aestheticsCafeteria}: Props) => {
  return (
        <section className="py-10 bg-[#051630]">
      <div className="max-w-[1664px] mx-auto w-full text-white">
        <h3 className="text-3xl md:text-5xl font-semibold text-center mb-5">
          {aestheticsCafeteria?.heading}
        </h3>
        <p className="mb-10 text-center">{aestheticsCafeteria?.content}</p>
        <div>
          <AestheticsCafeteriaSlide data={aestheticsCafeteria?.aethetics_cafeteria_imgs} />
        </div>
      </div>
    </section>
  )
}

export default AestheticsCafeteria