import Image from "next/image";
import Link from "next/link";

const IPRAchievement = () => {
  return (
    <section className="py-20 bg-[#2c172f] px-4">
      <div className="max-w-[1600px] mx-auto w-full">
        <h3 className="text-3xl md:text-5xl font-semibold text-white mb-10">
          Achievements
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Link
            href="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/List_of_Patents_2da1e1d437.pdf"
            target="_blank" rel="noopener noreferrer"
          >
            <Image
              src="/ipr/achievements/achiev-1.png"
              width={360}
              height={512}
              alt=""
              className="w-full h-full"
            />
          </Link>
          <Link
            href="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/List_of_Patents_2da1e1d437.pdf"
            target="_blank" rel="noopener noreferrer"
          >
            <Image
              src="/ipr/achievements/achiev-2.png"
              width={360}
              height={512}
              alt=""
              className="w-full h-full"
            />
          </Link>
          <Link
            href="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/List_of_Patents_2da1e1d437.pdf"
            target="_blank" rel="noopener noreferrer"
          >
            <Image
              src="/ipr/achievements/achiev-3.png"
              width={360}
              height={512}
              alt=""
              className="w-full h-full"
            />
          </Link>
          <Link
            href="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/List_of_Patents_2da1e1d437.pdf"
            target="_blank" rel="noopener noreferrer"
          >
            <Image
              src="/ipr/achievements/achiev-4.png"
              width={360}
              height={512}
              alt=""
              className="w-full h-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IPRAchievement;
