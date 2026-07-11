import Image from "next/image";

const InterRelationStudentExchange = () => {
  return (
    <section className="pt-[30px] px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 lg:pr-20">
          <h4 className="text-5xl font-semibold mb-5">
            Student Exchange Program
          </h4>
          <p>
            KRMU International Relations popular foreign student exchange
            program on ‘Exploring India’s Heritage: The Cultural Triangle
            Experience’ KRMU welcomes you to discover the rich tapestry of
            India’s history, culture and architectural heritage with our
            two-week immersive study programme, ‘Exploring India’s Heritage: The
            Cultural Triangle Experience’. This programme is designed for
            international students from universities outside India who are eager
            to delve into the heart of India’s captivating past and vibrant
            present. With a blend of academic insights and non-academic
            experiences, participants will explore the cultural triangle formed
            by Agra, Mathura, Jaipur and New Delhi, providing a well-rounded
            understanding of India’s multifaceted heritage.
          </p>
          <p>
            The immersive study programme is tailored to provide an enriching
            and holistic experience, enabling participants to explore India’s
            cultural treasures while fostering personal growth and
            cross-cultural understanding.
          </p>
        </div>
        <div className="w-full lg:w-2/5">
          <Image
            src="/wp-content/images/student-exchange.webp"
            width={665}
            height={665}
            alt=""
            className="md:h-[665px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default InterRelationStudentExchange;
