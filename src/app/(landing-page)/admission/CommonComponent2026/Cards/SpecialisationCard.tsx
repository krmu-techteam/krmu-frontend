import Image from "next/image";

import { SpecialisationCardItem } from "../../law-2026/contentype";

type Props = {
  data: SpecialisationCardItem;
};

const SpecialisationCard = ({ data }: Props) => {
  return (
    <div
      className="md:p-5 rounded-2xl bg-white h-full"
      style={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      {/* Image */}
      <div className="mb-5">
        <Image
          src={data.imgUrl}
          width={400}
          height={250}
          alt=""
          className="w-full rounded-2xl h-[331px] object-cover"
        />
      </div>

      {/* Content */}
      <div>
        <h3
          className="text-2xl mb-2.5"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />

        <p className="text-xs text-[#7f7f7f]">{data.desc}</p>

        {/* Extra Infos */}
        <div className="flex flex-col gap-4 my-10">
          {data.extraInfos.map((info, index) => (
            <div key={index} className="flex gap-2.5 items-start">
              <div className="w-[20%] sm:w-[10%]">
                <div className="border rounded-full flex justify-center items-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] ">
                  <Image
                    src={info.iconUrl}
                    alt={info.title}
                    width={20}
                    height={25}
                  />
                </div>
              </div>
              <div className="w-[80%] sm:w-[90%]">
                <h5>{info.title}</h5>
                <p
                  className="text-sm text-[#7f7f7f] break-word-custom"
                  dangerouslySetInnerHTML={{ __html: info.desc }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <Link
          href="#"
          className="bg-[#0060aa] p-5 rounded-full text-white flex w-fit items-center gap-5"
        >
          Explore Programme <MoveUpRight color="#fff" />
        </Link> */}
      </div>
    </div>
  );
};

export default SpecialisationCard;
