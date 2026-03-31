import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";

type Props = {
  title: string;
};

const NewsEventsHero = ({ title }: Props) => {
  return (
    <section className="pt-[140px] pb-[10%] lg:py-[10%] bg-[url(/newseventsbg.webp)] bg-cover bg-no-repeat px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h1
          className="text-4xl lg:text-[64px] text-white font-semibold"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
      </div>
    </section>
  );
};

export default NewsEventsHero;
