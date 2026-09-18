import Link from "next/link";

type confMenusType = {
  label: string;
  link: string;
};

export const confMenus: confMenusType[] = [
  {
    label: "About",
    link: "#",
  },
  {
    label: "Tracks",
    link: "#",
  },
  {
    label: "Dates",
    link: "#",
  },
  {
    label: "Call for Abstracts",
    link: "#",
  },
  {
    label: "Fees",
    link: "#",
  },
  {
    label: "Committee",
    link: "#",
  },
];

const ConferenceMenu = () => {
  return (
    <div className="bg-[#19241F] p-5">
      <ul className="flex items-center justify-center max-w-[484px] mx-auto gap-7 text-sm">
        {confMenus &&
          confMenus.map((item, i) => {
            return (
              <Link key={i} href={item.link || "#"}>
                <li className="text-[#BFC7BF]">{item.label}</li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
};

export default ConferenceMenu;
