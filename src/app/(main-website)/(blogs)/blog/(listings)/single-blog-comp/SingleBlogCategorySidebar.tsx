import { getAllBlogCategories } from "@/lib/api/blogs/single-blog";
import SidebarBlogForm from "./SidebarBlogForm";
import { CategoryPills } from "@/presentation/blog";

const SingleBlogCategorySidebar = async () => {
  const allCategories = await getAllBlogCategories();

  const HIDE_CATEGORIES: string[] = ["uncategorized"];

  const filteredCategories = (allCategories || []).filter(
    (cat) => cat?.name && !HIDE_CATEGORIES.includes(cat?.slug.toLowerCase())
  );

  return (
    <div className="sticky top-[100px] flex flex-col gap-6">
      {/* Sidebar Lead Form */}
      <SidebarBlogForm />

      {/* Blog Categories Section */}
      <CategoryPills
        title="Categories"
        categories={filteredCategories.map((cat, idx) => ({
          id: cat.id || idx,
          name: cat.name,
          slug: cat.slug,
        }))}
      />
    </div>
  );
};

export default SingleBlogCategorySidebar;
