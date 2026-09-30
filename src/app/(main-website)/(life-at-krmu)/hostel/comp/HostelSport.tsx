import Image from "next/image";
import CommonSlide from "./CommonSlide";

const HostelSport = () => {
    const HostelSlides = [
        {
            imgUrl: "/images/hostel/sports-recreation-facilities/sports-1.jpg",
        },
        {
            imgUrl: "/images/hostel/sports-recreation-facilities/sports-2.jpg",
        },
    ];
    return (
        <div>
            <h4 className="text-3xl md:text-4xl leding-[2] font-semibold mb-5 sm:my-5">
                Sports & Recreation Facilities
            </h4>
            <p>
                Students can play indoor games like Pool, Table Tennis,
                Badminton, Chess, Carrom Board and Foosball and outdoor games
                like Basketball, Football, Cricket, Volleyball, Pickleball and
                lawn Tennis. KRMU also has a gym for health fitness and
                exercise.
            </p>
            <div className="mt-5">
                <CommonSlide data={HostelSlides} />
            </div>
        </div>
    );
};

export default HostelSport;
