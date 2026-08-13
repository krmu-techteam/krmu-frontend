import HeaderWrapper from "./Header/HeaderWrapper";
import Footer from "./Footer/Footer";
import NoPaperFormProvider from "@/lib/constants/NoPaperFormProvider";
// import FloatingActionMenu from "./Footer/FloatingActionMenu";

export default function MainWebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-full overflow-x-clip relative">
      <div id="main-header">
        <HeaderWrapper />
      </div>
      <NoPaperFormProvider />
      <div className="w-full max-w-full overflow-x-clip">
        {children}
      </div>
      <div id="main-footer">
        {/* <FloatingActionMenu /> */}
        <Footer />
      </div>
    </div>
  );
}
