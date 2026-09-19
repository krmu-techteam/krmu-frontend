import Link from "next/link";

type confMenusType = {
  label: string;
  link: string;
};

export const confMenus: confMenusType[] = [
  {
    label: "About",
    link: "/sbas-conference/#about-krmu",
  },
  {
    label: "Tracks",
    link: "/sbas-conference/#conf-tracks",
  },
  {
    label: "Dates",
    link: "/sbas-conference/#timeline-scroll",
  },
  {
    label: "Call for Abstracts",
    link: "/sbas-conference/#callOfAbstract",
  },
  {
    label: "Fees",
    link: "/sbas-conference/#reg-fees",
  },
  {
    label: "Committee",
    link: "/sbas-conference/#steering-committee",
  },
];

const ConferenceMenu = () => {
  return (
    <nav className="bg-[#19241F] px-5 py-4 sm:py-5 sticky top-[76px]">
      <ul
        className="
          max-w-[484px] mx-auto
          flex items-center
          justify-start sm:justify-center
          gap-5 sm:gap-7
          overflow-x-auto
          whitespace-nowrap
          scrollbar-hide
          text-sm
        "
      >
        {confMenus.map((item) => (
          <li key={item.label} className="shrink-0 pb-2 md:pb-0">
            <Link
              href={item.link || "#"}
              className="
                text-[#BFC7BF]
                transition-colors
                hover:text-white
              "
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ConferenceMenu;