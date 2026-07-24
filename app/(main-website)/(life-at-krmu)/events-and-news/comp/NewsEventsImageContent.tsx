import { getWordImageById } from "@/lib/api/common";
import Image from "next/image";

type Props = {
  bgSlideImageIds: number[];
  content: string;
  slug: string;
};

const NewsEventsImageContent = async ({
  bgSlideImageIds,
  content,
  slug,
}: Props) => {
  const imageUrls = await Promise.all(
    (bgSlideImageIds || []).map((id) => getWordImageById(id)),
  );

  return (
    <section className="py-12 px-4">
      <div className={`max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row ${slug === 'k-r-mangalam-university-secures-global-sustainability-impact-rating-band-601-800-in-the-sustainability-impact-ratings-2026' && 'items-center gap-5'}`}>
        <div
          className={`${imageUrls?.length > 0 ? "w-full lg:w-1/2" : "w-full"}`}
        >
          <div
            className={`bg-[#051630] text-white p-5 text-sm ${slug === "k-r-mangalam-university-secures-global-sustainability-impact-rating-band-601-800-in-the-sustainability-impact-ratings-2026" && "newsEventsContent"}`}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        {slug ===
        "k-r-mangalam-university-secures-global-sustainability-impact-rating-band-601-800-in-the-sustainability-impact-ratings-2026" ? (
          <Image src="https://wp.krmangalam.edu.in/wp-content/uploads/2026/06/News-and-events-Page.png" width={800} height={600} alt="" />
        ) : (
          imageUrls?.length > 0 && (
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
          )
        )}
      </div>
    </section>
  );
};

export default NewsEventsImageContent;
