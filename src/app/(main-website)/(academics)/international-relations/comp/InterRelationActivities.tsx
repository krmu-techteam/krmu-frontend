import Image from "next/image";

const InterRelationActivities = () => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-[1600px] mx-auto w-full">
        <h4 className="text-[28px] text-center mb-5 font-semibold">
          Activities
        </h4>
        <p className="text-center my-5">
          <strong>
            K.R. Mangalam University takes initiatives to organized regular
            activities for students so that they can engage themselves and
            develop new skills.
          </strong>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-16">
          <div className="p-2.5 border border-[#f2f3f5] rounded-[30px]">
            <Image
              src="/inter-relation/activities/image-1.png"
              width={408}
              height={275}
              alt=""
              className="w-full"
            />
            <p className="text-[11px] my-2.5">
              A two-week Global Immersion Programme in collaboration with the
              University of East Anglia (UEA), UK, conducted in London and
              Norwich, offered students enriching academic, experiential, and
              cultural exposure. The programme highlights the University’s
              commitment to international collaboration and nurturing globally
              competent graduates.
            </p>
          </div>
          <div className="p-2.5 border border-[#f2f3f5] rounded-[30px]">
            <Image
              src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/gemini_1_9de2dc72c2.webp"
              width={408}
              height={275}
              alt=""
              className="w-full rounded-[30px]"
            />
            <p className="text-[11px] my-2.5">
              Students Visited Madame Tussauds and the London Eye, offering
              immersive experiences in the heart of London
            </p>
          </div>
          <div className="p-2.5 border border-[#f2f3f5] rounded-[30px]">
            <Image
              src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Gemini_Generated_Image_sdpyagsdpyagsdpy_189da9ee35.png"
              width={408}
              height={275}
              alt="" 
              className="w-full rounded-[30px] h-[342px] object-cover"
            />
            <p className="text-[11px] my-2.5">
              Students explored charming Bath with its Georgian architecture and
              Roman baths
            </p>
          </div>
          <div className="p-2.5 border border-[#f2f3f5] rounded-[30px]">
            <Image
              src="/inter-relation/activities/image-4.png"
              width={408}
              height={275}
              alt=""
              className="w-full"
            />
            <p className="text-[11px] my-2.5">
              Professor Dr. Sayfullah facilitated discussions on marketing and
              brand management, simplifying complex concepts for students
            </p>
          </div>
          <div className="p-2.5 border border-[#f2f3f5] rounded-[30px]">
            <Image
              src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/gemini_2_88272e6ebd.webp"
              width={408}
              height={275}
              alt=""
              className="w-full rounded-[30px]"
            />
            <p className="text-[11px] my-2.5">
              Students of Summer School programmes, received certificates on
              final day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterRelationActivities;
