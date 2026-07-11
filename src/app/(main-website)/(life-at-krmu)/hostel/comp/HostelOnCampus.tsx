
import CommonSlide from "./CommonSlide";

const HostelOnCampus = () => {
  const HostelSlides = [
    {
      imgUrl: "/hostels/item-4.webp",
    },
    {
      imgUrl: "/hostels/item-5.webp",
    },
  ];
  return (
    <div className="sm:mt-5">
      <h4 className="text-3xl md:text-4xl leding-[2] font-semibold mb-5 sm:my-5">
        Prime On-Campus Location
      </h4>
      <p>
        The university hostel is conveniently located within the university
        campus, making it handy for students to attend classes, use campus
        facilities, and engage in campus activities.
      </p>
      <div className="mt-5">
        <CommonSlide data={HostelSlides} />
      </div>
    </div>
  );
};

export default HostelOnCampus;
