export const HeroSection = () => {
  return (
    <section
      className="relative text-center pt-[180px] pb-[80px] px-4 overflow-hidden bg-cover bg-center mb-12"
      style={{
        backgroundImage:
          "url('https://www.krmangalam.edu.in/wp-content/uploads/2023/12/bannerbg.webp')",
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight font-poppins drop-shadow-md">
          NIRF Report
        </h1>
        <div className="w-[80px] h-[4px] bg-[#0060aa] mx-auto mt-6 rounded-full" />
      </div>
    </section>
  );
};
