import { STRAPI_URL } from "@/app/constant";
import { SpecialisationCard } from "@/lib/types/school-programme";
import Image from "next/image";

type Props = {
  heading: string;
  highlightheading: string;
  specialisations: SpecialisationCard[];
};

const Specialisation = ({
  heading,
  highlightheading,
  specialisations,
}: Props) => {
  // Staging / Testing Image Overrides to avoid hitting live Strapi for test data
  const getSpecialisationImage = (title: string, currentUrl: string) => {
    const lowerTitle = title.toLowerCase();
    
    if (lowerTitle.includes("robotics")) {
      return "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/b_tech_computer_science_and_engineering_robotics_and_ai_b9b24da4a4.jpeg";
    }
    if (lowerTitle.includes("ai") || lowerTitle.includes("machine learning")) {
      return "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/b_tech_computer_science_and_engineering_ai_and_ml_b0fc013bcb.png";
    }
    if (lowerTitle.includes("cyber security")) {
      return "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_computer_science_and_engineering_cyber_security_c32ad8f7f8.jpeg";
    }
    if (lowerTitle.includes("data science")) {
      return "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/b_tech_computer_science_and_engineering_data_science_ff14ce5505.jpeg";
    }
    if (lowerTitle.includes("full stack")) {
      return "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/b_tech_computer_science_and_engineering_full_stack_development_aade4f5abe.png";
    }
    if (lowerTitle.includes("ux") || lowerTitle.includes("ui")) {
      return "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_computer_science_and_engineering_ux_ui_00fecef876.jpeg";
    }

    return currentUrl ? `${STRAPI_URL}${currentUrl}` : "/programmes/specialisation.webp";
  };

  return (
    <section className="prog-global-padding pb-20">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="common-prog-container">
          <h2 className="heading">
            {heading}{" "}
            <span className="text-gray-900">{highlightheading}</span>
          </h2>
        </div>
        {/* Original structure (Commented out as requested): */}
        {/* <div className="lg:flex mt-12 lg:gap-6">
          <div className="w-full lg:w-1/2 sm:px-0 text-center">
            <Image
              src="/programmes/specialisation.webp"
              width={636}
              height={652}
              alt={heading || ""}
              className="w-full h-full"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-[30px] mt-8 lg:mt-0 ">
            <div className="lg:pl-[50px] flex flex-col justify-between gap-[30px] h-full">
              {specialisations &&
                specialisations.map((specialisation) => {
                  return (
                    <div
                      key={specialisation?.id}
                      className="prog_highlight_content_container"
                    >
                      <div className="prog_highlight_content_inner_container">
                        <div className="prog_highlight_img">
                          <Image
                            width={111}
                            height={80}
                            src={`${STRAPI_URL}${specialisation?.specialisationimg?.url}`}
                            alt={specialisation?.title}
                          />
                        </div>
                        <div className="prog_highlight_content">
                          <a
                            href={specialisation?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <h5 className="title">{specialisation?.title}</h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div> */}

        {/* New Product Card Grid: */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-12">
          {specialisations &&
            specialisations.map((specialisation) => {
              const displayImage = getSpecialisationImage(
                specialisation?.title || "",
                specialisation?.specialisationimg?.url || ""
              );

              return (
                <div
                  key={specialisation?.id}
                  className="bg-white border border-gray-100 rounded-md shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden flex flex-col group h-full"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      fill
                      src={displayImage}
                      alt={specialisation?.title}
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col items-center justify-center text-center bg-white z-10">
                    <a
                      href={specialisation?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:no-underline"
                    >
                      <h5 className="text-lg font-semibold text-[#0a41a1]/80 group-hover:text-[#0a41a1] transition-colors duration-300 leading-tight">
                        {specialisation?.title}
                      </h5>
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Specialisation;
