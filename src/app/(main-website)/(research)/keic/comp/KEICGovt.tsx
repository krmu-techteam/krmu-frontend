import Image from "next/image";

const KEICGovt = () => {
  return (
    <section className="py-[50px] px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-3xl md:text-5xl font-semibold leading-[1.5]">
          Government Ministries Associated with KEIC
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 py-5">
          <Image
            src="/keic/keiclogos/dst.png"
            width={214}
            height={214}
            alt="DST"
            className="w-full"
          />
          <Image
            src="/keic/keiclogos/icssr.webp"
            width={214}
            height={214}
            alt="ICSSR"
            className="w-full"
          />
          <Image
            src="/keic/keiclogos/msme.png"
            width={214}
            height={214}
            alt="MSME"
            className="w-full"
          />
          <Image
            src="/keic/keiclogos/meic.webp"
            width={214}
            height={214}
            alt="MEIC"
            className="w-full"
          />
          <Image
            src="/keic/keiclogos/iic.webp"
            width={214}
            height={214}
            alt="IIC"
            className="w-full"
          />
          <Image
            src="/keic/keiclogos/sidbi.webp"
            width={214}
            height={214}
            alt="SIDBI"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default KEICGovt;
