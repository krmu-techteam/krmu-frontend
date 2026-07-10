import Dean from "./components/Dean";
import HeroSection from "./components/HeroSection";
import ShapingGlobal from "./components/ShapingGlobal";

const page = () => {
  return (
    <>
      <HeroSection />
      <div className="p-13.5 bg-[#f0f3f9]">
        <Dean />
        <ShapingGlobal />
      </div>
    </>
  );
};

export default page;
