import Image from "next/image";
import Link from "next/link";

export default function EventsExperienceSection() {
  return (
    <section className="container mx-auto p-5 md:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-7xl xl:text-9xl font-serif leading-[1.1]">
            Events & <br /> Experience
          </h2>
        </div>

        {/* RIGHT CARD */}

        <div>
          {" "}
          <div className="relative bg-[url(/wp-content/semce/semce-main/gemini.webp)] bg-no-repeat bg-cover bg-center md:bg-left-bottom rounded-[28px] p-8 lg:p-10 md:h-[450px]
           overflow-hidden flex flex-col justify-around items-start text-white">
            {/* TEXT */}
            <p className="text-sm max-w-md">
              The School of Emerging Media and Creator Economy regularly
              conducts events and activities for students to acquire practical
              expertise. Students often visit various media houses and attend
              workshops, events and panel discussions.
            </p>

            {/* BUTTON */}
            <Link
              href="#"
              className="inline-block mt-6 #cb000d text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-red-700 transition"
            >
              View all Events
            </Link>

            {/* ILLUSTRATION */}
            {/* <div className="absolute right-4 bottom-0 w-[220px] lg:w-[260px] pointer-events-none">
            <Image
              src=""
              alt="Events Illustration"
              width={300}
              height={300}
              className="object-contain"
            />
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
