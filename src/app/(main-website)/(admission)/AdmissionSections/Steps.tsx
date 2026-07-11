
import { STRAPI_URL } from "@/app/constant";
import { getAdmissionProcessCardsData } from "@/lib/api/admission";
import Image from "next/image";



const Steps = async () => {
  const processCardData = await getAdmissionProcessCardsData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
      {processCardData.map((card, index) => {
        return (
          <div
            key={card.id}
            className="bg-card text-card-foreground flex flex-col gap-6 border-0 shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 rounded-3xl"
          >
            <div  
              className={`[&:last-child]:p-6 md:p-6 lg:p-8 h-full bg-gradient-to-br ${card.cardclass} text-gray-700 relative`}
            >
              {/* Step Number */}
              <div className="mb-4 md:mb-4 lg:mb-6">
                <span className="text-3xl md:text-4xl lg:text-5xl opacity-40 text-gray-500 font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Icon Image */}
              <div className="mb-4 md:mb-4 lg:mb-6">
                <div className="w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200">
                  <Image
                    src={`${STRAPI_URL}${card.cardimg.url}`}
                    alt={card.cardimg.alternativeText ?? "Card icon"}
                    width={card.cardimg.width ?? 24}
                    height={card.cardimg.height ?? 24}
                    className="w-6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 text-gray-600"
                  />
                </div>
              </div>

              {/* Title */}
              <div className="space-y-3 md:space-y-3 lg:space-y-4">
                <h3 className="text-lg md:text-lg lg:text-2xl text-university-red font-bold leading-tight">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-sm lg:text-base">
                  {/* You can add a description field later if needed */}
                  Follow the step to proceed with admission.
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Steps;
