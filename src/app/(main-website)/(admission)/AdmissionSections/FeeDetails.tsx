import FeeDetailsCards from "./FeeDetailsCards/FeeDetailsCards";

interface FeeDetailsProps {
  badgeText: string;
  highlight: string;
  beforehighlight: string;
  desc: string;
  paymenttitle: string;
  paymentdesc: string;
}

const FeeDetails = ({
  badgeText,
  highlight,
  beforehighlight,
  desc,
  paymenttitle,
  paymentdesc,
}: FeeDetailsProps) => {
  return (
    <>
      <section className="py-20 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-university-red to-university-blue text-white rounded-full px-6 py-3 shadow-lg mb-6">
              <span className="text-sm uppercase tracking-wide">
                {badgeText}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-800 font-bold">
              {beforehighlight}
              <span className="text-university-red">{highlight}</span>{" "}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{desc}</p>
          </div>
          <FeeDetailsCards />
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock w-6 h-6 text-university-blue mr-2"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <h3 className="text-2xl text-gray-800">{paymenttitle}</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
                {paymentdesc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeeDetails;
