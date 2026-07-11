import Image from "next/image";

const ScholarshipCard = () => {
  return (
    <div>
      <div className="relative rounded-xl overflow-hidden flex flex-col">
        <Image
          src="/landingpage/common/image.png"
          width={300}
          height={500}
          alt=""
          className="object-cover w-full rounded-xl"
        />
      </div>
      <div className="text-white mt-4">
        <h3 className="text-xl font-semibold mb-1">Current B.Tech scholar</h3>
        <p className="text-sm opacity-80">
          discussing research journey and faculty support
        </p>
      </div>
    </div>
  );
};

export default ScholarshipCard;
