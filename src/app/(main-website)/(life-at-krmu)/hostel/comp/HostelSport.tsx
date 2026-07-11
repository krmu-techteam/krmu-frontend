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
        Students can play indoor games like Pool, Table Tennis, Badminton,
        Chess, Carrom Board and Foosball and outdoor games like Basketball,
        Football, Cricket, Volleyball, Pickleball and lawn Tennis. KRMU also has
        a gym for health fitness and exercise.
      </p>
      <div className="mt-5">
        <CommonSlide data={HostelSlides} />
      </div>
    </div>
  );
};

export default HostelSport;
