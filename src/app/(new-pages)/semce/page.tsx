import Stats from "./comp/Stats";
import FutureReady from "./comp/FutureReady";
import LearnByCreating from "./comp/LearnByCreating";
import NewsletterSection from "./comp/NewsletterSection";
import EventsExperience from "./comp/EventsExperienceSection";
import ExploreProgrammes from "./comp/ExploreProgrammes";
import LifeAtSEMCE from "./comp/LifeAtSEMCE";
import YourStory from "./comp/YourStory";
import SEMCETestimonials from "./comp/SEMCETestimonials";
import Teachyou from "./comp/Teachyou";
import MacLaptop from "./comp/MacLaptop";
import BiggestBrand from "./comp/BiggestBrand";
import SEMCESlideSection from "./comp/SEMCESlideSection";
import ApplicationProcess from "./comp/ApplicationProcess";
import HeroSection from "./comp/HeroSection";
import SEMCEConversationSection from "./comp/SEMCEConversationSection";
import SEMCEVideoSection from "./comp/SEMCEVideoSection";

const page = () => {
  return (
    <>
      <HeroSection />
      <main className="semce_main_container">
        <Stats />
        <FutureReady />
        <MacLaptop />
        <BiggestBrand />
        <ExploreProgrammes />
        <LearnByCreating />
        {/* <NewsletterSection /> */}

        <LifeAtSEMCE />
        {/* <SEMCESlideSection /> */}
        <Teachyou />
        <SEMCETestimonials />
        {/* <SEMCEConversationSection /> */}
        <SEMCEVideoSection
          thumbnail="/semce-thumbnail.jpeg"
          videoUrl="https://www.youtube.com/watch?v=8IFKA22GHmg&t=2s"
          title="SEMCE Conversations"
        />
        <EventsExperience />
        <ApplicationProcess />
        <YourStory />
      </main>
    </>
  );
};

export default page;
