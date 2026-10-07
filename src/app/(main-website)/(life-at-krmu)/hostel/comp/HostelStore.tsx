import React from "react";
import CommonSlide from "./CommonSlide";

const HostelStore = () => {
    const HostelSlides = [
        {
            imgUrl: "/images/hostel/convenience-store/stores-1.jpg",
        },
        {
            imgUrl: "/images/hostel/convenience-store/stores-2.jpg",
        },
        {
            imgUrl: "/images/hostel/convenience-store/stores-3.jpg",
        },
    ];
    return (
        <div className="">
            <div className="w-full">
                <h4 className="text-3xl md:text-4xl leding-[2] font-semibold mb-5 sm:my-5">
                    Hostel Convenience Store
                </h4>
                <p>
                    The on-campus hostel store offers easy access to daily
                    essentials, snacks, beverages, and personal care items
                    ensuring students can meet their everyday needs with ease,
                    enhancing the comfort of campus living.
                </p>
            </div>
            <div className="w-full mt-5">
                <CommonSlide data={HostelSlides} />
            </div>
        </div>
    );
};

export default HostelStore;
