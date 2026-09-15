import BootcampStats from "./common/BootcampStats";
import CareerAccelerationCTA from "./common/CareerAccelerationCTA";
import PlacementHighlights from "./common/PlacementHighlights";
import SkilledPartners from "./common/SkilledPartners";
import Trainers from "./common/Trainers";
import TrainersHeroSection from "./common/TrainersHeroSection";
import TrainingJourney from "./common/TrainingJourney";
import TrainingMatrix from "./common/TrainingMatrix";
import TrainingModules from "./common/TrainingModules";

export async function generateMetadata() {
  return {
    title: "KRMU Placement Trainers & Career Development Team",
    description:
      "Meet KRMU placement trainers who guide students with career preparation, skill development, interview training, and placement support for successful careers.",
    keywords:
      "KRMU placement trainers, KRMU placement training, KRMU career trainers, K.R. Mangalam University placement training, KRMU career development, KRMU student training",
    alternates: {
      canonical: "https://www.krmangalam.edu.in/placements/trainers",
    },
    robots: {
      index: true,
      follow: true,
    },
    // Open Graph
    openGraph: {
      title: "KRMU Placement Trainers & Career Development Team",

      description:
        "Meet KRMU placement trainers who guide students with career preparation, skill development, interview training, and placement support for successful careers.",

      url: "https://www.krmangalam.edu.in/placements/trainers",

      siteName: "K.R. Mangalam University",

      type: "website",

      locale: "en_IN",

      images: [
        {
          url: "https://www.krmangalam.edu.in/images/krmu-naac-logo.webp",
          width: 1200,
          height: 630,
          alt: "K.R. Mangalam University Recruiters",
        },
      ],
    },

    // Twitter / X
    twitter: {
      card: "summary_large_image",

      title: "KRMU Placement Trainers & Career Development Team",

      description:
        "Meet KRMU placement trainers who guide students with career preparation, skill development, interview training, and placement support for successful careers.",

      images: ["https://www.krmangalam.edu.in/images/krmu-naac-logo.webp"],
    },
  };
}

const page = () => {
  return (
    <main className="bg-[#fbf8f3] font-poppins">
      <TrainersHeroSection />
      <PlacementHighlights />
      <TrainingJourney />
      <TrainingModules />
      <TrainingMatrix />
      <BootcampStats />
      <Trainers />
      <SkilledPartners />
      <CareerAccelerationCTA />
    </main>
  );
};

export default page;
