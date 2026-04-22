import Image from "next/image";

const HostelWifi = () => {
  return (
    <div className="gap-10 text-center md:text-left">
         <div className="">
        <h3 className="text-3xl md:text-4xl font-semibold my-5 sm:mb-5">
          Seamless Connectivity with Free Wireless Fidelity
        </h3>
        <p>
          Free high-speed Wi-Fi is provided in the hostels to keep our students
          always connected to the internet for their academic, professional, and
          personal requirements. This uninterrupted internet access ensures that
          our hostelers get to connect with their loved ones at any time.
        </p>
      </div>
      <div className="">
        <Image
          src="/hostels/item-14.webp"
          width={768}
          height={407}
          alt=""
          className="w-full"
        />
      </div>
   
    </div>
  );
};

export default HostelWifi;
