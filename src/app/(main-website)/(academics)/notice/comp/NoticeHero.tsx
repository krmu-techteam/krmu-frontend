import { STRAPI_URL } from "@/app/constant";

type Props = {
  title: string;
  bgimageUrl: string;
};

const NoticeHero = ({ title, bgimageUrl }: Props) => {
  return (
    <section
      className="pt-[140px] pb-[50px] lg:pt-[15%] lg:pb-[5%] bg-no-repeat bg-cover bg-center px-4"
      style={{
        background: `url(${STRAPI_URL}${bgimageUrl})`,
      }}
    >
      <div className="max-w-[1664px] mx-auto w-full">
        <h1 className="text-center text-white font-semibold text-2xl lg:text-[64px]">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default NoticeHero;
