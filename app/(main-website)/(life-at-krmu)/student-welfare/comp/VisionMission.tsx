import Image from "next/image";
import { Playfair_Display, Poppins } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const welfareCards = [
  {
    title: "Student Council and Extracurricular Oversight",
    description:
      "Supervise the student council’s activities, promote and advise on extracurricular activities, including sports and cultural events, ensuring active student engagement.",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Rectangle_1384_8b424ae885.jpg",
    alt: "Students performing at a cultural event, KRMU Student Council",
    bgClass:
      "bg-[linear-gradient(97.46deg,#FFDDEE_34.28%,#E9B9D2_45.2%,#E5BAD3_99.15%)]",

    textClass: "text-black",
  },
  {
    title: "Student Welfare and Facilities Management",
    description:
      "Collaborate with university staff on student welfare, manage hostel amenities and canteen operations, and address student grievances to ensure a supportive campus environment.",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Rectangle_1385_2248d2fe13.jpg",
    alt: "Hostel and campus welfare facilities at K.R. Mangalam University",
    bgClass:
      "bg-[linear-gradient(254.84deg,#3B9598_71.16%,#287A7D_77.85%,#4D8284_101.44%)]",
    textClass: "text-white",
  },
  {
    title: "Scholarship Programmes and Supervisory Duties",
    description:
      "Initiate scholarship awards for deserving students and undertake various responsibilities as directed by the Vice-Chancellor, focusing on enhancing the student experience and maintaining university standards.",
    image:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Rectangle_1386_556a9bf949.jpg",
    alt: "KRMU student celebrating scholarship award success",
    bgClass:
      "bg-[linear-gradient(99.8deg,#7590B8_41.27%,#5674A1_57.36%,#587BAF_100%)]",
    textClass: "text-white",
  },
];

const VisionMission = () => {
  return (
    <section className="bg-white px-4 pb-12 md:px-12">
      <div className="relative mx-auto w-full max-w-[1550px] overflow-hidden rounded-md bg-[linear-gradient(180deg,#001732_0%,#994246_100%)] px-6 pb-8 pt-10 text-white md:px-[65px] md:pb-[60px] md:pt-[82px]">
        <div className="pointer-events-none absolute inset-x-[8%]  top-[30px]  hidden h-[500px] w-[1150px]  md:block">
          <Image
            src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/887730a7857f46073d15c2fcef7de92802f16b60_1cb06209a1.png"
            alt="world"
            fill
            className="opacity-[20%] z-10"
          />
        </div>

        <div className="relative z-10 grid  lg:grid-cols-[57%_43%] lxl:grid-cols-[60%_40%]">
          <div className="mb-10">
            <h2
              className={`${playfair.className} max-w-[650px] text-[36px] font-semibold leading-[1.2] text-white md:text-[64px]`}
            >
              Shaping Global Leaders and Well-Rounded Individuals
            </h2>

            <div className="mt-5 flex max-w-[750px] gap-5">
              <div className="mt-1 flex w-[6px]  shrink-0 overflow-hidden bg-[linear-gradient(180deg,#0058CC_0%,#FF9D00_100%)] rounded-full" />
              <p
                className={`${poppins.className} text-justify text-[13px] font-normal text-white md:text-[18px]`}
              >
                At K.R. Mangalam University, we are guided by a compelling
                vision and mission that form the cornerstone of our educational
                ethos. Our approach is not just about imparting knowledge; it is
                about shaping the future leaders of the world. With a vision
                deeply rooted in the comprehensive development of each
                individual, we strive to create a nurturing environment that
                fosters academic excellence, personal growth, and global
                competencies.
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <Image
              src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/1592cb30cce58034e12a402430ef7345e246101f_1d22e46bda.png"
              alt="Student leader"
              width={1500}
              height={1500}
              className="absolute w-[100%]  h-[450px] bottom-0  xl:w-[600px] xl:h-[610px] xl:right-[10%]  xl:top-[-20%] object-cover"
            />
          </div>
        </div>

        <div className="relative z-20  grid gap-3 lg:grid-cols-2 md:gap-2 ">
          <article className="rounded-md  bg-[linear-gradient(180deg,#E7C268_0%,#FFFFFF_100%)] pb-7 text-black">
            <h3
              className={`${playfair.className}  bg-[#002045] m-2 rounded-md px-8 py-6 text-center text-[38px] font-bold leading-none text-white`}
            >
              Vision
            </h3>
            <p
              className={`${poppins.className} px-6 pt-3 text-left sm:text-justify text-[18px] font-normal leading-[1.45] md:px-[50px]`}
            >
              Student Welfare envisions comprehensive individual, academic, and
              integrated development by providing life skills and counselling
              services and thus preparing them for a diverse, enterprising, and
              global society.
            </p>
          </article>

          <article className="rounded-md  bg-[linear-gradient(180deg,#E7C268_0%,#FFFFFF_100%)] pb-7 text-black">
            <h3
              className={`${playfair.className}  bg-[#002045] m-2 rounded-md px-8 py-6 text-center text-[38px] font-bold leading-none text-white`}
            >
              Mission
            </h3>
            <p
              className={`${poppins.className} px-6 pt-3 text-left sm:text-justify text-[18px] font-normal leading-[1.45] md:px-[50px]`}
            >
              The Student Welfare Department aims to facilitate global
              leadership and personal well-being through high moral values and
              sound life skills among students.
            </p>
          </article>
        </div>
      </div>

      <div className="mx-auto pt-12 grid w-full max-w-[1550px] gap-6 md:grid-cols-2 lg:grid-cols-3">
        {welfareCards.map((card) => (
          <article
            key={card.title}
            className={`${card.bgClass} ${card.textClass} overflow-hidden rounded-xl  p-2.5 shadow-[0_16px_35px_rgba(15,23,42,0.08)]`}
          >
            <div className="relative h-[230px] overflow-hidden rounded-xl bg-white md:h-[250px] xl:h-[285px]">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover"
              />
            </div>

            <div className="px-3 pb-11 pt-5 md:px-4 xl:px-5">
              <h3
                className={`${playfair.className} max-w-[440px] text-[30px] font-bold leading-[0.95] md:text-[26px] lg:text-[32px] xl:text-[41px]`}
              >
                {card.title}
              </h3>
              <p
                className={`${poppins.className} mt-5 max-w-[430px] text-[14px]  leading-[1.45] md:text-[13px] lg:text-[15px] xl:text-[18px]`}
              >
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default VisionMission;
