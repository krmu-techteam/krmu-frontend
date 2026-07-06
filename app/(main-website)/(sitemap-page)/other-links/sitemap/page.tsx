import Link from "next/link";
import { sitemapData } from "./constant";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      {/* Hero */}
      <section className="bg-[#0B2343] pt-[140px] pb-16">
        <div className="mx-auto max-w-7xl px-5">
          <p className="text-sm text-white/70">Home / Sitemap</p>

          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Sitemap
          </h1>
        </div>
      </section>

      {/* Sitemap */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl space-y-10 px-5">
          {sitemapData.map((section) => (
            <div
              key={section.title}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              {/* Heading */}
              <div className="bg-[#0B2343] px-6 py-5">
                <h2 className="text-3xl font-bold text-white">
                  {section.title}
                </h2>
              </div>

              {/* Masonry Layout */}
              <div className="columns-1 gap-8 p-6 md:columns-2">
                {section.groups.map((group) => (
                  <div
                    key={group.title}
                    className="mb-8 break-inside-avoid rounded-lg"
                  >
                    <h3 className="mb-5 border-b border-gray-200 pb-3 text-2xl font-semibold text-[#0B2343]">
                      {group.title}
                    </h3>

                    <ul className="space-y-3">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            target="_blank"
                            className="group flex items-start gap-3 text-gray-700 transition hover:text-red-600"
                          >
                            <span className="mt-[7px] h-2 w-2 flex-shrink-0 rounded-full bg-[#0B2343] group-hover:bg-red-600" />

                            <span className="leading-6">
                              {link.label}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}