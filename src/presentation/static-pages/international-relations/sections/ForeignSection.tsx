import Image from "next/image";
import SectionDivider from "@/components/common/SectionDivider";

const ForeignSection = () => {
  const foreignVisits = [
    {
      image:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/MG_0747_1_a31be27c7d.JPG",
      desc: "K.R. Mangalam University hosted an International Academic Interaction on “Sustainability in Practice: What Construction Can Teach Other Industries”, featuring expert insights from distinguished faculty of Southern Illinois University Edwardsville (SIUE), USA.",
    },
    {
      image:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/MG_0866_3d1795320d.JPG",
      desc: "A distinguished delegation from Texas Christian University (TCU), USA, visited KRMU to guide students on higher studies in business and global opportunities in the USA. The interactive sessions provided practical insights into international admissions, education systems, and career pathways abroad.",
    },
    {
      image:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Whats_App_Image_2025_08_12_at_4_24_44_PM_1_1_ef93ce1f72.webp",
      desc: "The UNSW Workshop provided academic exposure to the students through interaction with the professors of UNSW.",
    },
    {
      image: "/inter-relation/foreign/image-1.png",
      desc: "(University of Bath, UK) Prof. Ajit Mishra, Head, Dept. of Economics and Prof. Sophia Kirtley, Deputy Head, Marketing, University of Bath, UK, delivered lecture on ‘Employable Careers and opportunities in Business and Economics’",
    },
    {
      image: "/inter-relation/foreign/image-2.png",
      desc: "Prof. Féidhlim McGowan, faculty in Economics and Financial Technology, University of Galway, Ireland, engaging lecture on ‘FinTech Growth in Ireland: Trends and Developments",
    },
    {
      image: "/inter-relation/foreign/image-3.png",
      desc: "KRMU hosts Campus Visit and Collaboration Talks with Scotland Rural College (SRUC), Edinburg, Scotland. Focused on Agri-business, project management, farm management and farm product marketing",
    },
    {
      image: "/inter-relation/foreign/image-4.png",
      desc: "Campus Visit of representatives from EADA Business School, Barcelona, Spain, for collaborative initiatives.",
    },
    {
      image: "/inter-relation/foreign/image5.png",
      desc: "Campus Visit – University of York, UK. Prof. Bob Townley, Professor of Management & Director, Post-Graduate Studies, engaged in interactive guest lecture on ‘Contemporary Issues for management & organisations in Challenging Times’",
    },
    {
      image: "/inter-relation/foreign/image6.png",
      desc: "Collaboration meeting with representatives from College of Design, Construction and Planning, University of Florida, USA",
    },
  ];

  return (
    <section className="relative py-8 md:py-12 xl:py-20">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-16">
        <h2 className="text-4xl md:text-5xl lg:text-[44px] text-center text-white font-serif font-bold mb-6">
          Foreign University Campus Visits & Guest Lectures
        </h2>
        <p className="text-center mb-6 md:mb-10 xl:mb-16 font-poppins text-white/90 max-w-4xl mx-auto  md:text-[16px] font-light">
          KRMU doesn’t limit itself to the campus, it offers students the
          opportunities to visit foreign universities campus to attend guest
          lectures and interact with new people.
        </p>

        <div className="flex flex-col gap-4 xl:gap-8 w-full">
          {foreignVisits.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-[#061623] rounded-[8px] p-4 w-full"
            >
              <div className="w-full md:w-[350px] lg:w-[450px] shrink-0 h-[250px] md:h-[280px] relative rounded-[8px] overflow-hidden">
                <Image src={item.image} fill alt="" className="object-cover" />
              </div>
              <div className="p-3 md:p-6 xl:px-12 flex items-center">
                <p className="text-[16px] text-gray-200 leading-relaxed font-poppins">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default ForeignSection;
