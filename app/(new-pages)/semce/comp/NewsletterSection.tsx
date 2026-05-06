import Image from "next/image";
import Link from "next/link";

export default function NewsletterSection() {
  return (
    <section className="max-w-[1664px] mx-auto px-4 md:px-0 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Our Newsletters</h2>
        <p className="mt-2 text-gray-600">
          Stay updated with the latest events at KRMU
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6">
        {/* LARGE LEFT CARD */}
        <Link
          href="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SJMC_2025_7c1b2a8b5b.pdf"
          className="lg:col-span-2 lg:row-span-2 border rounded-2xl p-6 relative group"
          target="_blank" rel="noopener noreferrer"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-serif">January to March 2025</h3>
            <span className="text-xl group-hover:translate-x-1 transition">
              ↗
            </span>
          </div>

          <div className="relative w-full h-[420px] lg:h-[520px] rounded-xl overflow-hidden">
            <Image
              src="/semce/newsletter/img-1.jpg"
              alt="January to March 2025"
              fill
              className="object-cover"
            />
          </div>
        </Link>

        {/* RIGHT TOP CARD */}
        <Link
          href="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/sjmc_2024_4_7aae00cbef.pdf"
          className="relative rounded-2xl overflow-hidden group h-[220px] sm:h-[260px] lg:h-full"
          target="_blank" rel="noopener noreferrer"
        >
          <Image
            src="/semce/newsletter/img-2.jpg"
            alt="July to September 2024"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 p-5 flex items-end justify-between text-white">
            <h3 className="text-lg font-serif">July to September 2024</h3>
            <span className="text-xl">↗</span>
          </div>
        </Link>

        {/* BOTTOM LEFT CARD */}
        <Link
          href="https://krmangalam.edu.in/pdfs/newsletters/sjmc-2025-apr-june.pdf"
          className="relative rounded-2xl overflow-hidden group lg:col-span-1 h-[220px] sm:h-[260px] lg:h-full"
          target="_blank" rel="noopener noreferrer"
        >
          <Image
            src="/semce/newsletter/img-3.jpg"
            alt="October to December 2024"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 p-5 flex items-end justify-between text-white">
            <h3 className="text-lg font-serif">October to December 2024</h3>
            <span className="text-xl">↗</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
