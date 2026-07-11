import { STRAPI_URL } from "@/app/constant";
import { getAwardsRecognition } from "@/lib/api/admission";
import { AwardsRecognitionCardType } from "@/lib/types/admissioncards";
import Image from "next/image";

const AwardsRecognitionCard = async () => {
  const awardsData = await getAwardsRecognition();

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {awardsData?.map((card: AwardsRecognitionCardType) => {
        return (
          <div
            key={card.id}
            className="bg-white p-6 rounded-xl shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-university-red rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
              {card.cardimg?.url && (
                <Image
                  src={`${STRAPI_URL}${card.cardimg.url}`}
                  alt={card.cardimg.alternativeText || "Award icon"}
                  width={card.cardimg.width || 64}
                  height={card.cardimg.height || 64}
                />
              )}
            </div>
            <h4 className="text-lg mb-2 text-gray-800">{card.title}</h4>
            <p className="text-sm text-gray-600">{card.cardcontent}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AwardsRecognitionCard;
