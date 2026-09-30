import React from "react";
import HostelFacilityCardSlide from "./HostelFacilityCardSlide";

const HostelFacilities = () => {
    const facilityData = [
        {
            id: "facilities",
            title: "Hostel Convenience Store",
            description:
                "The on-campus hostel store offers easy access to daily essentials, snacks, beverages, and personal care items ensuring students can meet their everyday needs with ease, enhancing the comfort of campus living.",
            slides: [
                {
                    imgUrl: "/images/hostel/convenience-store/Convenience_Cafe.jpg",
                },
                {
                    imgUrl: "/images/hostel/convenience-store/Convenience_Cafe_04.jpg",
                },
            ],
        },
        {
            id: "sports",
            title: "Sports & Recreation Facilities",
            description:
                "Students can play indoor games like Pool, Table Tennis, Badminton, Chess, Carrom Board and Foosball and outdoor games like Basketball, Football, Cricket, Volleyball, Pickleball and lawn Tennis. KRMU also has a gym for health fitness and exercise.",
            slides: [
                {
                    imgUrl: "/images/hostel/sports-recreation-facilities/sports-1.jpg",
                },
                {
                    imgUrl: "/images/hostel/sports-recreation-facilities/sports-2.jpg",
                },
            ],
        },
        {
            id: "rooms",
            title: "Well Furnished Rooms",
            description:
                "Each hostel set is typically designed to accommodate four students having four single beds, along with the desks, chairs, storage space and twin sharing amenity facilities.",
            slides: [
                { imgUrl: "/images/hostel/rooms/room-1.jpg" },
                { imgUrl: "/images/hostel/rooms/room-2.jpg" },
            ],
        },
        {
            id: "oncampus",
            title: "Prime On-Campus Location",
            description:
                "The university hostel is conveniently located within the university campus, making it handy for students to attend classes, use campus facilities, and engage in campus activities.",
            slides: [
                { imgUrl: "/images/hostel/campus/campus-1.jpg" },
                { imgUrl: "/images/hostel/campus/campus-2.jpg" },
            ],
        },
        {
            id: "security",
            title: "24×7 Hostel Security",
            description:
                "Considering the large number of students, security measures like biometric, surveillance cameras and a large team of 24 x 7 security personnel have been put in place for the security of both boys and girls, to ensure the safety and well-being of all the hostel residents.",
            slides: [
                { imgUrl: "/hostels/item-12.webp" },
                { imgUrl: "/hostels/item-13.webp" },
            ],
        },
        {
            id: "wifi",
            title: "Seamless Connectivity with Free Wi-Fi",
            description:
                "Free high-speed Wi-Fi is provided in the hostels to keep our students always connected to the internet for their academic, professional, and personal requirements. This uninterrupted internet access ensures that our hostelers get to connect with their loved ones at any time.",
            slides: [
                { imgUrl: "/images/hostel/study-wifi/wifi-1.jpg" },
                { imgUrl: "/images/hostel/study-wifi/wifi-2.png" },
            ],
        },
    ];

    return (
        <section className="py-6 px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-[1440px] mx-auto mb-10 sm:mb-14">
                <p className="font-poppins text-lg sm:text-xl md:text-[22px] lg:text-[40px] xl:text-[54px] text-white/40 font-bold mb-3 leading-snug">
                    The university hostel would likely be a relatively large and
                    comprehensive residential facility designed to accommodate
                    many students.
                </p>
                <h3 className="font-poppins text-xl sm:text-2xl md:text-[28px] lg:text-[40px] xl:text-[54px] text-white font-bold tracking-tight leading-snug">
                    Some details of the hostel are mentioned below:
                </h3>
            </div>
            <div className="max-w-[1200px] mx-auto w-full">
                {/* Centered Heading & Intro Text (matching Figma spec) */}

                {/* Single-Column Full-Width List of Figma Spec Hostel Feature Cards */}
                <div className="grid grid-cols-1 gap-12 sm:gap-16">
                    {facilityData.map((item) => (
                        <div key={item.id} className="relative">
                            {item.id === "facilities" && (
                                <span
                                    id="store"
                                    className="absolute -top-28 sm:-top-36 pointer-events-none"
                                />
                            )}
                            <HostelFacilityCardSlide
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                slides={item.slides}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HostelFacilities;
