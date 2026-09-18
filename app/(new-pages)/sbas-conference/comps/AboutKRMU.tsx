import Image from "next/image";

const AboutKRMU = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto pb-20 flex items-center gap-16 text-[#44504A]">
        <div className="w-[42%]">
          <Image
            src="https://krmangalam.edu.in/images/sbas-conference/krmu-campus.webp"
            width={420}
            height={490}
            alt=""
            className="w-full rounded-xl"
          />
        </div>
        <div className="w-[58%] space-y-4">
          <p className="text-[#A9812F] text-xs font-bold tracking-[1.5px]">
            ABOUT THE CONFERENCE
          </p>
          <h2 className="text-3xl font-lora font-bold text-[#1C2822]">
            A state private university at the foot of the Aravallis
          </h2>
          <p className="text-justify text-sm">
            K.R. Mangalam University is a State Private University established
            in 2013 under Haryana Private Universities Act and is empowered to
            award degrees under section 2f of the UGC Act, 1956. The university
            is located at wonderful location with magnificent view of Aravalli
            hills and spread over 26 acres where students breathe in a
            pollution-free, healthy, and sustainable environment. The University
            has been striving to fulfil its prime objective of transforming
            young lives through ground-breaking pedagogy, global collaborations,
            and world-class infrastructure. 
          </p>
          <p className="text-justify text-sm">
            Along with advanced learning, the university gives paramount
            importance to co-curricular activities such as vibrant festival
            celebrations, social responsibility activities, tech training,
            research and many more activities. The university has 12 schools and
            offers more than 78 undergraduate, postgraduate, doctoral and
            diploma programs in various disciplines, including Basic and Applied
            Science, Engineering, Pharmacy, Journalism and Mass Communication,
            Agricultural Science, Management and Course, Legal Studies, Hotel
            Management, Humanities, and Education. Recognized for its virtues of
            quality, equality, inclusiveness, sustainability, and professional
            ethics, KRMU is synonymous to academic excellence and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutKRMU;
