import Image from "next/image";
import Link from "next/link";

const IPRContactandEnquiries = () => {
  return (
    <section className="bg-[url(/placements/contact-bg.webp)] bg-no-repeat bg-cover bg-center py-[30px] px-4">
      {/* Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#e6f0ff] via-[#eef3ff] to-[#f7e9ef]" /> */}

      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-semibold text-[#2f5eb8] mb-6">
            Quick Links
          </h2>

          {/* Organizations */}
          <div className="mb-4">
            <h3 className="font-semibold text-black mb-1">Organizations</h3>
            <p className="text-[#2f5eb8] leading-relaxed">
              <Link
                href="http://www.wipo.int/portal/en/index.html"
                className="hover:text-[#0000ff] font-semibold"
                target="_blank" rel="noopener noreferrer"
              >
                WIPO
              </Link>{" "}
              <Link
                href="http://www.ipindia.nic.in/"
                className="hover:text-[#0000ff] font-semibold"
                target="_blank" rel="noopener noreferrer"
              >
                Indian Patent Office
              </Link>{" "}
              <Link
                href="https://www.uspto.gov/"
                className="hover:text-[#0000ff] font-semibold"
                target="_blank" rel="noopener noreferrer"
              >
                USPTO
              </Link>{" "}
              <Link
                href="http://cipam.gov.in/"
                className="hover:text-[#0000ff] font-semibold"
                target="_blank" rel="noopener noreferrer"
              >
                CIPAM
              </Link>{" "}
              <Link
                href="https://iprsearch.ipindia.gov.in/events-ipr/home/home.aspx"
                className="hover:text-[#0000ff] font-semibold"
                target="_blank" rel="noopener noreferrer"
              >
                NIPAM
              </Link>
            </p>
          </div>

          {/* Patent Databases */}
          <div className="mb-4">
            <h3 className="font-semibold text-black mb-1">Patent Databases</h3>
            <p className="text-[#2f5eb8] leading-relaxed">
              <Link
                href="https://patents.google.com/"
                className="hover:text-[#0000ff] font-semibold"
                target="_blank" rel="noopener noreferrer"
              >
                Google Patents
              </Link>{" "}
              <Link
                href="http://www.freepatentsonline.com/"
                className="hover:text-[#0000ff] font-semibold"
                target="_blank" rel="noopener noreferrer"
              >
                Free Patents Online
              </Link>{" "}
              <Link
                href="https://www.lens.org/"
                className="hover:text-[#0000ff] font-semibold"
                target="_blank" rel="noopener noreferrer"
              >
                LENS
              </Link>{" "}
              <Link
                href="https://patentscope.wipo.int/search/en/search.jsf"
                className="hover:text-[#0000ff] font-semibold"
                target="_blank" rel="noopener noreferrer"
              >
                Patentscope
              </Link>{" "}
              <Link
                href="https://worldwide.espacenet.com/"
                className="hover:text-[#0000ff] font-semibold"
                target="_blank" rel="noopener noreferrer"
              >
                Espacenet
              </Link>{" "}
              <Link
                href="https://iprsearch.ipindia.gov.in/publicsearch"
                className="hover:text-[#0000ff] font-semibold"
                target="_blank" rel="noopener noreferrer"
              >
                InPASS
              </Link>{" "}
              <Link
                href="https://www.uspto.gov/"
                className="hover:text-[#0000ff] font-semibold"
                target="_blank" rel="noopener noreferrer"
              >
                USPTO
              </Link>{" "}
              <Link
                href="https://english.cnipa.gov.cn/"
                className="hover:text-[#0000ff] font-semibold"
                target="_blank" rel="noopener noreferrer"
              >
                CNIPA
              </Link>{" "}
              <Link
                href="http://eng.kipris.or.kr/enghome/main.jsp"
                className="hover:text-[#0000ff] font-semibold"
                target="_blank" rel="noopener noreferrer"
              >
                KIPRIS
              </Link>
            </p>
          </div>

          {/* IP Assessment */}
          <div className="mb-6">
            <h3 className="font-semibold text-black mb-1">IP Assessment</h3>
            <p className="text-[#2f5eb8]">
              <Link
                href="https://www.wipo.int/ipdiagnostics-assessment/india/en"
                className="hover:text-[#0000ff] font-semibold"
                target="_blank" rel="noopener noreferrer"
              >
                IPDiagnostics
              </Link>
            </p>
          </div>

          {/* Maintenance Text */}
          <p className="text-lg text-black">
            This Page is Currently Under Maintenance*
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2"></div>
      </div>
    </section>
  );
};

export default IPRContactandEnquiries;
