import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  desg: string;
  slug: string;
  qual: string;
  imgURL: string;
};

export const StaticFacultyEmployeeCard = ({
  name,
  desg,
  slug,
  qual,
  imgURL,
}: Props) => {
  return (
    <>
      <div>
        <Link
          href={`/faculty/${slug}`}
          className="hover:text-[#0060aa] cursor-pointer flex flex-col gap-1.5 text-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="mb-4">
            {imgURL ? (
              <Image
                src={`${imgURL}`}
                width={272}
                height={295}
                alt={name}
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
                className="rounded-[15px]"
              />
            ) : (
              <Skeleton className="w-[272px] h-[295px]" />
            )}
          </div>

          <span className=" md:text-2xl font-bold leading-[1]">{name}</span>
          <span
            className="font-normal md:font-medium  "
            dangerouslySetInnerHTML={{
              __html: desg,
            }}
          />
          <span
            className="md:text-xl font-semibold"
            dangerouslySetInnerHTML={{
              __html: qual,
            }}
          />
        </Link>
      </div>
    </>
  );
};
