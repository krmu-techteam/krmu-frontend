import Image from "next/image";
import SingleBlogHeroAuthor from "./SingleBlogHeroAuthor";
import SingleBlogDate from "./SingleBlogDate";
import { Facebook, Youtube, Twitter } from "lucide-react";
// import { STRAPI_URL } from "@/app/constant";

type SingleBlogProps = {
  title: string;
  imgUrl: string;
  authorName: string;
  date: string;
  authorDesignation: string;
  imgId: number;
  authorSlug: string;
};

const SingleBlogHero = ({
  title,
  imgUrl,
  authorName,
  date,
  authorDesignation,
  imgId,
  authorSlug,
}: SingleBlogProps) => {
  //   if (imgUrl) {
  //   imgUrl = imgUrl.replace("/blog/wp-content", "/wp-content");
  // }
  //   if (imgUrl) {
  //   imgUrl = imgUrl.replace("wp.krmangalam.edu.in", "krmangalam.edu.in");
  // }

  const normalizedImgUrl = imgUrl
    ?.replace("/blog/wp-content", "/wp-content")
    ?.replace("wp.krmangalam.edu.in", "www.krmangalam.edu.in");

  return (

    <>


  <section
  className="lg:block hidden pt-[106px] pb-10 px-4 sm:px-10"
  style={{
    background: "#111d32",
  }}
>
  <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-start gap-[30px] lg:gap-[50px] pt-[30px] lg:pt-[50px]">

    {/* IMAGE FIRST ON MOBILE */}
    <div className="w-full lg:w-1/2 order-1 lg:order-2">
      {normalizedImgUrl && (
        <Image
          src={normalizedImgUrl}
          width={768}
          height={432}
          alt={title || "Blog Hero Image"}
          className="rounded-xl w-full object-cover"
          priority
        />
      )}
    </div>

    {/* TEXT CONTENT */}
    <div className="w-full lg:w-1/2 order-2 lg:order-1">

      {/* Title */}
      <h1
        dangerouslySetInnerHTML={{ __html: title }}
        className="text-[26px] md:text-[42px] 2xl:text-[54px] mb-6 text-white leading-[1.25] font-semibold"
      />

      {/* Author */}
      <SingleBlogHeroAuthor
        authorName={authorName}
        authorSlug={authorSlug}
        desg={authorDesignation}
        imgId={imgId}
      />

      {/* Date */}
      <div className="py-[6px]">
        <SingleBlogDate date={date} />
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4 mt-3">
        <a href="https://www.facebook.com/krmuniv/" className="text-white hover:text-blue-500 transition">
          <Facebook size={22} />
        </a>

        <a href="https://www.youtube.com/channel/UCrlCJyhEISXJU1SGYFcFmjA" className="text-white hover:text-red-500 transition">
          <Youtube size={22} />
        </a>

        {/* <a href="" className="text-white hover:text-gray-300 transition">
          <Twitter size={22} />
        </a> */}
      </div>

    </div>
  </div>
</section>


{/* MOBILE HERO */}
<section className="lg:hidden pt-[56px] bg-white">

  {/* Dark Image Area */}
  <div className="bg-[#111d32] px-4 pt-6 pb-4">

    {normalizedImgUrl && (
      <Image
        src={normalizedImgUrl}
        width={768}
        height={432}
        alt="Single Blog Title"
        className="rounded-xl w-full object-cover"
      />
    )}

    {/* Breadcrumb */}
    {/* <div className="flex items-center gap-2 text-[#9FB3C8] text-[14px] mt-4">
      <span>🏠</span>
      <span>›</span>
      <span className="text-[#4da3ff]">Blog</span>
      <span>›</span>
      <span className="truncate">Scope of Agriculture Degree</span>
    </div> */}

  </div>


  {/* White Content Area */}
  <div className="px-4 pt-5 pb-6">

    {/* Title */}
    <div
      dangerouslySetInnerHTML={{ __html: title }}
      className="text-[26px] font-semibold leading-[1.3] text-[#1f5fa8] mb-4"
    />

    {/* Author Row */}
    <div className="flex items-center justify-between border-b pb-3">

      <SingleBlogHeroAuthor
        authorName={authorName}
        authorSlug={authorSlug}
        desg={authorDesignation}
        imgId={imgId}
      />

      <div className="flex items-center gap-4">
        <Facebook size={20} className="text-[#1f2937]" />
        <Youtube size={20} className="text-[#1f2937]" />
        <Twitter size={20} className="text-[#1f2937]" />
      </div>

    </div>

    {/* Date */}
    <div className="pt-3">
      <SingleBlogDate date={date} />
    </div>

  </div>

</section>

</>

  );
};

export default SingleBlogHero;
