import SwayamStaticPage from "@/src/presentation/static-pages/swayam";
import NotFound from "../not-found";

const isLive = false;

export const metadata = {
  title: "SWAYAM - K.R. Mangalam University",
  description:
    "SWAYAM (Study Webs of Active Learning for Young Aspiring Minds) is the Government of India's national online learning platform.",
};

const SwayamPage = () => {
  if (!isLive) {
    NotFound();
  }

  return <SwayamStaticPage />;
};

export default SwayamPage;
