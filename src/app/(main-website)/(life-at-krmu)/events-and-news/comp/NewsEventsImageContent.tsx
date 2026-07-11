import { getWordImageById } from "@/lib/api/common";
import Image from "next/image";

type Props = {
  bgSlideImageIds: number[];
  content: string;
};

const NewsEventsImageContent = async ({ bgSlideImageIds, content }: Props) => {
  const imageUrls = await Promise.all(
    (bgSlideImageIds || []).map((id) => getWordImageById(id)),
  );

  return (
    <section className="py-12 px-4">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row">
        <div className={`${imageUrls?.length > 0 ? 'w-full lg:w-1/2' : 'w-full'}`}>
          <div
            className="bg-[#051630] text-white p-5 text-sm"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        {imageUrls?.length > 0 && (
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5">
              {imageUrls.map((imgUrl, i) => (
                <Image
                  key={i}
                  src={imgUrl}
                  width={381}
                  height={305}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsEventsImageContent;
