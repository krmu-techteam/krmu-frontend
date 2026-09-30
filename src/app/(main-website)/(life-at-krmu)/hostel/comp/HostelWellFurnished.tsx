import CommonSlide from "./CommonSlide";

const HostelWellFurnished = () => {
    const HostelSlides = [
        {
            imgUrl: "/images/hostel/rooms/room-1.jpg",
        },
        {
            imgUrl: "/images/hostel/rooms/room-2.jpg",
        },
    ];

    return (
        <div className="sm:mt-5">
            <h4 className="text-3xl md:text-4xl leding-[2] font-semibold my-5">
                Well Furnished Rooms
            </h4>
            <p>
                Each hostel set is typically designed to accommodate four
                students having four single beds, along with the desks, chairs,
                storage space and twin sharing amenity facilities.
            </p>
            <div className="mt-5">
                <CommonSlide data={HostelSlides} />
            </div>
        </div>
    );
};

export default HostelWellFurnished;
