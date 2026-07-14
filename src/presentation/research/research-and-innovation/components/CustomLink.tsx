import Link from "next/link";

interface LinkStyle {
  label: string;
  url: string;
}

const CustomLink = ({ link, index }: { link: LinkStyle; index: number }) => {
  return (
    <Link
      key={index}
      href={link?.url}
      className="bg-[#cb000d] leading-[1.5] py-3 px-8 inline-block rounded-xs text-md text-white md:leading-2.5 blink-effect"
      target="_blank"
      rel="noopener noreferrer"
    >
      {link?.label}
    </Link>
  );
};
export default CustomLink;
