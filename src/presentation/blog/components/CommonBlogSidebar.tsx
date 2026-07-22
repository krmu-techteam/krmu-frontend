import { getBlogService } from "@/features/blog";
import { CategoryPills } from "@/presentation/blog";

// ===============================
// 🎯 SHOW OR HIDE CATEGORIES HERE
// ===============================

// ✔ SHOW ONLY these categories (by slug)
const HIDE_CATEGORIES: string[] = [
  "general",
  "medical-and-allied-science",
  "school-of-management-and-commerce",
  "travel-and-tourism",
  "education",
  "uncategorized",
  // Add more slugs you want to hide...
];

const CommonBlogSidebar = async () => {
  const allCategories = await getBlogService().getAllBlogCategories();

  const filteredCategories = (allCategories || []).filter(
    (cat) => cat?.name && !HIDE_CATEGORIES.includes(cat?.slug.toLowerCase())
  );

  return (
    <aside className="w-full">
      <CategoryPills
        title="Categories"
        categories={filteredCategories.map((cat, idx) => ({
          id: cat.id || idx,
          name: cat.name,
          slug: cat.slug,
        }))}
      />
    </aside>
  );
};

export default CommonBlogSidebar;
