import { getBlogService } from "@/features/blog";
import Link from "next/link";
import Image from "next/image";

const SingleBlogCategorySidebar = async () => {
  const allCategories = await getBlogService().getAllBlogCategories();

  const HIDE_CATEGORIES: string[] = ["uncategorized"];

  return (
    <aside className="w-full flex flex-col gap-6 font-poppins">
      {/* Widget 1: Scholarship Banner Image */}
      <div className="w-full relative rounded-[8px] overflow-hidden">
        <a
          href="https://admissions.krmangalam.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <Image
            src="/images/blog/aside/aside.jpg"
            alt="Why Wait For Success - Up to 100% Scholarships"
            width={400}
            height={900}
            className="w-full h-auto object-cover rounded-[8px]"
            priority
            unoptimized
          />
        </a>
      </div>

      {/* Widget 2: Pill-styled Categories Widget */}
      <div className=" border border-[#23425B] rounded-[8px] p-5 text-white font-poppins">
        <h4 className="text-[22px] font-medium text-white mb-5 tracking-tight font-sans">
          Categories
        </h4>

        <div className="flex flex-col items-start gap-3">
          {allCategories && allCategories.length > 0 ? (
            allCategories
              .filter(
                (cat) =>
                  cat?.name &&
                  !HIDE_CATEGORIES.includes(cat?.slug.toLowerCase()),
              )
              .map((cat, i) => (
                <Link
                  key={cat?.id || i}
                  href={`/blog/all-categories/${cat?.slug}`}
                  className="bg-[#001322] hover:bg-[#001322]/60 text-white text-[12px] font-normal px-5 py-2 rounded-full transition-colors inline-flex items-center"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: cat?.name || "",
                    }}
                  />
                </Link>
              ))
          ) : (
            <p className="text-white/60 text-xs">No categories available.</p>
          )}
        </div>
      </div>
    </aside>
  );
};

export default SingleBlogCategorySidebar;
