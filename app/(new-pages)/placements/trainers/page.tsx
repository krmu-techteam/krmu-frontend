import {
  createBreadcrumbProgSchema,
  createWebPageSchema,
} from "@/lib/api/common";
import BootcampStats from "./common/BootcampStats";
import CareerAccelerationCTA from "./common/CareerAccelerationCTA";
import PlacementHighlights from "./common/PlacementHighlights";
import SkilledPartners from "./common/SkilledPartners";
import Trainers from "./common/Trainers";
import TrainersHeroSection from "./common/TrainersHeroSection";
import TrainingJourney from "./common/TrainingJourney";
import TrainingMatrix from "./common/TrainingMatrix";
import TrainingModules from "./common/TrainingModules";
import Script from "next/script";
import { trainers } from "./constant";
import { createPersonGraphSchema } from "../constant";
import Divider from "../common/Divider";

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

const breadcrumbSchema = createBreadcrumbProgSchema([
  { name: "Home", url: "https://www.krmangalam.edu.in/" },
  {
    name: "Placement",
    url: "https://www.krmangalam.edu.in/placements/trainers",
  },
  {
    name: "KRMU Placement Trainers & Career Development Team",
    url: "https://www.krmangalam.edu.in/placements/trainers",
  },
]);

const webPageSchema = createWebPageSchema({
  name: "KRMU Placement Trainers & Career Development Team",
  url: "https://www.krmangalam.edu.in/placements/trainers",
  description:
    "Meet KRMU placement trainers who guide students with career preparation, skill development, interview training, and placement support for successful careers.",
  aboutName: "KRMU Placement Trainers & Career Development Team",
  aboutUrl: "https://www.krmangalam.edu.in/placements/trainers",
});
const personSchema = createPersonGraphSchema(
  trainers.map((trainer) => ({
    name: trainer.name,
    jobTitle: trainer.designation,
    image: `https://www.krmangalam.edu.in${trainer.image}`,

    worksFor: {
      name: "K.R. Mangalam University",
      url: "https://www.krmangalam.edu.in/",
      type: "CollegeOrUniversity",
    },
  })),
);

const page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: webPageSchema }}
      />
      <Script
        id="personSchema-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: personSchema }}
      />
      <main className="bg-[#fbf8f3] font-poppins">
        <TrainersHeroSection />
        <PlacementHighlights />
        <TrainingJourney />
        <div className="max-w-7xl mx-auto">
          <Divider />
        </div>
        <TrainingModules />
        <div className="max-w-7xl mx-auto">
          <Divider />
        </div>
        <TrainingMatrix />
        <div className="max-w-7xl mx-auto">
          <Divider />
        </div>
        <BootcampStats />
        <div className="max-w-7xl mx-auto">
          <Divider />
        </div>
        <Trainers />
        <div className="max-w-7xl mx-auto">
          <Divider />
        </div>
        <SkilledPartners />
        <CareerAccelerationCTA />
      </main>
    </>
  );
};

export default page;
