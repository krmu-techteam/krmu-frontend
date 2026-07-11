import { STRAPI_URL } from "@/app/constant";

type Props = {
  title: string;
  desc: string;
  bgImgURL: string;
};

const IndustryHero = ({ title, desc, bgImgURL }: Props) => {
  return (
    <section className="pt-[140px] pb-10 md:pt-[15%] md:pb-[10%] px-4" style={{
      background: `url(${STRAPI_URL}${bgImgURL})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="text-white mx-[1.92%] my-10">
          <h1 className="text-2xl md:text-[64px] font-semibold mb-5 md:mb-0">
            {title}
          </h1>
          <p>{desc}</p>
        </div>
      </div>
    </section>
  );
};

export default IndustryHero;
