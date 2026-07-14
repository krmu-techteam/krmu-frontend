import Image from "next/image";
import Link from "next/link";
import { ContactSection, RegulationCard } from "@/features/research/phd-regulations/types";

const PHDRegulationCardSection = ({
  regulationCards,
  contactSection,
}: {
  regulationCards: RegulationCard[];
  contactSection: ContactSection;
}) => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
        {regulationCards?.map((card, idx) => {
          return (
            <div
              key={idx}
              className="border border-white/40 p-5 flex items-center justify-center text-white rounded-[4px] min-h-[200px]"
            >
              <ul className="text-center flex flex-col gap-2.5 text-lg w-full font-poppins">
                {card.links && card.links.length > 0 ? (
                  <>
                    <li className="relative">
                      <div className="hover:text-[#2d7cc1] font-bold font-serif">
                        {card.title}
                      </div>{" "}
                      {card.showNewTag && (
                        <Image
                          src="/research/new-icon-gif-animation-14.gif"
                          width={62}
                          height={44}
                          alt="new gif"
                          className="absolute right-0 lg:-right-[20px] -top-8 md:-top-12"
                        />
                      )}
                    </li>
                    {card.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link
                          className="hover:text-[#2d7cc1] font-normal"
                          href={link.url}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </>
                ) : (
                  <li className="relative">
                    {card.url ? (
                      <Link href={card.url} className="hover:text-[#2d7cc1] font-normal">
                        {card.title}
                      </Link>
                    ) : (
                      <span className="font-bold">{card.title}</span>
                    )}
                  </li>
                )}
              </ul>
            </div>
          );
        })}
      </div>
      {contactSection && (
        <div className="flex w-full break-all items-center justify-center pt-10">
          <div className="font-poppins border border-white/40 p-5 flex flex-col items-center justify-center text-white rounded-[4px]">
            <div className="relative mb-2.5">
              <span className="text-2xl font-bold font-serif">
                {contactSection.title}
              </span>{" "}
            </div>
            <ul className="text-center flex flex-col gap-2.5 text-lg">
              {contactSection.email?.map((emailAddress, eIdx) => (
                <li key={eIdx} className="relative">
                  <Link
                    href={`mailto:${emailAddress}`}
                    className="hover:text-[#2d7cc1] font-normal"
                  >
                    {emailAddress}
                  </Link>{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default PHDRegulationCardSection;
