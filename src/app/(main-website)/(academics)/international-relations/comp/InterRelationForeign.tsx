import Image from "next/image";

const InterRelationForeign = () => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-[1600px] mx-auto w-full">
        <h4 className="text-[28px] text-center mb-5 font-semibold">
          Foreign University Campus Visits & Guest Lectures
        </h4>
        <p className="text-center my-5">
          <strong>
            KRMU doesn’t limit itself to the campus, it offers students the
            opportunities to visit foreign universities campus to attend guest
            lectures and interact with new people. 
          </strong>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-16">
          <div className="p-2.5 border border-[#f2f3f5] rounded-[30px]">
            <Image
              src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/MG_0747_1_a31be27c7d.JPG"
              width={408}
              height={275}
              alt=""
              className="w-full h-[315px] object-cover rounded-[30px]"
            />
            <p className="text-[11px] my-2.5">
              K.R. Mangalam University hosted an International Academic
              Interaction on “Sustainability in Practice: What Construction Can
              Teach Other Industries”, featuring expert insights from
              distinguished faculty of Southern Illinois University Edwardsville
              (SIUE), USA.
            </p>
          </div>
          <div className="p-2.5 border border-[#f2f3f5] rounded-[30px]">
            <Image
              src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/MG_0866_3d1795320d.JPG"
              width={408}
              height={275}
              alt=""
              className="w-full h-[315px] object-cover rounded-[30px]"
            />
            <p className="text-[11px] my-2.5">
              A distinguished delegation from Texas Christian University
              (TCU), USA, visited KRMU to guide students on higher studies in
              business and global opportunities in the USA. The interactive
              sessions provided practical insights into international
              admissions, education systems, and career pathways abroad.
            </p>
          </div>
          <div className="p-2.5 border border-[#f2f3f5] rounded-[30px]">
            <Image
              src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Whats_App_Image_2025_08_12_at_4_24_44_PM_1_1_ef93ce1f72.webp"
              width={408}
              height={275}
              alt=""
              className="w-full h-[315px] object-cover rounded-[30px]"
            />
            <p className="text-[11px] my-2.5">
              The UNSW Workshop provided academic exposure to the students
              through interaction with the professors of UNSW.
            </p>
          </div>

          <div className="p-2.5 border border-[#f2f3f5] rounded-[30px]">
            <Image
              src="/inter-relation/foreign/image-1.png"
              width={408}
              height={275}
              alt=""
              className="w-full"
            />
            <p className="text-[11px] my-2.5">
              (University of Bath, UK) <br /> Prof. Ajit Mishra, Head, Dept. of
              Economics and Prof. Sophia Kirtley, Deputy Head, Marketing,
              University of Bath, UK, delivered lecture on ‘Employable Careers
              and opportunities in Business and Economics’
            </p>
          </div>
          <div className="p-2.5 border border-[#f2f3f5] rounded-[30px]">
            <Image
              src="/inter-relation/foreign/image-2.png"
              width={408}
              height={275}
              alt=""
              className="w-full"
            />
            <p className="text-[11px] my-2.5">
              Prof. Féidhlim McGowan, faculty in Economics and Financial
              Technology, University of Galway, Ireland, engaging lecture on
              ‘FinTech Growth in Ireland: Trends and Developments
            </p>
          </div>
          <div className="p-2.5 border border-[#f2f3f5] rounded-[30px]">
            <Image
              src="/inter-relation/foreign/image-3.png"
              width={408}
              height={275}
              alt=""
              className="w-full"
            />
            <p className="text-[11px] my-2.5">
              KRMU hosts Campus Visit and Collaboration Talks with Scotland
              Rural College (SRUC), Edinburg, Scotland. Focused on
              Agri-business, project management, farm management and farm
              product marketing
            </p>
          </div>
          <div className="p-2.5 border border-[#f2f3f5] rounded-[30px]">
            <Image
              src="/inter-relation/foreign/image-4.png"
              width={408}
              height={275}
              alt=""
              className="w-full"
            />
            <p className="text-[11px] my-2.5">
              Campus Visit of representatives from EADA Business School,
              Barcelona, Spain, for collaborative initiatives.
            </p>
          </div>
          <div className="p-2.5 border border-[#f2f3f5] rounded-[30px]">
            <Image
              src="/inter-relation/foreign/image5.png"
              width={408}
              height={275}
              alt=""
              className="w-full"
            />
            <p className="text-[11px] my-2.5">
              Campus Visit – University of York, UK. Prof. Bob Townley,
              Professor of Management & Director, Post-Graduate Studies, engaged
              in interactive guest lecture on ‘Contemporary Issues for
              management & organisations in Challenging Times’
            </p>
          </div>

          <div className="p-2.5 border border-[#f2f3f5] rounded-[30px]">
            <Image
              src="/inter-relation/foreign/image6.png"
              width={408}
              height={275}
              alt=""
              className="w-full"
            />
            <p className="text-[11px] my-2.5">
              Collaboration meeting with representatives from College of Design,
              Construction and Planning, University of Florida, USA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterRelationForeign;
