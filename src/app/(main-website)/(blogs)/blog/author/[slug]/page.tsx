import { getBlogService } from "@/features/blog";
import AuthorHero from "../comp/AuthorHero";
import AuthorPosts from "../comp/AuthorPosts";

type Props = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: Props) => {
  const { slug } = await params;

  const authInfo = await getBlogService().getAuthInfoBySlug(slug);

  if (!authInfo || authInfo.length === 0 || slug !== authInfo[0]?.slug) {
    return null;
  }

  const authData = authInfo[0];
  const AuthACF = authData?.acf;
  const AuthorImgId = AuthACF?.profile_image;

  const AuthImgUrl = await getBlogService().getBlogImageById(AuthorImgId);
  const AuthId = authData?.id;
  const AuthName = AuthACF?.profile_name || authData?.name || "";
  const AuthDesg = AuthACF?.profile_position || "";
  const AuthAbout = AuthACF?.profile_about || "";

  return (
    <main className="min-h-screen pt-[110px] md:pt-[140px] pb-16">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8">
        {/* Author Hero Card */}
        <div className="mb-10">
          <AuthorHero
            imgUrl={AuthImgUrl || ""}
            AuthName={AuthName}
            AuthDesg={AuthDesg}
            AuthAbout={AuthAbout}
          />
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 mb-8" />

        {/* Posts Grid with infinite scroll */}
        <AuthorPosts authId={AuthId} />
      </div>
    </main>
  );
};

export default page;
