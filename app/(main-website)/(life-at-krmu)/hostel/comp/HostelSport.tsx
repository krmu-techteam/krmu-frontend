import Image from "next/image";
import CommonSlide from "./CommonSlide";

const HostelSport = () => {
  const HostelSlides = [
    {
      imgUrl: "/hostels/item-6.webp",
    },
    {
      imgUrl: "/hostels/item-7.webp",
    },
    {
      imgUrl: "/hostels/item-8.webp",
    },
    {
      imgUrl: "/hostels/item-9.webp",
    },
    {
      imgUrl: "/hostels/item-10.webp",
    },
    {
      imgUrl: "/hostels/item-11.webp",
    },
  ];
  return (
    <div>
      <h4 className="text-3xl md:text-4xl leding-[2] font-semibold mb-5 sm:my-5">
        Sports & Recreation Facilities
      </h4>
      <p>
        Students can enjoy indoor games such as pool, table tennis, badminton,
        chess, carrom, and foosball, as well as outdoor sports such as
        basketball, football, cricket, volleyball, pickleball, and lawn tennis.
        KRMU also has a gym that supports students’ health, fitness, and
        exercise needs.
      </p>
      <div className="mt-5">
        <CommonSlide data={HostelSlides} />
      </div>
    </div>
  );
};

export default HostelSport;
