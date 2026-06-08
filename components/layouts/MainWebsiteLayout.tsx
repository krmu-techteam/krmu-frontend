import HeaderWrapper from "./Header/HeaderWrapper";
import Footer from "./Footer/Footer";
import NoPaperFormProvider from "@/lib/constants/NoPaperFormProvider";
import FloatingActionMenu from "./Footer/FloatingActionMenu";

export default function MainWebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div id="main-header">
        <HeaderWrapper />
      </div>
      <NoPaperFormProvider />
      <div>
        {children}
       
      </div>
      <div id="main-footer">
        <FloatingActionMenu />
        <Footer />
      </div>
    </>
  );
}
