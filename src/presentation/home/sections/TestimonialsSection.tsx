import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Carousel } from "@/components/common/Carousel";
import SectionDivider from "@/components/common/SectionDivider";
import { SectionTitle } from "@/components/common/SectionTitle";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: "Krish Agarwal",
    role: "B Tech CSE AI/ML 2023-27 batch",
    quote:
      "Success is never built alone, and my journey at K.R. Mangalam University is a testament to that. The university empowered me to push my limits, transforming curiosity into innovation and ambition into achievements. From winning 7+ hackathons and total 10+ of tech events to gaining valuable industry exposure through internships, every milestone reflects the strong foundation, guidance, and opportunities KRMU provided me. I will always be grateful to K.R. Mangalam University for inspiring me to dream bigger, achieve more, and become the professional I aspire to be.",
    image: "/images/home/testimonials/krish-agarwal-1.png",
  },
  {
    id: 2,
    name: "Naman Punn",
    role: "B Tech CSE 2022-2026 batch",
    quote:
      "The B.tech cse programme at K.R. Mangalam University goes beyond academics by encouraging innovation, collaboration, and practical learning. From coding challenges and technical events to industry exposure and real world projects, students gain the confidence and skills required to succeed in todays competitive technology landscape. The overall learning environment inspires continuous growth and excellence.",
    image: "/images/home/testimonials/naman-punn-2.png",
  },
  {
    id: 3,
    name: "Anu Sharma",
    role: "BCA AI & DS",
    quote:
      "My experience at K.R. Mangalam University has been a memorable learning journey. The BCA program gave me a strong foundation in programming and problem-solving, while the supportive faculty and practical learning opportunities helped me grow both technically and personally. I'm thankful for the skills and experiences I gained during my time here",
    image: "/images/home/testimonials/anu-sharma-3.png",
  },
  {
    id: 4,
    name: "Somya Sharma",
    role: "B.Tech CSE AIML 2023-27 batch",
    quote:
      "My journey at K.R. Mangalam University has been truly transformative, providing me with a strong foundation in Artificial Intelligence, Machine Learning, and Computer Science. Through hands-on projects, internships, hackathons, and continuous guidance from experienced faculty, I gained practical exposure that strengthened my technical and problem-solving skills. The University’s industry-oriented curriculum and supportive learning environment have prepared me to confidently pursue a career in AI-driven technologies while inspiring me to innovate and contribute meaningfully to the tech industry.",
    image: "/images/home/testimonials/somya-sharma-4.png",
  },
  {
    id: 5,
    name: "Upadhyayula Nijaagna",
    role: "B.Tech CSE AIML 2023-27 batch",
    quote:
      "K.R. Mangalam University has provided me with an environment where learning goes beyond the classroom. Through the B.Tech CSE (Al & ML) programme I gained technical knowledge, practical experience and the confidence to keep learning and adapting in the fast changing world of technology. The curriculum also offered exposure to diverse domains helping me develop a broader perspective of other domains. I am grateful for this enriching journey.",
    image: "/images/home/testimonials/upadhyayula-nijaagna-5.png",
  },
  {
    id: 6,
    name: "Namrata Muralidharan",
    role: "BCA (AI & DS) 2024-26 batch",
    quote:
      "My journey at K.R. Mangalam University, pursuing BCA in Artificial Intelligence & Data Science, has been a transformative blend of knowledge, innovation, and hands-on learning. The program has helped me turn curiosity into technical expertise through real-world projects and emerging technologies. With supportive faculty and an industry-focused environment, KRMU has empowered me to think beyond conventional boundaries and confidently shape my future in the world of technology.",
    image: "/images/home/testimonials/namrata-6.png",
  },
  {
    id: 7,
    name: "Dhruv Gupta",
    role: "BCA (AI & DS) 2024-26 batch",
    quote:
      "I came into K.R. Mangalam University unsure of my direction. The BCA AI & Data Science curriculum, backed by faculty mentors who genuinely invested in my growth, gave me both a technical foundation and the confidence to pursue AI seriously. Maintaining a Dean's List track record across semesters, and the platform the university gave me to showcase my efforts across classrooms, events, and international opportunities, made every bit of that effort worth it.",
    image: "/images/home/testimonials/dhruv-gupta-7.png",
  },
  {
    id: 8,
    name: "Rakesh G",
    role: "BCA (AI & DS) 2024-26 batch",
    quote:
      "My journey at K.R. Mangalam University has been an enriching experience that has strengthened both my technical knowledge and professional confidence. The BCA (AI & Data Science) programme provided me with practical exposure through projects, internships, and industry-oriented learning. The continuous guidance from faculty members has helped me develop problemsolving skills and prepared me for a successful career in technology.",
    image: "/images/home/testimonials/rakesh-8.png",
  },
  {
    id: 9,
    name: "Khushi",
    role: "B. Tech CSE (AI & ML) 2023-2027 batch",
    quote:
      "The university played an important role in shaping my learning journey. The B.Tech CSE (AI & ML) programme offered the right balance of academic rigor and practical exposure, enabling me to build a solid technical foundation and an industry-oriented mindset. The diverse learning opportunities and encouraging environment have prepared me to embrace new challenges with confidence. I sincerely appreciate the support and experiences that made this journey memorable.",
    image: "/images/home/testimonials/khushi-9.png",
  },
  {
    id: 10,
    name: "UTSAV RATAN",
    role: "Btech CSE 2024-2028 Batch",
    quote:
      "I’m Utsav Ratan, and choosing B.Tech at K.R. Mangalam University has been one of the best decisions for my academic and personal growth. The university provides excellent faculty, practical learning opportunities, modern infrastructure, and a supportive environment that encourages innovation and skill development. Every experience here has strengthened my confidence and prepared me for future challenges. I’m proud to be a part of the K.R. Mangalam University family.",
    image: "/images/home/testimonials/utsav-ratan-10.png",
  },
  {
    id: 11,
    name: "Mrinal Prakash",
    role: "Btech CSE 2024-2028 Batch",
    quote:
      "K.R. Mangalam University gave me more than a degree — it gave me room to build. Leading GeekRoom KRMU as Chapter President and running things day-to-day as MD & Vice Chairperson at eOzka taught me more than any classroom could. I stayed consistent with LeetCode (Mrinalprakash9) to keep my fundamentals sharp, and my GitHub (MRINALPRAKASHFSD) has every project to show for it.",
    image: "/images/home/testimonials/mrinal-prakash-11.png",
  },
];

export function TestimonialsSection({
  title,
}: {
  title?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  testimonialsData?: any[];
}) {
  return (
    <section className="relative w-full overflow-hidden py-8 md:py-12 xl:py-20 font-poppins max-w-[1530px] mx-auto">
      {/* Precision Spec Lines - Gradient Style */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-[1530px] mx-auto relative z-10">
        <div className="px-6 md:px-8 xl:px-16">
          <SectionTitle
            title={title || "What our Learners say?"}
            className="mb-0"
          />
        </div>

        <Carousel
          showArrows={false}
          autoplayDelay={6000}
          fade={true}
          options={{ loop: true, duration: 20 }}
          className="relative lg:pb-2 [&>div:last-child]:lg:absolute [&>div:last-child]:lg:bottom-8 [&>div:last-child]:lg:right-16 [&>div:last-child]:lg:w-[520px] [&>div:last-child]:lg:justify-center"
          activeDotClassName="bg-brand-gold w-2"
        >
          {TESTIMONIALS_DATA.map((t, index) => (
            <div
              key={t.id}
              className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] items-center min-h-[460px] md:min-h-[490px] lg:min-h-[510px] pt-8 pb-3 lg:pb-4 px-6 md:px-8 xl:px-16"
            >
              {/* Left Column - Content */}
              <div className="flex flex-col min-h-[440px] md:min-h-[480px] lg:min-h-[510px] justify-between relative pt-4 md:pt-0">
                <div>
                  <div className="absolute -top-6 -left-2 md:-top-6 md:-left-8 pointer-events-none z-0">
                    <Image
                      src="/modules/home/testimonial/quote.png"
                      alt="Quote Icon"
                      width={130}
                      height={100}
                      className="w-16 md:w-[100px] h-auto brightness-0 invert opacity-70"
                    />
                  </div>

                  <div className="relative h-auto mb-6 w-full z-10 pt-4 md:pt-6">
                    <p className="text-lg md:text-xl tracking-tight text-justify lg:text-[28px] text-white font-serif font-medium md:leading-[36px] opacity-90">
                      {t.quote}
                    </p>
                  </div>

                  <div className="w-16 h-1 bg-brand-gold mb-6"></div>

                  <div className="mb-6 md:mb-8">
                    <h4 className="text-white font-poppins font-semibold text-base md:text-[18px] leading-tight mb-1">
                      {t.name}
                    </h4>
                    <p className="text-white/60 font-poppins font-normal text-sm md:text-[14px]">
                      {t.role}
                    </p>
                  </div>
                </div>

                <button className="flex items-center gap-3 text-white hover:text-brand-gold transition-colors group cursor-pointer w-fit mb-0 lg:mb-0">
                  <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center group-hover:border-brand-gold group-hover:bg-brand-gold/10 transition-all">
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </div>
                  <span className="font-poppins font-medium text-xs md:text-[15px] tracking-wide">
                    View All Testimonials
                  </span>
                </button>
              </div>

              {/* Right Column - Image Card */}
              <div className="relative flex justify-center lg:justify-end pt-4 md:pt-0">
                <div className="relative rounded-[4px] w-full max-w-[520px] aspect-square">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover rounded-[4px]"
                    priority={index === 0}
                  />
                  {/* Subtle glass overlay frame */}
                  <div className="absolute inset-0 pointer-events-none"></div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <SectionDivider />
    </section>
  );
}
