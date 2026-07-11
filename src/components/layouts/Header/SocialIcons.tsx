import { STRAPI_URL } from "@/app/constant";
import { TOPBARSOCIALLInks } from "@/lib/types/HeaderType";
import Image from "next/image";
import Link from "next/link";

type SOCIALLINKSPROPS = {
  sociallinks: TOPBARSOCIALLInks[];
};

const SocialIcons = ({ sociallinks }: SOCIALLINKSPROPS) => {
  return (
    <>
      <ul className="flex gap-4 justify-center items-center">
        {sociallinks &&
          sociallinks.map((sociallink) => {
            return (
              <li key={sociallink.id}>
                <Link
                  href={sociallink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition flex items-center justify-center"
                >
                  {sociallink?.socialicon?.url && (
                    <Image
                      src={`${STRAPI_URL}${sociallink?.socialicon?.url}`}
                      width={14}
                      height={16}
                      alt={
                        sociallink?.socialicon?.alternativeText ||
                        "topbarsocial links"
                      }
                      className="w-[14px] h-[16px] object-contain"
                    />
                  )}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default SocialIcons;
