import Link from "next/link"
import { HallofFame } from "../components"
import { HALLFAME } from "@/features/about"
import SectionDivider from "@/components/common/SectionDivider"


const HallOfFameSection = ({title, hallfame}: {title: string, hallfame: HALLFAME[]}) => {
    return(
        <section className="py-8 sm:py-10 lg:py-12 xl:py-16 px-6 sm:px-10 lg:px-12 xl:px-16  relative">
        <div className="max-w-[1530px] mx-auto w-full text-center ">
          <h3 className="heading-primary mb-8 lg:mb-12">
            {title || "Our Hall of Fame"}
          </h3>
          <HallofFame fameData={hallfame} />
          <div className="mt-8 lg:mt-12">
            <Link
              href="/awards-and-achievements"
              className="relative overflow-hidden group inline-flex items-center justify-center px-8 py-3 bg-transparent border border-white/40 text-white font-poppins text-[15px] tracking-wide font-medium transition-colors duration-300 rounded-[3px]"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
              <span className="relative z-10 font-poppins">View All</span>
            </Link>
          </div>
        </div>
        <SectionDivider />
      </section>
    )
}
export default HallOfFameSection