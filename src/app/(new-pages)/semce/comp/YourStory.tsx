import Link from "next/link";

const YourStory = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[800px] mx-auto w-full text-center">
        <h4 className="text-5xl mb-10">
          Your <span className="text-7xl italic instrument-serif">Story</span> starts here
        </h4>
        <p className="text-xl italic">
          Whether you dream of being on camera, behind the camera, or building
          the next viral brand SEMCE is where you start creating for the real
          world.
        </p>
        <Link href="#" className="text-white bg-[#CA1B1F] px-6 py-3 rounded-[10px] font-semibold max-w-[240px] w-full text-xl mx-auto inline-block mt-10">Apply Now</Link>
      </div>
    </section>
  );
};

export default YourStory;
