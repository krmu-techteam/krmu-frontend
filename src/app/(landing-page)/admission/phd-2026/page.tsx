import { Metadata } from "next";
import { phd2026Id } from "../constant/lpnpf";
import PhdAwardsAchievements from "./commonComponent/PhdAwardsAchievements";
import PhdCounter from "./commonComponent/PhdCounter";
import PhdGlobal from "./commonComponent/PhdGlobal";
import PhdHeroSection from "./commonComponent/PhdHeroSection";
import PhdImportantNotification from "./commonComponent/PhdImportantNotification";
import PhdProgrammeOffered from "./commonComponent/PhdProgrammeOffered";
import PhdStudentTestimonials from "./commonComponent/PhdStudentTestimonials";
import PhdSuperComputer from "./commonComponent/PhdSuperComputer";
import PhdWelcomeUniversity from "./commonComponent/PhdWelcomeUniversity";
import PhdWhatsHappening from "./commonComponent/PhdWhatsHappening";
import PhdWhyphd from "./commonComponent/PhdWhyphd";
import { SeoData } from "./seo";
import StickyMobileBar from "../commonComponent/StickyMobileBar";


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: SeoData.title,
    description: SeoData.description,

    openGraph: {
      title: SeoData.title,
      description: SeoData.description,
      images: [
        {
          url: SeoData.shareImage,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: SeoData.title,
      description: SeoData.description,
      images: [SeoData.shareImage],
    },
  };
}

const page = async () => {
  const phdFormId = phd2026Id;

  return (
    <>
      <PhdHeroSection formId={phdFormId} />
      <PhdCounter />
      <PhdImportantNotification />
      <PhdProgrammeOffered />
      <PhdWhyphd />
      <PhdSuperComputer />
      <PhdWelcomeUniversity />
      <PhdAwardsAchievements />
      <PhdWhatsHappening />
      <PhdGlobal />
      <PhdStudentTestimonials />
      <StickyMobileBar phoneNumber="+919311411717"/>
    </>
  );
};

export default page;
