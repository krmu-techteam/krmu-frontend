import Image from "next/image";

interface DirectorMessageProps {
  image: string;
  quote: string;
  name: string;
  designation: string;
  email: string;
  phone: string;
}

const directorMessage: DirectorMessageProps = {
  image: "/images/director/dr-vibha-thakur.jpg",
  quote:
    '"As Director of the Career Development Center, it is my privilege to extend a warm welcome. We are deeply committed to preparing industry-ready graduates equipped with the skills to thrive in an ever-evolving corporate landscape – through bootcamps, profile-based training and company-specific programs. On behalf of K.R. Mangalam University, I invite you to discover a talented, ambitious and dynamic pool of young professionals ready to make a difference in your organisation."',
  name: "Dr. Vibha Thakur",
  designation: "Director, Career Development Center",
  email: "director.cdc@krmangalam.edu.in",
  phone: "+91-9827085056",
};

const DirectorMessage = () => {
  return (
    <section className="bg-[#f8f6f2] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-0">
      <div
        className="
          mx-auto w-full max-w-7xl
          border border-[#d7d5d1]
          bg-[#faf9f6]
          p-5
          sm:p-7
          md:p-8
          lg:px-9 lg:py-8
        "
      >
        <div
          className="
            grid grid-cols-1
            gap-7
            sm:gap-8
            md:grid-cols-[190px_1fr]
            md:gap-8
            lg:grid-cols-[215px_1fr]
            lg:gap-9
          "
        >
          {/* Director Image */}
          <div className="mx-auto w-full max-w-[180px] sm:max-w-[200px] md:mx-0 md:max-w-[190px] lg:max-w-[215px]">
            <div
              className="
                relative
                aspect-[215/225]
                w-full
                overflow-hidden
                border border-[#d7d5d1]
                bg-[#eeeeec]
              "
            >
              <Image
                src={directorMessage.image}
                alt={directorMessage.name}
                fill
                sizes="
                  (max-width: 639px) 180px,
                  (max-width: 767px) 200px,
                  (max-width: 1023px) 190px,
                  215px
                "
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex min-w-0 flex-col justify-center">
            {/* Quote */}
            <blockquote
              className="
                max-w-[760px]
                font-newsreader
                text-[18px]
                leading-[1.5]
                text-[#111]
                sm:text-[20px]
                sm:leading-[1.48]
                md:text-[21px]
                lg:text-[22px]
                lg:leading-[1.45]
              "
            >
              {directorMessage.quote}
            </blockquote>

            {/* Divider */}
            <div className="my-5 border-t border-[#d7d5d1] sm:my-6 lg:my-7" />

            {/* Director Details */}
            <div className="min-w-0">
              <h3 className="text-[13px] font-medium text-[#111] sm:text-sm">
                {directorMessage.name}
              </h3>

              <p className="mt-1 font-newsreader text-[12px] text-[#222] sm:text-[13px]">
                {directorMessage.designation}
              </p>

              <div className="mt-2 flex flex-col gap-1 text-[11px] leading-5 text-[#222] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:text-[12px]">
                <span className="break-all">{directorMessage.email}</span>

                <span className="hidden sm:inline">·</span>

                <span>{directorMessage.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;