import { NextResponse, type NextRequest } from "next/server";
import { getBlogService } from "@/features/blog";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const page = Number(searchParams.get("page")) || 1;
    const perPage = Number(searchParams.get("per_page")) || 12;
    const slug = searchParams.get("slug") || undefined;

    try {
        const data = await getBlogService().getAllBlogsByPerPageOrCategorySlug(
            perPage,
            page,
            slug
        );
        return NextResponse.json(data);
    } catch (error) {
        console.error("API /api/blogs error:", error);
        return NextResponse.json(
            { blogs: [], totalPages: 0, totalBlogs: 0 },
            { status: 500 }
        );
    }
}
