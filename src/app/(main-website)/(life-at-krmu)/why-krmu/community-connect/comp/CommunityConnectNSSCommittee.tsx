import Image from "next/image";

const CommunityConnectNSSCommittee = () => {
  return (
    <section className="pt-[6%] px-4 pb-[9%] bg-[url(/bg-gradient.webp)]">
      <div className="max-w-[1664px] mx-auto w-full text-white ">
        <h2 className="text-3xl md:text-5xl mb-5 font-bold">NSS Committee</h2>
        <div className="flex pt-10">
          <div className="w-1/2">
            <h4 className="text-2xl">
              <strong>NSS Committee:</strong>
            </h4>
            <br />
            <h5 className="mb-2.5">Dr. Neeraj Kumari</h5>
            <h6>NSS Programme Coordinator</h6>
            <h4 className="my-2.5">Mob: 9718029841</h4>
            <h4>Email: Neeraj.kumari@krmangalam.edu.in</h4>
          </div>
          <div className="w-1/2">
            <Image
              src="/community-connect/nss-committee.png"
              width={768}
              height={391}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityConnectNSSCommittee;
