
import { ProgramCardType } from "@/lib/types/program-type";
import Image from "next/image";

type ProgramCardProps = {
  cardData: ProgramCardType;
};

const ProgramCard: React.FC<ProgramCardProps> = ({ cardData }) => {
  return (
    <div
      data-slot="card"
      className="text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <Image
          src={cardData.imageSrc}
          alt={cardData.altText}
          width={363}
          height={192}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-lg mb-2 leading-tight">
            {cardData.title}
          </h3>
        </div>
      </div>

      <div data-slot="card-content" className="[&:last-child]:pb-6 p-6">
        <div className="space-y-4 mb-6">
          <div className="flex items-center text-gray-600">
            {/* Clock Icon */}
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
              className="lucide lucide-clock w-5 h-5 text-university-blue mr-3"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>
              Duration:
              <span className="text-gray-800"> {cardData.duration}</span>
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            {/* Rupee Icon */}
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
              className="lucide lucide-indian-rupee w-5 h-5 text-university-red mr-3"
              aria-hidden="true"
            >
              <path d="M6 3h12"></path>
              <path d="M6 8h12"></path>
              <path d="m6 13 8.5 8"></path>
              <path d="M6 13h3"></path>
              <path d="M9 13c6.667 0 6.667-10 0-10"></path>
            </svg>
            <span>
              Annual Fees:{" "}
              <span className="text-gray-800">{cardData.fees}</span>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            {/* Trending Icon */}
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
              className="lucide lucide-trending-up w-4 h-4 mr-2 text-green-500"
              aria-hidden="true"
            >
              <path d="M16 7h6v6"></path>
              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
            </svg>
            <span>{cardData.popularityLabel}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            {/* Users Icon */}
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
              className="lucide lucide-users w-4 h-4 mr-2 text-university-blue"
              aria-hidden="true"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <circle cx="9" cy="7" r="4"></circle>
            </svg>
            <span>{cardData.seatStatus}</span>
          </div>
        </div>

        <button className="w-full h-9 px-4 py-2 rounded-full text-white bg-gradient-to-r from-university-blue to-university-red hover:from-blue-700 hover:to-red-700 transition-all duration-300 text-sm font-medium">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
