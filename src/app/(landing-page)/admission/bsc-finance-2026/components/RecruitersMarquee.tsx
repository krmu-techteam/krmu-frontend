import Image from "next/image";
import { ProminentRecruit } from "../contentype";

type Props = {
  recruiters: ProminentRecruit[];
};

const RecruitersMarquee = ({ recruiters }: Props) => {
  return (
    <section className="py-12 bg-white" id="recruiters" aria-label="Our prominent recruiters">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-900">
          Our Prominent Recruiters
        </h2>
      </div>
      <div className="relative flex overflow-x-hidden border-y border-gray-100 bg-gray-50/50 py-10">
        <div className="flex animate-marquee whitespace-nowrap gap-8 items-center">
          {[...recruiters, ...recruiters, ...recruiters].map((rec, i) => (
            <div key={i} className="flex-shrink-0 transition-all duration-300">
              <div className="bg-white py-2 px-10 rounded-xl border border-gray-100 shadow-sm mx-1">
                <Image 
                  src={rec.imgUrl} 
                  alt={rec.alt} 
                  width={160} 
                  height={80} 
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default RecruitersMarquee;
