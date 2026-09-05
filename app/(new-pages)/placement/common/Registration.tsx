import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Registration = () => {
  return (
    <section>
      <div className="container mx-auto max-w-[1287px] border-b border-[#ccc] px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-16 xl:py-20">
        <h2
          className={`${newsreader.className} mb-5 text-4xl font-medium leading-[1.15] sm:text-5xl md:text-[48px] lg:text-6xl lg:leading-[70px]`}
        >
          Registration details
        </h2>
      </div>
    </section>
  );
};

export default Registration;
