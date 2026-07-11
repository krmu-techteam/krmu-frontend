import Image from "next/image";
import { getFeeCardData } from "@/lib/api/admission";
import { STRAPI_URL } from "@/app/constant";

const FeeDetailsCards = async () => {
  const feeInfo = await getFeeCardData();

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {feeInfo.map((card) => (
        <div
          key={card.id}
          className="text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white overflow-hidden"
        >
          {/* Card Image & Title */}
          <div className="p-6 pb-4">
            <div className="flex items-center mb-6">
              {card.feecardimg?.url && (
                <div className="w-16 h-16 bg-university-red rounded-full flex items-center justify-center mr-4 shadow-lg overflow-hidden">
                  <Image
                    src={`${STRAPI_URL}${card.feecardimg.url}`}
                    alt={card.feecardimg.alternativeText || "Fee Card Image"}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
              )}
              <h3 className="text-gray-800 text-xl">{card.feecardtitle}</h3>
            </div>
          </div>

          {/* Price Details */}
          <div className="px-6 pb-6">
            <div className="space-y-4">
              {card.feepricedetails.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1 pr-4">
                      <h4 className="text-gray-800 text-base leading-tight mb-1">
                        {item.heading}
                      </h4>
                      {item.refund && (
                        <div className="flex items-center text-green-600 text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-refresh-cw w-4 h-4 mr-1"
                            aria-hidden="true"
                          >
                            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                            <path d="M21 3v5h-5"></path>
                            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                            <path d="M8 16H3v5"></path>
                          </svg>
                          <span>Refundable</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center text-lg font-semibold text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-indian-rupee w-5 h-5 mr-1 text-university-red"
                        aria-hidden="true"
                      >
                        <path d="M6 3h12"></path>
                        <path d="M6 8h12"></path>
                        <path d="m6 13 8.5 8"></path>
                        <path d="M6 13h3"></path>
                        <path d="M9 13c6.667 0 6.667-10 0-10"></path>
                      </svg>
                      <span>{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeeDetailsCards;
