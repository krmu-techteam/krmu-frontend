import Image from "next/image";

const BlogCTA = () => {
  return (
    <div className="my-8 rounded-xl bg-gradient-to-r from-[#243b6b] to-[#3b5b94] p-6 flex flex-col md:flex-row items-center gap-6">

      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/krmu-logo.png"
          alt="KRMU"
          width={80}
          height={80}
        />
      </div>

      {/* Text */}
      <div className="flex-1 text-white">
        <h3 className="text-[20px] font-semibold mb-2">
          Wanna Take Your Career to New Heights?
        </h3>

        <p className="text-[14px] opacity-90">
          K.R. Mangalam University offers industry-aligned programmes, practical learning, expert faculty, and strong placement support for sure-shot success!
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2">
        <a
          href="#"
          className="bg-red-600 text-white px-5 py-2 rounded-full text-[14px] font-semibold text-center"
        >
          Apply Now
        </a>

        <a
          href="#"
          className="text-white underline text-[14px] text-center"
        >
          Explore Programs
        </a>
      </div>
    </div>
  );
};

export default BlogCTA;