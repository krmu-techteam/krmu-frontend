import Link from "next/link";
// import SingleBlogAuthorImage from "./SingleBlogAuthorImage";
import Image from "next/image";

type Props = {
  authorName: string;
  desg: string;
  imgId: number;
  authorSlug: string;
};

const SingleBlogHeroAuthor = ({
  authorName,
  desg,
  imgId,
  authorSlug,
}: Props) => {
  // return (
  //   <div className="single_blog_author_container">
  //     <div className="single_blog_author_image">
  //       <Image
  //         src="/blogs/blog-author.webp"
  //         width={50}
  //         height={50}
  //         alt=""
  //       />

  //       {/* {imgId && <SingleBlogAuthorImage imgId={imgId} />} */}
  //     </div>
  //     <div className="single_blog_author_info">
  //       <span className="author_name">
  //         <span>
  //           KRMU Team
  //         </span>
  //         {/* <Link href={`/author/${authorSlug}`} target="_blank" rel="noopener noreferrer">
  //           {authorName}
  //         </Link> */}
  //       </span>
  //       {/* <span className="author_designation">{desg}</span> */}
  //     </div>
  //   </div>
    
  // );
return (
  <div className="single_blog_author_container text-center">
    
    <div className="single_blog_author_image">
      <Image
        src="/blogs/blog-author.webp"
        width={50}
        height={50}
        alt="Author"
        className="author_img"
      />
    </div>

    <div className="single_blog_author_info">
     <span className="author_name text-black lg:text-white">
  KRMU Team
</span>

      {/* Optional */}
      {/* <span className="author_designation">
        Content Team
      </span> */}
    </div>

  </div>
);

};

export default SingleBlogHeroAuthor;
