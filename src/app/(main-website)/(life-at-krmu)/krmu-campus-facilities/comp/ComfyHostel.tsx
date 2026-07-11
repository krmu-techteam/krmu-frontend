import { ComfyHostelSection } from "@/lib/api/krmu-campus-facility"
import ComfyHostelSlide from "./ComfyHostelSlide"

type Props = {
    comfyClassroom: ComfyHostelSection
}

const ComfyHostel = ({comfyClassroom}: Props) => {
  return (
    <section className="py-10">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-3xl md:text-5xl font-semibold text-center mb-5">
          {comfyClassroom?.heading}
        </h3>
        <p className="my-5 text-center">{comfyClassroom?.content}</p>
        <div>
          <ComfyHostelSlide data={comfyClassroom?.comfy_slide_imgs} />
        </div>
      </div>
    </section>
  )
}

export default ComfyHostel