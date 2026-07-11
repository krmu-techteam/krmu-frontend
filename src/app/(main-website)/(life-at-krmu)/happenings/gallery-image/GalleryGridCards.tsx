import { getAllImageUsingMeta } from "@/lib/api/image-gallery";
import GalleryCard from "./GalleryCard";

const GalleryGridCards = async () => {
  const galleryImages = await getAllImageUsingMeta();

  return (
    <>
      <section className="py-10 bg-[url(/gradient-1.webp)] bg-no-repeat bg-cover bg-center px-4">
        <div className="max-w-[1664px] mx-auto w-full grid-cols-1 md:grid-cols-2 grid lg:grid-cols-4 gap-10">
          {galleryImages &&
            galleryImages.map((item) => {
              return (
                <GalleryCard
                  key={item?.id}
                  title={item?.title}
                  // publishedAt={item?.publishedAt}
                  date_text={item?.published_date_text}
                  slug={item?.slug}
                  imageGallery={item?.gallery_images}
                />
              );
            })}
        </div>
      </section>
    </>
  );
};

export default GalleryGridCards;
