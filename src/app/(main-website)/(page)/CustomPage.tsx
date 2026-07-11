import { getCustomPageData } from "@/lib/constants/page";
import { notFound } from "next/navigation";

type Props = {
  slug: string;
};



const CustomPage = async ({ slug }: Props) => {
  const allCustomPages = await getCustomPageData(slug);

  const currentCustomPage = allCustomPages?.find((item) => item?.slug === slug);

  if (!currentCustomPage) return notFound();

  return (
    <>
      {currentCustomPage?.custom_page_css && (
        <style
          dangerouslySetInnerHTML={{
            __html: currentCustomPage?.custom_page_css,
          }}
        />
      )}

      <div
        dangerouslySetInnerHTML={{
          __html: currentCustomPage?.maincontent2 || "",
        }}
      />

      {currentCustomPage?.custom_page_js && (
        <script
          dangerouslySetInnerHTML={{
            __html: currentCustomPage?.custom_page_js,
          }}
        />
      )}
    </>
  );
};

export default CustomPage;
