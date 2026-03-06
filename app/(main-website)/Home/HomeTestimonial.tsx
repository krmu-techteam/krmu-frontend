import { getTestimonialsData } from "@/lib/api/common";
import HomeTestimonials from "../components/Testimonials/HomeTestimonials";

interface HomeKRMTestimonialProps {
  title: string;
  desc: string;
}

const HomeTestimonial = async ({ title, desc }: HomeKRMTestimonialProps) => {
  const testimonialsData = await getTestimonialsData();
  return (
    <>
      <section>
        <div className=" max-w-[1664px] mx-auto w-full mb-12 bg-[#051630] p-12">
          <div className="xl:flex items-center text-white">
            <div className="xl:w-[40%] xl:pr-10 text-center lg:text-left">
              <h4 className="text-4xl lg:text-5xl leading-tight font-semibold mb-5 max-w-sm">
                {title}
              </h4>
              <p className="mb-10">
                {desc}
              </p>
            </div>
            <div className="xl:w-[60%] mt-10 xl:mt-0 rounded-md">
              <div>
                <HomeTestimonials testiData={testimonialsData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeTestimonial;
