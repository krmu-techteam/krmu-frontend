import CommonSlide from "./CommonSlide";

const HostelWellFurnished = () => {
  const HostelSlides = [
    {
      imgUrl: "/hostels/item-1.webp",
    },
    {
      imgUrl: "/hostels/item-2.webp",
    },
    {
      imgUrl: "/hostels/item-3.webp",
    },
  ];

  return (
    <div className="sm:mt-5">
      <h4 className="text-3xl md:text-4xl leding-[2] font-semibold my-5">
        Well-Furnished Rooms
      </h4>
      <p>
        Each hostel room is typically designed to accommodate four students and
        is equipped with four single beds, desks, chairs, and adequate storage
        space, along with shared bathroom facilities.
      </p>
      <div className="mt-5">
        <CommonSlide data={HostelSlides} />
      </div>
    </div>
  );
};

export default HostelWellFurnished;
