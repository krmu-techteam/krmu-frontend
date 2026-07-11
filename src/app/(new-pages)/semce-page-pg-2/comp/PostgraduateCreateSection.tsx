import POSTGraduateSection from "./POSTGraduateSection";

export default function PostgraduateCreateSection() {
  return (
    <section className="bg-[#f3f3f3] py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-6xl font-bold">
            See what our postgraduates create
          </h2>

          <p className="text-gray-600 mt-3 text-2xl">
            The MA programme is designed so that every semester adds to your
            portfolio and your research profile.
          </p>
        </div>

        {/* HORIZONTAL CARDS */}
      
      </div>
        <div className="max-w-[1400px] mx-auto w-full">
          <POSTGraduateSection />
        </div>

        {/* FOOT TEXT */}
        <p className="text-center text-gray-500 italic mt-8 text-xl">
          By the time you graduate, you are not just carrying a postgraduate
          degree — you are carrying work you can show to editors, hiring
          managers, collaborators and investors.
        </p>
    </section>
  );
}
