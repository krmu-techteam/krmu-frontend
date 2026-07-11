import Image from "next/image";

const SeamlessConnectivity = () => {
  return (
    <section className="bg-[#252525]">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-[60px]">
        <div className="lg:w-1/2 text-white lg:pl-[100px] p-4 lg:py-0 lg:pr-0">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.3] mb-5">
            Seamless Connectivity with Free Wireless Fidelity
          </h3>
          <p>
            Free high-speed Wi-Fi is provided in the hostels to keep our
            students always connected to the internet for their academic,
            professional, and personal requirements. This uninterrupted internet
            access ensures that our hostelers get to connect with their loved
            ones at any time.
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/campus-life/seamless.png"
            width={860}
            height={308}
            alt=""
            className="h-full sm:h-[308px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SeamlessConnectivity;
