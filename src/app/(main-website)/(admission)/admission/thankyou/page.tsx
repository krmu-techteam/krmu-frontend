import Link from "next/link";

export default function ThankYouPage() {
  return (
    <section className="w-full bg-[#f5f7fb] py-20 mt-6 lg:mt-40">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="bg-white shadow-xl rounded-xl p-12">

          <div className="text-green-600 text-6xl mb-6">
            ✓
          </div>

          <h1 className="text-4xl font-bold mb-4">
            Thank You for Your Enquiry!
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Your admission request has been successfully submitted.
            Our admission counselor will contact you shortly.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <Link
              href="/"
              className="bg-[#cb000d] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#034272]"
            >
              Back to Home
            </Link>

            {/* <Link
              href="/admissions"
              classNam  e="border border-[#cb000d] text-[#cb000d] px-8 py-3 rounded-md font-semibold hover:bg-[#cb000d] hover:text-white"
            >
              Explore Admissions
            </Link> */}

          </div>

        </div>
      </div>
    </section>
  );
}
