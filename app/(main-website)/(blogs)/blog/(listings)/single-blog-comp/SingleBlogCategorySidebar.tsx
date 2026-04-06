import { getAllBlogCategories } from "@/lib/api/blogs/single-blog";
import Link from "next/link";
import SidebarBlogForm from "./SidebarBlogForm";

const SingleBlogCategorySidebar = () => {
  // const allCategories = await getAllBlogCategories();

  // 👉 Add your hidden category names/slugs here
  // const HIDDEN_CATEGORIES = ["uncategorized", "events", "news"];
  // ✔ SHOW ONLY these categories (by slug)
  // const HIDE_CATEGORIES: string[] = [

    // "uncategorized",
    // // Add more slugs you want to show...
  // ];



  return (
  <>
  <p>Blog</p>
{/* <div className="singlepost_all_cat_container right_sidebar_singlepost_container sticky top-[100px]">
      <SidebarBlogForm />

      <h3 className="text-[19px] bg-[#2A60A3] font-bold text-center mb-3 text-[#ffffff] p-2">Blog Categories</h3>

      <div className="all_cat_container">
        <div className="all_cat__inner-container">
          {allCategories &&
            allCategories
              .filter(
                (cat) =>
                  cat?.name &&
                  !HIDE_CATEGORIES.includes(cat?.slug.toLowerCase())
              )
              .map((cat) => (
                <Link
                  href={`/blog/all-categories/${cat?.slug}`}
                  key={cat?.id}
                  className="singlepost_right_sidebar_card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="singlepost_right_sidebar_card_left">
                    <div className="singlepost_right_sidebar_dot"></div>
                    <span
                      className="singlepost_right_sidebar_text"
                      dangerouslySetInnerHTML={{
                        __html: cat?.name,
                      }}
                    />
                  </div>
                  <div className="singlepost_right_sidebar_arrow">→</div>
                </Link>
              ))}
        </div>
      </div>
    </div> */}
  </>
);
};

export default SingleBlogCategorySidebar;
