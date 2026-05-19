import Image from "next/image";
import { Linkedin } from "lucide-react";

const experts = [
  {
    name: "Kenneth Macknight",
    role: "BA ( JMC ) 3rd year, 6th Semester",
    engagement: "Nature of Engagement-Start-up",
    company: "ElevatEd - Co-Founder",
    image: "/new-Programmes-Hero/Kenneth Macknight.png",
    linkedin: "#",
  },
  {
    name: "Manukriti Sharma",
    role: "BA( JMC ) 3rd year, 6th Sem",
    engagement: "Nature of Engagement-Start-up",
    company: "Adpulse media - Founder",
    image: "/new-Programmes-Hero/Manukriti Sharma.png",
    linkedin: "#",
  },
  {
    name: "Amrata Choudhary",
    role: "BA(JMC) 2nd semester",
    engagement: "Social Media Manager",
    company: "Recur Club- Headquarters Gurgaon",
    image: "/new-Programmes-Hero/Amrata Choudhary.png",
    linkedin: "#",
  },
  {
    name: "Jai chawla",
    role: "BA ( JMC ) 2rd year, 4th Semester",
    engagement: "Digital creator",
    company: "Chawla Chronicles-Founder",
    image: "/new-Programmes-Hero/Jai chawla.png",
    linkedin: "#",
  },
  {
    name: "Trilok Kumar Singh",
    role: "Ph.D. Scholar",
    engagement: "Entrepreneur (3 web-portals & 1 journal)",
    company: "Youth Darpan-Founder and CEO",
    image: "/new-Programmes-Hero/Trilok Kumar Singh.jpg",
    linkedin: "#",
  },
  {
    name: "Rishika Gupta",
    role: "MA(JMC) 2nd semester, 1st year",
    engagement: "Digital Creator",
    company: "Freelancer",
    image: "/new-Programmes-Hero/Rishika Gupta.jpg",
    linkedin: "#",
  },
  {
    name: "Kunal Gupta",
    role: "MA(JMC) 2nd semester, 1st year",
    engagement: "Digital Creator & Podcaster",
    company: "Freelancer",
    image: "/new-Programmes-Hero/Kunal Gupta.jpg",
    linkedin: "#",
  },
  {
    name: "Shubham Banthia",
    role: "BA (Hons) Journalism and Mass Communication, 2nd Semester",
    engagement: "Digital creator",
    company: "Content Writer for Scribbling Spark",
    image: "/new-Programmes-Hero/Shubham Banthia.png",
    linkedin: "#",
  },
];

export default function ExpertsSection() {
  return (
    <section className="w-full bg-[#001B44] py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-[#FFFFFF] font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-medium">
            Real Experts. Real Experience.
          </h2>
          <p className="mt-3 text-[#FFFFFF] text-sm sm:text-base md:text-lg leading-7">
            Beyond Theory: Learn from Real-World Practitioners
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-14">
          {experts.map((expert, index) => (
            <div key={index} className="text-center">
              <div className="relative rounded-xl overflow-hidden group">
                <a
                  href={expert.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 bg-[#0A66C2] p-2 rounded-lg hover:scale-110 transition flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12"
                >
                  <Image
                    src="/new-Programmes-Hero/linkedin.png"
                    alt="LinkedIn"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </a>
                <div className="relative h-[360px] sm:h-[420px] w-full">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#001B44] rounded-lg p-2">
                  <h3 className="text-[#FFFFFF] text-base sm:text-lg md:text-xl font-normal leading-snug">
                    {expert.name}
                  </h3>
                </div>
              </div>
              <div className="mt-3 flex flex-col gap-1 px-1">
                <p className="text-[#E2E8F0] text-xs sm:text-[13px] font-normal leading-snug">
                  {expert.role}
                </p>
                <p className="text-[#94A3B8] tracking-wide text-[8px] sm:text-[13px] font-medium leading-snug mt-1 uppercase">
                  {expert.engagement}
                </p>
                <p className="text-[#94A3B8] text-xs sm:text-sm font-medium leading-snug">
                  {expert.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
