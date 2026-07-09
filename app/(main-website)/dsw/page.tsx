import Dean from "./components/Dean";
import HeroSection from "./components/HeroSection";

const page = () => {
  return (
    <>
      <HeroSection />
      <div className="p-13.5">
        <Dean />
      </div>
    </>
  );
};

export default page;
