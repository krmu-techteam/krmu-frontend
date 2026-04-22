import CommonSlide from "./CommonSlide";

const HostelSecurity = () => {
  const HostelSlides = [
    {
      imgUrl: "/hostels/item-12.webp",
    },
    {
      imgUrl: "/hostels/item-13.webp",
    },
  ];
  return (
    <div className="sm:mt-5">
      <h4 className="text-3xl md:text-4xl leding-[2] font-semibold mb-5 sm:my-5">
        24×7 Hostel Security
      </h4>
      <p>
        Considering the large number of students, security measures like
        biometric, surveillance cameras and a large team of 24 x 7 security
        personnel have been put in place for the security of both boys and
        girls, to ensure the safety and well-being of all the hostel residents.
      </p>
      <div className="mt-5">
        <CommonSlide data={HostelSlides} />
      </div>
    </div>
  );
};

export default HostelSecurity;
