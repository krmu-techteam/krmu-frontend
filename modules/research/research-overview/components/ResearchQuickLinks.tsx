import Link from "next/link";
import Image from "next/image";

type Props = {
  links: {
    id: number;
    title: string;
    url: string;
  }[];
};

const ResearchQuickLinks = ({ links }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 gap-5">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-24 py-[17px] px-10 bg-[#ffffff33] rounded-[30px] text-white text-lg flex items-center justify-center gap-3"
        >
          <span>{link.title}</span>

          <Image
            src="/placements/white-arrow.svg"
            width={30}
            height={30}
            alt=""
          />
        </Link>
      ))}
    </div>
  );
};

export default ResearchQuickLinks;