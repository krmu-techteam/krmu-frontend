import Image from "next/image";
import Link from "next/link";

const PhdFooter = () => {
  return (
    <section className="border-t border-[#ddd] px-4">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col  items-center justify-center text-center py-6 border-b border-[#ddd] gap-5">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/landingpage/common/white-krm-logo.webp"
              width={350}
              height={65}
              alt="MBA Landing Page Logo"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <p>© Copyright K.R. Mangalam University. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </section>
    // <footer className="py-10 bg-black px-4">
    //   <div className="max-w-[800px] mx-auto w-full text-white text-center">
    //     <div className="flex items-center justify-center gap-10">
    //       <Link href="#">Privacy Policy</Link>
    //       <Link href="#">Terms of Service</Link>
    //     </div>
    //     <p className="text-center mt-5">
    //       Affiliation: University Grants Commission has empowered K.R. Mangalam
    //       University to award the degrees under Section 22 of UGC Act 1956. It
    //       is a full-fledged University and not a deemed University.
    //     </p>
    //     <Link href="tel:8192888444">8192888444</Link>
    //     <p>© 2025 K.R. Mangalam University. All rights reserved.</p>
    //   </div>
    // </footer>
  );
};

export default PhdFooter;
