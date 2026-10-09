import { getBlogService } from "@/features/blog";
import Link from "next/link";
import Image from "next/image";

const SingleBlogCategorySidebar = async () => {
    const allCategories = await getBlogService().getAllBlogCategories();

    const HIDE_CATEGORIES: string[] = ["uncategorized"];

    return (
        <aside className="w-full flex flex-col gap-6 font-poppins h-full">
            {/* Widget 1: Scholarship Banner Image */}
            <div className="w-full relative rounded-[8px] overflow-hidden">
                <a
                    href="https://admissions.krmangalam.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                >
                    <Image
                        src="/images/blog/aside/banner.jpg"
                        alt="Why Wait For Success - Up to 100% Scholarships"
                        width={400}
                        height={1400}
                        className="w-full h-auto rounded-[8px]"
                        priority
                    />
                </a>
            </div>

            {/* Widget 2: Sticky Pill-styled Categories Widget */}
            <div className="border border-[#23425B] rounded-[8px] p-4 sm:p-4.5 text-white font-poppins lg:sticky lg:top-24">
                <h3 className="text-[19px] sm:text-[20px] font-medium text-white mb-3.5 tracking-tight font-sans">
                    Categories
                </h3>

                <div className="flex flex-wrap gap-2">
                    {allCategories && allCategories.length > 0 ? (
                        allCategories
                            .filter(
                                (cat) =>
                                    cat?.name &&
                                    !HIDE_CATEGORIES.includes(
                                        cat?.slug.toLowerCase()
                                    )
                            )
                            .map((cat, i) => (
                                <Link
                                    key={cat?.id || i}
                                    href={`/blog/all-categories/${cat?.slug}`}
                                    className="bg-[#001322] hover:bg-[#001322]/80 hover:text-[#E7C268] border border-white/5 hover:border-[#E7C268]/40 text-white text-[12px] sm:text-[12.5px] font-normal px-3.5 py-1 rounded-full transition-colors inline-flex items-center leading-normal max-w-full text-left"
                                >
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: cat?.name || "",
                                        }}
                                        className="break-words"
                                    />
                                </Link>
                            ))
                    ) : (
                        <p className="text-white/60 text-xs">
                            No categories available.
                        </p>
                    )}
                </div>
            </div>
        </aside>
    );
};

export default SingleBlogCategorySidebar;
