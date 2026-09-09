import { notFound } from "next/navigation";
import SwayamStaticPage from "@/src/presentation/static-pages/swayam";

// Set to true to make the page live
const isLive = false;

export const metadata = {
  title: "SWAYAM - K.R. Mangalam University",
  description:
    "SWAYAM (Study Webs of Active Learning for Young Aspiring Minds) is the Government of India's national online learning platform.",
};

const SwayamPage = () => {
  if (!isLive) {
    notFound();
  }

  return <SwayamStaticPage />;
};

export default SwayamPage;
