import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    let slug: string | undefined;
    try {
      const body = await request.json();
      slug = body?.slug;
    } catch {
      // No body or invalid JSON
    }

    // Purge all cached fetches tagged with "blogs"
    revalidateTag("blogs", { expire: 0 });

    // Revalidate the blog listing page
    revalidatePath("/blog", "page");

    // Revalidate the specific blog post if slug is provided
    if (slug) {
      revalidatePath(`/blog/${slug}`, "page");
    }

    return NextResponse.json({
      revalidated: true,
      slug: slug || "all",
      now: Date.now(),
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 },
    );
  }
}
