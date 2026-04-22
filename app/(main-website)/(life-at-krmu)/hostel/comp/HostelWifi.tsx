import Image from "next/image";

const HostelWifi = () => {
  return (
    <div className="sm:mt-5">
      <h3 className="text-3xl md:text-4xl leding-[2] font-semibold mb-5 sm:my-5">
        Seamless Connectivity with Free Wi-fi
      </h3>
      <p>
        Free high-speed Wi-Fi is provided in the hostels to keep our students
        always connected to the internet for their academic, professional, and
        personal requirements. This uninterrupted internet access ensures that
        our hostelers get to connect with their loved ones at any time.
      </p>

      <div className="mt-5">
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
