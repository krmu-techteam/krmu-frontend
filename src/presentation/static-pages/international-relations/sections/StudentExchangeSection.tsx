import SectionDivider from "@/components/common/SectionDivider";

const StudentExchangeSection = () => {
  return (
    <section className="relative pb-8 md:pb-12 xl:pb-20">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-16">
        <div className="w-full">
          <h2 className="text-3xl text-center md:text-left md:text-4xl lg:text-[44px] text-white font-serif font-bold mb-4 leading-tight">
            Student Exchange Program
          </h2>
          <div className="space-y-4 text-gray-200 font-poppins text-justify sm:text-left text-[16px]">
            <p>
              KRMU International Relations popular foreign student exchange
              program on ‘Exploring India’s Heritage: The Cultural Triangle
              Experience’ KRMU welcomes you to discover the rich tapestry of
              India’s history, culture and architectural heritage with our
              two-week immersive study programme, ‘Exploring India’s Heritage:
              The Cultural Triangle Experience’. This programme is designed for
              international students from universities outside India who are
              eager to delve into the heart of India’s captivating past and
              vibrant present. With a blend of academic insights and
              non-academic experiences, participants will explore the cultural
              triangle formed by Agra, Mathura, Jaipur and New Delhi, providing
              a well-rounded understanding of India’s multifaceted heritage.
            </p>
            <p>
              The immersive study programme is tailored to provide an enriching
              and holistic experience, enabling participants to explore India’s
              cultural treasures while fostering personal growth and
              cross-cultural understanding.
            </p>
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default StudentExchangeSection;
